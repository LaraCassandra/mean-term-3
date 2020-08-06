var path = require('path')
var express = require('express')
var app = express()
var port = 8000

// LINK LOGGER.JS
var logger = require('./logger')

// LINK DATA.JS
var data = require('./data')
const { time } = require('console')
const { teachers } = require('./data')
const { json, response } = require('express')

// ROUTING TO INDEX.HTML
var urlpath = path.join(__dirname, '../frontend/build')





//MIDDLEWARE

// LOGS THE REQUESTS
app.use(logger)

// CHECKS IF THE FILES WE ARE SEARCHING FOR ARE STATIC
app.use(express.static(urlpath))

//END OF MIDDLEWARE





// CALL JSON DATA FROM DATA.JS

// LIST OF ALL CLASSES
app.get('/api/classes', (req, res) => {
    if (req.query.limit >= 0) {
        res.json(data.classes.slice(0, req.query.limit));
    }
    else {
        res.json(data.classes);
    }
})

// LIST OF ALL SUBJECTS
app.get('/api/subjects', (req, res) => {
    var subjectList = "";

    for (var i = 0; i < data.classes.length; i++) {
        subjectList = subjectList + data.classes[i].subject + "; ";
    }

    res.json(subjectList);
})

// SEARCH CLASS BY ID 
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

// GET DETAILS OF SPECIFIC CLASS BY ID
app.get('/api/classes/:id/details', (req, res) => {

    // VARIABLES
    // TEACHER
    var teacherName = null;
    var classSubject = null;
    var id = req.params.id;

    // STUDENTS
    var classStudents = "";

    // SLOTS
    var classSlot = null;
    var slotTime = "";
    var slotDay = "";
    var timeSlot = "";

    // CLASS NUMBER
    var classNumber = null;

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
                classStudents = classStudents + data.learners[i].name + " ";
            }

        }

    }

    // FIND DAY AND PERIODS OF CLASS
    for (var i = 0; i < data.slots.length; i++) {
        for (var j = 0; j < data.slots[i].times.length; j++) {
            if (data.slots[i].slot === parseInt(classSlot)) {
                slotDay = data.slots[i].times[j].day;
                slotTime = data.slots[i].times[j].period;
                timeSlot = timeSlot + " Day:" + slotDay + " Period:" + slotTime;
            }
        }

    }

    res.json("Class: " + classSubject + ". Teacher: " + teacherName + ". Students: " + classStudents + ". Classroom: " + classNumber + ". Slots:" + timeSlot)

}); // END OF CLASS DETAILS


//GET THE BRIEF
app.get('/api/brief', (req, res) => {
    res.json(data.brief)
})

// SEARCH TEACHER BY ID
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


// GET CLASSES TAUGHT BY SPECIFIC TEACHER
app.get('/api/teachers/:id/classes', (req, res) => {
    var teacherName = null;
    var teachersClasses = [];
    var id = req.params.id;
    for (var i = 0; i < data.teachers.length; i++) {
        if (data.teachers[i].id === parseInt(id)) {
            teachersClasses = data.teachers[i].classes;
            teacherName = data.teachers[i].name;
        }
    }
    res.json(teacherName + " teaches classes: " + teachersClasses);
});


// GET CLASSES ATTENDED BY SPECIFIC STUDENTS
app.get('/api/learners/:id/classes', (req, res) => {
    var learnerName = null;
    var learnersClasses = [];
    var id = req.params.id;
    for (var i = 0; i < data.learners.length; i++) {
        if (data.learners[i].id === parseInt(id)) {
            learnerName = data.learners[i].name;
        }
        learnersClasses.push(data.classes[i].subject);
    }
    res.json(learnerName + "attends these classes: " + learnersClasses);
});

// END OF CALLING JSON DATA FROM DATA.JS





// DEPLOY THE APPLICATION
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});