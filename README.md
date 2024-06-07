# E-commerce backend

  ## License: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [MIT License](https://opensource.org/licenses/MIT)

  ## Table of Contents
  * [Description](#description)
  * [Tutorial Video](#tutorial)
  * [Installation Instructions](#installation)
  * [Usage Instructions](#usage)
  * [Contribution Information](#contributions)
  * [Questions](#questions)
  
  ## Description: 
  This app will create the backend for an e-commerce website. Users will be able to seed the initital data to a SQL db using npm run seed and then make GET, POST, PUT and DELETE requests using a program such as Postman or Insomnia. Requests will provide information back, add new entries, update entries and delete entries.

  ## Tutorial:
  https://www.youtube.com/watch?v=FPJWNShzxck&t=301s

  ## Installation: 
  First, clone this repository to your computer using 'git@github.com:zmuda44/E-commerce-backend-Module-13.git'. cd into the folder containing the server.js. Run 'npm i' from the command line to create your node modules. A package.json will be cloned with all proper dependencies and npm i will install all modules from these dependencies. You will also need to create a .env file with your database name, database user name and database passwords in the main directory. Search dotenv in your web browser of choice for more information. cd into the folder containing the schema.sql and log into your Postgres account. You will first need to download Postgres and get a database server up and running. Run '\i schema' from the postgres command line to create your database on the server. Exit out of the Postgres command by typing '\q'. You will once again cd into the folder containing server.js and start your server using 'npm run start'. This will populate the columns in the database you created from Sequelize. Stop your server, and run 'npm run seed' from the command line. The package.json file will come with the scripts and dependencies to run these commands, and the 'npm i' at the beginning will download the modules. Once you have seeded the database, you are ready to start using the app.

  ## Usage: 
  Once you have installed the modules, created the database and tables and seeded the data, you are ready to start using. Run 'npm run start' from the folder that contains the server.js file to start your server. Open Insomnia or Postman to start making GET, POST, PUT and DELETE requests from the server. Have a look at the .js files within the routes folder. You can modify the code to run database queries as you see fit within each http method. 

  ## Contributions: 
  Contributions to this app are welcome. Simply fork the repository to your github account by pressing the fork button above.  This will create a repository on your own github which you can clone and push to like any other repository. If you wish for your changes or additions to be part of this app, click on the 'Pull requests' button towards the top of the forked repository in your github account. Follow the prompts for a pull request and if approved, your code will be accepted into this app's repository.

  ## Questions: 
  Github: [github.com/zmuda44](https://github.com/zmuda44) Email: gregbailey617@gmail.com


 