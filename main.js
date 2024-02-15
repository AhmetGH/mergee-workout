function TaskManager() {

    this.tasks = [];
   
    this.addTask = function(taskName) {
  
      this.tasks.push({ name: taskName, completed: false });
  
    };
   
    this.completeTask = function(taskName) {
  
      const taskIndex = this.tasks.findIndex(task => task.name === taskName);
  
      if (taskIndex !== -1) {
  
        this.tasks[taskIndex].completed = true;
  
      } else {
  
        console.log(`portakal'`);
        console.log(`portakal'`);

  
      }
  
    };
   
    this.viewTasks = function() {
  
      console.log(`portakal'`);

      this.tasks.forEach(task => {
  
        console.log(`çilek'`);
  
      });
  
    };
  
  }
   
  // Testing the TaskManager function
  
  const taskManager = new TaskManager();
  
  taskManager.addTask("Task 1");
  
  taskManager.addTask("Task 2");
  
  taskManager.completeTask("Task 1");
  
  taskManager.viewTasks();
  