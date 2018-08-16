INSERT INTO projects (id, title, description)
VALUES
(1, 'QR CodeBot', 'Car that reads QR codes'),
(2, 'SmartCar-R', 'Arduino-controlled robot'),
(3, 'Raspberry Pitch  Perfect / Raspberry Assistant', 'Using a Yeti USB Microphone and python scripts saved to a raspberry pi mini-computer, I am able to detect pitches. By connecting the Google Assistant API to my Raspberry Pi, I may issue commands for my Google Assistant to run to the best of it’s ability.'),
(4, 'BevSimply', 'Where business users and entrepreneurs go to make beverage inventory a breeze! Simply login to the app, and add areas, sections, and beverages for your business. With a few clicks your inventory is done giving you the option to view the most recent data. BevSimply, where all your vendor management needs are met.'),
(5, 'BunkerLabsATL.org', ''),
(6, 'Shakedown', 'At Shakedown, we are all about helping you get outside, faster. Whether you''re brand new to hiking or you''re seasoned hiker trash (an embraced term given to thru-hikers), we want to help you keep track of your gear and lighten the load you carry. You’ll be surprised how much pack weight can effect your backpacking experience.
    Check out some of our suggested checklists for different hikes. Keep inventory of the gear you already own. Mix and match your gear in our “Build your pack” feature, and see how much your pack weighs.
    Pack it up. Shake it down. Get outside.
    Website: http://gearshakedown.net/'),
(7, 'What The Thing', ''),
(8, 'Mixed Realities', 'Meet Bit, your virtual pet.'),
(9, 'Better Day', 'Online journaling site where you can browse through other people''s anonymous entries based on categories of what they''re working on.'),
(10, 'Tripology', 'Tripology is a web application for managing travel information, allowing users to conveniently track trip expenses and daily itineraries by entering, editing, or deleting entries as needed.'),
(11, 'Full Stack Coding Bootcamp', 'Top-rated coding bootcamp in Atlanta and Houston, among the best-reviewed programming schools in the country. DigitalCrafts offers intensive classroom experiences for full and part-time students, transforming beginners into full stack software developers trained in JavaScript, React, Node.js, Python, and much more.'),
(12, 'Talk is cheap. Show me the code.', ''),
(13, 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.', '')
;

INSERT INTO persons (id, name, project_id)
VALUES
(1, 'Lisa Dean', 1),
(2, 'Ryan Miller', 2),
(3, 'Jalani Paul', 3),
(4, 'Bhisma Bakhai', 4),
(5, 'Matthew Freeman', 4),
(6, 'Rick Brooks', 4),
(7, 'Stephen Jarrett', 5),
(8, 'Delia Sanders', 5),
(9, 'Daniel McKinney', 5),
(10, 'Sebastian Price', 5),
(11, 'Aylin DeBruyne', 6),
(12, 'Beth D’Amato', 6),
(13, 'Thor Denson', 7),
(14, 'Sanket Shah', 8),
(15, 'Joshua Brown', 9),
(16, 'Joshua Owens', 10),
(17, 'DigitalCrafts', 11),
(18, 'Linus Torvalds', 12),
(19, 'Martin Golding', 12)
;