let todos = {
  list: [],
  // display: function() {
  //   if (this.list.length === 0) {
  //     console.log("List is empty");
  //   } else {
  //     console.log("My Todo: ");
  //     for (let item of this.list) {
  //       if (item.completed === true) {
  //       console.log("(x)", item.todoText);
  //       } else {
  //       console.log("( )", item.todoText);
  //       }
  //     }
  //   }
  // },
  add: function(newItem) {
    this.list.push({
      todoText: newItem,
      completed: false,
    });
  },
  change: function(position, changedItem) {
    // this.list[position] = changedItem;
    this.list[position].todoText = changedItem;
  },
  delete: function(position) {
    this.list.splice(position, 1);
  },
  toggle: function(position) {
    let item = this.list[position];
    item.completed = !item.completed;
  },
  toggleAll: function() {
    let totalItems = this.list.length;
    let completedItems = 0;

    for (let item of this.list) {
      if (item.completed === true) {
        completedItems++;
      }
    }

    if (totalItems === completedItems) {
      for (let items of this.list) {
        items.completed = false;
      }
    } else {
      for (let items of this.list) {
        items.completed = true;
      }
    }
  }
};

function addItem() {
  let newTodo = prompt("New Todo:","");
  todos.add(newTodo);
};

let handlers = {
  add: function() {
    let input = document.getElementById("addInput");
    todos.add(input.value);
    input.value = "";
    view.display();
  },
  change: function() {
    let inputPos = document.getElementById("inputChangePosition");
    let inputItem = document.getElementById("inputChangeItem");
    todos.change(inputPos.valueAsNumber, inputChangeItem.value);
    inputPos.value = "";
    inputItem.value = "";
    view.display();
  },
  delete: function() {
    let inputDelete = document.getElementById("inputDeletePosition");
    todos.delete(inputDelete.valueAsNumber);
    inputDelete.value = "";
    view.display();
  },
  toggle: function() {
    let inputToggle = document.getElementById("inputToggleComp");
    todos.toggle(inputToggle.valueAsNumber);
    inputToggle.value = "";
    view.display();
  },
  toggleAll: function() {
    todos.toggleAll();
    view.display();
  },
};

let view = {
  display: function () {
    let todoUl = document.querySelector("ul");
    todoUl.innerHTML = "";
     for (let i = 0; i < todos.list.length; i++) {
       let todoLi = document.createElement("li");
       let todoItem = todos.list[i];
       let todoCompletion = "";

       if (todoItem.completed === true) {
         todoCompletion = "(x) " + todoItem.todoText;
       } else {
         todoCompletion = "( ) " + todoItem.todoText;
       }

       todoLi.textContent = todoCompletion;
       // todoLi.textContent = todos.list.todoText;
       todoUl.appendChild(todoLi);
     }
  }
};
