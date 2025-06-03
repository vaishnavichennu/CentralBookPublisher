-- 1. Create users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  phone VARCHAR(20) DEFAULT NULL,
  role ENUM('admin','customer') NOT NULL DEFAULT 'customer',
  isVerified BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Drop any existing procedures
DROP PROCEDURE IF EXISTS sp_register_user;
DROP PROCEDURE IF EXISTS sp_get_user_by_email;
DROP PROCEDURE IF EXISTS sp_verify_otp;

DELIMITER $$

-- 3. Register: insert new user
CREATE PROCEDURE sp_register_user (
  IN p_name VARCHAR(100),
  IN p_email VARCHAR(100),
  IN p_password_hash VARCHAR(255),
  IN p_phone VARCHAR(20),
  IN p_role ENUM('admin','customer')
)
BEGIN
  INSERT INTO users (name, email, password_hash, phone, role)
  VALUES (p_name, p_email, p_password_hash, p_phone, p_role);
END $$

-- 4. Get user by email (used to fetch hashed password + role)
CREATE PROCEDURE sp_get_user_by_email (
  IN p_email VARCHAR(100)
)
BEGIN
  SELECT id, name, email, password_hash, phone, role, isVerified
  FROM users
  WHERE email = p_email;
END $$

-- 5. Verify OTP (set isVerified = TRUE)
CREATE PROCEDURE sp_verify_otp (
  IN p_email VARCHAR(100)
)
BEGIN
  UPDATE users
  SET isVerified = TRUE
  WHERE email = p_email;
END $$

DELIMITER ;
