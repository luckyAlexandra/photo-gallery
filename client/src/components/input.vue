<template>
  <div class="input-wraper">
    <input type="text" @input="handleInput">
  </div>
</template>
<script>
export default {
  props: ['value'],
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
.input-wraper{
  display block
  input {
    display block
    width 100%
    height 32px
    padding 0 10px
    border 1px solid $gray_light
  }
}
</style>
