-- ==========================================
-- PERMACON ENTERPRISES DATABASE
-- ==========================================

DROP DATABASE IF EXISTS permacon;

CREATE DATABASE permacon
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE permacon;

-- ==========================================
-- FEEDBACK TABLE
-- ==========================================

CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(120) NOT NULL,

    phone VARCHAR(30),

    rating INT NOT NULL,

    message TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- BOOKINGS TABLE
-- ==========================================

CREATE TABLE bookings (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(120) NOT NULL,

    phone VARCHAR(30) NOT NULL,

    service VARCHAR(150) NOT NULL,

    booking_date DATE NOT NULL,

    message TEXT,

    status ENUM(
        'Pending',
        'Confirmed',
        'Completed',
        'Cancelled'
    ) DEFAULT 'Pending',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- CONTACT MESSAGES
-- ==========================================

CREATE TABLE contact_messages (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(120) NOT NULL,

    phone VARCHAR(30),

    subject VARCHAR(150),

    message TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- PROJECTS
-- ==========================================

CREATE TABLE projects (

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(200) NOT NULL,

    category VARCHAR(100),

    location VARCHAR(200),

    description TEXT,

    image VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- TEAM
-- ==========================================

CREATE TABLE team (

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(150),

    description TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- FAQS
-- ==========================================

CREATE TABLE faqs (

    id INT AUTO_INCREMENT PRIMARY KEY,

    question VARCHAR(255) NOT NULL,

    answer TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- SAMPLE FAQ DATA
-- ==========================================

INSERT INTO faqs (question, answer) VALUES

(
'Do you offer free site visits?',
'Yes. We provide site visits and consultations before preparing quotations.'
),

(
'How long does a project take?',
'Project duration depends on the size and complexity of the work.'
),

(
'Do you work outside Nairobi?',
'Yes. We undertake projects throughout Kenya.'
),

(
'Do you provide warranties?',
'Yes. Our workmanship and selected materials are covered by warranty.'
);

-- ==========================================
-- SAMPLE PROJECTS
-- ==========================================

INSERT INTO projects
(title, category, location, description, image)
VALUES

(
'Modern Residential House',
'Residential',
'Nairobi',
'Complete construction of a modern family residence.',
'project1.jpg'
),

(
'Commercial Office Block',
'Commercial',
'Mombasa',
'Construction of a multi-storey office building.',
'project2.jpg'
),

(
'Road Construction',
'Infrastructure',
'Machakos',
'Road grading and paving project.',
'project3.jpg'
);

-- ==========================================
-- SAMPLE TEAM
-- ==========================================

INSERT INTO team
(title, description)
VALUES

(
'Professional Construction Team',
'Our experienced engineers, architects, project managers and skilled technicians work together to deliver quality projects safely, efficiently and on schedule.'
);

-- ==========================================
-- SAMPLE FEEDBACK
-- ==========================================

INSERT INTO feedback
(name,email,phone,rating,message)
VALUES

(
'John Mwangi',
'john@example.com',
'0712345678',
5,
'Excellent workmanship and timely delivery.'
),

(
'Grace Wanjiku',
'grace@example.com',
'0723456789',
5,
'Professional team with outstanding customer service.'
);

-- ==========================================
-- DATABASE CREATED SUCCESSFULLY
-- ==========================================