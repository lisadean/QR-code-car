const dotenv = require('dotenv');
dotenv.config();
PORT = process.env.PORT;

const db = require('./db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Go away');
});

app.get('/project/latest', (req, res) => {
  db.getLatestQRCode()
    .then(data => {
      if(data) {
        let id = data.projectid;
        getProjectInfo(id, data, res);
      } else {
        res.send({});
      }
    })
    .catch(console.error);
});

app.get('/project/:id', (req, res) => {
  let id = req.params.id;
  data = {};
  getProjectInfo(id, data, res);  
});

app.post('/project/latest', (req, res) => {
  let id = req.query.id;
  if(typeof id == 'number') {
    db.addQRCodeVisit(id)
      .then(data => {
        console.log(data);
        res.send(data);
      })
      .catch(data => {
        res.send('Error in POST');
        console.error(data);
      });
  }
});

function getProjectInfo(id, data, res) {
  let project = db.getProject(id);
  let members = db.getProjectMembers(id);
  Promise.all([project, members])
    .then(moreData => {
      data.project = moreData[0];
      data.members = moreData[1];
      res.send(data);
    })
    .catch(console.error);
}

app.listen(PORT, () => {
  console.log(`Application running at http://localhost:${PORT}`);
});