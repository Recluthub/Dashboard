<template>
        <div class="rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
            <div class="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 p-4">
                <div class="flex">
                    <img :src="client1" class="h-11 w-11 rounded-full shadow-sm dark:shadow-gray-700" alt="">
                    <div class="overflow-hidden ms-3">
                        <router-link to="#" class="block font-semibold text-truncate">Calvin Carlo</router-link>
                        <span class="text-slate-400 flex items-center text-sm"><span class="bg-green-600 text-white text-[10px] font-bold rounded-full size-2 me-1"></span> Online</span>
                    </div>
                </div>

                <div class="dropdown relative">
                    <button ref="dropdownToggle2" @click="dropdownOpen2 = !dropdownOpen2"
                        class="dropdown-toggle items-center" type="button">
                        <span class="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"><i class="mdi mdi-dots-vertical"></i></span>
                    </button>

                    <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 "
                        v-show="dropdownOpen2">
                        <ul class="py-2 text-start">
                            <li>
                                <router-link to="" class="block font-medium py-1 px-4 text-slate-400 dark:text-white/70 hover:text-slate-900 dark:hover:text-white"><i class="mdi mdi-account-outline"></i> Profile</router-link>
                            </li>
                            <li>
                                <router-link to="" class="block font-medium py-1 px-4 text-slate-400 dark:text-white/70 hover:text-slate-900 dark:hover:text-white"><i class="mdi mdi-cog-outline"></i> Profile Settings</router-link>
                            </li>
                            <li>
                                <router-link to="" class="block font-medium py-1 px-4 text-slate-400 dark:text-white/70 hover:text-slate-900 dark:hover:text-white"><i class="mdi mdi-trash-can-outline"></i> Delete</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <ul class="p-4 list-none mb-0 bg-[url('../../assets/images/bg-chat.png')] bg-no-repeat bg-center bg-cover" data-simplebar :class="addclass">
                <li>
                    <div class="inline-block">
                        <div class="flex mb-3">
                            <div class="relative">
                                <img :src="client1" class="size-9 min-w-[36px] rounded-full shadow-sm dark:shadow-gray-700" alt="">
                                <span class="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 ping">
                                    <span class="absolute h-2 w-2 bg-green-600 top-0 end-0 rounded-full animate-"></span>
                                </span>
                            </div>

                            <div class="ms-2 max-w-lg">
                                <p class="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow-sm dark:shadow-gray-700 px-3 py-2 rounded mb-1">Hey Cristina</p>
                                <span class="text-slate-400 text-sm"><i class="mdi mdi-clock-outline me-1"></i>59 min ago</span>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="text-end">
                    <div class="inline-block">
                        <div class="flex mb-3">
                            <div class="relative order-2">
                                <img :src="client5"
                                    class="size-9 min-w-[36px] rounded-full shadow-sm dark:shadow-gray-700" alt="">
                                <span
                                    class="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 ">
                                    <span class="absolute h-2 w-2 bg-green-600 top-0 end-0 rounded-full animate-ping"></span>
                                </span>
                            </div>

                            <div class="me-2 max-w-lg">
                                <p
                                    class="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow-sm dark:shadow-gray-700 px-3 py-2 rounded mb-1">
                                    Hello Calvin</p>
                                <span class="text-slate-400 text-sm"><i class="mdi mdi-clock-outline me-1"></i>45 min
                                    ago</span>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="text-end">
                    <div class="inline-block">
                        <div class="flex mb-3">
                            <div class="relative order-2">
                                <img :src="client5"
                                    class="size-9 min-w-[36px] rounded-full shadow-sm dark:shadow-gray-700" alt="">
                                <span class="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 ">
                                    <span class="absolute h-2 w-2 bg-green-600 top-0 end-0 rounded-full animate-ping"></span>
                                </span>
                            </div>

                            <div class="me-2 max-w-lg">
                                <p
                                    class="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow-sm dark:shadow-gray-700 px-3 py-2 rounded mb-1">
                                    How can i help you?</p>
                                <span class="text-slate-400 text-sm"><i class="mdi mdi-clock-outline me-1"></i>44 min
                                    ago</span>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="inline-block">
                        <div class="flex mb-3">
                            <div class="relative">
                                <img :src="client1"
                                    class="size-9 min-w-[36px] rounded-full shadow-sm dark:shadow-gray-700" alt="">
                                <span class="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 ">
                                    <span class="absolute h-2 w-2 bg-green-600 top-0 end-0 rounded-full animate-ping"></span>
                                </span>
                            </div>

                            <div class="ms-2 max-w-lg">
                                <p
                                    class="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow-sm dark:shadow-gray-700 px-3 py-2 rounded mb-1">
                                    Nice to meet you</p>
                                <span class="text-slate-400 text-sm"><i class="mdi mdi-clock-outline me-1"></i>42 min
                                    ago</span>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="inline-block">
                        <div class="flex mb-3">
                            <div class="relative">
                                <img :src="client1"
                                    class="size-9 min-w-[36px] rounded-full shadow-sm dark:shadow-gray-700" alt="">
                                <span class="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 ">
                                    <span class="absolute h-2 w-2 bg-green-600 top-0 end-0 rounded-full animate-ping"></span>
                                </span>
                            </div>

                            <div class="ms-2 max-w-lg">
                                <p
                                    class="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow-sm dark:shadow-gray-700 px-3 py-2 rounded mb-1">
                                    Hope you are doing fine?</p>
                                <span class="text-slate-400 text-sm"><i class="mdi mdi-clock-outline me-1"></i>40 min
                                    ago</span>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="text-end">
                    <div class="inline-block">
                        <div class="flex mb-3">
                            <div class="relative order-2">
                                <img :src="client5"
                                    class="size-9 min-w-[36px] rounded-full shadow-sm dark:shadow-gray-700" alt="">
                                <span class="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 ">
                                    <span class="absolute h-2 w-2 bg-green-600 top-0 end-0 rounded-full animate-ping"></span>
                                </span>
                            </div>

                            <div class="me-2 max-w-lg">
                                <p
                                    class="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow-sm dark:shadow-gray-700 px-3 py-2 rounded mb-1">
                                    I'm good thanks for asking</p>
                                <span class="text-slate-400 text-sm"><i class="mdi mdi-clock-outline me-1"></i>38 min
                                    ago</span>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="inline-block">
                        <div class="flex mb-3">
                            <div class="relative">
                                <img :src="client1"
                                    class="size-9 min-w-[36px] rounded-full shadow-sm dark:shadow-gray-700" alt="">
                                <span class="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 ">
                                    <span class="absolute h-2 w-2 bg-green-600 top-0 end-0 rounded-full animate-ping"></span>
                                </span>
                            </div>

                            <div class="ms-2 max-w-lg">
                                <p
                                    class="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow-sm dark:shadow-gray-700 px-3 py-2 rounded mb-1">
                                    I am intrested to know more about your prices and services you
                                    offer</p>
                                <span class="text-slate-400 text-sm"><i class="mdi mdi-clock-outline me-1"></i>35 min
                                    ago</span>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="text-end">
                    <div class="inline-block">
                        <div class="flex mb-3">
                            <div class="relative order-2">
                                <img :src="client5"
                                    class="size-9 min-w-[36px] rounded-full shadow-sm dark:shadow-gray-700" alt="">
                                <span class="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 ">
                                    <span class="absolute h-2 w-2 bg-green-600 top-0 end-0 rounded-full animate-ping"></span>
                                </span>
                            </div>

                            <div class="me-2 max-w-lg">
                                <p
                                    class="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow-sm dark:shadow-gray-700 px-3 py-2 rounded mb-1">
                                    Sure please check below link to find more useful information <a
                                        href="https://shreethemes.in/techwind/" target="_blank"
                                        class="text-indigo-600">https://shreethemes.in/techwind/</a>
                                </p>
                                <span class="text-slate-400 text-sm"><i class="mdi mdi-clock-outline me-1"></i>29 min
                                    ago</span>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="inline-block">
                        <div class="flex mb-3">
                            <div class="relative">
                                <img :src="client1"
                                    class="size-9 min-w-[36px] rounded-full shadow-sm dark:shadow-gray-700" alt="">
                                <span class="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 ">
                                    <span class="absolute h-2 w-2 bg-green-600 top-0 end-0 rounded-full animate-ping"></span>
                                </span>
                            </div>

                            <div class="ms-2 max-w-lg">
                                <p
                                    class="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow-sm dark:shadow-gray-700 px-3 py-2 rounded mb-1">
                                    Thank you 😊</p>
                                <span class="text-slate-400 text-sm"><i class="mdi mdi-clock-outline me-1"></i>26 min
                                    ago</span>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="text-end">
                    <div class="inline-block">
                        <div class="flex mb-3">
                            <div class="relative order-2">
                                <img :src="client5"
                                    class="size-9 min-w-[36px] rounded-full shadow-sm dark:shadow-gray-700" alt="">
                                <span class="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 ">
                                    <span class="absolute h-2 w-2 bg-green-600 top-0 end-0 rounded-full animate-ping"></span>
                                </span>
                            </div>

                            <div class="me-2 max-w-lg">
                                <p
                                    class="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow-sm dark:shadow-gray-700 px-3 py-2 rounded mb-1">
                                    Welcome</p>
                                <span class="text-slate-400 text-sm"><i class="mdi mdi-clock-outline me-1"></i>15 min
                                    ago</span>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="inline-block">
                        <div class="flex items-center mb-3">
                            <div class="relative">
                                <img :src="client1"
                                    class="size-9 min-w-[36px] rounded-full shadow-sm dark:shadow-gray-700" alt="">
                                <span class="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 ">
                                    <span class="absolute h-2 w-2 bg-green-600 top-0 end-0 rounded-full animate-ping"></span>
                                </span>
                            </div>

                            <div class="ms-2 max-w-lg">
                                <p class="text-slate-400 text-sm rounded mb-1">Frank Williams is
                                    typing
                                    <span class="animate-typing ms-1">
                                        <span
                                            class="dot inline-block size-1 bg-slate-400 -mr-px opacity-60 rounded-full"></span>
                                        <span
                                            class="dot inline-block size-1 bg-slate-400 -mr-px opacity-60 rounded-full"></span>
                                        <span
                                            class="dot inline-block size-1 bg-slate-400 -mr-px opacity-60 rounded-full"></span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <div class="p-2 border-t border-gray-100 dark:border-gray-800">
                <div class="flex ">
                    <input type="text"
                        class="form-input w-full py-2 px-3 h-9 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Enter Message...">

                    <div class="min-w-[125px] text-end ">
                        <router-link to="#"
                            class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[16px] text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i
                                class="mdi mdi-send"></i></router-link>
                        <router-link to="#"
                            class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[16px] text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mx-1"><i
                                class="mdi mdi-emoticon-happy-outline"></i></router-link>
                        <router-link to="#"
                            class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[16px] text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i
                                class="mdi mdi-paperclip"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
   

</template>

<script setup>
    import client1 from '@/assets/images/client/01.jpg'
    import client5 from '@/assets/images/client/05.jpg'
    import { onMounted,defineProps, onUnmounted, ref } from 'vue';

    defineProps({
        addclass:String
    })


    onMounted(()=>{
        // document.addEventListener('click', handleClickOutside2);
    })
    onUnmounted(()=>{
        // document.removeEventListener('click', handleClickOutside2);
    })

    const dropdownOpen2 = ref(false)


</script>
