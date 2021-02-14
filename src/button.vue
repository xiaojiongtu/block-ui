<template>
  <button class="b-button">按钮</button>
</template>

<script>
    export default {
        name: "button",
    }
</script>

<style scoped lang="scss">
    .b-button{
    font-size: var(--font-size);
    height: var(--button-height);
    display: inline-block;
    text-align: center;
    padding: 0 1em;
    border-radius: var(--button-border-radius);
    border: 1px solid var(--color);
    background: var(--button-bg);
        &:hover{
            border-color:var(--border-color-hover) ;
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
    }

</style>
