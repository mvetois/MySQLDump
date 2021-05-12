# MySQLDump
Backup system for a MySQL database

## How to configure

Create a `.env` file in the root directory of your project.
This file store the environment values that will be needed to back up the database. Here are the values that must be added to the file :


```dosini
HOST=... # Database host
PORT=... # Database port
USER=... # Database username
PASS=... # Database user password
DB=... # Database name
FILE=... # Path and name of the dump file
```

## How to run

To start the project, you will first need to install all dependencies and start the project :

```bash
# Install dependencies
$> npm install

# Start the project
$> npm start
```
If you want to relaunch the project several times, it is not necessary to reinstall the dependencies each time

## Project members

- [Matthieu VETOIS](https://github.com/mvetois)