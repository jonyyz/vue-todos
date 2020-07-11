<template>
  <form @submit="addTodoListItem">
    <input
      v-model="title"
      type="text"
      name="title"
      placeholder="Enter a title for the Todo List Item..."
    >
    <button class="btn">
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: "AddTodoListItem",
  data: () => ({
    title: ""
  }),
  methods: {
    addTodoListItem(e) {
      e.preventDefault();
      this.$emit("add-todo-list-item", { title: this.title });
      this.title = "";
    }
  }
};
</script>

<style lang="scss" module>
form {
  display: flex;
  align-items: center;
  height: 32px;

  input[type="text"] {
    flex-grow: 1;
    border: none;
    padding: 5px;
    font-size: large;
    border-bottom: solid 1px #ccc;
  }

  button {
    height: 100%;
  }
}
</style>
