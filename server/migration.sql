DROP TABLE IF EXISTS shakes;

CREATE TABLE shakes (
  id SERIAL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  type TEXT NOT NULL,
  price MONEY NOT NULL,
  image VARCHAR
);

INSERT INTO shakes(name, description, type, price, image)
VALUES
  ('Chocolate Shake', 'Delicious and creamy', 'Regular', 5.99, 'chocolate_shake.jpg'),
  ('Strawberry Shake', 'Refreshing and fruity', 'Special', 6.99, 'strawberry_shake.jpg'),
  ('Vanilla Shake', 'Classic and smooth', 'Regular', 4.99, 'vanilla_shake.jpg'),
  ('Mango Shake', 'Exotic and tropical', 'Special', 7.99, 'mango_shake.jpg'),
  ('Oreo Shake', 'Rich and indulgent', 'Regular', 5.99, 'oreo_shake.jpg'),
  ('Peanut Butter Shake', 'Creamy and nutty', 'Special', 6.99, 'peanut_butter_shake.jpg'),
  ('Caramel Shake', 'Sweet and buttery', 'Regular', 5.99, 'caramel_shake.jpg'),
  ('Banana Shake', 'Creamy and fruity', 'Regular', 4.99, 'banana_shake.jpg'),
  ('Coffee Shake', 'Bold and energizing', 'Regular', 5.99, 'coffee_shake.jpg'),
  ('Matcha Shake', 'Refreshing and earthy', 'Special', 6.99, 'matcha_shake.jpg'),
  ('Salted Caramel Shake', 'Sweet and savory', 'Regular', 5.99, 'salted_caramel_shake.jpg'),
  ('Blueberry Shake', 'Tangy and fruity', 'Special', 6.99, 'blueberry_shake.jpg'),
  ('Pistachio Shake', 'Creamy and nutty', 'Regular', 5.99, 'pistachio_shake.jpg'),
  ('Mint Chocolate Chip Shake', 'Refreshing and chocolatey', 'Special', 6.99, 'mint_chocolate_chip_shake.jpg'),
  ('Raspberry Shake', 'Sweet and tart', 'Regular', 5.99, 'raspberry_shake.jpg'),
  ('Coconut Shake', 'Creamy and tropical', 'Special', 6.99, 'coconut_shake.jpg'),
  ('Cookies and Cream Shake', 'Indulgent and crunchy', 'Regular', 5.99, 'cookies_and_cream_shake.jpg'),
  ('Peach Shake', 'Juicy and refreshing', 'Regular', 4.99, 'peach_shake.jpg'),
  ('Hazelnut Shake', 'Rich and nutty', 'Special', 6.99, 'hazelnut_shake.jpg'),
  ('Red Velvet Shake', 'Decadent and velvety', 'Regular', 5.99, 'red_velvet_shake.jpg');
