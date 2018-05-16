import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Ga from '@/components/Ga'
import Resume from '@/components/Resume'
import Note from '@/components/Note'
import BlogHome from '@/components/BlogHome'
import Blog from '@/components/Blog'

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/ga',
            component: Ga
        },
        {
            path: '/resume',
            component: Resume
        },
        {
            path: '/note',
            component: Note
        },
        {
            path: '/blog',
            component: BlogHome
        },
        {
            path: '/blog/:id',
            component: Blog
        }
    ]
})

