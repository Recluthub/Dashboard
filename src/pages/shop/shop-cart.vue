<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />
            <div class="container-fluid relative px-3">
                    <div class="layout-specing">
                        <div class="md:flex justify-between items-center">
                            <h5 class="text-lg font-semibold">Shop Cart</h5>

                            <ul class="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                                <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><router-link to="/">Techwind</router-link></li>
                                <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                                <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><router-link to="/shop">Shop</router-link></li>
                                <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                                <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Cart</li>
                            </ul>
                        </div>

                        <div class="grid grid-cols-1 mt-6">
                            <div class="relative overflow-x-auto shadow-sm dark:shadow-gray-700 rounded-md">
                                <table class="w-full text-start">
                                    <thead class="text-sm uppercase bg-white dark:bg-slate-900">
                                        <tr>
                                            <th scope="col" class="p-4 w-4"></th>
                                            <th scope="col" class="text-start p-4 min-w-[220px]">Product</th>
                                            <th scope="col" class="p-4 w-24 min-w-[100px]">Price</th>
                                            <th scope="col" class="p-4 w-56 min-w-[220px]">Qty</th>
                                            <th scope="col" class="p-4 w-24 min-w-[100px]">Total($)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
                                            <td class="p-4"><router-link to=""><i class="mdi mdi-window-close text-red-600"></i></router-link></td>
                                            <td class="p-4">
                                                <span class="flex items-center">
                                                    <img :src="s1" class="rounded shadow-sm dark:shadow-gray-700 w-12" alt="">
                                                    <span class="ms-3">
                                                        <span class="block font-semibold">T-shirt (M)</span>
                                                    </span>
                                                </span>
                                            </td>
                                            <td class="p-4 text-center">$ 280</td>
                                            <td class="p-4 text-center">
                                                <div class="qty-icons">
                                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus">-</button>
                                                    <input min="0" name="quantity" value="3" type="number" class="h-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity mx-1">
                                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus">+</button>
                                                </div>
                                            </td>
                                            <td class="p-4  text-end">$ 840</td>
                                        </tr>
        
                                        <tr class="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
                                            <td class="p-4"><a href=""><i class="mdi mdi-window-close text-red-600"></i></a></td>
                                            <td class="p-4">
                                                <span class="flex items-center">
                                                    <img :src="s2" class="rounded shadow-sm dark:shadow-gray-700 w-12" alt="">
                                                    <span class="ms-3">
                                                        <span class="block font-semibold">Bag</span>
                                                    </span>
                                                </span>
                                            </td>
                                            <td class="p-4 text-center">$ 160</td>
                                            <td class="p-4 text-center">
                                                <div class="qty-icons">
                                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus">-</button>
                                                    <input min="0" name="quantity" value="1" type="number" class="h-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity mx-1">
                                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus">+</button>
                                                </div>
                                            </td>
                                            <td class="p-4  text-end">$ 160</td>
                                        </tr>
        
                                        <tr class="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
                                            <td class="p-4"><a href=""><i class="mdi mdi-window-close text-red-600"></i></a></td>
                                            <td class="p-4">
                                                <span class="flex items-center">
                                                    <img :src="s3" class="rounded shadow-sm dark:shadow-gray-700 w-12" alt="">
                                                    <span class="ms-3">
                                                        <span class="block font-semibold">Watch (Men)</span>
                                                    </span>
                                                </span>
                                            </td>
                                            <td class="p-4 text-center">$ 500</td>
                                            <td class="p-4 text-center">
                                                <div class="qty-icons">
                                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus">-</button>
                                                    <input min="0" name="quantity" value="1" type="number" class="h-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity mx-1">
                                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus">+</button>
                                                </div>
                                            </td>
                                            <td class="p-4  text-end">$ 500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
        
                            <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                                <div class="lg:col-span-9 md:order-1 order-3">
                                    <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Shop Now</router-link>
                                    <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white mt-2">Add to Cart</router-link>
                                </div>
        
                                <div class="lg:col-span-3 md:order-2 order-1">
                                    <ul class="list-none shadow-sm dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900">
                                        <li class="flex justify-between p-4">
                                            <span class="font-semibold text-lg">Subtotal :</span>
                                            <span class="text-slate-400">$ 1500</span>
                                        </li>
                                        <li class="flex justify-between p-4 border-t border-gray-100 dark:border-gray-800">
                                            <span class="font-semibold text-lg">Taxes :</span>
                                            <span class="text-slate-400">$ 150</span>
                                        </li>
                                        <li class="flex justify-between font-semibold p-4 border-t border-gray-200 dark:border-gray-600">
                                            <span class="font-semibold text-lg">Total :</span>
                                            <span class="font-semibold">$ 1650</span>
                                        </li>
                                    </ul>
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
import s1 from '@/assets/images/shop/items/s1.jpg';
import s2 from '@/assets/images/shop/items/s2.jpg';
import s3 from '@/assets/images/shop/items/s3.jpg';

const toggle = ref(true);

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
});
</script>

<style lang="scss" scoped></style>