<template>
    <div class="xl:col-span-3 lg:col-span-5 md:col-span-5">
        <div class="rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
            <div class="text-center p-6 border-b border-gray-100 dark:border-gray-800">
                <img :src="client5"
                    class="h-20 w-20 rounded-full shadow-sm dark:shadow-gray-700 mx-auto" alt="">
                <h5 class="mt-3 font-semibold text-xl mb-0">Cristina Julia</h5>
                <p class="text-slate-400 mb-0">UI / UX Designer</p>
            </div>
            <div class="p-2 max-h-[500px]" data-simplebar>
                <router-link v-for="item in data" :key="item" to="#" class="flex items-center p-2 rounded-md relative dark:bg-slate-800 mt-1.5 first:mt-0" :class="item.class3">
                    <div class="relative">
                        <img :src="item.image" class="h-11 w-11 rounded-full shadow-sm dark:shadow-gray-700" alt=""/>
                        <span v-if="item.class2 === 'bg-green-600'" class="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 ">
                            <span class="absolute h-2 w-2 bg-green-600 top-0 end-0 rounded-full animate-ping"></span>
                        </span>
                        <span v-if="item.class2 === 'bg-red-600'" class="absolute top-0.5 start-0.5 flex items-center justify-center bg-red-600 text-white text-[10px] font-bold rounded-full size-2"></span>
                    </div>
                    <div class="overflow-hidden flex-1 ms-2">
                        <div class="flex justify-between">
                            <h6 class="font-semibold">{{item.name}}</h6>
                            <small class="text-slate-400">{{item.time}}</small>
                        </div>
                        <div class="flex justify-between">
                            <div :class="item.class">{{item.message}}</div>
                            <span v-if="item.message2 === '2'" class="flex items-center justify-center bg-red-600/20 text-red-600 text-[10px] font-bold rounded-full w-5 max-h-5">{{item.message2}}</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import client9 from '@/assets/images/client/09.jpg'
import client1 from '@/assets/images/client/01.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client11 from '@/assets/images/client/11.jpg'
import client12 from '@/assets/images/client/12.jpg'
import client7 from '@/assets/images/client/07.jpg'
import client13 from '@/assets/images/client/13.jpg'
import client6 from '@/assets/images/client/06.jpg'
import client10 from '@/assets/images/client/10.jpg'
import client8 from '@/assets/images/client/08.jpg'

const data = [
    {
        image: client9,
        name: 'Christopher',
        time: '10 Min',
        message: 'Hello',
        class: 'text-slate-400 truncate',
        message2: '',
        class2: 'bg-green-600',
        class3: 'bg-gray-50'
    },
    {
        image: client1,
        name: 'Dr. Cristino',
        time: '20 Min',
        message: 'Hi, How are you?',
        class: 'text-slate-900 dark:text-white font-medium truncate',
        message2: '2',
        class2: 'bg-red-600',
        class3: 'hover:bg-gray-50'
    },
    {
        image:client3,
        name: 'Faye',
        time: '30 Min',
        message: 'Heyy',
        class: 'text-slate-400 truncate',
        message2: '',
        class2: 'bg-red-600',
        class3: 'hover:bg-gray-50'
    },
    {
        image: client4,
        name: 'Ronald',
        time: '2 Hours',
        message: 'Hey, How are you sir?',
        class: 'text-slate-400 truncate',
        message2: '',
        class2: 'bg-red-600',
        class3: 'hover:bg-gray-50'
    },
    {
        image: client11,
        name: 'Melissa',
        time: '3 Hours',
        message: 'Good Afternoon',
        class: 'text-slate-400 truncate',
        message2: '',
        class2: 'bg-green-600',
        class3: 'hover:bg-gray-50'
    },
    {
        image: client12,
        name: 'Elsie',
        time: '10 Hours',
        message: 'Good Morning sir, how can i help you?',
        class: 'text-slate-400 truncate',
        message2: '',
        class2: 'bg-green-600',
        class3: 'hover:bg-gray-50'
    },
    {
        image: client7,
        name: 'Jerry',
        time: '16 Hours',
        message: 'Please give me appointment',
        class: 'text-slate-400 truncate',
        message2: '',
        class2: 'bg-green-600',
        class3: 'hover:bg-gray-50'
    },
    {
        image:client13,
        name: 'Louis',
        time: '1 Days',
        message: 'Hii?',
        class: 'text-slate-400 truncate',
        message2: '',
        class2: 'bg-red-600',
        class3: 'hover:bg-gray-50'
    },
    {
        image: client6,
        name: 'Randall',
        time: '2 Days',
        message: 'Hello sir?',
        class: 'text-slate-400 truncate',
        message2: '',
        class2: 'bg-red-600',
        class3: 'hover:bg-gray-50'
    },
    {
        image: client10,
        name: 'Mary',
        time: '3 Days',
        message: 'How are you sir?',
        class: 'text-slate-400 truncate',
        message2: '',
        class2: 'bg-red-600'
    },
    {
        image: client8,
        name: 'Lester',
        time: '4 Days',
        message: 'Hello Please give me answer.',
        class: 'text-slate-400 truncate',
        message2: '',
        class2: 'bg-green-600'
    },
]

</script>