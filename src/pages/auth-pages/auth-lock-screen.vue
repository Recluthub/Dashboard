<template>
    <div>
        <section class="relative overflow-hidden">
            <div class="absolute inset-0 bg-indigo-600/[0.02]"></div>
            <div class="container-fluid relative">
                <div class="md:flex items-center">
                    <div class="xl:w-[30%] lg:w-1/3 md:w-1/2">
                        <div class="relative md:flex flex-col md:min-h-screen justify-center bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 md:px-10 py-10 px-4 z-1">
                            <div class="text-center">
                                <router-link to="/"><img :src="logo" class="mx-auto" alt=""></router-link>
                            </div>
                            <div class="title-heading text-center md:my-auto my-20">
                                <div class="text-center">
                                    <img :src="client" class="mx-auto size-24 rounded-full shadow-sm dark:shadow-gray-700" alt="">
                                    <h5 class="mb-6 mt-4 text-xl font-semibold">Jenny Jimenez</h5>
                                </div>
                                <form class="text-start">
                                    <div class="grid grid-cols-1">
                                        <div class="mb-4">
                                            <label class="font-semibold" for="LoginPassword">Password:</label>
                                            <input id="LoginPassword" type="password" class="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required="" placeholder="Password:">
                                        </div>
        
                                        <div class="flex justify-between mb-4">
                                            <div class="flex items-center mb-0">
                                                <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="RememberMe">
                                                <label class="form-checkbox-label text-slate-400" for="RememberMe">Remember me</label>
                                            </div>
                                            <p class="text-slate-400 mb-0"><router-link to="/auth-re-password" class="text-slate-400">Forgot password ?</router-link></p>
                                        </div>
                                         
                                        <router-link to="/profile">
                                            <div class="">
                                                <input type="submit" class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Login / Sign in">
                                            </div>
                                        </router-link>
                                    </div>
                                </form>
                            </div>
                            <div class="text-center">
                                <p class="mb-0 text-slate-400">© {{date}} Techwind. Design with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                            </div>
                        </div>
                    </div>

                    <div class="xl:w-[70%] lg:w-2/3 md:w-1/2 flex justify-center mx-6 md:my-auto my-20">
                        <div>
                            <div class="relative">
                                <div class="absolute top-20 start-20 bg-indigo-600/[0.02] size-[1200px] rounded-full"></div>
                                <div class="absolute bottom-20 -end-20 bg-indigo-600/[0.02] size-[600px] rounded-full"></div>
                            </div>
    
                            <div class="text-center">
                                <div>
                                    <img :src="contact" class="max-w-xl mx-auto" alt="">
                                    <div class="relative max-w-xl mx-auto text-start">
                                        <div class="relative p-8 border-2 border-indigo-600 rounded-[30px]">
                                            <span class="absolute w-28 border-[6px] border-white dark:border-slate-900 -bottom-1 start-16 z-2"></span>
                                            <span class="absolute border-2 border-indigo-600 rounded-none rounded-e-[50px] w-20 h-20 -bottom-[80px] start-[60px] z-3 border-s-0 border-b-0"></span>
                                            <span class="font-semibold leading-normal">
                                                Launch your campaign and benefit from our expertise on designing and managing conversion centered latest Tailwind CSS html page.
                                            </span>
            
                                            <div class="absolute text-8xl -top-0 start-4 text-indigo-600/10 dark:text-indigo-600/20 -z-1">
                                                <i class="mdi mdi-format-quote-open"></i>
                                            </div>
                                        </div>
            
                                        <div class="text-lg font-semibold mt-6 ms-44">
                                             - Techwind
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import logo from '@/assets/images/logo-icon-64.png'
    import client from '@/assets/images/client/05.jpg'
    import contact from '@/assets/images/contact.svg'
    import Switcher from '@/components/switcher.vue';

    const date = ref(new Date().getFullYear());
</script>

