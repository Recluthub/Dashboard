<template>
        <div class="dropdown inline-block relative">
            <button @click="toggle" class="dropdown-toggle inline-flex text-[20px] text-center text-slate-400 rounded-full" type="button">
                <i data-feather="more-horizontal" class="size-5"></i>
            </button>
            <div v-if="show" class="dropdown-menu absolute end-0 m-0 mt-1 z-10 w-28 rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 ">
                <ul class="py-2 text-start" aria-labelledby="dropdownDefault">
                    <li>
                        <router-link to="" class="block text-sm py-0.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">Today</router-link>
                    </li>
                    <li>
                        <router-link to="" class="block text-sm py-0.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">Weekly</router-link>
                    </li>
                    <li>
                        <router-link to="" class="block text-sm py-0.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">Monthly</router-link>
                    </li>
                    <li>
                        <router-link to="" class="block text-sm py-0.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">Yearly</router-link>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script setup>
    import { ref } from 'vue';

    let show = ref(false)

    let toggle =() =>{
        show.value = !show.value
    }
</script>

