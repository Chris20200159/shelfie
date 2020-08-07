CREATE TABLE products (
  product_id SERIAL PRIMARY KEY, 
  product_name VARCHAR(100) NOT NULL,
  price NUMERIC,
  image_url TEXT
);

SELECT * FROM products;
