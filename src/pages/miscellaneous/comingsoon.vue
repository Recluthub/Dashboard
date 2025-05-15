<template>
    <div>
        <section class="relative bg-[url('../../assets/images/utility.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-black/25"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
            <div class="container-fluid relative">
                <div class="grid grid-cols-1">
                    <div class="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div class="text-center">
                            <router-link to="/"><img :src="logo" class="mx-auto" alt=""></router-link>
                        </div>
                        <div class="title-heading text-center my-auto">
                            <h1 class="text-white mt-3 mb-6 md:text-5xl text-3xl font-bold">We Are Coming Soon...</h1>
                            <p class="text-white/70 text-lg max-w-xl mx-auto">Start working with Techwind that can provide
                                everything you need to generate awareness, drive traffic, connect.</p>

                            <div id="countdown">
                                <ul class="count-down list-none inline-block text-white text-center mt-8 m-6">
                                    <li id="days" class="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2"> {{ days }}<p class="count-head">Days</p></li>
                                    <li id="hours" class="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2"> {{ hours }}<p class="count-head">Hours</p></li>
                                    <li id="mins" class="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{{ minutes }}<p class="count-head">minutes</p></li>
                                    <li id="secs" class="text-[40px] leading-[110px] size-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2"> {{ seconds }}<p class="count-head">seconds</p></li>
                                    <li id="end" class="h1"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="mb-0 text-slate-400">© {{ date1 }} Techwind. Design with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <switcher :back=true />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import switcher from '@/components/switcher.vue';
import logo from '@/assets/images/logo-icon-64.png';

// Reactive state
const date1 = ref(new Date().getFullYear());
const date = ref('');
const now = ref('');
const countDownToTime = new Date("Sep 26, 2025 00:00:00").getTime();
const difference = ref('');
const days = ref('');
const hours = ref('');
const minutes = ref('');
const seconds = ref('');
let intervalId;

// Methods
const tickTock = () => {
  date.value = new Date();
  now.value = date.value.getTime();
  difference.value = countDownToTime - now.value;
  days.value = Math.floor(difference.value / (1000 * 60 * 60 * 24));
  hours.value = 23 - date.value.getHours();
  minutes.value = 60 - date.value.getMinutes();
  seconds.value = 60 - date.value.getSeconds();
};

onMounted(() => {
  intervalId = setInterval(() => {
    tickTock();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
