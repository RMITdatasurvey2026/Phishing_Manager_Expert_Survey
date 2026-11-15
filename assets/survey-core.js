/* TSARSI survey engine: renders window.SURVEY, validates, saves a local draft, posts to Google Sheets. */
(function () {
  "use strict";
  const S = window.SURVEY, CFG = window.SURVEY_CONFIG || {};
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k) || "null"); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  const DRAFT = "tsarsi-draft-" + S.id, LANGK = "tsarsi-lang", DONE = "tsarsi-done-" + S.id;
  let lang = store.get(LANGK) || "vi";
  const started = Date.now();
  const UI = {
    vi: { of: "câu", sheet: "Phần", submit: "Gửi câu trả lời", sending: "Đang gửi…", need: "Vui lòng trả lời câu này.",
          missing: n => `Còn ${n} câu chưa trả lời. Các câu cần bổ sung được tô đỏ.`, fail: "Chưa gửi được. Kiểm tra kết nối mạng rồi bấm gửi lại; câu trả lời của Anh/Chị vẫn được giữ trên máy này.",
          notcfg: "Biểu mẫu chưa được kết nối với Google Sheet (thiếu ENDPOINT trong assets/config.js).", draft: "Bản nháp được tự động lưu trên trình duyệt này.",
          clear: "Xóa bản nháp", again: "Anh/Chị đã gửi khảo sát này trên thiết bị này. Nếu cần gửi lại, bấm “Trả lời lại”.", redo: "Trả lời lại",
          keep: "Giữ", revise: "Sửa", remove: "Bỏ", lkeep: "Yếu tố này", limp: "Mức quan trọng (1–10)", lrate: "TSARSI hiện nay (1–4)", lnote: "Ghi chú",
          notehint: "Nội dung cần sửa, hoặc lý do chấm điểm", needrev: "Vui lòng ghi nội dung cần sửa vào ô ghi chú.", confirm: "cần xác nhận",
          evidence: "Căn cứ", low: "rất ít quan trọng", high: "rất quan trọng", likertLo: "Hoàn toàn không đồng ý", likertHi: "Hoàn toàn đồng ý" },
    en: { of: "questions", sheet: "Part", submit: "Submit answers", sending: "Sending…", need: "Please answer this question.",
          missing: n => `${n} question(s) still need an answer. They are highlighted in red.`, fail: "Could not send. Check your connection and submit again; your answers are still kept on this device.",
          notcfg: "This form is not connected to Google Sheets yet (ENDPOINT missing in assets/config.js).", draft: "Your draft is saved automatically in this browser.",
          clear: "Clear draft", again: "You have already submitted this survey on this device. To submit again, choose “Answer again”.", redo: "Answer again",
          keep: "Keep", revise: "Revise", remove: "Remove", lkeep: "This factor", limp: "Importance (1–10)", lrate: "TSARSI today (1–4)", lnote: "Comment",
          notehint: "Proposed wording, or the reason for your scores", needrev: "Please describe the revision in the comment box.", confirm: "to be confirmed",
          evidence: "Evidence", low: "very low", high: "very high", likertLo: "Strongly disagree", likertHi: "Strongly agree" }
  };
  const t = o => (o && typeof o === "object") ? (o[lang] || o.vi) : (o || "");
  const u = k => UI[lang][k];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- shell ---------- */
  function shell() {
    document.body.insertAdjacentHTML("afterbegin", `
    <div class="bar"><div class="bar-in">
      <a href="https://www.tsarsi.com/" aria-label="TSARSI"><img class="logo" src="assets/tsarsi-logo.png" alt="TSARSI"
        onerror="this.onerror=function(){this.replaceWith(Object.assign(document.createElement('span'),{className:'wordmark',innerHTML:'TSAR<b>SI</b>'}))};this.src='https://www.tsarsi.com/wp-content/uploads/TSARSI-LOGO-n.png'"></a>
      <div class="dim" aria-hidden="true"><div class="line"></div><div class="fill" id="fill" style="width:0"></div><div class="label" id="plabel"></div></div>
      <span class="ou-chip">${ouImg("ou-mini")}</span><div class="lang" role="group" aria-label="Language"><button type="button" data-l="vi">VI</button><button type="button" data-l="en">EN</button></div>
    </div></div>`);
    $$(".lang button").forEach(b => b.onclick = () => { snapshot(); lang = b.dataset.l; store.set(LANGK, lang); render(); });
  }

  /* ---------- render ---------- */
  const app = () => $("#app");
  function header() {
    return `<div class="head"><div><h1>${esc(t(S.title))}</h1><p class="lede">${esc(t(S.lede))}</p></div>
      <dl class="tblock">${S.meta.map(([k, v]) => `<div><dt>${esc(t(k))}</dt><dd>${esc(t(v))}</dd></div>`).join("")}</dl></div>
      ${study()}<p class="consent">${esc(t(S.consent))}</p>`;
  }
  function ouImg(cls) {
    const U = (window.STUDY || {}).university || {};
    return `<img class="${cls}" src="${U.logo}" alt="${esc(t(U.name))}" onerror="this.onerror=function(){this.style.display='none'};this.src='${U.logoRemote}'">`;
  }
  function study() {
    const D = window.STUDY; if (!D) return "";
    const R = D.researcher;
    return `<section class="about" aria-labelledby="about-h">
      <div class="about-main">
        <p class="about-k">${esc(t(D.degree))}</p>
        <h2 id="about-h">${esc(t(D.title))}</h2>
        <p>${esc(t(D.problem))}</p>
        <ol class="steps">${D.steps.map(s => `<li><h3>${esc(t(s.h))}</h3><p>${esc(t(s.p))}</p></li>`).join("")}</ol>
      </div>
      <aside class="who">
        <a class="ou" href="${D.university.url}" target="_blank" rel="noopener">${ouImg("ou-logo")}</a>
        <div class="who-b">
          <p class="who-k">${lang === "vi" ? "Người thực hiện" : "Researcher"}</p>
          <p class="who-n">${esc(R.name)}</p>
          <p class="who-r">${esc(t(R.role))}<br>${esc(t(D.university.name))}</p>
          <p class="who-bio">${esc(t(R.bio))}</p>
          <p class="who-s">${esc(t(R.supervisors))}</p>
          ${R.contact ? `<p class="who-s">${esc(R.contact)}</p>` : ""}
        </div>
      </aside>
    </section>`;
  }
  const chip = (name, v, label, type = "radio", extra = "") =>
    `<label class="chip"><input type="${type}" name="${name}" value="${esc(v)}" ${extra}><span>${esc(label)}</span></label>`;

  function item(it) {
    let a = "";
    if (it.type === "choice" || it.type === "tfu" || it.type === "multi") {
      const stack = it.options.some(o => t(o).length > 28) ? " stack" : "";
      a = `<div class="opts${stack}" role="${it.type === "multi" ? "group" : "radiogroup"}" aria-labelledby="t-${it.id}">` +
        it.options.map(o => chip(it.id, o.v, t(o), it.type === "multi" ? "checkbox" : "radio")).join("") + `</div>`;
    } else if (it.type === "likert") {
      a = `<div class="scale" style="grid-template-columns:repeat(5,minmax(0,1fr))" role="radiogroup" aria-labelledby="t-${it.id}">` +
        [1, 2, 3, 4, 5].map(n => chip(it.id, n, n)).join("") + `</div><div class="scale-ends"><span>1 · ${u("likertLo")}</span><span>5 · ${u("likertHi")}</span></div>`;
    } else if (it.type === "text") {
      a = it.short ? `<input type="text" name="${it.id}" aria-labelledby="t-${it.id}" autocomplete="off">` : `<textarea name="${it.id}" aria-labelledby="t-${it.id}"></textarea>`;
    }
    const sf = it.showIf ? ` data-showif="${it.showIf.id}=${it.showIf.eq}"` : "";
    return `<div class="q" id="q-${it.id}" data-id="${it.id}" data-req="${it.required === false ? 0 : 1}"${sf}>
      <div class="qid">${it.id}</div><p class="qt" id="t-${it.id}">${esc(t(it.q))}</p><div class="ans">${a}</div><div class="why">${u("need")}</div></div>`;
  }

  function sheetHead(no, total, title, desc) {
    return `<div class="sheet-h"><div class="sheet-no"><span>${u("sheet")}</span>${no}</div>
      <div><h2>${esc(title)}</h2>${desc ? `<p>${esc(desc)}</p>` : ""}</div></div>`;
  }

  function renderEmployee() {
    const n = S.sections.length;
    app().innerHTML = header() + `<form id="f" novalidate>` +
      S.sections.map(s => `<section class="sheet" aria-labelledby="h-${s.id}">${sheetHead(s.id, n, t(s.title), t(s.desc)).replace("<h2>", `<h2 id="h-${s.id}">`)}
        ${s.items.map(item).join("")}</section>`).join("") + submitBlock() + `</form>`;
  }

  /* expert: one block per factor; S rated 3–4, W rated 1–2, O/T rated 1–4 */
  function factorBlock(f) {
    const g = f.code[0], rate = g === "S" ? [3, 4] : g === "W" ? [1, 2] : [1, 2, 3, 4];
    const rlabels = { O: ["kém", "trung bình", "khá", "tốt"], T: ["kém", "trung bình", "khá", "tốt"] };
    const rcls = rate.length === 2 ? "scale2" : "scale4";
    return `<div class="factor" id="q-${f.code}" data-code="${f.code}">
      <div class="factor-h"><div class="fcode">${f.code}<span class="fkind">${esc(t(f.kind))}</span></div>
        <div><p class="ftext">${esc(t(f.q))}${f.confirm ? `<span class="tag-confirm">${u("confirm")}</span>` : ""}</p>
        <p class="fevid">${u("evidence")}: ${esc(f.evidence)}</p></div></div>
      <div class="frows">
        <div class="frow"><label class="lab">${u("lkeep")}</label><div class="opts">${chip(f.code + "_keep", "keep", u("keep"))}${chip(f.code + "_keep", "revise", u("revise"))}${chip(f.code + "_keep", "remove", u("remove"))}</div></div>
        <div class="frow"><label class="lab">${u("limp")}</label><div><div class="scale scale10">${[...Array(10)].map((_, i) => chip(f.code + "_imp", i + 1, i + 1)).join("")}</div>
          <div class="scale-ends" style="max-width:440px"><span>1 ${u("low")}</span><span>10 ${u("high")}</span></div></div></div>
        <div class="frow"><label class="lab">${u("lrate")}</label><div class="scale ${rcls}">${rate.map(v => chip(f.code + "_rate", v, v)).join("")}</div></div>
        <div class="frow"><label class="lab" for="n-${f.code}">${u("lnote")}</label><textarea id="n-${f.code}" name="${f.code}_note" placeholder="${u("notehint")}"></textarea></div>
      </div><div class="why"></div></div>`;
  }
  const EXPERT_INFO = [
    { id: "X1", type: "text", short: true, q: { vi: "Họ và tên", en: "Full name" } },
    { id: "X2", type: "text", short: true, q: { vi: "Chức vụ, đơn vị công tác", en: "Position and organisation" } },
    { id: "X3", type: "choice", q: { vi: "Lĩnh vực chuyên môn", en: "Field of expertise" }, options: [
      { v: "it", vi: "CNTT, an ninh mạng", en: "IT, cybersecurity" }, { v: "mgmt", vi: "Quản lý điều hành", en: "Executive management" },
      { v: "fin", vi: "Kế toán, tài chính", en: "Accounting, finance" }, { v: "other", vi: "Khác", en: "Other" }] },
    { id: "X4", type: "choice", q: { vi: "Số năm kinh nghiệm liên quan", en: "Years of relevant experience" }, options: [
      { v: "lt5", vi: "Dưới 5 năm", en: "Under 5 years" }, { v: "5to10", vi: "5–10 năm", en: "5–10 years" }, { v: "gt10", vi: "Trên 10 năm", en: "Over 10 years" }] },
    { id: "X5", type: "choice", q: { vi: "Quan hệ với TSARSI", en: "Relationship to TSARSI" }, options: [
      { v: "internal", vi: "Làm việc tại TSARSI", en: "Work at TSARSI" }, { v: "partner", vi: "Đối tác, nhà cung cấp dịch vụ", en: "Partner or service provider" },
      { v: "external", vi: "Chuyên gia bên ngoài", en: "External expert" }] }];
  const EXPERT_END = [
    { id: "Z1", type: "choice", q: { vi: "Danh sách yếu tố đã phản ánh đủ tình hình phòng chống phishing của TSARSI chưa?", en: "Do the factors adequately reflect TSARSI’s phishing-prevention situation?" },
      options: [{ v: "full", vi: "Đầy đủ", en: "Complete" }, { v: "mostly", vi: "Cơ bản đầy đủ", en: "Mostly complete" }, { v: "missing", vi: "Còn thiếu", en: "Incomplete" }] },
    { id: "Z2", type: "text", q: { vi: "Yếu tố mới Anh/Chị đề xuất (nếu có): nội dung, loại (O/T/S/W), mức quan trọng 1–10 và điểm 1–4", en: "Any new factor you propose: wording, type (O/T/S/W), importance 1–10 and rating 1–4" }, required: false },
    { id: "Z3", type: "text", q: { vi: "Theo Anh/Chị, đâu là điểm yếu lớn nhất hiện nay của TSARSI trong phòng chống lừa đảo qua email? Vì sao?", en: "What is TSARSI’s biggest current weakness against email scams? Why?" } },
    { id: "Z4", type: "text", q: { vi: "Nhân viên đạt điểm rất cao trong bài kiểm tra nhận thức 4/2025, nhưng email lừa đảo vẫn lọt vào. Điều này phản ánh vấn đề ở công nghệ, quy trình hay hành vi nhân viên? Yếu tố nào lớn nhất?", en: "Staff scored very highly in the April 2025 awareness test, yet scam emails still get through. Is this mainly technology, process or employee behaviour?" } },
    { id: "Z5", type: "text", q: { vi: "Nếu chỉ được ưu tiên MỘT khoản đầu tư trong 12 tháng tới, Anh/Chị chọn gì và vì sao?", en: "If only ONE investment could be prioritised in the next 12 months, what would it be and why?" } },
    { id: "Z6", type: "text", q: { vi: "Các giải pháp (lọc email nâng cao, DMARC, MFA, đào tạo mô phỏng phishing…) có phù hợp với nguồn lực của TSARSI không? Giải pháp nào khó nhất?", en: "Are the solutions under discussion (advanced filtering, DMARC, MFA, phishing simulation…) realistic for TSARSI? Which is hardest?" }, required: false }];

  function renderExpert() {
    const scaleHelp = lang === "vi"
      ? "Với mỗi yếu tố: chọn Giữ, Sửa hoặc Bỏ; chấm mức quan trọng 1–10 (chấm độc lập, các yếu tố có thể cùng điểm); và chấm TSARSI hiện nay làm tốt đến đâu. Yếu tố bên ngoài: 1 phản ứng kém, 2 trung bình, 3 khá, 4 tốt. Điểm mạnh chỉ chấm 3 (nhỏ) hoặc 4 (lớn); điểm yếu chỉ chấm 1 (lớn) hoặc 2 (nhỏ). Anh/Chị không cần tính trọng số."
      : "For each factor: keep, revise or remove it; rate its importance 1–10 (independently, ties allowed); and rate how well TSARSI performs today. External factors: 1 poor, 2 average, 3 good, 4 superior. Strengths are rated only 3 (minor) or 4 (major); weaknesses only 1 (major) or 2 (minor). No weight calculation is needed.";
    app().classList.remove("narrow");
    app().innerHTML = header() + `<p class="consent" style="background:#fff;border-left-color:var(--ink)">${esc(scaleHelp)}</p>
      <form id="f" novalidate><div class="xgrid"><div>
        <section class="sheet">${sheetHead("1", 4, lang === "vi" ? "Thông tin chuyên gia" : "About you", "")}${EXPERT_INFO.map(item).join("")}</section>
        <section class="sheet">${sheetHead("2", 4, lang === "vi" ? "Yếu tố bên ngoài (ma trận EFE)" : "External factors (EFE matrix)", lang === "vi" ? "Cơ hội (O) và nguy cơ (T)" : "Opportunities (O) and threats (T)")}${S.external.map(factorBlock).join("")}</section>
        <section class="sheet">${sheetHead("3", 4, lang === "vi" ? "Yếu tố bên trong (ma trận IFE)" : "Internal factors (IFE matrix)", lang === "vi" ? "Điểm mạnh (S) và điểm yếu (W)" : "Strengths (S) and weaknesses (W)")}${S.internal.map(factorBlock).join("")}</section>
        <section class="sheet">${sheetHead("4", 4, lang === "vi" ? "Đánh giá chung" : "Overall view", "")}${EXPERT_END.map(item).join("")}</section>
        ${submitBlock()}
      </div><aside class="readout" aria-live="polite">
        <div class="panel"><h3>${lang === "vi" ? "Tổng điểm theo đánh giá của Anh/Chị" : "Totals from your ratings"}</h3>
          <div class="totals"><div><div class="k">EFE</div><div class="v" id="efe">–</div><div class="s">/ 4,00</div></div>
          <div><div class="k">IFE</div><div class="v" id="ife">–</div><div class="s">/ 4,00</div></div></div>
          <div class="pb"><p class="legend">${lang === "vi" ? "Mốc trung bình là 2,50 (David & David, 2022). Trọng số = điểm quan trọng ÷ tổng điểm quan trọng trong cùng ma trận; yếu tố chọn “Bỏ” không được tính." : "The midpoint is 2.50 (David & David, 2022). Weight = importance ÷ sum of importance in the same matrix; removed factors are excluded."}</p></div></div>
        <div class="panel"><h3>${lang === "vi" ? "Trọng số hiện tại" : "Current weights"}</h3><div class="pb"><div class="wlist" id="wlist"></div></div></div>
      </aside></div></form>`;
  }

  const submitBlock = () => `<div class="hp" aria-hidden="true"><label>Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
    <div class="submit"><button class="btn" id="send" type="submit">${u("submit")}</button><button class="btn ghost" id="clear" type="button">${u("clear")}</button>
    <span class="status" id="status" role="status">${u("draft")}</span></div>`;

  /* ---------- state ---------- */
  function collect() {
    const fd = new FormData($("#f")), out = {};
    for (const [k, v] of fd.entries()) { if (k === "website") continue; out[k] = out[k] ? out[k] + ";" + v : v; }
    return out;
  }
  let cache = {};
  function snapshot() { if ($("#f")) { cache = collect(); store.set(DRAFT, cache); } }
  function restore(data) {
    Object.entries(data || {}).forEach(([k, v]) => {
      const els = $$(`[name="${CSS.escape(k)}"]`);
      els.forEach(el => {
        if (el.type === "radio") el.checked = String(v) === el.value;
        else if (el.type === "checkbox") el.checked = String(v).split(";").includes(el.value);
        else el.value = v;
      });
    });
  }
  function visibleItems() {
    return $$(".q").filter(q => !q.hidden);
  }
  function applyLogic(data) {
    $$(".q[data-showif]").forEach(q => {
      const [id, eq] = q.dataset.showif.split("=");
      const show = data[id] === eq; q.hidden = !show;
      if (!show) $$("input,textarea", q).forEach(el => { if (el.type === "radio" || el.type === "checkbox") el.checked = false; else el.value = ""; });
    });
    if (S.id === "expert") $$(".factor").forEach(f => {
      const c = f.dataset.code, removed = data[c + "_keep"] === "remove";
      f.classList.toggle("removed", removed);
      $$(`[name="${c}_imp"],[name="${c}_rate"]`, f).forEach(el => { el.disabled = removed; if (removed) el.checked = false; });
    });
  }
  function counts(data) {
    if (S.id === "expert") {
      const fs = [...S.external, ...S.internal];
      let need = 0, done = 0;
      fs.forEach(f => { need += 1; if (data[f.code + "_keep"] && (data[f.code + "_keep"] === "remove" || (data[f.code + "_imp"] && data[f.code + "_rate"]))) done += 1; });
      const req = $$(".q").filter(q => q.dataset.req === "1");
      need += req.length; done += req.filter(q => data[q.dataset.id]).length;
      return [done, need];
    }
    const req = visibleItems().filter(q => q.dataset.req === "1");
    return [req.filter(q => data[q.dataset.id]).length, req.length];
  }
  function update() {
    const data = collect(); applyLogic(data); const d2 = collect();
    const [done, need] = counts(d2);
    $("#fill").style.width = (need ? 100 * done / need : 0) + "%";
    $("#plabel").textContent = `${done} / ${need} ${S.id === "expert" ? (lang === "vi" ? "mục" : "items") : u("of")}`;
    if (S.id === "expert") readout(d2);
    cache = d2; store.set(DRAFT, d2);
    $$(".missing").forEach(m => { if (isAnswered(m, d2)) m.classList.remove("missing"); });
  }
  function readout(d) {
    const fmt = x => x.toFixed(2).replace(".", lang === "vi" ? "," : ".");
    const calc = list => {
      const act = list.filter(f => d[f.code + "_keep"] !== "remove" && d[f.code + "_imp"]);
      const sum = act.reduce((a, f) => a + +d[f.code + "_imp"], 0);
      const rated = act.filter(f => d[f.code + "_rate"]);
      const tot = rated.reduce((a, f) => a + (+d[f.code + "_imp"] / sum) * +d[f.code + "_rate"], 0);
      const complete = list.every(f => d[f.code + "_keep"] === "remove" || (d[f.code + "_imp"] && d[f.code + "_rate"]));
      return { sum, tot, complete, w: f => (act.includes(f) ? +d[f.code + "_imp"] / sum : 0) };
    };
    const e = calc(S.external), i = calc(S.internal);
    $("#efe").textContent = e.complete && e.sum ? fmt(e.tot) : "–";
    $("#ife").textContent = i.complete && i.sum ? fmt(i.tot) : "–";
    $("#wlist").innerHTML = [...S.external.map(f => [f, e]), ...S.internal.map(f => [f, i])].map(([f, m]) => {
      const w = m.w(f), off = d[f.code + "_keep"] === "remove";
      return `<div class="wrow${off ? " off" : ""}"><span>${f.code}</span><span class="b"><i style="width:${Math.min(100, w * 100 * 3)}%"></i></span><span class="n">${w ? fmt(w) : "–"}</span></div>`;
    }).join("");
  }
  function isAnswered(el, d) {
    if (el.classList.contains("factor")) {
      const c = el.dataset.code, k = d[c + "_keep"];
      if (!k) return false;
      if (k === "remove") return true;
      if (k === "revise" && !(d[c + "_note"] || "").trim()) return false;
      return !!(d[c + "_imp"] && d[c + "_rate"]);
    }
    return el.dataset.req !== "1" || !!(d[el.dataset.id] || "").toString().trim();
  }

  /* ---------- submit ---------- */
  async function submit(ev) {
    ev.preventDefault();
    const d = collect(), status = $("#status");
    if ($("[name=website]").value) return;
    const targets = [...visibleItems(), ...$$(".factor")].filter(el => !isAnswered(el, d));
    targets.forEach(el => {
      el.classList.add("missing");
      if (el.classList.contains("factor")) {
        const c = el.dataset.code;
        $(".why", el).textContent = d[c + "_keep"] === "revise" && !(d[c + "_note"] || "").trim() ? u("needrev") : u("need");
      }
    });
    if (targets.length) {
      status.className = "status err"; status.textContent = u("missing")(targets.length);
      targets[0].scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
      const first = $("input,textarea", targets[0]); if (first) first.focus({ preventScroll: true });
      return;
    }
    if (!CFG.ENDPOINT || /PASTE_/.test(CFG.ENDPOINT)) { status.className = "status err"; status.textContent = u("notcfg"); return; }
    const btn = $("#send"); btn.disabled = true; btn.textContent = u("sending"); status.className = "status"; status.textContent = "";
    const rid = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2));
    const payload = { form: S.id, token: CFG.TOKEN, version: CFG.VERSION, response_id: rid, lang, duration_sec: Math.round((Date.now() - started) / 1000), answers: d };
    try {
      const r = await fetch(CFG.ENDPOINT, { method: "POST", body: JSON.stringify(payload) }); // text/plain: no CORS preflight
      const j = await r.json().catch(() => ({ ok: r.ok }));
      if (!j.ok) throw new Error(j.error || "rejected");
      finish();
    } catch (err) {
      btn.disabled = false; btn.textContent = u("submit");
      status.className = "status err"; status.textContent = u("fail");
    }
  }
  function finish() {
    store.del(DRAFT); store.set(DONE, true);
    app().innerHTML = `<div class="done" tabindex="-1"><h2>${esc(t(S.thanks))}</h2><p>${lang === "vi" ? "Anh/Chị có thể đóng trang này." : "You can close this page now."}</p></div>`;
    $("#fill").style.width = "100%"; $(".done").focus(); window.scrollTo(0, 0);
  }

  /* ---------- boot ---------- */
  function render() {
    document.documentElement.lang = lang;
    $$(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.l === lang)));
    if (store.get(DONE)) {
      app().innerHTML = `<div class="done"><h2>${esc(t(S.thanks))}</h2><p>${u("again")}</p><button class="btn ghost" id="redo" type="button">${u("redo")}</button></div>`;
      $("#redo").onclick = () => { store.del(DONE); render(); };
      $("#plabel").textContent = ""; return;
    }
    S.id === "expert" ? renderExpert() : renderEmployee();
    restore(Object.keys(cache).length ? cache : store.get(DRAFT));
    $("#f").addEventListener("change", update);
    $("#f").addEventListener("input", e => { if (e.target.tagName === "TEXTAREA") update(); });
    $("#f").addEventListener("submit", submit);
    $("#clear").onclick = () => { store.del(DRAFT); cache = {}; render(); };
    update();
  }
  shell(); render();
})();
