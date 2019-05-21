const url = require('url');
const pgp = require('pg-promise')();

const cn = () => {
  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');
  return {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: process.env.NODE_ENV === 'production',
  };
};
const db = pgp(cn());

function getProject(id) {
  return db.oneOrNone(
    'SELECT title, description FROM projects \
                       WHERE id = $1;',
    [id]
  );
}

function getProjectMembers(id) {
  return db.any('SELECT name FROM persons WHERE project_id = $1;', [id]);
}

function addQRCodeVisit(id) {
  return db.one(
    'INSERT INTO qrcodevisits (projectid, visit_time) \
                 VALUES ($1, NOW()) RETURNING id;',
    [id]
  );
}

function getLatestQRCode() {
  return db.oneOrNone(
    'SELECT projectid, visit_time FROM qrcodevisits WHERE visit_time = \
                (SELECT MAX(visit_time) FROM qrcodevisits);'
  );
}

module.exports = {
  getProject,
  getProjectMembers,
  addQRCodeVisit,
  getLatestQRCode,
};

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
