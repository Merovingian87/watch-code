let todos = {
  list: [],
  display: function() {
    if (this.list.length === 0) {
      console.log("List is empty");
    } else {
      console.log("My Todo: ");
      for (let item of this.list) {
        if (item.completed === true) {
        console.log("(x)", item.todoText);
        } else {
        console.log("( )", item.todoText);
        }
      }
    }
  },
  add: function(newItem) {
    this.list.push({
      todoText: newItem,
      completed: false,
    });
    this.display();
  },
  change: function(position, changedItem) {
    // this.list[position] = changedItem;
    this.list[position].todoText = changedItem;
    this.display();
  },
  delete: function(position) {
    this.list.splice(position, 1);
    this.display();
  },
  toggle: function(position) {
    let item = this.list[position];
    item.completed = !item.completed;
    this.display();
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
    this.display();
  }
};

function addItem() {
  let newTodo = prompt("New Todo:","");
  todos.add(newTodo);
};

// The HTML File had buttons with Id's instead of an "onclick" function.
let displayBu = document.getElementById('DisplayB');
displayBu.addEventListener('click', function() {
  todos.display();
});

let toggleAllBu = document.getElementById("ToggleAllB");
toggleAllBu.addEventListener("click", function() {
  todos.toggleAll();
});
