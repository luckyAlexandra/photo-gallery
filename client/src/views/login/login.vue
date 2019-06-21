<template>
  <div>
    <div class="login">
      <p class="form-item">
        <label>用户名：</label>
        <base-input v-model="name" type="text" />
      </p>
      <p class="form-item">
        <label>密码：</label>
        <base-input v-model="password" type="password" />
      </p>
      <span class="btn" @click="login">登录</span>
    </div>
  </div>
</template>
<script>
import router from '@/router.js'
import baseInput from '@/components/input.vue'
import { api } from '@/api/api.js'

export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login () {
      api.login(
        {
          name: this.name,
          password: this.password
        }
      ).then(res => {
        let data = res.data
        if (data.success) {
          this.$store.dispatch('setUserId', data.data.userId)
          router.push('app')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  components: {
    baseInput
  }
}
</script>

<style lang="stylus" scoped>
  .login {
    width 400px
    height 300px
    padding 40px
    border 1px solid $gray_light
    margin 0 auto
    .form-item {
      margin-bottom 16px
    }
    label{
      display block
      text-align left
    }
    .btn {
      display block
      width 100%
      height 40px
      line-height 40px
      margin 0 auto
      margin-top 40px
      color white
      background-color $green
      &:hover {
        background-color $green_dark
      }
    }
  }
</style>
