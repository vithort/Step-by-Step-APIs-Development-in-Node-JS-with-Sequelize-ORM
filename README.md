# step-by-step-apis-development-in-nodejs-with-sequelize-orm

Step by Step APIs Development in Node JS with Sequelize ORM

## Express JS

Link: [ExpressJS](https://expressjs.com/)

- Init Repository

```npm
npm init
```

- Install Express

```npm
npm i express --save
```

- Run App

```npm
node app.js
```

- Install Nodemon

```npm
npm -g nodemon
```

- Execute Nodemon

```npm
nodemon
```

- Execute Nodemon in Specific File

```npm
nodemon server.js
```

## Sequelize ORM

Link: [Sequelize](www.sequelize.org)

- Init Repository

```npm
npm init -y
```

- Install Dependencies

```npm
npm i sequelize mysql2 express body-parser --save
```

### Sequelize: Datatypes

Link: [Datatypes](www.sequelize.org/v5/manual/data-types.html)

## JWT

Link: [jwt](https://jwt.io)

- Init Repository

```npm
npm init -y
```

- Install Packages

```npm
npm i express body-parser sequelize mysql2 jsonwebtoken bcrypt --save
```

## Sequelize: ORM Cli

- Init Repository

```npm
npm init -y
```

- Install Dependencies

```npm
npm i express sequelize mysql2 body-parser --save
```

- Install Sequelize CLI (command-line interface)

```npm
npm i sequelize-cli --save
```

- Informations about Sequelize CLI

```npm
npx sequelize --help
```

- Init Sequelize Project

```npm
npx sequelize init
```

- Database: Create

```npm
npx sequelize db:create
```

- Database: Drop

```npm
npx sequelize db:drop
```

- Generate Model Help

```npm
npx sequelize model:generate --help
```

- Generate Model Product

```npm
npx sequelize model:generate --name Product --attributes name:string,description:string,amount:integer
```

or

```npm
npx sequelize model:generate --name=Product --attributes=name:string,description:string,amount:integer
```

- Sequelize Migration

```npm
npx sequelize db:migrate
```

- Sequelize Model Category

```npm
npx sequelize model:generate --name Category --attributes name:string,categoryImage:string,status:integer
```

- Run Pending Migrations

```npm
npx sequelize db:migrate
```

- Undo All Migration

```npm
npx sequelize db:migrate:undo:all
```

- Undo Last Migration

```npm
npx sequelize db:migrate:undo
```

- List Status of Migrations

```npm
npx sequelize db:migrate:status
```
