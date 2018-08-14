INSERT INTO projects (id, title, description)
VALUES
(1, 'QR CodeBot', 'Car that reads QR codes'),
(2, 'SmartCar-R', 'Arduino-controlled robot'),
(3, 'Raspberry Pitch  Perfect / Raspberry Assistant', 'Using a Yeti USB Microphone and python scripts saved to a raspberry pi mini-computer, I am able to detect pitches. By connecting the Google Assistant API to my Raspberry Pi, I may issue commands for my Google Assistant to run to the best of it’s ability.'),
(4, 'BevSimply', 'Beverage inventory management system'),
(5, 'BunkerLabsATL.org', ''),
(6, 'Shakedown', ''),
(7, 'KarmaKraft', ''),
(8, 'Mixed Realities', 'Meet Bit, your virtual pet.'),
(9, 'Josh Brown''s project', ''),
(10, 'Tripology', 'Tripology is a web application for managing travel information, allowing users to conveniently track trip expenses and daily itineraries by entering, editing, or deleting entries as needed.')
;

INSERT INTO persons (id, name, project_id)
VALUES
(1, 'Lisa Dean', 1),
(2, 'Ryan Miller', 2),
(3, 'Jalani Paul', 3),
(4, 'Bhisma', 4),
(5, 'Matthew Freeman', 4),
(6, 'Rick', 4),
(7, 'Stephen Jarrett', 5),
(8, 'Delia Sanders', 5),
(9, 'Dan McKinney', 5),
(10, 'Sebastian', 5),
(11, 'Aylin', 6),
(12, 'Beth D''Amato', 6),
(13, 'Thor Densen', 7),
(14, 'Sanket', 8),
(15, 'Joshua Brown', 9),
(16, 'Joshua Owens', 10)
;