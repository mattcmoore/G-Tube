DROP TABLE IF EXISTS users, comments, videos;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT DEFAULT null, 
    username VARCHAR NOT NULL,
    password TEXT DEFAULT NULL,
    avatar VARCHAR,
    subscribers INTEGER NOT NULL
);

CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    description TEXT,
    video_link TEXT,
    likes INTEGER,
    views INTEGER,
    date_published DATE,
    is_watched BOOLEAN, 
    keyword VARCHAR,
    runtime INTERVAL,  
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment TEXT, 
    likes INTEGER,
    date_published DATE,
    video_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (video_id) REFERENCES videos(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (name, username, password, avatar, subscribers) VALUES ('Garrett Ross', 'G-unit', null, 'https://yt3.googleusercontent.com/ytc/AL5GRJVQocYM80GnFFHn2_6K8E-bUuTxkoG16s1mjA01Jg=s176-c-k-c0x00ffffff-no-rj', 2500);
INSERT INTO users (name, username, password, avatar, subscribers) VALUES ('Tyler Schlepko', 'TylerSwift', null, 'https://static.wikia.nocookie.net/trailerpark/images/0/0e/Julian2.gif/revision/latest?cb=20091104025647', 1000);
INSERT INTO users (name, username, password, avatar, subscribers) VALUES ('Matt Moore', 'Mattyboi', null, 'https://avatars.githubusercontent.com/u/5271857?v=4', 500);
INSERT INTO users (name, username, password, avatar, subscribers) VALUES ('Dany', 'Danywamy', null, 'https://s3.amazonaws.com/app.growtix.com/media/big/25/4/61/dc8faf54-e3b1-4a1c-ae53-eebafb277484.png', 750);
INSERT INTO users (name, username, password, avatar, subscribers) VALUES ('Dan Morro', 'Danimal', null, 'https://www.looper.com/img/gallery/the-story-behind-ricks-car-on-trailer-park-boys/l-intro-1616866606.jpg', 800);
INSERT INTO users (name, username, password, avatar, subscribers) VALUES ('Darwin Facelo', 'Dweezy', null, 'https://i0.wp.com/mirth-films.com/wp-content/uploads/2022/04/Randy.jpg?fit=1920%2C1080&ssl=1', 200000);

INSERT INTO videos (title, description, video_link, likes, views, date_published, is_watched, keyword, runtime, user_id) 
VALUES 
(   'I am a teacher', 
    'Watch me teach these dumb students how to code', 
    'https://i.ytimg.com/vi/H-nxt2Uw2-o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRmPU3reua1jrRNhJeH9ty_pOkBQ', 
    47, 
    2000, 
    '2020-07-12', 
    false, 
    'Coding',
    '00:08:24', 
    1
),
(   'Test Title 2', 
    'Lorem 2 Test Description', 
    'https://i.ytimg.com/vi/M5QY2_8704o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDb6mjDQIpimoXrkQ813pR-xTVRrw', 
    47, 
    2000, 
    '2020-07-12', 
    false, 
    'Coding', 
    '00:24:07',
    3
),
(   'Test Title 3', 
    'Lorem 3 Test Description', 
    'https://i.ytimg.com/vi/HWnsI7vZoAA/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgYIGUocjAP&rs=AOn4CLD-f3W4nsINpJrLcqJ88gbirQYzJA', 
    57, 
    3000, 
    '2020-07-13', 
    false, 
    'Coding', 
    '00:06:09',
    3
),
(   'Test Title 4', 
    'Lorem 4 Test Description', 
    'https://i.ytimg.com/vi/GZlvD059reE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaXtnUs1CJdhV8ZSv4jYvSXYWNsg', 
    67, 
    4000, 
    '2020-07-14', 
    false, 
    'Coding', 
    '00:04:20',
    3
),
(   'Test Title 5', 
    'Lorem 5 Test Description', 
    'https://i.ytimg.com/vi/bB7xkRsEq-g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGz36FD4QZ5c6MUJdx4Lrh1uYPpQ', 
    77, 
    5000, 
    '2020-07-14', 
    false, 
    'Coding', 
    '00:05:00',
    3
),
(   'Teaching Algorithms for dummies', 
    'Watch me teach these noob students how to code', 
    'https://i.ytimg.com/vi/H-nxt2Uw2-o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRmPU3reua1jrRNhJeH9ty_pOkBQ', 
    70, 
    2435, 
    '2023-02-12', 
    false, 
    'Coding',
    '00:09:21', 
    1
);

INSERT INTO comments (comment, likes, date_published, video_id, user_id) VALUES ('Nice!', 10, '2022-04-03', 1, 2);
INSERT INTO comments (comment, likes, date_published, video_id, user_id) VALUES('Whoa I''m dumb', 25, '2022-04-07', 1, 3);
INSERT INTO comments (comment, likes, date_published, video_id, user_id) VALUES('That''s too easy', 12, '2022-04-09', 1, 4);
INSERT INTO comments (comment, likes, date_published, video_id, user_id) VALUES('You inspired me to learn how to code!', 11, '2022-04-10', 1, 5);
INSERT INTO comments (comment, likes, date_published, video_id, user_id) VALUES('Wow you''re so talentd', 2, '2022-06-14', 1, 6);
