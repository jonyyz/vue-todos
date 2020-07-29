<template>
  <div id="home">
    <img
      alt="Vue logo"
      src="@/assets/logo.png"
      valign="top"
    >
    <h1>Welcome to Jon's Vue App!</h1>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  flex-direction: row;
  align-items: center;

  > * {
    margin-right: 10px;
  }
}
</style>
