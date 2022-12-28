
//! if u append on body and if u load ur .js inside the script tag which is load before the body element 
//! so it will definitly giving you a error ex.


//~* Error: Uncaught TypeError: Cannot read properties of null (reading 'append')
//~%  <body><script src="./index.js"></script><app-root></app-root></body>

//!const divEle = document.createElement("div")
//!document.body.append(divEle);




//~% Excute only after the HTML is parsed and DOM is tree is ready

// document.addEventListener("DOMContentLoaded", () => {
//     const div = document.createElement("div");
//     div.innerHTML = "Hello";
//     const root = document.querySelector("app-root")
//     root.appendChild(div);
// })

//* Without Class

document.addEventListener("DOMContentLoaded", () => {
    //~% Create  a base Template
    
    const root = document.querySelector("app-root")

    const template = `
    <div>
        <input id="todo-input" type="text" placeholder="Enter the task" />
        <button id="add-button">Add</button>
    </div>
    <ul id="item-list"></ul>
    `

    //~% Process to the given "string" and convert to DOM Element
    
    root.insertAdjacentHTML("beforeend", template)
    
    const addButton =  document.querySelector("#add-button");

    const itemList  = document.querySelector("#item-list");
    const todoInput = document.querySelector("#todo-input");
    //~* Dynamic add using the button click
    addButton.addEventListener("click", () => {
        //% Prepared the li element
        const item = `<li>${todoInput.value}</li>`;
        //% Add it
        itemList.insertAdjacentHTML("beforeend", item)
        
        //% Make input null login
        todoInput.value = "";
    })
})



