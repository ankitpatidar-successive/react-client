# MERN Stack:
 MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications

 MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js. It is designed to make the development process smoother and easier.

 Each of these 4 powerful technologies provides an end-to-end framework for the developers to work in and each of these technologies play a big part in the development of web applications.

 # Getting started:
  First, create a new project folder. Then go to the project folder in command prompt/terminal and type below command to initialize a package.json file.

 # Getting to know MERN Stack components:  

1. MongoDB: Cross-platform Document-Oriented Database 
MongoDB is a NoSQL database where each record is a document comprising of key-value pairs that are similar to JSON (JavaScript Object Notation) objects. MongoDB is flexible and allows its users to create schema, databases, tables, etc. Documents that are identifiable by a primary key make up the basic unit of MongoDB. Once MongoDB is installed, users can make use of Mongo shell as well. Mongo shell provides a JavaScript interface through which the users can interact and carry out operations (eg: querying, updating records, deleting records).

# Why use MongoDB? 

# Fast –
 Being a document-oriented database, easy to index documents. Therefore a faster response.
# Scalability – 
Large data can be handled by dividing it into several machines.
Use of JavaScript – MongoDB uses JavaScript which is the biggest advantage.
# Schema Less – 
Any type of data in a separate document.
Data stored in the form of JSON –
Objects, Object Members, Arrays, Values, and Strings
JSON syntax is very easy to use.
JSON has a wide range of browser compatibility.
Sharing Data: Data of any size and type(video, audio) can be shared easily.
# Simple Environment Setup :
 Its really simple to set up MongoDB.
Flexible Document Model – MongoDB supports document-model(tables, schemas, columns & SQL) which is faster and easier.
Creating a database: Simply done using a “use” command:
use database_name;
# Creating a table:
 If the collection/table doesn’t exist then a new collection/table will be created:
db.createCollection("collection_name");
Inserting records into the collection:
db.collection_name.insert
(
    {
        "id" : 1,
        "Name" : "Klaus",
                "Department": "Technical",
                "Organization": "Geeks For Geeks"
    }
);
