<template>
  <div id="card">
    <h1>
      <slot name="header">
        ERROR: NO HEADER PROVIDED
      </slot>
    </h1>
    <p>
      <slot />
    </p>
  </div>
</template>

<style lang="scss" scoped>
#card {
  border: solid #333 2px;
  border-radius: 5px;
  background-color: #aaa;
  color: #333;
  margin: 5px;
  padding: 10px;
  min-height: 200px;
  width: 200px;
}
</style>
