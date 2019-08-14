<template>
  <div>
    <ul>
      <li v-for="file in files" :key="file.name">
        <img :src="file.url" alt="" />
      </li>
      <li>
        <span :id="browseBtnId" class="browse-btn">+</span>
      </li>
    </ul>
  </div>
</template>
<script>
import Plup from './index.js'
export default {
  props: {
    postUrl: {
      type: String
    },
    files: {
      type: Array,
      default: function () {
        return []
      }
    },
    params: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      browseBtnId: Plup.setUuid()
    }
  },
  mounted () {
    let plup = new Plup({ btn: this.browseBtnId }, this)
    plup.init()
  }
}
</script>
<style lang="stylus">
  li {
    border 1px dashed $gray
    width 120px
    height 120px
    line-height 120px
    img {
      width 100%
    }
  }
  .browse-btn {
    display block
    font-size 40px
  }
</style>
