<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />
           
                <div class="container-fluid relative px-3">
                    <div class="layout-specing">
                        <div class="md:flex justify-between items-center">
                            <h5 class="text-lg font-semibold">Team Members</h5>

                            <ul class="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                                <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><router-link to="/">Techwind</router-link></li>
                                <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                                <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Team</li>
                            </ul>
                        </div>

                        <div class="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
                          
                            <div v-for="item in datas" :key="item" class="group text-center">
                                <div class="relative inline-block mx-auto max-h-[208px] max-w-[208px] rounded-full overflow-hidden shadow-sm dark:shadow-gray-700">
                                    <img :src="item.image" class="" alt="">
                                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black max-h-[208px] max-w-[208px] rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>
    
                                    <ul class="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                        <li class="inline"><router-link to="" class="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="facebook" class="h-4 w-4"></i></router-link></li>
                                        <li class="inline"><router-link to="" class="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white mx-1"><i data-feather="instagram" class="h-4 w-4"></i></router-link></li>
                                        <li class="inline"><router-link to="" class="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="linkedin" class="h-4 w-4"></i></router-link></li>
                                    </ul>
                                </div>
    
                                <div class="content mt-3">
                                    <router-link to="" class="text-lg font-semibold hover:text-indigo-600 duration-500">{{item.name}}</router-link>
                                    <p class="text-slate-400">{{item.position}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  
            <footers />
            <switcher />
        </main>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import sidebar from '@/components/sidebar/sidebar-dark.vue';
import topheader from '@/components/top-header/top-header.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';

import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'
import client7 from '@/assets/images/client/07.jpg'
import client8 from '@/assets/images/client/08.jpg'
import client9 from '@/assets/images/client/09.jpg'
import client10 from '@/assets/images/client/10.jpg'
import client11 from '@/assets/images/client/11.jpg'
import client12 from '@/assets/images/client/12.jpg'
// Reactive state
const toggle = ref(true);
const datas = ref([
  {
    image: client1,
    name: 'Jack John',
    position: 'Designer'
  },
  {
    image: client2,
    name: 'Krista John',
    position: 'Designer'
  },
  {
    image: client3,
    name: 'Roger Jackson',
    position: 'Designer'
  },
  {
    image: client4,
    name: 'Johnny English',
    position: 'Designer'
  },
  {
    image: client5,
    name: 'Jack John',
    position: 'Designer'
  },
  {
    image: client6,
    name: 'Krista John',
    position: 'Designer'
  },
  {
    image: client7,
    name: 'Roger Jackson',
    position: 'Designer'
  },
  {
    image: client8,
    name: 'Johnny English',
    position: 'Designer'
  },
  {
    image: client9,
    name: 'Jack John',
    position: 'Designer'
  },
  {
    image: client10,
    name: 'Krista John',
    position: 'Designer'
  },
  {
    image: client11,
    name: 'Roger Jackson',
    position: 'Designer'
  },
  {
    image: client12,
    name: 'Johnny English',
    position: 'Designer'
  }
]);

// Methods
const handleClick = () => {
  toggle.value = !toggle.value;
};

const darkmode = () => {
  document.documentElement.classList.remove('dark');
};

const bodurtl = () => {
  document.documentElement.removeAttribute('dir', 'rtl');
};

// Lifecycle Hook
onMounted(() => {
  darkmode();
  bodurtl();
});
</script>
<style lang="scss" scoped></style>