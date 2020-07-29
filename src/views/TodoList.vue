<template>
  <div>
    <Header />
    <error-message
      v-if="errorMessage"
      :message="errorMessage"
    />
    <add-todo-list-item @add-todo-list-item="addTodoListItem" />
    <todo-list
      :items="items"
      @delete-item="deleteTodoListItem"
      @complete-item="completeTodoListItem"
    />
  </div>
</template>

<script>
import axios from "axios";

import Header from "@/components/layout/Header";
import ErrorMessage from "@/components/ErrorMessage";
import TodoList from "@/components/TodoList";
import AddTodoListItem from "@/components/AddTodoListItem";

export default {
  name: "App",
  components: { ErrorMessage, Header, TodoList, AddTodoListItem },
  data: () => ({
    errorMessage: "",
    items: []
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

<style lang="scss" scoped></style>
