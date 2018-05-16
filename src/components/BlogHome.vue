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
export default {
  name: 'BlogHome',
  computed:{
    posts(){
      return this.$store.state.blog.all
    }
  }

}
</script>

<style scoped>

</style>
