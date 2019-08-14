<template>
  <div class="wraper">{{userId}}
    <el-row>
      <el-col :span="5" v-for="(item, index) in list" :key="item._id" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px'}">
          <img :src="item.photoUrl" class="image">
          <div class="text">
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { api } from '@/api/api.js'
export default {
  data () {
    return {
      list: [],
      currentDate: new Date()
    }
  },
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
      this.list = data
    })
  }
}
</script>
<style lang="stylus">
.wraper{
  width 1180px
  margin 0 auto
}
  img{
    max-width 100%
  }
.text{
  padding 15px
}
</style>
