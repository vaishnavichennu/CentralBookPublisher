# CentralBookPublisher

# install Node pkgs

npm init -y
npm install express mysql2 cors

# To run

node server.js

# API Testing - on Postman

POST - http://localhost:3000/api/products

JSON body:
{
  "schoolcode": "JGHS",
  "secondlanguage": "hindi",
  "thirdlanguage": "telugu"
}
