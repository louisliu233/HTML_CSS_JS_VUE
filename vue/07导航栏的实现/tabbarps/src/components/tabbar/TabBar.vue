<template>
  <div id="tar-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style>
#tar-bar {
   display: flex;
  background-color: #f6f6f6;
  
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -3px 1px rgba(100, 100, 100, .1)
}
</style>