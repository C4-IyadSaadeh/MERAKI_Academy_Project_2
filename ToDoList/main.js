// بسم الله الرحمن الرحيم 
//Author : iyad Saadeh
// Title :To Do List
// version : 1.0.0

 /* Requirements
1. User should be able to add a new toDo item to the toDos list.
2.User should be able to view all added items.
3.User should be able to delete any added item.
4. User should be able to modify any added item.
5.Items should be categorized to [ Completed, Pending ].*/

const txt=$('#txt');
const btn=$('#btn');
const test=$('#test');
const data=localStorage;

btn.on('click',()=>{
    data.setItem('test',`${{name:txt.val(),age:23}}`);
    const header=$(`<h1>${data}</h1>`);
    header.appendTo(test);
});
// console.log(data.key());

