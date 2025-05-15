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
                                <h5 class="text-lg font-semibold">Shop Items</h5>
                                <ul class="tracking-[0.5px] inline-block mt-2">
                                    <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                        <router-link to="/">Techwind</router-link>
                                    </li>
                                    <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                                        <i class="uil uil-angle-right-b"></i>
                                    </li>
                                    <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Shop</li>
                                </ul>
                            </div>

                            <div>
                                <router-link @click="show = !show" to="#" class="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" title="Add New"><i data-feather="plus" class="h-4 w-4"></i></router-link>
                            </div>
                        </div>

                        <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">

                            <div v-for="item in datas" :key="item.id" class="group">
                                <div class="relative overflow-hidden shadow-sm dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                                    <img :src="item.image" alt="">

                                    <div class="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                                        <router-link to="/shop-cart" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md">Add to Cart</router-link>
                                    </div>

                                    <ul class="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500">
                                        <li><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i class="mdi mdi-heart"></i></router-link></li>
                                        <li class="mt-1"><router-link to="/shop-item-detail" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i class="mdi mdi-eye-outline"></i></router-link></li>
                                        <li class="mt-1"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i class="mdi mdi-bookmark-outline"></i></router-link></li>
                                    </ul>

                                    <ul class="list-none absolute top-[10px] start-4">
                                        <li v-if="item.status === 'New'"><router-link to="#" class="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">New</router-link></li>
                                        <li v-if="item.status === 'Sale'"><router-link to="#" class="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">Sale</router-link></li>
                                        <li v-if="item.status === 'Featured'"><router-link to="#" class="bg-green-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">Featured</router-link></li>
                                    </ul>
                                </div>

                                <div class="mt-4">
                                    <router-link :to="`/shop-item-detail/${item.id}`"  class="hover:text-indigo-600 text-lg font-semibold">{{ item.name}}</router-link>
                                    <div class="flex justify-between items-center mt-1">
                                        <p class="text-green-600">{{ item.price }} <del class="text-red-600">{{ item.price2}}</del></p>
                                        <ul class="font-medium text-amber-400 list-none space-x-1">
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                        </ul>
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
        <div v-if="show" class="fixed inset-0 flex justify-center items-center bg-slate-900/75 w-full h-screen z-9999">
            <div id="addshopitem" class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                <div class="relative h-auto md:w-[480px] w-300px">
                    <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                        <h3 class="font-bold text-lg">Add shop item</h3>
                        <form method="dialog">
                            <button @click="show = !show" class="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost"><i data-feather="x" class="size-4"></i></button>
                        </form>
                    </div>
                    <div class="p-4">
                        <div>
                            <p class="font-semibold mb-4">Upload your blog image here, Please click "Upload Image" Button.</p>
                            <div v-if="imageSrc === null ? 'hidden' : ''" class="preview-box flex justify-center rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                            <div v-else class="preview-box flex justify-center rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                                <img class="preview-content" :src="imageSrc">
                            </div>
                            <input type="file" id="input-file" name="input-file" accept="image/*" @change="loadFile" hidden>
                            <label class="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6 cursor-pointer" for="input-file">Upload Image</label>
                        </div>
                        <form class="mt-4">
                            <div class="grid grid-cols-12 gap-3">
                                <div class="col-span-12">
                                    <label class="font-semibold">Item Name <span class="text-red-600">*</span></label>
                                    <input name="name" id="name" type="text" class="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Name">
                                </div>

                                <div class="md:col-span-6 col-span-12">
                                    <label class="form-label font-semibold">Price</label>
                                    <div class="relative mt-2">
                                        <span class="absolute top-0.5 start-0.5 size-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="basic-addon1"><i class="uil uil-dollar-sign"></i></span>
                                        <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Price" required>
                                    </div>
                                </div>

                                <div class="md:col-span-6 col-span-12">
                                    <label class="font-semibold">Label</label>
                                    <input name="name" id="name2" type="text" class="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Label">
                                </div>

                                <div class="col-span-12">
                                    <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Add Item</button>
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
import s1 from '@/assets/images/shop/items/s1.jpg'
import s2 from '@/assets/images/shop/items/s2.jpg'
import s3 from '@/assets/images/shop/items/s3.jpg'
import s4 from '@/assets/images/shop/items/s4.jpg'
import s5 from '@/assets/images/shop/items/s5.jpg'
import s6 from '@/assets/images/shop/items/s6.jpg'
import s7 from '@/assets/images/shop/items/s7.jpg'
import s8 from '@/assets/images/shop/items/s8.jpg'
import s9 from '@/assets/images/shop/items/s13.jpg'
import s10 from '@/assets/images/shop/items/s14.jpg'

const toggle = ref(true);
const imageSrc = ref(null);
const image = ref('');
const show = ref(false)
const datas = ref([
  { id: 1, image: s1, status: 'New', name: 'Branded T-Shirt', price: '$16.00', price2: '$21.00' },
  { id: 2, image: s2, status: 'Featured', name: 'Shopping Bag', price: '$16.00', price2: '$21.00' },
  { id: 3, image: s3, status: '', name: 'Elegent Watch', price: '$16.00', price2: '$21.00' },
  { id: 4, image: s4, status: '', name: 'Casual Shoes', price: '$16.00', price2: '$21.00' },
  { id: 5, image: s5, status: 'New', name: 'Earphones', price: '$16.00', price2: '$21.00' },
  { id: 6, image: s6, status: '', name: 'Elegent Mug', price: '$16.00', price2: '$21.00' },
  { id: 7, image: s7, status: '', name: 'Sony Headphones', price: '$16.00', price2: '$21.00' },
  { id: 8, image: s8, status: 'Sale', name: 'Wooden Stools', price: '$16.00', price2: '$21.00' },
  { id: 9, image: s9, name: 'Wooden Chair', price: '$16.00', price2: '$21.00' },
  { id: 10, image: s10, name: 'Women Block Heels', price: '$16.00', price2: '$21.00' }
]);

const handleClick = () => {
  toggle.value = !toggle.value;
};

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

onMounted(() => {
  darkmode();
  bodurtl();
});
</script>
<style lang="scss" scoped></style>