<template>
 <div class="col" :class="codeClass" :style="codeStyle">
      <slot></slot>
 </div>
</template>

<script>

let validator=(value)=>{
  let keys=Object.keys(value)
  let valid=true
  keys.forEach(key=>{
    if (!['span','offset'].includes(key)){
      valid=false
    }
  })
  return valid
}
export default {
  name: "col",
  props:{
    span:{
     type: [String,Number]
    },
    offset: {
      type: [String, Number]
    },
    phone:{
      type:Object,
      validator

    },
    ipad:{
      type:Object,
      validator

    },
    narrowPc:{
      type:Object,
      validator

    },
    pc:{
      type:Object,
      validator

    },
    widePc:{
      type:Object,
      validator

    },
  },
  data(){
    return{
      gutter:''
    }
  },
  computed:{
     codeClass(){
       let phoneClass=[]
       if(this.phone){
           phoneClass=[this.phone&&`col-phone-${this.phone.span}`]
       }
       return [
         this.span &&`col-${this.span}` ,
         this.offset && `offset-${this.offset}`,
         ...phoneClass,
         ...[this.ipad&&`col-ipad-${this.ipad.span}`],
         ...[this.narrowPc&&`col-narrowPc-${this.narrowPc.span}`],
         ...[this.pc&&`col-pc-${this.pc.span}`],
         ...[this.widePc&&`col-widePc-${this.widePc.span}`],
       ]
     },
    codeStyle(){
       return {
         paddingLeft:this.gutter/2+'px',
         paddingRight:this.gutter/2+'px'
       }
    }
  },
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
  @media (max-width: 576px) {
    $class-prefix:col-phone-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        width: ($n /24 ) *100%;
      }
    }
    $class-prefix:offset-phone-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        margin-left: ($n /24 ) *100%;
      }
    }
  }
  @media (min-width: 577px) and(max-width: 768px) {
    $class-prefix:col-ipad-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        width: ($n /24 ) *100%;
      }
    }
    $class-prefix:offset-ipad-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        margin-left: ($n /24 ) *100%;
      }
    }
  }
  @media (min-width: 769px) and(max-width: 992px) {
    $class-prefix:col-narrow-pc-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        width: ($n /24 ) *100%;
      }
    }
    $class-prefix:offset-narrow-pc-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        margin-left: ($n /24 ) *100%;
      }
    }
  }
  @media (min-width: 993px) and(max-width: 1200px) {
    $class-prefix:col-pc-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        width: ($n /24 ) *100%;
      }
    }
    $class-prefix:offset-pc-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        margin-left: ($n /24 ) *100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix:col-wide-pc-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        width: ($n /24 ) *100%;
      }
    }
    $class-prefix:offset-wide-pc-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        margin-left: ($n /24 ) *100%;
      }
    }
  }
}
</style>
