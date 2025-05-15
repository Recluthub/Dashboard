<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />

            <div class="container-fluid relative px-3">
                <div class="layout-specing">
                    <div class="md:flex justify-between items-center">
                        <h5 class="text-lg font-semibold">Branded T-Shirts</h5>

                        <ul class="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                            <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                <router-link to="/">Techwind</router-link>
                            </li>
                            <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                            <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"> <router-link to="/shop">Shop</router-link></li>
                            <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                            <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Branded T-Shirts</li>
                        </ul>
                    </div>

                    <div class="p-6 rounded-md mt-6 shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                        <div class="grid md:grid-cols-12 grid-cols-1 gap-6 items-center">
                            <div class="xl:col-span-4 lg:col-span-5 md:col-span-6">
                                <div class="tiny-single-item">
                                    <div v-for="item in images" :key="item" class="tiny-slide">
                                        <img :src="item" class="rounded-md shadow-sm dark:shadow-gray-800" alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="xl:col-span-8 lg:col-span-7 md:col-span-6">
                                <div class="lg:ms-6">
                                    <h5 class="text-2xl font-semibold">Branded T-Shirts</h5>
                                    <div class="mt-2">
                                        <span class="text-slate-400 font-semibold me-1">$16USD <del class="text-red-600">$21USD</del></span>
                                        <ul class="list-none inline-block text-orange-400 space-x-1">
                                            <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                            <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                            <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                            <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                            <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                            <li class="inline text-slate-400 font-semibold">4.8 (45)</li>
                                        </ul>
                                    </div>

                                    <div class="mt-4">
                                        <h5 class="text-lg font-semibold">Overview :</h5>
                                        <p class="text-slate-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>

                                        <ul class="list-none text-slate-400 mt-4">
                                            <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Digital Marketing Solutions for Tomorrow</li>
                                            <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Our Talented & Experienced Marketing Agency</li>
                                            <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Create your own skin to match your brand</li>
                                        </ul>
                                    </div>

                                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-4">
                                        <div class="flex items-center">
                                            <h5 class="text-lg font-semibold me-2">Size:</h5>
                                            <div class="">
                                                <router-link to="" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">S</router-link>
                                                <router-link to="" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white mx-1 ">M</router-link>
                                                <router-link to="" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white me-1">L</router-link>
                                                <router-link to="" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">XL</router-link>
                                            </div>
                                        </div>

                                        <div class="flex items-center">
                                            <h5 class="text-lg font-semibold me-2">Quantity:</h5>
                                            <div class="qty-icons ms-3">
                                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 border hover:border-indigo-600 text-indigo-600 hover:text-white minus">-</button>
                                                <input min="0" name="quantity" value="0" type="number" class="h-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity mx-1">
                                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus">+</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-4">
                                        <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Shop Now</router-link>
                                        <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white mt-2">Add to Cart</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div >
                        <shoptab />
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
import { useRoute } from 'vue-router';
import { tns } from 'tiny-slider/src/tiny-slider';

import sidebar from '@/components/sidebar/sidebar-dark.vue';
import topheader from '@/components/top-header/top-header.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import shoptab from '@/components/shop/shop-tab.vue';

import image from '../../assets/images/shop/single/single-2.jpg';
import image2 from '../../assets/images/shop/single/single-3.jpg';
import image3 from '../../assets/images/shop/single/single-4.jpg';
import image4 from '../../assets/images/shop/single/single-5.jpg';
import image5 from '../../assets/images/shop/single/single-6.jpg';

import s1 from '../../assets/images/shop/items/s1.jpg';
import s2 from '../../assets/images/shop/items/s2.jpg';
import s3 from '../../assets/images/shop/items/s3.jpg';
import s4 from '../../assets/images/shop/items/s4.jpg';
import s5 from '../../assets/images/shop/items/s5.jpg';
import s6 from '../../assets/images/shop/items/s6.jpg';
import s7 from '../../assets/images/shop/items/s7.jpg';
import s8 from '../../assets/images/shop/items/s8.jpg';
import s9 from '../../assets/images/shop/items/s13.jpg';
import s10 from '../../assets/images/shop/items/s14.jpg';

const toggle = ref(true);
const route = useRoute();
const id = ref(route.params.id);
const data = ref(null);

const images = ref([image, image2, image3, image4, image5]);

const datas = ref([
  {
    id: 1,
    image: s1,
    status: 'New',
    name: 'Branded T-Shirt',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 2,
    image: s2,
    status: 'Featured',
    name: 'Shopping Bag',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 3,
    image: s3,
    status: '',
    name: 'Elegent Watch',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 4,
    image: s4,
    status: '',
    name: 'Casual Shoes',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 5,
    image: s5,
    status: 'New',
    name: 'Earphones',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 6,
    image: s6,
    status: '',
    name: 'Elegent Mug',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 7,
    image: s7,
    status: '',
    name: 'Sony Headphones',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 8,
    image: s8,
    status: 'Sale',
    name: 'Wooden Stools',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 9,
    image: s9,
    name: 'Wooden Chair',
    price: '$16.00',
    price2: '$21.00'
  },
  {
    id: 10,
    image: s10,
    name: 'Women Block Heels',
    price: '$16.00',
    price2: '$21.00'
  },
]);

const handleClick = () => {
  toggle.value = !toggle.value;
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
  data.value = datas.value.find((item) => item.id === parseInt(id.value));

  tns({
    container: '.tiny-single-item',
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 16,
  });
});
</script>

<style lang="scss" scoped></style>