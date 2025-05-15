<template>
    <div>
        <!-- Start -->
        <section class="relative bg-indigo-600/5">
            <div class="container-fluid relative">
                <div class="grid grid-cols-1">
                    <div class="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div class="text-center">
                            <router-link to="/"><img :src="logo" class="mx-auto" alt=""></router-link>
                        </div>
                        <div class="title-heading text-center my-auto">
                            <img :src="error" class="mx-auto" alt="">
                            <h1 class="mt-3 mb-6 md:text-5xl text-3xl font-bold">Page Not Found?</h1>
                            <p class="text-slate-400">Whoops, this is embarassing. <br> Looks like the page you were looking for wasn't found.</p>
                            <div class="mt-4">
                                <router-link to="/" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Back to Home</router-link>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="mb-0 text-slate-400">© {{date}} Techwind. Design with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <switcher :back=true />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import switcher from '@/components/switcher.vue';
import logo from '@/assets/images/logo-icon-64.png'
import error from '@/assets/images/error.png'

const date = ref(new Date().getFullYear());
</script>

