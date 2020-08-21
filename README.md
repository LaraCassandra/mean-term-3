## **MEAN TERM TWO: EXPRESS**

### By Lara Cook | 190218

<br />

---

## **Introduction**

---
### High School Scheduling System
<br />

**The Brief**

This project required me to create a high school scheduling system that makes use of NPM, ReactJS, ExpressJS and my own API that contained the necessary information for the scheduling. The information on the website is all populated by the API data. There is a login system which determines which type of user that logs in, where students can view their classes and the teachers can edit the class information. 



<br />

**The Project**

Summerville High School is a fictional school that I created. This is a hypothetical website where teachers and students of Summerville High School could use to schedule classes.

<br />

This project assumes you have NPM. Before beginning, please make sure you have NPM correctly installed.

**You can check in the console by using:**

```
$ npm -v
```

You can download NodeJS at <https://nodejs.org/en/download/> <br>
This will automatically download NPM.

<br />

---

## **Setup**

---

After downloading the code, navigate to the project folder in the console. Alternatively, open the project in Visual Studio Code and open the terminal.

You will need to make sure you have installed all the dependencies so that the project runs properly.

**Install the dependencies:**

```
$ npm install
```

<br />

---

## **Run**

---

Once the dependencies are installed, you need to start the application so that you are able to open it in your browser. Navigate to the backend and once there


**Run the backend:**

```
$ nodemon
```

<br/>

**Open the project in your browser**

[http://localhost:8000]

<br />

---

## **Additional Information**

---
<br />

## Requests:

<br />

**A list of all the classes**
```
http://localhost:8000/api/classes
```

**Details of a specific class**
```
http://localhost:8000/api/classes/:id/details
```

**A list of all the subjects**
```
http://localhost:8000/api/subjects
```

**A list of all the teachers**
```
http://localhost:8000/api/teachers
```

**A list of classes taught by a specific teacher**
```
http://localhost:8000/api/teachers/:id/classes
```

**A list of classes attended by a specific learner**
```
http://localhost:8000/api/learners/:id/classes
```
