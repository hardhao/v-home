<template>
  <div>
    <h1>博客首页</h1>
    <ul>
      <li :key="post.id" v-for="post in posts">
        <router-link :to="`/blog/${post.id}`">
        {{ post.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import {API_ULR} from '../constants/ApiConstants'
export default {
  name: 'BlogHome',
  created(){
    console.log('拿目录')
    const uri = `${API_URL}/posts/index.json`
    axios.get(uri).then(res =>{
      console.log('我的目录',res.data)
      this.posts = res.data
    })
  },
  computed:{
    posts(){
      return this.$store.state.blog.all
    }
  }

}
</script>

<style scoped>

</style>
