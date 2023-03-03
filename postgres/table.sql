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
    video_link TEXT,
    description TEXT, 
    likes INTEGER,
    views INTEGER,
    date_published DATE,
    is_watched BOOLEAN, 
    keyword VARCHAR,
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

INSERT INTO users (name, username, password, avatar, subscribers) VALUES ('Garrett Ross', 'G-unit', null, 'postgres\g-unit.jpg', 2500);
INSERT INTO users (name, username, password, avatar, subscribers) VALUES ('Tyler Schlepko', 'TylerSwift', null, 'postgres\avatar3.jpg', 1000);
INSERT INTO users (name, username, password, avatar, subscribers) VALUES ('Matt Moore', 'Mattyboi', null, 'postgres\avatar1.jpg', 500);
INSERT INTO users (name, username, password, avatar, subscribers) VALUES ('Dany', 'Danywamy', null, 'postgres\avatar2.jpg', 750);
INSERT INTO users (name, username, password, avatar, subscribers) VALUES ('Dan Morro', 'Danimal', null, 'postgres\avatar4.jpg', 800);
INSERT INTO users (name, username, password, avatar, subscribers) VALUES ('Darwin Facelo', 'Dweezy', null, 'postgres\avatar5.jpg', 200000);

INSERT INTO videos (title, description, video_link, likes, views, date_published, is_watched, keyword, user_id) VALUES ('I am a teacher', 'Watch me teach these dumb students how to code', 'postgres\thumbnail.jpg', 47, 2000, '2020-07-12', false, 'Coding', 1);

INSERT INTO comments (comment, likes, date_published, video_id, user_id) VALUES ('Nice!', 10, '2022-04-03', 1, 2);
INSERT INTO comments (comment, likes, date_published, video_id, user_id) VALUES('Whoa I''m dumb', 25, '2022-04-07', 1, 3);
INSERT INTO comments (comment, likes, date_published, video_id, user_id) VALUES('That''s too easy', 12, '2022-04-09', 1, 4);
INSERT INTO comments (comment, likes, date_published, video_id, user_id) VALUES('You inspired me to learn how to code!', 11, '2022-04-10', 1, 5);
INSERT INTO comments (comment, likes, date_published, video_id, user_id) VALUES('Wow you''re so talentd', 2, '2022-06-14', 1, 6);
