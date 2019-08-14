<template>
  <plup :postUrl="url"/>
</template>
<script>
import plup from '@/components/plupload/index.vue'
export default {
  data () {
    return {
      url: 'http://127.0.0.1:7001/api/upload',
      params: {

      }
    }
  },
  components: {
    plup
  }
}
</script>
