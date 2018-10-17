# QR CodeBot

./api -- Backend
./car -- Arduino car software
./pi -- Python QR code reader program for Raspberry Pi

## Arduino
This contains the code supplied by the vendor of the [Adeept Smart Car Kit](http://www.adeept.com/4wd-smart-car-uno_p0025.html). It was slightly modified to disable some features on the handheld controller.

## Backend
Contains the backend Node server and static frontend files. Express was used for routing, body-parser for processing request bodies, pg-promise for connecting to the PostegreSQL database, and Socket.IO for pushing updates to the frontend.

* Index.js is the main file to run under Node.
* An NPM script named 'resetdb' exists to create and populate the PostgreSQL database.

## Python QR code reader
