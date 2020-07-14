<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/todo-list">
        TODO List
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
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

#nav {
  display: flex;
  align-items: center;
  height: 42px;
  background-color: #35495e;
  a {
    padding: 10px;
    font-weight: bold;
    text-decoration: none;
    color: #ccc;
    background-color: #35495e;

    &.router-link-exact-active,
    &:hover {
      color: #eee;
      background-color: #40b883;
    }
  }
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
