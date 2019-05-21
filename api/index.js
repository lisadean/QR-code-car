const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;

const db = require('./db');

const express = require('express');
const app = express();
const http = require('http').Server(app);
var io = require('socket.io')(http);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const static = express.static;
app.use(static('public'));

io.on('connection', function(socket) {
  console.log('a user connected');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/project/latest', (req, res) => {
  db.getLatestQRCode()
    .then(data => {
      if (data) {
        let id = data.projectid;
        getProjectInfo(id)
          .then(data => {
            res.send(data);
          })
          .catch(console.error);
      } else {
        res.send({});
      }
    })
    .catch(console.error);
});

app.get('/project/:id', (req, res) => {
  let id = req.params.id;
  getProjectInfo(id)
    .then(data => {
      res.send(data);
    })
    .catch(console.error);
});

app.post('/project/latest', (req, res) => {
  let id = req.query.id;
  if (parseInt(id)) {
    db.getProject(id)
      .then(data => {
        if (data) {
          db.addQRCodeVisit(id)
            .then(data => {
              console.log(data);
              res.send(data);
              updateDisplay();
            })
            .catch(data => {
              res.send('Error in POST');
              console.error(data);
            });
        } else {
          res.send('Error in POST: id not found');
        }
      })
      .catch(console.error);
  } else {
    res.send('Error in POST: not a number');
  }
});

function getProjectInfo(id) {
  let project = db.getProject(id);
  let members = db.getProjectMembers(id);
  return Promise.all([project, members]);
}
// getProjectInfo(1)
//   .then(console.log);

function updateDisplay() {
  db.getLatestQRCode()
    .then(data => {
      let id = data.projectid;
      getProjectInfo(id).then(data => {
        let newData = {};
        newData.title = data[0].title;
        newData.description = data[0].description;
        newData.members = data[1];
        io.emit('qr update', JSON.stringify(newData));
      });
    })
    .catch(console.error);
}

http.listen(PORT, () => {
  console.log(`Application running at http://localhost:${PORT}`);
});
