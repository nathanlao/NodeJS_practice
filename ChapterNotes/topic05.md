# Databases
## What is a Database?
Persist data from request to request

Steps:
1. Client requests for `NodeJS resource / PHP resource` with query string parameters
2. Requested PHP page is executed which `constructs a SQL query`
3. `SQL query` passed to `MySQL` via `API` (DB API)
4. API sends SQL query to DBMS
5. DBMS get the data from database
6. DBMS returns the data to API
7. PHP execute the output and send it to the client
8. display on the browser

### Database Design
structured data includes: pre-defined `columns (Fields)` and `rows (Records)`, along with `primary key` and `foreign key`

## SQL basic knowledge
**Data Manipulation Language**: `SELECT`, `INSERT`, `UPDATE`, `DELETE`

**Data Definition Language**: `CREATE`, `ALTER`, `DROP`

## NoSQL
- Key-value store
- Document store (in JSON obj)
- Column store (adjcent columns)

## NodeJS and Database Packages
PostgreSQL: a `relational database` that implements the SQL standard
- Cross-platform
- less internal conflict as comapre to MySQL

- **adv**:
    1. Scalable
    2. Security (configurable)
    3. Open source
    4. Developer friendly

- **Install psql**:

    https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart

- **Creating new users in Postgres**:

    https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e

- **Connect to Postgres**:

        psql -U <myuser> -d <db_name> -h localhost

### PostgreSQL connection
- The ‘pg’ package on NPM is a Postgres client
- Connections to the database can be done in three ways:
    1. With a database URL:
        
            'postgresql://user:pwd@localhost/postgres'

    2. With environment variables:

            PGUSER=dbuser PGHOST=localhost PGPASSWORD=pwd
            PGDATABASE=mydb

    3. As a connection object (not recommended)

            { user: 'dbuser', host: 'localhost', database: 'mydb', password: 'pwd' }

### PostgreSQL Package
- `pg` package supports connection pools and a single client connection
- `Connection pools` are used for concurrent access with many connected clients

        const {Pool} = require('pg’) -> connection pool for postgres
        pool = new Pool(...) -> initialize the pool

- **Handle connection pool**:

        var pool;
        pool = new Pool({ connectionString: process.env.DATABASE_URL });
        pool.query(getUsersQuery, (error, result) => {
        if (error) // handle error - end process or end response
        var results = {'rows': result.rows };
        // work with results
        });

- **processing the query result**:

        app.get('/users', (req,res) => {
            var sql = `SELECT * FROM userstable`;
            pool.query(sql, (error, result) => {
                if (error)
                    res.end(error);
                var results = {'rows': result.rows };
                res.send(results)
            });
        });

## BLOBs
`binary large object` to store large object, such as storing and retrieving images, audio, and video files in web applications, like a byte array but limit to size of file

## MongoDB
- **unstructured database**
- **document store database**: store a collection of `JSON objects`
    - when we retrieve it, its retrieved as JSON form
- Connect to your cluster with MongoDB shell

        brew install mongosh

        mongosh "mongodb+srv://cluster0.yiq9iie.mongodb.net/myFirstDatabase" --apiVersion 1 --username <name>

1. Switch/connect to your database

        use cmpt372

2. Shows the collections of database

        show collections

- Basic **CREATE** Operations
    1. Insert new collection / document (users) in `JSON form` into your db

            db.users.insert({fname: "nathan", age: 25})
            db.people.insertOne({fname:"juno", age: 26})
            db.people.insertOne({title:"mongodb doc", pages: 26}) -> be able to insert some other objects

- Basic **READ** Operations
    1. Count the number of objects

            db.people.count()

    2. Display the full array in JSON form

            db.people.find()

    3. Display the specific object (like the `where` clause)

            db.people.find({fname: "nathan"})

    4. Display the referred object (array)

            db.people.find({"names.name": "nathan"})

    5. Display the objects that does not contain the attribute

            db.people.find({title:null})

            db.people.find({title:{$exists:false}})

    6. Invoke the `or` function

            db.people.find({$or:[{fname:"nathan"}, {fname:"juno"}]})

    7. Invoke the `gte` function: greater than / equal to

            db.people.find({age:{$gte:20}})

    8. Projection (Display only the age in that object)

            db.people.find({fname:"nathan"}, {age:1})

    9. Print out in a good format:

            .pretty()

    10. Sort the objects (`1 (asc)` or `-1 (desc)`)

            db.people.find({title:null}).sort({age:-1})

## Mongoose
- an `object-document model` (easy transfer between document and object in programming) module for node.js for MongoDB
        - wrapper for MongoDB
        - Expose the models to control the records in a document
        - Supports mongo operations
        - extend native queries

1. Connect to db: 
        
        mongoose.connect(mongodbPath, options)

2. Define a model:

        mongoose.Schema({
                id: {
                        type: String,
                        required: true
                },
        })

## MVC (Model View Controller)
- Model: maintains all domain knowledge
- View: Display model to user
- Controller: manages sequence of interaction with the user

#### Adv
1. allows the data to the change independently of its representation
2. supports presentation of the same data in different ways with changes made in one representation shown in all of them
#### Disadv
1. Involves code complexity when the data and interactions are simple
