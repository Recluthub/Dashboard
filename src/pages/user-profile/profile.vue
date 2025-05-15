<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />
           
            <div class="container-fluid relative px-3">
                    <div class="layout-specing">
                        <banner />

                        <div class="grid md:grid-cols-12 grid-cols-1">
                           <usertab />

                            <div class="xl:col-span-9 lg:col-span-8 md:col-span-8 mt-6">
                                <div class="grid grid-cols-1 gap-6">
                                    <div class="p-6 relative rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                        <h5 class="text-xl font-semibold">Cristina Murfy</h5>
                                        <p class="text-slate-400 mt-3">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
                                    </div>

                                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                                        <div class="p-6 relative rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 h-fit">
                                            <h5 class="text-xl font-semibold">Personal Details :</h5>
                                            <div class="mt-6">
                                                <div v-for="item in datas" :key="item" class="flex items-center mt-3 first:mt-0">
                                                    <i :data-feather="item.icon" class="fea icon-ex-md text-slate-400 me-3"></i>
                                                    <div class="flex-1">
                                                        <h6 class="text-indigo-600 dark:text-white font-medium mb-0">{{item.name}}</h6>
                                                        <router-link to="#" class="text-slate-400">{{item.desc}}</router-link>
                                                        <router-link to="#" class="text-slate-400">{{item.desc2}}</router-link>
                                                        <router-link to="#" class="text-slate-400">{{item.desc3}}</router-link>
                                                        <router-link to="#" class="text-slate-400">{{item.desc4}}</router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="p-6 relative rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 h-fit">
                                            <h5 class="text-xl font-semibold">Experience :</h5>
                                            
                                            <div v-for="item in datas2" :key="item" class="flex duration-500 hover:scale-105 shadow-sm dark:shadow-gray-700 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-4 rounded-md bg-white dark:bg-slate-900 mt-6">
                                                <img :src="item.image" class="h-16 w-16 p-4 bg-slate-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-700 rounded-md" alt="">
                                                <div class="flex-1 content ms-4">
                                                    <h4 class="text-lg text-medium">{{item.name}}</h4>
                                                    <p class="text-slate-400 mb-0">{{item.year}}</p>
                                                    <p class="text-slate-400 mb-0"><a href="" class="text-indigo-600">{{item.company}}</a> {{item.country}}</p>    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="p-6 relative rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                        <h5 class="text-xl font-semibold">Portfolio :</h5>
                    
                                        <div class="grid lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6">
                                            <div v-for="(item, index) in portfolios" :key="index" class="group relative block overflow-hidden rounded-md duration-500">
                                                <img :src="item.image" class="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 duration-500" alt="">
                                                <div class="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 duration-500 z-0 rounded-md"></div>
                    
                                                <div class="content duration-500">
                                                    <div class="icon absolute z-10 opacity-0 group-hover:opacity-100 top-6 end-6 duration-500">
                                                        <router-link to="#" @click="showLightbox(index)" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox cursor-pointer"><i class="uil uil-camera"></i></router-link>
                                                    </div>
                    
                                                    <div class="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 duration-500">
                                                        <router-link to="" class="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{{item.name}}</router-link>
                                                        <p class="text-slate-400 mb-0">{{item.desc}}</p>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <footers />
            <switcher />
        </main>
        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import sidebar from '@/components/sidebar/sidebar-dark.vue';
import topheader from '@/components/top-header/top-header.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import usertab from '@/components/user-profile/user-tab.vue';
import banner from '@/components/user-profile/user-banner.vue';
import VueEasyLightbox from 'vue-easy-lightbox';

// Image Imports
import image1 from '@/assets/images/portfolio/1.jpg';
import image2 from '@/assets/images/portfolio/2.jpg';
import image3 from '@/assets/images/portfolio/3.jpg';
import image4 from '@/assets/images/portfolio/4.jpg';
import image5 from '@/assets/images/portfolio/5.jpg';
import image6 from '@/assets/images/portfolio/6.jpg';

import company1 from '@/assets/images/client/circle-logo.png'
import company2 from '@/assets/images/client/facebook-logo-2019.png'
import company3 from '@/assets/images/client/spotify.png'

// Reactive Variables
const toggle = ref(true);
const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);

const datas = [
  { icon: 'mail', name: 'Email :', desc: 'cristina@hotmail.com' },
  { icon: 'bookmark', name: 'Skills :', desc: 'html, css, js, mysql' },
  { icon: 'italic', name: 'Language :', desc: 'English, Japanese, Chinese' },
  { icon: 'globe', name: 'Website :', desc: 'www.cristina.com' },
  { icon: 'gift', name: 'Birthday :', desc: '2nd March, 1996' },
  { icon: 'map-pin', name: 'Location :', desc: 'Beijing, China' },
  { icon: 'phone', name: 'Cell No :', desc: '(+12) 1254-56-4896' },
];

const datas2 = [
  { image: company1, name: 'Senior Web Developer', year: '3 Years Experience', company: 'CircleCi', country: '@London, UK' },
  { image: company2, name: 'Web Designer', year: '2 Years Experience', company: 'Facebook', country: '@Washington D.C, USA' },
  { image: company3, name: 'UI Designer', year: '2 Years Experience', company: 'Spotify', country: '@Perth, Australia' },
];

const portfolios = [
  { image: image1, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image2, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image3, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image4, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image5, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image6, name: 'Mockup Collection', desc: 'Abstract' },
];

const images = [image1, image2, image3, image4, image5, image6];

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

const showLightbox = (index) => {
  imgsRef.value = images;
  indexRef.value = index;
  visibleRef.value = true;
};

const onHide = () => {
  visibleRef.value = false;
};

// Lifecycle Hook
onMounted(() => {
  darkmode();
  bodurtl();
});
</script>