<template>
  <div class="wrapper">
    <input :value="value" :class="{error}" :disabled="disabled" :readonly="readonly"
           @change="$emit('change',$event)"
           @blur="$emit('blur',$event)"
           @input="$emit('input',$event)"
           @focus="$emit('focus',$event)"
           type="text">
    <template v-if="error">
      <icon icon="Shapex" class="icon-error"></icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";

export default {
  name: "input",
  components: {Icon},
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
}
</script>

<style scoped lang="scss">
$border-color: #999;
$height: 32px;
$hover-color: #666;
.wrapper {
  display: flex;
  align-items: center;

  > * {
    margin-right: 0.5em;

    &:last-child {
      margin-right: 0;
    }
  }

  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;

    &:hover {
      border-color: $hover-color;
    }

    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, .5);
    }

    &[disabled] {
      border-color: #999;
      color: #999;
      cursor: not-allowed;
    }

    &[readonly] {
      border-color: #999;
      color: #999;
    }
  }

  .error {
    > input {
      border-color: red;
    }
  }

  .icon-error {
    fill: red;
    font-size: 18px;
  }

  .error-message {
    color: red;
    font-size: 14px;
  }
}
</style>
