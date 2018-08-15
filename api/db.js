const pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'qr-codebot',
    user: process.env.DB_USER,
    password: ''
}
const db = pgp(cn);

function getProject(id) {
  return db.oneOrNone('SELECT title, description FROM projects \
                       WHERE id = $1;', [id]);
}

function getProjectMembers(id) {
  return db.any('SELECT name FROM persons WHERE project_id = $1;', [id]);
}

function addQRCodeVisit(id) {
  return db.one('INSERT INTO qrcodevisits (projectid, visit_time) \
                 VALUES ($1, NOW()) RETURNING id;', [id]);
}

function getLatestQRCode() {
  return db.oneOrNone('SELECT projectid, visit_time FROM qrcodevisits WHERE visit_time = \
                (SELECT MAX(visit_time) FROM qrcodevisits);');
}

module.exports = {
  getProject,
  getProjectMembers,
  addQRCodeVisit,
  getLatestQRCode
}

// TEST
// getProject(1)
//   .then(console.log)
//   .catch(console.error);
// getProjectMembers(5)
//   .then(console.log)
//   .catch(console.error);
// addQRCodeVisit(1)
//   .then(console.log)
//   .catch(console.error);
// getLatestQRCode()
//   .then(console.log)
//   .catch(console.error);