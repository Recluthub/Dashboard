<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />
                <div class="container-fluid relative px-3">
                    <div class="layout-specing">
                        <div class="flex justify-between items-center">
                            <div>
                                <h5 class="text-xl font-bold">E-Commerce Dashboard</h5>
                            </div>

                            <div class="flex items-center">
                                <div class="position-relative">
                                    <select class="form-select form-input w-full p-2 pe-6 h-10 bg-white dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                        <option value="Y" selected>Yearly</option>
                                        <option value="M">Monthly</option>
                                        <option value="W">Weekly</option>
                                        <option value="T">Today</option>
                                    </select>
                                </div>

                                <router-link to="" class="ms-1">
                                    <span class="py-[7px] px-6 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md sm:inline-block hidden"><i class="uil uil-export"></i> Export</span>
                                    <span class="size-10 items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white sm:hidden inline-flex"><i class="uil uil-export"></i></span>
                                </router-link>
                            </div>
                        </div>

                        <div class="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                            <div class="xl:col-span-8 col-span-12">
                                <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <div class="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                        <h6 class="text-lg font-semibold">Sales & Revenue</h6>
                                        
                                        <div class="position-relative">
                                            <select class="form-select form-input w-full py-2 px-2 pe-6 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                                <option value="Y" selected>Yearly</option>
                                                <option value="M">Monthly</option>
                                                <option value="W">Weekly</option>
                                                <option value="T">Today</option>
                                            </select>
                                        </div>
                                    </div>
                                    <SalesChart/>
                                </div>
                            </div>

                            <div class="xl:col-span-4 col-span-12">
                                <div class="grid xl:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-6">
                                    <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                        <div class="p-5">
                                            <div class="flex items-center justify-between mb-3">
                                                <div class="flex items-center">
                                                    <span class="flex justify-center items-center rounded-md size-8 min-w-[32px] bg-indigo-600/5 dark:bg-indigo-600/10 shadow-sm shadow-indigo-600/5 dark:shadow-indigo-600/10 text-indigo-600">
                                                        <i data-feather="bookmark" class="size-4"></i>
                                                    </span>
                                                    <span class="font-semibold block ms-3 my-3">Total Sales</span>
                                                </div>
                                                <SalesBtn/>
                                            </div>

                                            <span class="text-2xl font-semibold block my-2">$ <span class="counter-value" data-target="48575">35214</span></span>

                                            <span class="text-emerald-600 text-sm ms-1 font-semibold"><i class="uil uil-arrow-growth"></i> 3.84% <span class="text-slate-400">+$1245 today</span></span>
                                        </div>

                                        <div class="px-5 py-4 bg-gray-50 dark:bg-slate-800">
                                            <router-link to="" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-indigo-600 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white duration-500"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 transition-all duration-500 bg-indigo-600 dark:bg-white"></span>View data <i class="uil uil-arrow-right"></i></router-link>
                                        </div>
                                    </div>
                                    
                                    <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                        <div class="p-5">
                                            <div class="flex items-center justify-between mb-3">
                                                <div class="flex items-center">
                                                    <span class="flex justify-center items-center rounded-md size-8 min-w-[32px] bg-indigo-600/5 dark:bg-indigo-600/10 shadow-sm shadow-indigo-600/5 dark:shadow-indigo-600/10 text-indigo-600">
                                                        <i data-feather="users" class="size-4"></i>
                                                    </span>
                                                    <span class="font-semibold block ms-3 my-3">Total Users</span>
                                                </div>
                                                <SalesBtn/>
                                            </div>

                                            <span class="text-2xl font-semibold block my-2"><span class="counter-value" data-target="5134">4231</span></span>

                                            <span class="text-emerald-600 text-sm ms-1 font-semibold"><i class="uil uil-arrow-growth"></i> 3.84% <span class="text-slate-400">+35 today</span></span>
                                        </div>

                                        <div class="px-5 py-4 bg-gray-50 dark:bg-slate-800">
                                            <router-link to="" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-indigo-600 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white duration-500"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 transition-all duration-500 bg-indigo-600 dark:bg-white"></span>View data <i class="uil uil-arrow-right"></i></router-link>
                                        </div>
                                    </div>
                                    
                                    <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                        <div class="p-5">
                                            <div class="flex items-center justify-between mb-3">
                                                <div class="flex items-center">
                                                    <span class="flex justify-center items-center rounded-md size-8 min-w-[32px] bg-indigo-600/5 dark:bg-indigo-600/10 shadow-sm shadow-indigo-600/5 dark:shadow-indigo-600/10 text-indigo-600">
                                                        <i data-feather="package" class="size-4"></i>
                                                    </span>
                                                    <span class="font-semibold block ms-3 my-3">Total Orders</span>
                                                </div>
                                                <SalesBtn/>
                                            </div>

                                            <span class="text-2xl font-semibold block my-2"><span class="counter-value" data-target="7546">5135</span></span>

                                            <span class="text-emerald-600 text-sm ms-1 font-semibold"><i class="uil uil-arrow-growth"></i> 3.84% <span class="text-slate-400">+124 today</span></span>
                                        </div>

                                        <div class="px-5 py-4 bg-gray-50 dark:bg-slate-800">
                                            <router-link to="" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-indigo-600 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white duration-500">
                                            <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 transition-all duration-500 bg-indigo-600 dark:bg-white"></span>
                                            View data <i class="uil uil-arrow-right"></i></router-link>
                                        </div>
                                    </div>
                                    
                                    <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                        <div class="p-5">
                                            <div class="flex items-center justify-between mb-3">
                                                <div class="flex items-center">
                                                    <span class="flex justify-center items-center rounded-md size-8 min-w-[32px] bg-indigo-600/5 dark:bg-indigo-600/10 shadow-sm shadow-indigo-600/5 dark:shadow-indigo-600/10 text-indigo-600">
                                                        <i data-feather="rotate-cw" class="size-4"></i>
                                                    </span>
                                                    <span class="font-semibold block ms-3 my-3">Refunds</span>
                                                </div>
                                                <SalesBtn/>
                                            </div>

                                            <span class="text-2xl font-semibold block my-2"><span class="counter-value" data-target="485">112</span></span>
                                            <span class="text-red-600 text-sm ms-1 font-semibold"><i class="uil uil-chart-down"></i> 5.76% <span class="text-slate-400">4 today</span></span>
                                        </div>

                                        <div class="px-5 py-4 bg-gray-50 dark:bg-slate-800">
                                            <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-indigo-600 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white duration-500"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 transition-all duration-500 bg-indigo-600 dark:bg-white"></span>View data <i class="uil uil-arrow-right"></i></router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                            <div class="xl:col-span-8 lg:col-span-6 col-span-12">
                                <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <div class="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                        <div>
                                            <h6 class="text-lg font-semibold">Recent Orders</h6>
                                        </div>
                                        
                                        <div class="position-relative">
                                            <select class="form-select form-input w-full py-2 px-2 pe-6 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                                <option value="T" selected>Today</option>
                                                <option value="W">This Week</option>
                                                <option value="M">This Month</option>
                                                <option value="Y">This Year</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="h-[352px]" data-simplebar>
                                        <table class="w-full text-start">
                                            <thead>
                                                <tr>
                                                    <th class="p-4 font-semibold text-start min-w-[180px]">Item</th>
                                                    <th class="p-4 font-semibold text-center min-w-[100px]">Date</th>
                                                    <th class="p-4 font-semibold text-center">Qty</th>
                                                    <th class="p-4 font-semibold text-center">Price</th>
                                                    <th class="p-4 font-semibold text-center">Status</th>
                                                    <th class="p-4 font-semibold text-end">Payment</th>
                                                </tr>
                                            </thead>
            
                                            <tbody>
                                                <tr v-for="(item, index) in recentorder" :key="index" class="border-t border-gray-100 dark:border-gray-800">
                                                    <td class="px-4 py-3 text-start">
                                                        <span class="flex items-center">
                                                            <img :src="item.image" class="rounded shadow-sm dark:shadow-gray-700 w-10" alt="">
                                                            <span class="ms-3">
                                                                <span class="block font-semibold">{{item.name}}</span>
                                                            </span>
                                                        </span>
                                                    </td>

                                                    <td class="px-4 py-3 text-center">{{item.date}}</td>
                                                    <td class="px-4 py-3 text-center">{{item.qty}}</td>
                                                    <td class="px-4 py-3 text-center">{{item.price}}</td>
                                                    <td class="px-4 py-3 text-center">{{item.status}}</td>

                                                    <td v-if="item.payment === 'Paid'" class="px-4 py-3 text-end font-semibold text-emerald-600">{{item.payment}}</td>

                                                    <td v-if="item.payment === 'Unpaid'" class="px-4 py-3 text-end font-semibold text-red-600">{{item.payment}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="xl:col-span-4 lg:col-span-6 col-span-12">
                                <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <div class="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                        <h6 class="text-lg font-semibold">Weekly Top Products</h6>
                                        
                                        <div class="position-relative">
                                            <select class="form-select form-input w-full py-2 px-2 pe-6 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                                <option value="Y" selected>Yearly</option>
                                                <option value="M">Monthly</option>
                                                <option value="W">Weekly</option>
                                                <option value="T">Today</option>
                                            </select>
                                        </div>
                                    </div>
                                    <ProductChart/>
                                </div>
                            </div>
                        </div>

                        <div class="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                            <div class="lg:col-span-4">
                                <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <div class="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                        <div>
                                            <h6 class="text-lg font-semibold">Top Products</h6>
                                        </div>
                                        
                                        <div class="position-relative">
                                            <select class="form-select form-input w-full py-2 px-2 pe-6 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                                <option value="T" selected>Today</option>
                                                <option value="W">This Week</option>
                                                <option value="M">This Month</option>
                                                <option value="Y">This Year</option>
                                            </select>
                                        </div>
                                    </div>
    
                                    <div class="h-[340px]" data-simplebar>
                                        <table class="w-full text-start">
                                            <thead>
                                                <tr>
                                                    <th class="p-4 font-semibold text-start min-w-[200px]">Product</th>
                                                    <th class="p-4 font-semibold text-center">Price</th>
                                                    <th class="p-4 font-semibold text-center">Stock</th>
                                                    <th class="p-4 font-semibold text-end">Orders</th>
                                                </tr>
                                            </thead>
            
                                            <tbody>
                                                <tr v-for="(item, index) in topProduct" :key="index" class="border-t border-gray-100 dark:border-gray-800">
                                                    <td class="px-4 py-3 text-start">
                                                        <span class="flex items-center">
                                                            <img :src="item.image" class="rounded shadow-sm dark:shadow-gray-700 w-10" alt="">
                                                            <span class="ms-3">
                                                                <span class="block font-semibold">{{item.name}}</span>
                                                            </span>
                                                        </span>
                                                    </td>

                                                    <td class="px-4 py-3 text-center">{{item.price}}</td>
                                                    <td class="px-4 py-3 text-center">{{item.stock}}</td>
                                                    <td class="px-4 py-3 text-end">{{item.oredr}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-5">
                                <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <div class="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                        <div>
                                            <h6 class="text-lg font-semibold">Top Seller</h6>
                                        </div>
                                        
                                        <div class="position-relative">
                                            <select class="form-select form-input w-full py-2 px-2 pe-6 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                                <option value="T" selected>Today</option>
                                                <option value="W">This Week</option>
                                                <option value="M">This Month</option>
                                                <option value="Y">This Year</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="h-[340px]" data-simplebar>
                                        <table class="w-full text-start">
                                            <thead>
                                                <tr>
                                                    <th class="p-4 font-semibold text-start min-w-[180px]">Seller</th>
                                                    <th class="p-4 font-semibold text-center min-w-[120px]">Categories</th>
                                                    <th class="p-4 font-semibold text-center min-w-[120px]">Items</th>
                                                    <th class="p-4 font-semibold text-end">Ratings</th>
                                                </tr>
                                            </thead>
            
                                            <tbody>
                                                <tr v-for="(item, index) in topSeller" :key="index" class="border-t border-gray-100 dark:border-gray-800">
                                                    <td class="px-4 py-3 text-start">
                                                        <router-link to="" class="flex items-center hover:text-indigo-600">
                                                            <img :src="item.image" class="rounded-full shadow-sm dark:shadow-gray-700 size-8" alt="">
                                                            <span class="ms-2">
                                                                <span class="block font-semibold">{{item.name}}</span>
                                                            </span>
                                                        </router-link>
                                                    </td>

                                                    <td class="px-4 py-3 text-center">
                                                        <div>
                                                            <router-link to="" v-for="(el, index) in item.categories" :key="index" class="bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">{{el}}</router-link>
                                                        </div>
                                                    </td>
                                                    <td class="px-4 py-3 text-center">{{item.items}}</td>
                                                    <td class="px-4 py-3 text-end font-semibold flex"><i class="mdi mdi-star text-amber-400"></i> {{item.rate}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-3">
                                <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <div class="px-4 py-[22px] border-b border-gray-100 dark:border-gray-800">
                                        <h6 class="text-lg font-semibold">Client Reviews</h6>
                                    </div>

                                    <div class="h-[340px] p-4" data-simplebar>
                                        <div class="tiny-single-item">
                                            <div v-for="(item, index) in clientData" :key="index" class="tiny-slide">
                                                <div class="text-center">
                                                    <p class="text-lg text-slate-400 italic"> {{item.desc}} </p>
                
                                                    <div class="text-center mt-5">
                                                        <ul class="text-xl font-medium text-orange-500 list-none mb-2">
                                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                                        </ul>
                                                        <img :src="item.image" class="size-14 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="">
                                                        <h6 class="mt-2 font-semibold">{{item.name}}</h6>
                                                        <span class="text-slate-400 text-sm">{{item.position}}</span>
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
        </main>
        <switcher />
    </div>
</template>

<script setup>
import sidebar from '@/components/sidebar/sidebar-dark.vue';
import topheader from '@/components/top-header/top-header.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import { onMounted, ref } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import SalesChart from '@/components/sales-chart.vue';
import ProductChart from '@/components/product-chart.vue';
import SalesBtn from '@/components/sales-btn.vue';

import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'
import s1 from '@/assets/images/shop/items/s1.jpg'
import s2 from '@/assets/images/shop/items/s2.jpg'
import s3 from '@/assets/images/shop/items/s3.jpg'
import s4 from '@/assets/images/shop/items/s4.jpg'
import s5 from '@/assets/images/shop/items/s5.jpg'
import s6 from '@/assets/images/shop/items/s6.jpg'
import s7 from '@/assets/images/shop/items/s7.jpg'
import s8 from '@/assets/images/shop/items/s8.jpg'
import s13 from '@/assets/images/shop/items/s13.jpg'
import s14 from '@/assets/images/shop/items/s14.jpg'

let toggle = ref(true)

onMounted(()=>{
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

    darkmode()
    bodurtl()

})
let darkmode =()=>{
    document.documentElement.classList.remove('dark');
}
let bodurtl =()=>{
    document.documentElement.removeAttribute("dir", "rtl");
}
let handleClick =()=>{
    toggle.value = !toggle.value
}

let clientData = ref([
    {
        image:client1,
        name:'Christa Smith',
        position:'Manager',
        desc:`"Techwind instantly increased the amount of interest and ultimately saved us over $10,000. "`
    },
    {
        image:client2,
        name:'Christa Smith',
        position:'Manager',
        desc:`" My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home. "`
    },
    {
        image:client3,
        name:'Christa Smith',
        position:'Manager',
        desc:`" My favorite part about selling my home people personally. This made it so much more enjoyable! "`
    },
    {
        image:client4,
        name:'Christa Smith',
        position:'Manager',
        desc:` " Techwind made selling my home easy and stress free. They went above and beyond what is expected. "`
    },
    {
        image:client5,
        name:'Christa Smith',
        position:'Manager',
        desc:`" Techwind is fair priced, quick to respond, and easy to use. I highly recommend their services! "`
    },
])

let topSeller = ref([
    {
       image:client1,
       name:'Robb Store',
       categories:['Clothes','Tools','Bags'],
       items:'450+ Items',
       rate:'4.9(450)'
    },
    {
       image:client2,
       name:'Glowify',
       categories:['Clothes','Tools','Bags'],
       items:'320+ Items',
       rate:'4.7(320)'
    },
    {
       image:client3,
       name:'ShopFusion',
       categories:['Clothes','Tools','Bags'],
       items:'487+ Items',
       rate:'4.4(487)'
    },
    {
       image:client4,
       name:'TrendTrove',
       categories:['Clothes','Tools','Bags'],
       items:'564+ Items',
       rate:'4.2(564)'
    },
    {
       image:client5,
       name:'EcomGrove',
       categories:['Clothes','Tools','Bags'],
       items:'452+ Items',
       rate:'4.1(452)'
    },
    {
       image:client6,
       name:'SwiftCart',
       categories:['Clothes','Tools','Bags'],
       items:'785+ Items',
       rate:'4.1(785)'
    },
])

let topProduct = ref([
    {
        image:s7,
        name:'Headphone',
        price:'$120',
        stock:'345',
        oredr:'60'
    },
    {
        image:s8,
        name:'Ladies Purse',
        price:'$450',
        stock:'600',
        oredr:'48'
    },
    {
        image:s13,
        name:'Wooden Chairs',
        price:'$500',
        stock:'350',
        oredr:'46'
    },
    {
        image:s14,
        name:'Laptop Clarks',
        price:'$650',
        stock:'780',
        oredr:'40'
    },
    {
        image:s5,
        name:'Ladies Top',
        price:'$45',
        stock:'550',
        oredr:'39'
    },
    {
        image:s6,
        name:'Ladies Crop',
        price:'$69',
        stock:'80',
        oredr:'35'
    },
])

let recentorder = ref([
   {
    image:s1,
    name:'Men T-shirt',
    date:'13th Sept',
    qty:'1',
    price:'$59',
    status:'Completed',
    payment:'Paid'
   },
   {
    image:s2,
    name:'School Bag',
    date:'29th Nov',
    qty:'1',
    price:'$46',
    status:'Completed',
    payment:'Unpaid'
   },
   {
    image:s3,
    name:'Luxurius Watch',
    date:'13th March',
    qty:'1',
    price:'$299',
    status:'Completed',
    payment:'Paid'
   },
   {
    image:s4,
    name:'Laptop Bag',
    date:'5th May',
    qty:'1',
    price:'$109',
    status:'Completed',
    payment:'Paid'
   },
   {
    image:s5,
    name:'Ladies Top',
    date:'19th June',
    qty:'1',
    price:'$69',
    status:'Completed',
    payment:'Paid'
   },
   {
    image:s6,
    name:'Ladies Crop',
    date:'20th June',
    qty:'1',
    price:'$79',
    status:'Completed',
    payment:'Paid'
   },
])

recentorder.value
</script>


