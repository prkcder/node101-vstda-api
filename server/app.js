const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const app = express();

// add your code here
const api = [
    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
      },
      {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
      },
      {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
      }
];
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
    res.status(200).send({status : "ok"});
    console.log("status showing");
});

app.get("/api/Todoitems", (req, res, next) => {
    res.status(200).send(api);
    
});

app.get("/api/TodoItems/:number", (req, res, next) => {
    let todoItemId = req.params.number;
    res.status(200).send(api[todoItemId]);
    console.log("specific number ID");
});

app.post("/api/TodoItems", (req, res, next) => {
   
    // let new_todoItemId = req.body.todoItemId;
    // let new_name = req.body.name;
    // let new_priority = req.body.priority;
    // let new_completed = req.body.completed;

    // let newObj = {
    //     todoItemId: "new_todoItemId",
    //     name: "new_name",
    //     priority: "new_priority",
    //     completed: "new_completed"
    // }
    
        let newObj = {
        todoItemId: 0,
        name: 'Greg',
        priority: 0,
        completed: true
    };
    // for (var i=0; i < api.length; i++){
    //     if(api[i]["todoItemId"] == newObj["todoItemId"]) {
    //         api[i] = newObj;
    //         }
        
    // }

    // console.log(newObj);
    api.push(newObj);
    return res.status(201).send(newObj);
});
/*
app.post("/api/TodoItems/", (req, res) => {
    let newObj = {
        todoItemId: 3,
        name: 'Greg',
        priority: 1,
        completed: true
    }
  
    for (let i = 0; i < api.length; i++) {
      if (api[i]["todoItemId"] == newObj["todoItemId"]) {
        api[i] = newObj;
        return res.status(201).send(newObj);
      }
    }
    
    api.push(newObj);
    return res.status(201).send(newObj);
  });
  */

app.delete("/api/TodoItems/:number", (req, res, next) => {
    let deleted = req.params.number;
    res.status(200).send(api[deleted]);
});

module.exports = app;
