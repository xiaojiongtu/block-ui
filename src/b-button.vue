<template>
    <button class="b-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
         <b-icon v-if="icon && !loading" class="icon"  :icon="icon"></b-icon>
         <b-icon icon="loading" class="loading icon" v-if="loading"></b-icon>
         <div class="content">
             <slot/>
         </div>
    </button>
</template>

<script>
   import bIcon from './icon'
    export default {
        name: "button",
        components:{
          bIcon
        },
        props: {
            icon:{
                type:String
            },
            loading:{
                type:Boolean,
                default: false
            },
            iconPosition:{
                type:String,
                default:'left',
                validator: function (value) {
                    return !(value !== 'left' && value !== 'right');
                }
            }
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
     @keyframes spin {
         0%{
             transform: rotate(0deg);
         }
         100%{
            transform:rotate(360deg);
         }
     }
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
        .loading{
            animation: spin 1.5s infinite linear ;
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
