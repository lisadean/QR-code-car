function updateProject(msg) {
  let data = JSON.parse(msg);

  let project = document.querySelector('[data-project]');
  while (project.firstChild) {
    project.removeChild(project.firstChild);
  }

  let content = data.description.length;
  console.log(content);
  let fs = '1.25em';
  if(content < 100) {
    fs = '2em';
  } else if (content < 300) {
    fs = '1.75em';
  } else if (content < 400) {
    fs = '1.5em'
  }
  project.style.fontSize = fs;

  let title = document.createElement('div');
  let description = document.createElement('div');
  let members = document.createElement('div');

  title.classList.add('title');
  description.classList.add('description');
  members.classList.add('members');

  title.textContent = data.title;

  let descriptionArray = data.description.split('\n');
  descriptionArray.forEach(function (item) {
    let p = document.createElement('p');
    p.textContent = item;
    description.appendChild(p);
  });

  let ul = document.createElement('ul');
  data.members.forEach(function (member) {
    let li = document.createElement('li');
    li.textContent = member.name;
    ul.appendChild(li);
  })
  members.appendChild(ul);

  project.appendChild(title);
  project.appendChild(description);
  project.appendChild(members);

}

function main() {
  var socket = io();
  socket.on('qr update', function(msg){
    updateProject(msg);
  });
}

main();