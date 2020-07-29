<template>
  <div id="container">
    <h1>Welcome to the Sandbox</h1>
    <div id="card-container">
      <Card>
        <template v-slot:header>
          <div :style="{ color: '#d00' }">
            Hello
          </div>
        </template>
        I am some card content
      </Card>
      <Card>I am some card content</Card>
      <Card>I am some card content</Card>
      <Card>I am some card content</Card>
      <Card>I am some card content</Card>
      <Card>I am some card content</Card>
      <Card>I am some card content</Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Sandbox",
  components: { Card }
};
</script>

<style lang="scss" scoped>
#container {
  display: flex;
  flex-direction: column;
}

#card-container {
  display: inline-flex;
  flex-wrap: wrap;
}
</style>
