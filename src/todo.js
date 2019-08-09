const fs = require('fs');

const getTodoList = ()=>{
    try{
        var dileData = fs.readFileSync('data.json', 'utf-8');
        return JSON.parse(dileData);
    }
    catch(e){
        return [];
    } 
}

const addTodo = (todoData)=>{
    var fataLidt = getTodoList();
    var index = fataLidt.length;
    var todoObj = {
        index:parseInt(index)+1,
        body : todoData.body,
        isDone : todoData.isDone
    }
    fataLidt.push(todoObj);
    addTodoList(fataLidt);
}

const updateTodo = (todoData)=>{
    var dataList = getTodoList();
    for(var i in dataList){
        if(dataList[i].index==todoData.index){
            dataList[i].isDone = "true";
        }
    }
    addTodoList(dataList);
}

const addTodoList = (data)=>{
    var JsonData = JSON.stringify(data);
    fs.writeFileSync('data.json', JsonData);
};

module.exports = {
    getTodoList:getTodoList,
    addTodo:addTodo,
    updateTodo:updateTodo
}