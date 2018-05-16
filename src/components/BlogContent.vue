<template>
  <div>
    <div v-html="htmlPost"></div>
  </div>
</template>

<script>
import axios from 'axios'
import { API_URL } from "../constants/ApiConstants.js"
import md from '../utils/markdownUtils'
export default {
  name: 'BlogContent',
  data:() =>({
      post:''
  }),
  created() {
    console.log('BlogContent created')
    const id = this.$route.params.id
    const uri = `${API_URL}/posts/${id}.md`
    axios.get(uri).then(res => {
      console.log('my Post', res.data)
      this.post=res.data
    })
  },
  computed:{
      htmlPost(){
          return md.render(this.post)
      }
  }
}
</script>