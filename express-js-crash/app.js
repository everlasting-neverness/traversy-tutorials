const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const mongojs = require('mongojs')
const path = require('path');

const ObjectId = mongojs.ObjectId;

const db = mongojs('customerapp', ['users']);

db.on('connect', function () {
	console.log('database connected')
})

db.on('error', function (err) {
	console.log('database error', err)
})

const app = express();

// const logger = function(req, res, next) {
//     console.log('logging...');
//     next();
// }

// app.use(logger);    

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// body parser middleware
app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({ extended: false }));    

// set static path
app.use(express.static(path.join(__dirname, "public")));   

// Global Vars
app.use((req, res, next) => {
    res.locals.errors = null;
    // res.locals.people = [
    //     {
    //       id: 1,
    //       name: "Mike",
    //       age: 24
    //     },
    //     {
    //       id: 2,
    //       name: "Jeff",
    //       age: 30
    //     },
    //     {
    //       id: 3,
    //       name: "Anna",
    //       age: 36
    //     }
    //   ];
    next();
})

// express-validator middleware
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        let namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;

        while (namespace.length) {
            formParam += '['+ namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        }
    }
}))

app.get("/", (req, res) => {
    //   res.send("hello world")
    //   res.json(people);
    db.users.find(function (err, docs) {     
        let title = 'Customers',
            showSuccessView;
        res.render('index', {
            title: title,
            people: docs,
            showSuccessView
        });
    })
});

app.post('/users/add', (req, res) => {
    
    // turn on validation
    req.checkBody('name', 'name is required').notEmpty();
    req.checkBody('age', 'age is required').notEmpty();

    let errors = req.validationErrors(),
        showSuccessView;

    if (errors) {
        showSuccessView = false;
    } else {
        let newUser = {
            name: req.body.name,
            age: req.body.age
        }
        db.users.insert(newUser, (err, response) => {
            if (err) {
                console.log(err);
            }
            // res.redirect('/')
        });
        showSuccessView = true;
    }
    db.users.find(function (err, docs) {
        console.log(docs);        
        let title = 'Customers',
            showSuccessView;
        res.render('index', {
            title: title,
            people: docs,
            showSuccessView, 
            errors
        });
    })
})

app.delete('/users/delete/:id', (req, res) => {
    const id = req.params.id;
    db.users.remove({_id: ObjectId(id)}, function(err, response) {
        if (err) {
            console.log(err)
        } else {
            console.log(response)
        }
        res.redirect('/')
    })
})

app.listen(3005, () => {
    console.log('server running on port 3005')
})

