var path = require('path')
require('dotenv').config()
var express = require('express')
var app = express()
var port = 8000

// CROSS ORIGIN HANDLING
var cors = require('cors')

// LINKING FILES
var authenticator = require('./authenticator')
var logger = require('./logger')
var data = require('./data')

// AUTHENTICATOR & PASSWORD ENCRYPTION
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken")
const { json } = require('body-parser')


// ROUTING TO INDEX.HTML
var urlpath = path.join(__dirname, '../frontend/build')

// SET ORIGIN TO ALLOW LOCALHOST:3000 TO MAKE REQUESTS (FRONTEND)
var corsOptions = {
    origin: '*', //FRONTEND
    optionSuccessStatus: 200
}




//* MIDDLEWARE

// LOGS THE REQUESTS
app.use(logger)

// ALLOW ONLY SPECIFIC ORIGINS TO MAKE REQUESTS
app.use(cors(corsOptions))

// CHECKS IF THE FILES WE ARE SEARCHING FOR ARE STATIC
app.use(express.static(urlpath))

app.use(cookieParser())

// LOOKS FOR RAW BODY DATA
app.use(bodyParser.json())

// app.use(authenticator)

//* END OF MIDDLEWARE





//* CALL JSON DATA FROM DATA.JS

//* LIST OF ALL CLASSES
app.get('/api/classes', (req, res) => {
    if (req.query.limit >= 0) {
        res.json(data.classes.slice(0, req.query.limit));
    }
    else {
        res.json(data.classes);
    }
})




//* LIST OF ALL SUBJECTS
app.get('/api/subjects', (req, res) => {
    var subjectList = [];

    for (var i = 0; i < data.classes.length; i++) {
        subjectList.push(data.classes[i].subject)
    }

    res.json(subjectList);
})




//* LIST OF ALL TEACHERS
app.get('/api/teachers', (req, res) => {
    var teacherList = [];

    for (var i = 0; i < data.teachers.length; i++) {
        teacherList.push(data.teachers[i].name)
    }

    res.json(teacherList);
})




//* SEARCH CLASS BY ID 
app.get('/api/classes/:id', (req, res) => {
    var id = req.params.id;
    var classId = null;
    for (var i = 0; 0 < data.classes.length; i++) {
        if (data.classes[i].id === parseInt(id)) {
            classId = data.classes[i];
            res.json(classId);
        }
    }
    if (classId == null) {
        res.status(404).json("No class with id found");
    }
})




//* GET DETAILS OF SPECIFIC CLASS BY ID
app.get('/api/classes/:id/details', (req, res) => {

    // VARIABLES

    var id = req.params.id;

    // SUBJECT
    var classSubject = "";

    // TEACHER
    var teacherName = "";

    // STUDENTS
    var classStudents = [];

    // SLOTS
    var classSlot = null;
    var timeSlot = [];

    // CLASS NUMBER
    var classNumber = "";

    // FUNCTIONS
    // FIND CLASS BY ID, GET CLASS SLOT, SUBJECT & NUMBER
    for (var i = 0; i < data.classes.length; i++) {
        if (data.classes[i].id === parseInt(id)) {
            classSlot = data.classes[i].slot;
            classSubject = data.classes[i].subject;
            classNumber = data.classes[i].classroom;
        }
    }

    // FIND TEACHER OF CLASS
    for (var i = 0; i < data.teachers.length; i++) {
        for (var j = 0; j < data.teachers[i].classes.length; j++) {
            if (data.teachers[i].classes[j] === parseInt(id)) {
                teacherName = data.teachers[i].name;
            }
        }
    }

    //FIND STUDENTS OF CLASS
    for (var i = 0; i < data.learners.length; i++) {
        for (var j = 0; j < data.learners[i].classes.length; j++) {
            if (data.learners[i].classes[j] === parseInt(id)) {
                classStudents.push(data.learners[i].name);
            }
        }
    }

    // FIND DAY AND PERIODS OF CLASS
    for (var i = 0; i < data.slots.length; i++) {
        if (data.slots[i].slot === parseInt(classSlot)) {
            timeSlot.push(data.slots[i].times)
        }
    }


    var results = { classSubject, classNumber, teacherName, classStudents, timeSlot };

    res.json(results)

}); //* END OF CLASS DETAILS




//* GET THE BRIEF
app.get('/api/brief', (req, res) => {
    res.json(data.brief)
})




//* SEARCH TEACHER BY ID
app.get('/api/teachers/:id', (req, res) => {
    var id = req.params.id;
    var teachId = null;
    for (var i = 0; 0 < data.teachers.length; i++) {
        if (data.teachers[i].id === parseInt(id)) {
            teachId = data.teachers[i];
            res.json(teachId);
        }
    }
    if (teachId == null) {
        res.status(404).json("No teacher with id found");
    }
})




//* GET CLASSES TAUGHT BY SPECIFIC TEACHER
app.get('/api/teachers/:id/classes', (req, res) => {
    var teacherName = [];
    var classesID = [];
    var className = [];

    var id = req.params.id;

    for (var i = 0; i < data.teachers.length; i++) {
        if (data.teachers[i].id === parseInt(id)) {
            teacherName.push(data.teachers[i].name);
            for (var j = 0; j < data.teachers[i].classes.length; j++) {
                classesID.push(data.teachers[i].classes[j]);
            }
        }
    }

    for (var i = 0; i < classesID.length; i++) {
        for (var j = 0; j < data.classes.length; j++) {
            if (classesID[i] == data.classes[j].id) {
                className.push(data.classes[j].subject)
            }
        }
    }

    var results = { teacherName, className };

    res.json(results);
});




//* GET CLASSES ATTENDED BY SPECIFIC STUDENTS
app.get('/api/learners/:id/classes', (req, res) => {
    var learnerName = [];
    var classesID = [];
    var className = [];

    var id = req.params.id;

    for (var i = 0; i < data.learners.length; i++) {
        if (data.learners[i].id === parseInt(id)) {
            learnerName.push(data.learners[i].name);
            for (var j = 0; j < data.learners[i].classes.length; j++) {
                classesID.push(data.learners[i].classes[j]);
            }
        }
    }

    for (var i = 0; i < classesID.length; i++) {
        for (var j = 0; j < data.classes.length; j++) {
            if (classesID[i] == data.classes[j].id) {
                className.push(data.classes[j].subject)
            }
        }
    }

    var results = { learnerName, className };

    res.json(results);
});


//* END OF CALLING JSON DATA FROM DATA.JS



// REDIRECTING /HOME TO GO TO HOMEPAGE
app.get('/home', (req, res) => {
    res.redirect(301, '/')
});

// GET LOGIN DETAILS
app.post('/api/login', (req, res) => {
    var loginDetails = req.body
    console.log(loginDetails)

    // JWT CREATES A TOKEN TO ENCRYPT DATA AND POST INTO DATABASE
    const token = jwt.sign({ "name": "Lara", "id": "123455885452" }, process.env.ACCESS_TOKEN_SECRET)
    res.cookie("token", token)
    res.json({ token: token })
});

app.post('/api/protected', authenticator, (req, res) => {
    res.json(req.user)
});

// DEPLOY THE APPLICATION
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});