<template>
  <div class="error">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "ErrorMessage",
  props: {
    message: {
      type: String,
      default: () => ""
    }
  }
};
</script>

<style lang="scss" scoped>
$error-border: solid 2px #b00;

.error {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 5px;
  border-top: $error-border;
  border-bottom: $error-border;
  color: #fff;
  background-color: #f33;
  font-size: large;
}
</style>
