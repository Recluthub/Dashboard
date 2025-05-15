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
                                <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                    <router-link to="/">Techwind</router-link>
                                </li>
                                <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                                    <i class="uil uil-angle-right-b"></i>
                                </li>
                                <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Gallery</li>
                            </ul>
                        </div>

                        <div class="grid grid-cols-1 items-center mt-6 gap-6">
                            <div class="filters-group-wrap">
                                <div class="filters-group">
                                    <ul class="list-none container-filter-border-bottom filter-options space-x-3">
                                        <li class="inline-block font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" :class="selectCategory == null ? 'active' : ''" @click="matchCategory(null)">All
                                        </li>
                                        <li class="inline-block font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" :class="selectCategory == 'branding' ? 'active' : ''" @click="matchCategory('branding')">Branding</li>
                                        <li class="inline-block font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" :class="selectCategory == 'designing' ? 'active' : ''"  @click="matchCategory('designing')">Designing</li>
                                        <li class="inline-block font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" :class="selectCategory == 'photography' ? 'active' : ''" @click="matchCategory('photography')">Photography</li>
                                        <li class="inline-block font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" :class="selectCategory == 'development' ? 'active' : ''"  @click="matchCategory('development')">Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="grid" class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-6 gap-6 mx-3">
                            <div v-for="(item, index) in filterData" :key="index" class="picture-item" data-groups='["photography"]'>
                                <div class="group relative block overflow-hidden rounded-md duration-500">
                                    <router-link to="#" @click="showLightbox(index)" class="lightbox duration-500 group-hover:scale-105 cursor-pointer" title="">
                                        <img :src="item.image" class="" alt="work-image">
                                    </router-link>
                                    <div class="absolute -bottom-52 group-hover:bottom-2 start-2 end-2 duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow-sm dark:shadow-gray-700">
                                        <router-link to="#" class="hover:text-indigo-600 text-lg duration-500 font-medium">{{item.name }}</router-link>
                                        <h6 class="text-slate-400">{{ item.desc }}</h6>
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
import { ref, onMounted } from 'vue';
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

// Reactive variables
const toggle = ref(true);
const selectCategory = ref(null);
const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);

const portfolios = [
  { image: image, name: 'Iphone mockup', desc: 'Branding', category: 'branding' },
  { image: image2, name: 'Iphone mockup', desc: 'Branding', category: 'designing' },
  { image: image3, name: 'Iphone mockup', desc: 'Branding', category: 'photography' },
  { image: image4, name: 'Iphone mockup', desc: 'Branding', category: 'development' },
  { image: image5, name: 'Iphone mockup', desc: 'Branding', category: 'branding' },
  { image: image6, name: 'Iphone mockup', desc: 'Branding', category: 'branding' },
  { image: image7, name: 'Iphone mockup', desc: 'Branding', category: 'designing' },
  { image: image8, name: 'Iphone mockup', desc: 'Branding', category: 'development' },
  { image: image20, name: 'Iphone mockup', desc: 'Branding', category: 'photography' },
  { image: image21, name: 'Iphone mockup', desc: 'Branding', category: 'photography' },
  { image: image9, name: 'Iphone mockup', desc: 'Branding', category: 'designing' },
  { image: image22, name: 'Iphone mockup', desc: 'Branding', category: 'photography' },
  { image: image23, name: 'Iphone mockup', desc: 'Branding', category: 'development' },
  { image: image4, name: 'Iphone mockup', desc: 'Branding', category: 'branding' },
  { image: image5, name: 'Iphone mockup', desc: 'Branding', category: 'branding' },
];

// Filtered data
const filterData = ref([...portfolios]);

// Functions
const showLightbox = (index) => {
  imgsRef.value = filterData.value.map((item) => item.image);
  indexRef.value = index;
  visibleRef.value = true;
};

const onHide = () => {
  visibleRef.value = false;
};

const matchCategory = (category) => {
  selectCategory.value = category;
  filterData.value = category
    ? portfolios.filter((item) => item.category === category)
    : [...portfolios];
};

const handleClick = () => {
  toggle.value = !toggle.value;
};

const darkmode = () => {
  document.documentElement.classList.remove('dark');
};

const bodurtl = () => {
  document.documentElement.removeAttribute("dir", "rtl");
};

onMounted(() => {
  darkmode();
  bodurtl();
});
</script>