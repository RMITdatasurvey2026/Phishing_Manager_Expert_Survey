/**
 * TSARSI survey receiver: Google Apps Script bound to a Google Sheet.
 * Paste into the Sheet via Extensions > Apps Script, then Deploy > New deployment > Web app
 * (Execute as: Me; Who has access: Anyone). Copy the /exec URL into assets/config.js.
 *
 * Each form writes to its own tab ("Employee", "Expert"). Columns are created automatically
 * from the answer keys the first time they appear, so the sheet never needs manual setup.
 */
const TOKEN = 'tsarsi-2026-change-me';           // must equal SURVEY_CONFIG.TOKEN in assets/config.js
const TABS = { employee: 'Employee', expert: 'Expert' };
const MAX_CELL = 5000;                            // guard against oversized text

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);                           // serialise writes so concurrent submissions never collide
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.token !== TOKEN) return json_({ ok: false, error: 'bad token' });
    const tab = TABS[data.form];
    if (!tab) return json_({ ok: false, error: 'unknown form' });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(tab) || ss.insertSheet(tab);

    const row = Object.assign({
      submitted_at: new Date(),
      response_id: data.response_id,
      lang: data.lang,
      duration_sec: data.duration_sec,
      form_version: data.version
    }, data.answers || {});

    // header: keep existing order, append any new keys at the end
    let headers = sh.getLastColumn() ? sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].filter(String) : [];
    const added = Object.keys(row).filter(k => headers.indexOf(k) === -1);
    if (added.length) {
      headers = headers.concat(added);
      sh.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
      sh.setFrozenRows(1);
    }
    // duplicate guard: the same response_id is written only once
    const idCol = headers.indexOf('response_id') + 1;
    if (sh.getLastRow() > 1 && sh.getRange(2, idCol, sh.getLastRow() - 1, 1).getValues().some(r => r[0] === data.response_id)) {
      return json_({ ok: true, duplicate: true });
    }
    sh.appendRow(headers.map(h => clean_(row[h])));
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Text that starts with = + - @ would be run as a formula by Sheets; prefix it so it stays text.
function clean_(v) {
  if (v === undefined || v === null) return '';
  if (v instanceof Date || typeof v === 'number') return v;
  let s = String(v).slice(0, MAX_CELL);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return /^\d+$/.test(s) ? Number(s) : s;          // store 1–10 ratings as numbers for easy analysis
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

// Open the /exec URL in a browser to check the deployment is live.
function doGet() {
  return json_({ ok: true, service: 'TSARSI survey receiver' });
}
