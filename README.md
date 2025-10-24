# Web Votes 

### Objective:
A website about secure voting.


### Set up project

- ### Database SQL Script

``` sql
CREATE DATABASE IF NOT EXISTS webvotar;

USE webvotar;

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    id_card VARCHAR(20),
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id)
);


CREATE TABLE election (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    start_date DATETIME NOT NULL,
    end_date DATETIME NOT NULL,
    status ENUM('active', 'closed', 'pending') DEFAULT 'pending'
);

CREATE TABLE election_candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    election_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (election_id) REFERENCES election(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE election_status_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    election_id INT NOT NULL,
    status_name VARCHAR(50) NOT NULL,
    FOREIGN KEY (election_id) REFERENCES election(id)
);

CREATE TABLE vote (
    id INT AUTO_INCREMENT PRIMARY KEY,
    voter_id INT NOT NULL,
    candidate_id INT NOT NULL,
    election_id INT NOT NULL,
    date DATETIME NOT NULL,
    FOREIGN KEY (voter_id) REFERENCES users(id),
    FOREIGN KEY (candidate_id) REFERENCES users(id),
    FOREIGN KEY (election_id) REFERENCES election(id),
    UNIQUE (voter_id, election_id)
);

CREATE TABLE general_votes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    election_id INT NOT NULL,
    candidate_id INT NOT NULL,
    total_votes INT DEFAULT 0,
    FOREIGN KEY (election_id) REFERENCES election(id),
    FOREIGN KEY (candidate_id) REFERENCES users(id)
);
```
- ### Run project

Execute the following command to install all dependencies:

> npm install 

Then run the following command to run the application.

> npm start

