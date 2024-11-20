#Run
- run in terminal npm start

##Config

Important

 -run in terminal npm install for Node dependency

---

##Run with docker

Create an image in dokcker
- docker build -t multserverce:1.0.0 .

Create a container associated with the image in dokcker
- docker run -d -p 3000:3000 --name api_multserverce multserverce:1.0.0

To run API application in the container
- docker start api_multserverce

To finalize the API application in the container
- docker stop api_multserverce

---


library

    Nodemon - to update the server running automatically in development

    Sqlite3 - generates database file to store the data obtained from the api test

    Express - allows you to access paths provided by the API and access HTTP verbs

    Sequelize - Allow mapping of relationship data to objects, classes and tables

    Swagger-ui-express - presents a page in the browser with http and vebs paths to test the API services

    Uuid - generate a string id with 128 characters to guarantee data uniqueness in a database

    Jsonwebtoken - WT is an open standard for creating access tokens, which can be used for authentication and authorization
    
    Bcrypt - is a library that encrypts data with a password to be used in a hash

#Files
    
    Server – Connection between the application and the API, providing a server with a node
        
    controllers - Control  of routes with folders and functions of the node

    middleware - Application input and output processing; NOTE: The middleware does not call anyone, it only returns the result of the treatment

    services - Performs data processing by calling its dependents, if the data is not compatible it returns errors pre-configured by the dev

    repositories - Application access manager for the database in CRUD operations, logical part of the call

    models - They represent the database tables in the form of classes for using the values ​​in the tables; Represents the abstraction of the object and its values

    Config/ database - Config – These are environment configuration or connection of other applications or banks  

    Config/ database - Config – These are environment configuration or connection of other applications or banks

        └── src
            ├── config          
            ├── controllers     
            ├── middleware      
            ├── models          
            ├── repositories    
            ├── services        
            └── utils           
    


#Observations:

The modules were developed in sets, the functional CRUD is in Books, Movies and User, the others are in the beta phase of creation.

* Books
    Get - Select: conclusion
    Post - Create: conclusion
    Delete - Delete: conclusion
    Put - Update: conclusion
* Movies
    Get - Select: conclusion
    Post - Create: conclusion
    Delete - Delete: conclusion
    Put - Update: in progress
* Users
    Get - Select: conclusion
    Post - Create: conclusion
    Delete - Delete: in progress
    Put - Update: in progress
* Foots
    Get - Select: in progress
    Post - Create: in progress
    Delete - Delete: in progress
    Put - Update: in progress
    


Group members:

* Camila Viera RA: 2207423
* Leaonardo Martelli RA: 2203130
* Nathan Lopes RA: 2204336
* Rafael Souza RA: 2202592


