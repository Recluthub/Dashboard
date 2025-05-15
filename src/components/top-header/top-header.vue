<template>
    <div class="top-header">
        <div class="header-bar flex justify-between">
            <div class="flex items-center space-x-1">
                <router-link to="#" class="xl:hidden block me-2">
                    <img :src="logoIcon" class="md:hidden block" alt=""/>
                    <span class="md:block hidden">
                        <img :src="logoDark" class="inline-block dark:hidden" alt=""/>
                        <img :src="logoLight" class="hidden dark:inline-block" alt=""/>
                    </span>
                </router-link>

                <router-link to="#" id="close-sidebar" class="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full cursor-pointer" @click="customClick">
                    <i data-feather="menu" class="h-4 w-4"></i>
                </router-link>

                <div class="ps-1.5">
                    <div class="form-icon relative sm:block hidden">
                        <i class="uil uil-search absolute top-1/2 -translate-y-1/2 start-3"></i>
                        <input type="text" class="form-input w-56 ps-9 py-2 px-3 h-8 dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 bg-white" name="s" id="searchItem" placeholder="Search...">
                    </div>
                </div>
            </div>

            <ul class="list-none mb-0">
                <li class="dropdown inline-block relative me-1">
                    <button ref="dropdownToggle" @click="dropdownOpen = !dropdownOpen" class="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                        <img :src="flag1" alt=""/>
                    </button>
                    <div class="dropdown-menu absolute start-0 m-0 mt-4 z-10 w-36 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700" v-show="dropdownOpen">
                        <ul class="list-none py-2 text-start">
                            <li class="my-1">
                                <router-link to="" class="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img :src="flag2" class="h-6 w-6 rounded-full me-2 shadow-sm dark:shadow-gray-700" alt=""/> German</router-link>
                            </li>
                            <li class="my-1">
                                <router-link to="" class="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img :src="flag3" class="h-6 w-6 rounded-full me-2 shadow-sm dark:shadow-gray-700" alt=""/>Italian</router-link>
                            </li>
                            <li class="my-1">
                                <router-link to="" class="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img :src="flag4" class="h-6 w-6 rounded-full me-2 shadow-sm dark:shadow-gray-700" alt=""/>Russian</router-link>
                            </li>
                            <li class="my-1">
                                <router-link to="" class="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img :src="flag5" class="h-6 w-6 rounded-full me-2 shadow-sm dark:shadow-gray-700" alt=""/>Spanish</router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="dropdown inline-block relative me-1">
                    <button ref="dropdownToggle2" @click="dropdownOpen2 = !dropdownOpen2" class="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                        <i data-feather="shopping-cart" class="h-4 w-4"></i>
                        <span class="absolute top-0 end-0 flex items-center justify-center bg-emerald-600 text-white text-[10px] font-bold rounded-full size-2 ">
                            <span class="absolute h-2 w-2 bg-emerald-600 top-0 end-0 rounded-full animate-ping"></span>
                        </span>
                    </button>
                    <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-60 rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700" v-show="dropdownOpen2">
                        <ul class="py-3 text-start" aria-labelledby="dropdownDefault">
                            <li>
                                <router-link to="#" class="flex items-center justify-between py-1.5 px-4">
                                    <span class="flex items-center">
                                        <img :src="item1" class="rounded shadow-sm dark:shadow-gray-700 w-9" alt=""/>
                                        <span class="ms-3">
                                            <span class="block font-semibold">T-shirt (M)</span>
                                            <span class="block text-sm text-slate-400">$320 X 2</span>
                                        </span>
                                    </span>
                                    <span class="font-semibold">$640</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="#" class="flex items-center justify-between py-1.5 px-4">
                                    <span class="flex items-center">
                                        <img :src="item2" class="rounded shadow-sm dark:shadow-gray-700 w-9" alt=""/>
                                        <span class="ms-3">
                                            <span class="block font-semibold">Bag</span>
                                            <span class="block text-sm text-slate-400">$50 X 5</span>
                                        </span>
                                    </span>
                                    <span class="font-semibold">$250</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="#" class="flex items-center justify-between py-1.5 px-4">
                                    <span class="flex items-center">
                                        <img :src="item3" class="rounded shadow-sm dark:shadow-gray-700 w-9" alt=""/>
                                        <span class="ms-3">
                                            <span class="block font-semibold">Watch (Men)</span>
                                            <span class="block text-sm text-slate-400">$800 X 1</span>
                                        </span>
                                    </span>
                                    <span class="font-semibold">$800</span>
                                </router-link>
                            </li>

                            <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>

                            <li class="flex items-center justify-between py-1.5 px-4">
                                <h6 class="font-semibold mb-0">Total($):</h6>
                                <h6 class="font-semibold mb-0">$1690</h6>
                            </li>

                            <li class="py-1.5 px-4 space-x-1">
                                <router-link to="" class="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">View Cart</router-link>
                                <router-link to="" class="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">Checkout</router-link>
                                <p class="text-sm text-slate-400 mt-1">*T&C Apply</p>
                            </li>
                        </ul>
                    </div>
                </li>
                
                <li class="dropdown inline-block relative me-1">
                    <button ref="dropdownToggle3" @click="dropdownOpen3 = !dropdownOpen3" class="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                        <i data-feather="bell" class="h-4 w-4"></i>
                        <span class="absolute top-0 end-0 flex items-center justify-center bg-red-600 text-white text-[10px] font-bold rounded-full size-2 ">
                            <span class="absolute h-2 w-2 bg-red-600 top-0 end-0 rounded-full animate-ping"></span>
                        </span>
                    </button>
                    <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700" v-show="dropdownOpen3">
                        <span class="px-4 py-4 flex justify-between">
                            <span class="font-semibold">Notifications</span>
                            <span class="flex items-center justify-center bg-red-600/20 text-red-600 text-[10px] font-bold rounded-full w-5 max-h-5 ms-1">3</span>
                        </span>
                        <ul class="py-2 text-start h-64 border-t border-gray-100 dark:border-gray-800" data-simplebar>
                            <li>
                                <router-link to="#!" class="block font-medium py-1.5 px-4">
                                    <div class="flex items-center">
                                        <div
                                            class="h-10 w-10 rounded-md shadow-sm shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                            <i data-feather="shopping-cart" class="h-4 w-4"></i>
                                        </div>
                                        <div class="ms-2">
                                            <span class="text-[15px] font-semibold block">Order Complete</span>
                                            <small class="text-slate-400">15 min ago</small>
                                        </div>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#!" class="block font-medium py-1.5 px-4">
                                    <div class="flex items-center">
                                        <img :src="client4" class="h-10 w-10 rounded-md shadow-sm dark:shadow-gray-700" alt=""/>
                                        <div class="ms-2">
                                            <span class="text-[15px] font-semibold block"><span class="font-bold">Message</span> from Luis</span>
                                            <small class="text-slate-400">1 hour ago</small>
                                        </div>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#!" class="block font-medium py-1.5 px-4">
                                    <div class="flex items-center">
                                        <div class="h-10 w-10 rounded-md shadow-sm shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                            <i data-feather="dollar-sign" class="h-4 w-4"></i>
                                        </div>
                                        <div class="ms-2">
                                            <span class="text-[15px] font-semibold block"><span class="font-bold">One Refund Request</span></span>
                                            <small class="text-slate-400">2 hour ago</small>
                                        </div>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#!" class="block font-medium py-1.5 px-4">
                                    <div class="flex items-center">
                                        <div class="h-10 w-10 rounded-md shadow-sm shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                            <i data-feather="truck" class="h-4 w-4"></i>
                                        </div>
                                        <div class="ms-2">
                                            <span class="text-[15px] font-semibold block">Deliverd your Order</span>
                                            <small class="text-slate-400">Yesterday</small>
                                        </div>
                                    </div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#!" class="block font-medium py-1.5 px-4">
                                    <div class="flex items-center">
                                        <img :src="client5" class="h-10 w-10 rounded-md shadow-sm dark:shadow-gray-700" alt=""/>
                                        <div class="ms-2">
                                            <span class="text-[15px] font-semibold block"><span
                                                    class="font-bold">Cally</span> started following you</span>
                                            <small class="text-slate-400">2 days ago</small>
                                        </div>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="dropdown inline-block relative">
                    <button ref="dropdownToggle4" @click="dropdownOpen4 = !dropdownOpen4" class="dropdown-toggle items-center" type="button">
                        <span class="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"><img :src="client5" class="rounded-full" alt=""/></span>
                        <span class="font-semibold text-[16px] ms-1 sm:inline-block hidden">Cristina Murfy</span>
                    </button>
                    <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700"
                         v-show="dropdownOpen4">
                        <ul class="py-2 text-start">
                            <li>
                                <router-link to="/profile" class="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i class="uil uil-user me-2"></i>Profile</router-link>
                            </li>
                            <li>
                                <router-link to="/chat" class="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i class="uil uil-comment me-2"></i>Chat</router-link>
                            </li>
                            <li>
                                <router-link to="/email" class="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i class="uil uil-envelope me-2"></i>Email</router-link>
                            </li>
                            <li>
                                <router-link to="/profile-setting" class="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i class="uil uil-setting me-2"></i>Settings</router-link>
                            </li>
                            <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                            <li>
                                <router-link to="/lock-screen" class="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i class="uil uil-lock me-2"></i>Lockscreen</router-link>
                            </li>
                            <li>
                                <router-link to="/login" class="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i class="uil uil-sign-out-alt me-2"></i>Logout</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
    <!-- Top Header -->
</template>

<script setup>
import feather from 'feather-icons';
import { onMounted, onUnmounted, ref,defineProps } from 'vue';
import logoIcon from '@/assets/images/logo-icon-32.png' 
import logoDark from '@/assets/images/logo-dark.png' 
import logoLight from '@/assets/images/logo-light.png' 
import flag1 from '@/assets/images/flags/usa.png'
import flag2 from '@/assets/images/flags/germany.png'
import flag3 from '@/assets/images/flags/italy.png'
import flag4 from '@/assets/images/flags/russia.png'
import flag5 from '@/assets/images/flags/spain.png'
import item1 from '@/assets/images/shop/items/s1.jpg'
import item2 from '@/assets/images/shop/items/s2.jpg'
import item3 from '@/assets/images/shop/items/s3.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'

const dropdownOpen = ref(false)
const dropdownOpen2 = ref(false)
const dropdownOpen3 = ref(false)
const dropdownOpen4 = ref(false)

defineProps({
    customClick: {
    type: Function,
    required: true
  }
});

onMounted(()=>{
    feather.replace()
    document.addEventListener('click', handleClickOutside.value);
    document.addEventListener('click', handleClickOutside2.value);
    document.addEventListener('click', handleClickOutside3.value);
    document.addEventListener('click', handleClickOutside4.value);
    screenTop()
})
onUnmounted(()=>{
    document.removeEventListener('click', handleClickOutside.value);
    document.removeEventListener('click', handleClickOutside2.value);
    document.removeEventListener('click', handleClickOutside3.value);
    document.removeEventListener('click', handleClickOutside4.value);
})

const handleClickOutside = (event) => {
    if (!this.$refs.dropdownToggle.contains(event.target)) {
        dropdownOpen.value = false;
    }
}
const handleClickOutside2 = (event) => {
    if (!this.$refs.dropdownToggle2.contains(event.target)) {
        dropdownOpen2.value = false;
    }
}
const handleClickOutside3 = (event) => {
    if (!this.$refs.dropdownToggle3.contains(event.target)) {
        dropdownOpen3.value = false;
    }
}
const handleClickOutside4 = (event) => {
    if (!this.$refs.dropdownToggle4.contains(event.target)) {
        dropdownOpen4.value = false;
    }
}

const screenTop = () =>{
    window.scrollTo({ top: 0, behavior: "smooth" })
}

</script>
