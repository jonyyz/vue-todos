<template>
  <div id="app">
    <Header />
    <ErrorMessage
      v-if="errorMessage"
      :message="errorMessage"
    />
    <AddTodoListItem @add-todo-list-item="addTodoListItem" />
    <TodoList
      :items="items"
      @delete-item="deleteTodoListItem"
      @complete-item="completeTodoListItem"
    />
  </div>
</template>

<script>
// import { range } from "lodash";
import axios from "axios";

import Header from "./components/layout/Header";
import ErrorMessage from "./components/ErrorMessage";
import TodoList from "./components/TodoList";
import AddTodoListItem from "./components/AddTodoListItem";

export default {
  name: "App",
  components: { ErrorMessage, Header, TodoList, AddTodoListItem },
  data: () => ({
    errorMessage: "",
    items: []
    // items: range(1, 4).map(id => ({
    //   id,
    //   title: `Item ${id}`,
    //   completed: id % 2 === 0
    // }))
  }),
  async created() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      this.items = data;
      this.errorMessage = "";
    } catch ({ message }) {
      this.errorMessage = `Error gettings todos: ${message}`;
    }
  },
  methods: {
    deleteTodoListItem(id) {
      this.items = this.items.filter(item => item.id !== id);
    },
    completeTodoListItem(id) {
      this.items = this.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      });
    },
    addTodoListItem(newItem) {
      this.items = [
        ...this.items,
        {
          ...newItem,
          id: this.items.reduce((id, item) => Math.max(item.id, id), 0) + 1
        }
      ];
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.btn {
  border: none;
  border-radius: 0;
  background-color: #555;
  color: #fff;
  padding: 0 20px;
  cursor: pointer;
  font-size: large;
  vertical-align: middle;
}

.btn:hover {
  background-color: #666;
}
</style>
