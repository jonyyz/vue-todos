<template>
  <div :class="['todo-item', { 'is-complete': item.completed }]">
    <input
      type="checkbox"
      :checked="item.completed"
      @change="$emit('complete', item.id)"
    >
    {{ item.title }}
    <button @click="$emit('delete', item.id)">
      <font-awesome-icon icon="trash" />
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding: 1em;
  background-color: #f4f4f4;
  border-bottom: solid 1px #ccc;
  font-weight: bold;

  input {
    margin-right: 10px;
  }

  button {
    margin-left: auto;
    cursor: pointer;
    border: none;
    padding: 0;
  }
}

.is-complete {
  text-decoration: line-through;
}
</style>
