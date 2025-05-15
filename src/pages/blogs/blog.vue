<template>
    <div>
        <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
            <sidebar />
            <main class="page-content bg-gray-50 dark:bg-slate-800">
                <topheader :customClick="handleClick" />
                <div class="container-fluid relative px-3">
                    <div class="layout-specing">
                        <div class="md:flex justify-between items-center">
                            <div>
                                <h5 class="text-lg font-semibold">Blogs / News</h5>

                                <ul class="tracking-[0.5px] inline-block mt-2">
                                    <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                        <router-link to="/">Techwind</router-link></li>
                                    <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                                        <i class="uil uil-angle-right-b"></i></li>
                                    <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Blogs</li>
                                </ul>
                            </div>

                            <div>
                                <router-link @click="show = !show" to="#" class="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" ><i data-feather="plus" class="h-4 w-4"></i></router-link>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6">
                            <div v-for="item in datas" :key="item.id"
                                class="blog relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden">
                                <img :src="item.image" alt="">

                                <div class="content p-6">
                                    <router-link :to="`/blog-detail/${item.id}`"  class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{{item.title }}</router-link>
                                    <p class="text-slate-400 mt-3">{{ item.desc }}</p>

                                    <div class="mt-4">
                                        <router-link :to="`/blog-detail/${item.id}`" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-indigo-600 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white duration-500"> <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 transition-all duration-500 bg-indigo-600 dark:bg-white"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
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

        <div v-if="show" class="fixed w-full h-screen flex items-center justify-center inset-0 bg-slate-900/75">
            <div class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white inline-block">
                <div class="relative h-auto md:w-[600px] w-300px">
                    <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                        <h3 class="font-bold text-lg">Add blog or News</h3>
                        <form >
                            <button @click="show = !show" class="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost"><i data-feather="x" class="size-4"></i></button>
                        </form>
                    </div>
                    <div class="p-4">
                        <div>
                            <p class="font-semibold mb-4">Upload your blog image here, Please click "Upload Image" Button.</p>
                            <div v-if="imageSrc === null ? 'hidden' : ''" class="preview-box flex justify-center rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60"> Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                            <div v-else class="preview-box flex justify-center rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                                <img class="preview-content" :src="imageSrc"></div>
                            <input type="file" id="input-file" name="input-file" accept="image/*" @change="loadFile" hidden>
                            <label class="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6 cursor-pointer" for="input-file">Upload Image</label>
                        </div>

                        <form class="mt-4">
                            <div class="grid grid-cols-12 gap-3">
                                <div class="col-span-12">
                                    <label class="font-semibold">Blog Title <span class="text-red-600">*</span></label>
                                    <input name="name" id="name" type="text" class="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Title :">
                                </div>

                                <div class="col-span-12">
                                    <label class="font-semibold"> Description : </label>
                                    <textarea name="comments" id="comments" class="form-input w-full py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Description :"></textarea>
                                </div>

                                <div class="col-span-12">
                                    <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Create Blog</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import sidebar from '@/components/sidebar/sidebar-dark.vue';
import topheader from '@/components/top-header/top-header.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import pagination from '@/components/pagination.vue';

import blog1 from '@/assets/images/blog/01.jpg'
import blog2 from '@/assets/images/blog/02.jpg'
import blog3 from '@/assets/images/blog/03.jpg'
import blog4 from '@/assets/images/blog/04.jpg'
import blog5 from '@/assets/images/blog/05.jpg'
import blog6 from '@/assets/images/blog/06.jpg'
import blog7 from '@/assets/images/blog/07.jpg'
import blog8 from '@/assets/images/blog/08.jpg'


const toggle = ref(true);
const show = ref(false);
const imageSrc = ref(null);
const image = ref('');

const datas = ref([
  { id: 1, image:blog1, title: 'Design your apps in your own way', desc: 'The phrasal sequence of the is now so that many campaign and benefit' },
  { id: 2, image: blog2, title: 'How apps is changing the IT world', desc: 'The phrasal sequence of the is now so that many campaign and benefit' },
  { id: 3, image: blog3, title: 'Smartest Applications for Business', desc: 'The phrasal sequence of the is now so that many campaign and benefit' },
  { id: 4, image: blog4, title: 'Mobile Marketing, Its Synthes and 2021 Offer Prognosis', desc: 'The phrasal sequence of the is now so that many campaign and benefit' },
  { id: 5, image: blog5, title: 'Stop Worrying About Deadlines! We Got You Covered', desc: 'The phrasal sequence of the is now so that many campaign and benefit' },
  { id: 6, image: blog6, title: 'Change Your Strategy: Find a Business Consultant', desc: 'The phrasal sequence of the is now so that many campaign and benefit' },
  { id: 7, image: blog7, title: 'Everything About Financial Modeling', desc: 'The phrasal sequence of the is now so that many campaign and benefit' },
  { id: 8, image: blog8, title: 'On the other hand we provide denounce', desc: 'The phrasal sequence of the is now so that many campaign and benefit' }
]);



const loadFile = (event) => {
  image.value = document.getElementById(event.target.name);
  imageSrc.value = URL.createObjectURL(event.target.files[0]);
};

const darkmode = () => {
  document.documentElement.classList.remove('dark');
};

const bodurtl = () => {
  document.documentElement.removeAttribute('dir', 'rtl');
};

const handleClick = () => {
  toggle.value = !toggle.value;
};

onMounted(() => {
  darkmode();
  bodurtl();
});
</script>

<style lang="scss" scoped></style>