<template>
    <div>
        <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
            <sidebar />
            <main class="page-content bg-gray-50 dark:bg-slate-800">
                <topheader :customClick="handleClick" />
            
                <div class="container-fluid relative px-3">
                        <div class="layout-specing">
                            <div class="md:flex justify-between items-center">
                                <h5 class="text-lg font-semibold">Gallery</h5>
                                <ul class="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                                    <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><router-link to="/">Techwind</router-link></li>
                                    <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                                    <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Gallery</li>
                                </ul>
                            </div>

                            <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
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
                        <pagination />
                        </div>
                    </div> 
                <footers />
                <switcher />
            </main>
        </div>
        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import sidebar from '@/components/sidebar/sidebar-dark.vue';
import topheader from '@/components/top-header/top-header.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import pagination from '@/components/pagination.vue';
import VueEasyLightbox from 'vue-easy-lightbox';

import image from '../../assets/images/portfolio/1.jpg';
import image2 from '../../assets/images/portfolio/2.jpg';
import image3 from '../../assets/images/portfolio/3.jpg';
import image4 from '../../assets/images/portfolio/4.jpg';
import image5 from '../../assets/images/portfolio/5.jpg';
import image6 from '../../assets/images/portfolio/6.jpg';
import image7 from '../../assets/images/portfolio/7.jpg';
import image8 from '../../assets/images/portfolio/8.jpg';
import image20 from '../../assets/images/portfolio/20.jpg';
import image21 from '../../assets/images/portfolio/21.jpg';
import image9 from '../../assets/images/portfolio/9.jpg';
import image22 from '../../assets/images/portfolio/22.jpg';
import image23 from '../../assets/images/portfolio/23.jpg';

const toggle = ref(true);
const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);

const portfolios = ref([
  { image, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image2, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image3, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image4, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image5, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image6, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image7, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image8, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image20, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image21, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image9, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image22, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image23, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image4, name: 'Mockup Collection', desc: 'Abstract' },
  { image: image5, name: 'Mockup Collection', desc: 'Abstract' }
]);

const images = [
  image, image2, image3, image4, image5,
  image6, image7, image8, image20, image21,
  image9, image22, image23, image4, image5
];

const showLightbox = (index) => {
  imgsRef.value = images;
  indexRef.value = index;
  visibleRef.value = true;
};

const onHide = () => {
  visibleRef.value = false;
};

const handleClick = () => {
  toggle.value = !toggle.value;
};

const darkmode = () => {
  document.documentElement.classList.remove('dark');
};

const bodurtl = () => {
  document.documentElement.removeAttribute('dir', 'rtl');
};

darkmode();
bodurtl();
</script>
