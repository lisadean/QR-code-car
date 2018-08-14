CREATE TABLE projects (
  id integer primary key,
  title varchar(200),
  description varchar(1000)
);

CREATE TABLE persons (
  id serial primary key,
  name varchar(100),
  project_id integer REFERENCES projects(id)
);

CREATE TABLE qrcodevisits (
  id serial primary key,
  projectid integer REFERENCES projects(id),
  visit_time timestamp
);