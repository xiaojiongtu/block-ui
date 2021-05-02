<template>
    <svg class="b-icon" >
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "icon",
        props:['icon']
    }
</script>

<style scoped>
  .b-icon{
      width: 1em;
      height: 1em;
  }
</style>
