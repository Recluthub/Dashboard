<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />

            <div class="container-fluid relative px-3">
                <div class="layout-specing">
                    <div class="md:flex justify-between items-center">
                        <h5 class="text-lg font-semibold">Pricing Plans</h5>

                        <ul class="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                            <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                <router-link to="/">Techwind</router-link></li>
                            <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                                <i class="uil uil-angle-right-b"></i></li>
                            <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Pricing</li>
                        </ul>
                    </div>

                    <div class="grid grid-cols-1 mt-6">
                        <ul class="inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                            <li role="presentation" class="inline-block me-1">
                                <button @click="toggles(1)" :class="activeIndex === 1 ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50'" class="px-4 py-1 text-sm font-semibold rounded-md w-full  duration-500" id="start-month-tab" data-tabs-target="#start-month" type="button" role="tab" aria-controls="start-month" aria-selected="true">Monthly</button>
                            </li>
                            <li role="presentation" class="inline-block">
                                <button @click="toggles(2)" :class="activeIndex === 2 ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50'" class="px-4 py-1 text-sm font-semibold rounded-md w-full duration-500" id="start-year-tab" data-tabs-target="#start-year" type="button" role="tab" aria-controls="start-year" aria-selected="false">Yearly <span class="bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-md inline-block h-5 ms-1">Save 25%</span></button>
                            </li>
                        </ul>

                        <div id="StarterContent">
                            <div :class="activeIndex === 1 ? '' : 'hidden'" id="start-month" role="tabpanel" aria-labelledby="start-month-tab">
                                <div class="grid lg:grid-cols-4 md:grid-cols-2 mt-6 gap-6">
                                    <div class="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 h-fit">
                                        <div class="p-6 text-center">
                                            <h6 class="font-bold text-2xl">Free</h6>
                                            <p class="text-slate-400 mt-2">We offers a <span class="font-medium">free month</span> of service for new customers.</p>
                                            <div class="flex justify-center mt-4">
                                                <span class="text-indigo-600 font-semibold self-end mb-1">$</span>
                                                <span class="text-5xl text-indigo-600 font-bold mb-0 mx-0.5">0</span>
                                                <span class="text-slate-400 font-semibold self-end mb-1">/Month</span>
                                            </div>
                                        </div>

                                        <div class="p-6 border-t border-gray-100 dark:border-gray-800">
                                            <ul class="list-none text-slate-400">
                                                <li class="flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Full Access</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Source Files</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Free Appointments</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Enhanced Security</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Up to 10 Active Users</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Up to 30 Project Integrations</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Accounting Module</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Network Platform</span></li>
                                            </ul>

                                            <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md w-full mt-6">Signup Now</router-link>
                                        </div>
                                    </div>

                                    <div class="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 h-fit">
                                        <div class="p-6 text-center">
                                            <h6 class="font-bold text-2xl">Startup</h6>
                                            <p class="text-slate-400 mt-2">We offers a <span class="font-medium">free 14 days</span> of service for new customers.</p>

                                            <div class="flex justify-center mt-4">
                                                <span class="text-indigo-600 font-semibold self-end mb-1">$</span>
                                                <span class="text-5xl text-indigo-600 font-bold mb-0 mx-0.5">19</span>
                                                <span class="text-slate-400 font-semibold self-end mb-1">/Month</span>
                                            </div>
                                        </div>

                                        <div class="p-6 border-t border-gray-100 dark:border-gray-800">
                                            <ul class="list-none text-slate-400">
                                                <li class="flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Full Access</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Source Files</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Free Appointments</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Enhanced Security</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Up to 10 Active Users</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i> <span>Up to 30 Project Integrations</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Accounting Module</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Network Platform</span></li>
                                            </ul>

                                            <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md w-full mt-6">Select Now</router-link>
                                        </div>
                                    </div>

                                    <div class="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 h-fit">
                                        <div class="bg-yellow-500 text-white py-1.5 px-6 text-center text-lg font-semibold"> Popular</div>
                                        <div class="p-6 text-center">
                                            <h6 class="font-bold text-2xl">Advanced</h6>
                                            <p class="text-slate-400 mt-2">We offers a <span class="font-medium">free 7 days</span> of service for new customers.</p>
                                            <div class="flex justify-center mt-4">
                                                <span class="text-indigo-600 font-semibold self-end mb-1">$</span>
                                                <span class="text-5xl text-indigo-600 font-bold mb-0 mx-0.5">39</span>
                                                <span class="text-slate-400 font-semibold self-end mb-1">/Month</span>
                                            </div>
                                        </div>

                                        <div class="p-6 border-t border-gray-100 dark:border-gray-800">
                                            <ul class="list-none text-slate-400">
                                                <li class="flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Full Access</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Source Files</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Free Appointments</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Enhanced Security</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Up to 10 Active Users</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Up to 30 Project Integrations</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Accounting Module</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Network Platform</span></li>
                                            </ul>

                                            <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full mt-6">Buy Now</router-link>
                                        </div>
                                    </div>

                                    <div
                                        class="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 h-fit">
                                        <div class="p-6 text-center">
                                            <h6 class="font-bold text-2xl">Enterprise</h6>
                                            <p class="text-slate-400 mt-2">We offers a <span class="font-medium">free demo</span> of service for new customers.</p>

                                            <div class="flex justify-center mt-4">
                                                <span class="text-indigo-600 font-semibold self-end mb-1">$</span>
                                                <span class="text-5xl text-indigo-600 font-bold mb-0 mx-0.5">99</span>
                                                <span class="text-slate-400 font-semibold self-end mb-1">/Month</span>
                                            </div>
                                        </div>

                                        <div class="p-6 border-t border-gray-100 dark:border-gray-800">
                                            <ul class="list-none text-slate-400">
                                                <li class="flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Full Access</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Source Files</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Free Appointments</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Enhanced Security</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Up to 10 Active Users</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Up to 30 Project Integrations</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Accounting Module</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Network Platform</span></li>
                                            </ul>

                                            <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md w-full mt-6">Buy Now</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div :class="activeIndex === 2 ? '' : 'hidden'" id="start-year" role="tabpanel" aria-labelledby="start-year-tab">
                                <div class="grid lg:grid-cols-4 md:grid-cols-2 mt-6 gap-6">
                                    <div class="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 h-fit">
                                        <div class="p-6 text-center">
                                            <h6 class="font-bold text-2xl">Basic</h6>
                                            <p class="text-slate-400 mt-2">We offers a <span class="font-medium">free month</span> of service for new customers.</p>
                                            <div class="flex justify-center mt-4">
                                                <span class="text-indigo-600 font-semibold self-end mb-1">$</span>
                                                <span class="text-5xl text-indigo-600 font-bold mb-0 mx-0.5">49</span>
                                                <span class="text-slate-400 font-semibold self-end mb-1">/Month</span>
                                            </div>
                                        </div>

                                        <div class="p-6 border-t border-gray-100 dark:border-gray-800">
                                            <ul class="list-none text-slate-400">
                                                <li class="flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Full Access</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Source Files</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Free Appointments</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Enhanced Security</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Up to 10 Active Users</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Up to 30 Project Integrations</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Accounting Module</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Network Platform</span></li>
                                            </ul>

                                            <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md w-full mt-6">Signup Now</router-link>
                                        </div>
                                    </div>

                                    <div class="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 h-fit">
                                        <div class="p-6 text-center">
                                            <h6 class="font-bold text-2xl">Startup</h6>
                                            <p class="text-slate-400 mt-2">We offers a <span class="font-medium">free 14 days</span> of service for new customers.</p>

                                            <div class="flex justify-center mt-4">
                                                <span class="text-indigo-600 font-semibold self-end mb-1">$</span>
                                                <span class="text-5xl text-indigo-600 font-bold mb-0 mx-0.5">199</span>
                                                <span class="text-slate-400 font-semibold self-end mb-1">/Month</span>
                                            </div>
                                        </div>

                                        <div class="p-6 border-t border-gray-100 dark:border-gray-800">
                                            <ul class="list-none text-slate-400">
                                                <li class="flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Full Access</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Source Files</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Free Appointments</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Enhanced Security</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i> <span>Up to 10 Active Users</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Up to 30 Project Integrations</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i> <span>Accounting Module</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Network Platform</span></li>
                                            </ul>

                                            <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md w-full mt-6">Select Now</router-link>
                                        </div>
                                    </div>

                                    <div class="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 h-fit">
                                        <div class="bg-yellow-500 text-white py-1.5 px-6 text-center text-lg font-semibold">Popular</div>
                                        <div class="p-6 text-center">
                                            <h6 class="font-bold text-2xl">Advanced</h6>
                                            <p class="text-slate-400 mt-2">We offers a <span class="font-medium">free 7 days</span> of service for new customers.</p>

                                            <div class="flex justify-center mt-4">
                                                <span class="text-indigo-600 font-semibold self-end mb-1">$</span>
                                                <span class="text-5xl text-indigo-600 font-bold mb-0 mx-0.5">399</span>
                                                <span class="text-slate-400 font-semibold self-end mb-1">/Month</span>
                                            </div>
                                        </div>

                                        <div class="p-6 border-t border-gray-100 dark:border-gray-800">
                                            <ul class="list-none text-slate-400">
                                                <li class="flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Full Access</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Source Files</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Free Appointments</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Enhanced Security</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Up to 10 Active Users</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Up to 30 Project Integrations</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Accounting Module</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-times text-slate-400 text-[20px] align-middle me-2"></i><span>Network Platform</span></li>
                                            </ul>

                                            <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full mt-6">Buy Now</router-link>
                                        </div>
                                    </div>

                                    <div
                                        class="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 h-fit">
                                        <div class="p-6 text-center">
                                            <h6 class="font-bold text-2xl">Enterprise</h6>

                                            <p class="text-slate-400 mt-2">We offers a <span class="font-medium">free demo</span> of service for new customers.</p>

                                            <div class="flex justify-center mt-4">
                                                <span class="text-indigo-600 font-semibold self-end mb-1">$</span>
                                                <span class="text-5xl text-indigo-600 font-bold mb-0 mx-0.5">899</span>
                                                <span class="text-slate-400 font-semibold self-end mb-1">/Month</span>
                                            </div>
                                        </div>

                                        <div class="p-6 border-t border-gray-100 dark:border-gray-800">
                                            <ul class="list-none text-slate-400">
                                                <li class="flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Full Access</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Source Files</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i> <span>Free Appointments</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Enhanced Security</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i> <span>Up to 10 Active Users</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Up to 30 Project Integrations</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Accounting Module</span></li>
                                                <li class="mt-2 flex"><i class="uil uil-check-circle text-emerald-600 text-[20px] align-middle me-2"></i><span>Network Platform</span></li>
                                            </ul>

                                            <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md w-full mt-6">Buy Now</router-link>
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
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import sidebar from '@/components/sidebar/sidebar-dark.vue';
import topheader from '@/components/top-header/top-header.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';

const toggle = ref(true);
const activeIndex = ref(1);

const handleClick = () => {
  toggle.value = !toggle.value;
};

const darkmode = () => {
  document.documentElement.classList.remove('dark');
};

const bodurtl = () => {
  document.documentElement.removeAttribute('dir', 'rtl');
};

const toggles = (number) => {
  activeIndex.value = number;
};

onMounted(() => {
  darkmode();
  bodurtl();
});
</script>