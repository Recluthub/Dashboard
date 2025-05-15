<template>
    <div class="p-6 rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
        <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center">Author</h5>
            <div class="text-center mt-8">
                <img :src="client5" class="size-24 mx-auto rounded-full shadow-sm mb-4" alt="">

                <router-link to="" class="text-lg font-semibold hover:text-indigo-600 duration-500">Cristina Romsey</router-link>
                <p class="text-slate-400">Content Writer</p>
            </div>

            <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Recent post</h5>
            <div v-for="reply in replys" :key="reply.id" @click="viewBlogDetail(reply.id)" class="flex items-center mt-8">
                <img :src="reply.image" class="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="">

                <div class="ms-3">
                    <router-link to="#" class="font-semibold hover:text-indigo-600">{{reply.name}}</router-link>
                    <p class="text-sm text-slate-400">{{reply.time}}</p>
                </div>
            </div>
            <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
            <ul class="list-none text-center mt-8">
                <li v-for="item in socials" :key="item" class="inline me-1"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i :data-feather="item" class="size-4"></i></router-link></li>
            </ul>

            <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
            <ul class="list-none text-center mt-8">
                <li v-for="item in tages" :key="item" class="inline-block m-2"><router-link to="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 duration-500">{{item}}</router-link></li>
            </ul>
    </div>
</template>

<script setup>
import client5 from '@/assets/images/client/05.jpg'
import blog1 from '@/assets/images/blog/06.jpg'
import blog2 from '@/assets/images/blog/07.jpg'
import blog3 from '@/assets/images/blog/08.jpg'

const socials = ['facebook', 'instagram', 'twitter', 'linkedin', 'github', 'youtube', 'gitlab']
const tages = ['Business', 'Finance', 'Marketing', 'Fashion', 'Bride', 'Lifestyle', 'Travel', 'Beauty', 'Video', 'Audio']

const  replys = [
    {
        id: 9,
        image: blog1,
        name: 'Consultant Business',
        time : '1st May 2022'
    },
    {
        id: 10,
        image: blog2,
        name: 'Grow Your Business',
        time : '1st May 2022'
    },
    {
        id: 11,
        image: blog3,
        name: 'Look On The Glorious Balance',
        time : '1st May 2022'
    },
]
    
</script>