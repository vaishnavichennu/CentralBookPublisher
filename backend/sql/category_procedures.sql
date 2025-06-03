DELIMITER //

CREATE PROCEDURE AddCategory(IN p_catname VARCHAR(255), IN p_catcode VARCHAR(100))
BEGIN
  INSERT INTO category (catname, catcode) VALUES (p_catname, p_catcode);
END //

CREATE PROCEDURE GetAllCategories()
BEGIN
  SELECT * FROM category;
END //

CREATE PROCEDURE UpdateCategory(IN p_id INT, IN p_catname VARCHAR(255), IN p_catcode VARCHAR(100))
BEGIN
  UPDATE category SET catname = p_catname, catcode = p_catcode WHERE id = p_id;
END //

CREATE PROCEDURE DeleteCategory(IN p_id INT)
BEGIN
  DELETE FROM category WHERE id = p_id;
END //

DELIMITER ;
