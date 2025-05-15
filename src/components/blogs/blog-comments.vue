<template>
    <div>
        <h5 class="text-lg font-semibold">Comments:</h5>
        <div v-for="item in report" :key="item" class="mt-6">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <img :src="item.image" class="size-11 rounded-full shadow-sm" alt="">
                    <div class="ms-3 flex-1">
                        <router-link to="" class="text-lg font-semibold hover:text-indigo-600 duration-500">{{ item.name }}</router-link>
                        <p class="text-sm text-slate-400">{{ item.time }}</p>
                    </div>
                </div>
                <router-link to="" class="text-slate-400 hover:text-indigo-600 duration-500 ms-5"><i class="mdi mdi-reply"></i>Reply</router-link>
            </div>
            <div class="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow-sm dark:shadow-gray-800 mt-6">
                <p class="text-slate-400 italic">{{ item.desc }}</p>
            </div>
        </div>
    </div>
                               
</template>

<script setup>
import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'

const report =[
    {
        image: client1,
        name: 'Calvin Carlo',
        time: '6th May 2022 at 01:25 pm',
        desc: '" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
        image: client2,
        name: 'Calvin Carlo',
        time: '6th May 2022 at 01:25 pm',
        desc: '" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
        image: client3,
        name: 'Calvin Carlo',
        time: '6th May 2022 at 01:25 pm',
        desc: '" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
        image: client4,
        name: 'Calvin Carlo',
        time: '6th May 2022 at 01:25 pm',
        desc: '" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
]
</script>