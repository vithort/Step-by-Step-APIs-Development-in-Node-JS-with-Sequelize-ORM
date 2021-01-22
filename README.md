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

- Seed Help

```npm
npx sequelize seed:generate  --help
```

- Create Seed Help

```npm
npx sequelize seed:generate  --name test-products
```

- Execute Seed

```npm
npx sequelize db:seed:all
```

- Execute Seed Specified

```npm
npx sequelize db:seed --seed 20210120232437-test-categories.js
```

Execute Delete Seed

```npm
npx sequelize db:seed:undo:all
```

Execute Delete Seed Specified

```npm
npx sequelize db:seed:undo --seed 20210120232437-test-categories.js
```

- Install Faker Package

Link: [faker.js](https://www.npmjs.com/package/faker)

```npm
npm i faker --save
```

- Create Model Student

```npm
npx sequelize model:generate --name Student --attributes name:string,roll_no:integer,email:string
```

- Run Pending Migrations

```npm
npx sequelize db:migrate
```

- Install Packages

```npm
npm i bcrypt jsonwebtoken --save
```

## Sequelize: Relationship One to One

- Init Repository

```npm
npm init -y
```

- Install Dependencies

```npm
npm i express sequelize mysql2 --save
```

- Install Sequelize CLI (command-line interface)

```npm
npm i sequelize-cli --save
```

- Init Sequelize Project

```npm
npx sequelize init
```

- Create Models

```npm
npx sequelize model:generate --name User --attributes name:string,phoneNo:string
npx sequelize model:generate --name Email --attributes emailAddress:string,userId:integer
```

- Execute Migrations

```npm
npx sequelize db:migrate
```

## Sequelize: Relationship One to Many

- Create Models

```npm
npx sequelize model:generate --name Post --attributes name:string,context:text
npx sequelize model:generate --name Comment --attributes comment_text:text,postId:integer
```

- Execute Migrations

```npm
npx sequelize db:migrate
```

## Sequelize: Relationship Many to Many

- Init Repository

```npm
npm init -y
```

- Install Dependencies

```npm
npm i express sequelize mysql2 --save
```

- Install Sequelize CLI (command-line interface)

```npm
npm i sequelize-cli --save
```

- Init Sequelize Project

```npm
npx sequelize init
```

- Create Models

```npm
npx sequelize model:generate --name User --attributes name:string,email:string
npx sequelize model:generate --name Role --attributes name:text
npx sequelize model:generate --name UserRole --attributes userId:integer,roleId:integer
```

- Execute Migrations

```npm
npx sequelize db:migrate
```

## Sequelize: Validations

Link: [Sequelize Validators](https://sequelize.org/master/manual/validations-and-constraints.html)

## About PM2: Production Process Manager

Link: [pm2](https://pm2.keymetrics.io/)

- Install Package

```npm
npm i pm2 -g
```

- Start Application with PM2

```npm
pm2 start app.js
```

- List Process

```npm
pm2 list
```

- Terminate Proccess

```npm
pm2 stop app.js
```

- Show Description of Process

```npm
pm2 describe <ID>
pm2 describe 0
```

- Monitoring Logs

```npm
pm2 monit
```
