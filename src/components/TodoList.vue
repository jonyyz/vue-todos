<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.id"
    >
      <TodoListItem
        :item="item"
        @delete="$emit('delete-item', item.id)"
        @complete="$emit('complete-item', item.id)"
      />
    </li>
  </ul>
</template>

<script>
import TodoListItem from "./TodoListItem";

export default {
  name: "TodoList",
  components: {
    TodoListItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>
