<template>
 <div class="col" :class="[`col-${span}` ,offset && `offset-${offset}`]" :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
    <div style="border: 1px solid;">
      <slot></slot>
    </div>

 </div>
</template>

<script>
export default {
  name: "col",
  props:{
    span:{
     type: [String,Number]
    },
    offset: {
      type: [String, Number]
    }
  },
  data(){
    return{
      gutter:''
    }
  }
}
</script>

<style scoped lang="scss">
.col{
  height: 100px;
  width: 50%;
  background: antiquewhite;
  border: solid 1px red;

   $class-prefix:col-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
       width: ($n /24 ) *100%;
    }
   }
  $class-prefix:offset-;
  @for $n from 1 through 24{
    &.#{$class-prefix}#{$n}{
      margin-left: ($n /24 ) *100%;
    }
  }
}
</style>
