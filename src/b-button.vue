<template>
    <button class="b-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg class="icon" v-if="icon" >
            <use :xlink:href="`#icon-${icon}`"></use>
        </svg>
         <div class="content">
             <slot/>
         </div>
    </button>
</template>

<script>
    export default {
        name: "button",
        props: {
            icon:{
                type:String
            },
            iconPosition:{
                type:String,
                default:'left',
                validator: function (value) {
                    return !(value !== 'left' && value !== 'right');
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .b-button {
        font-size: var(--font-size);
        height: var(--button-height);
        text-align: center;
        padding: 0 1em;
        border-radius: var(--button-border-radius);
        border: 1px solid var(--color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }
        > .content{
            order: 2;
        }
        > .icon{
            order: 1;
            margin-right: 0.3em;
        }

        &.icon-right{
            > .content{
                order: 1;
            }
            > .icon{
                order: 2;
                margin-left: 0.3em;
                margin-right: 0;
            }

        }
    }

</style>
