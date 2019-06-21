<template>
  <div>{{userId}}</div>
</template>
<script>
import { api } from '@/api/api.js'
export default {
  computed: {
    userId () {
      return this.$store.state.userId
    }
  },
  created () {
    // 这里用到computed属性，需要等到created，完成数据观测
    api.getPhotos({
      userId: this.userId
    }).then(res => {
      let data = res.data
      console.log(data)
    })
  }
}
</script>
