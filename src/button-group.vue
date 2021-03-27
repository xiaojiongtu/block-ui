<template>
   <div class="b-button-group">
       <slot></slot>
   </div>
</template>

<script>
    export default {
        name: "button-group",
        mounted() {
             for (let node of this.$el.children) {
                 let name=node.nodeName.toLowerCase()
                 if (name!=="button"){
                     console.warn(`b-button-group子元素应该是b-button，而现在是${name}`)
                 }
             }

        }
    }
</script>

<style scoped lang="scss">
  .b-button-group{
     display: inline-flex;
      vertical-align: middle;
      >.b-button{
          border-radius: 0;
          &:not(:first-child){
              margin-left: -1px;
          }
          &:first-child{
              border-top-left-radius: var(--button-border-radius);
              border-bottom-left-radius: var(--button-border-radius);
          }
          &:last-child{
              border-top-right-radius: var(--button-border-radius);
              border-bottom-right-radius: var(--button-border-radius);
          }
          &:hover{
              position: relative;
              z-index: 1;
          }
      }
  }
</style>
