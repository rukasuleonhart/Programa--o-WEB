new Vue({
    el: '#app',
    data: {
      newTask: '',
      tasks: []
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({ name: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      toggleComplete(task) {
        task.completed = !task.completed;
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  });
  