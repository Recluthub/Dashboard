<template>
    <div>
         <div class="fixed top-[30%] -end-3 z-50">
            <span class="relative inline-block rotate-90">
                <input type="checkbox" class="checkbox opacity-0 absolute" id="chk" @change="changeMode($event)" />
                <label class="label bg-slate-900 dark:bg-white shadow-sm dark:shadow-gray-700 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
                    <i class="uil uil-moon text-[20px] text-yellow-500"></i>
                    <i class="uil uil-sun text-[20px] text-yellow-500"></i>
                    <span class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
                </label>
            </span>
        </div>

        <div class="fixed top-[40%] -end-3 z-50">
            <router-link to="#" id="switchRtl" @click="decrement">
                <span class="py-1 px-3 hidden relative  rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow-sm dark:shadow-gray-700 font-bold rtl:block ltr:hidden"    @click="changeThem($event)">LTR</span>
                <span class="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow-sm dark:shadow-gray-700 font-bold ltr:block rtl:hidden"   @click="changeThem($event)">RTL</span>
            </router-link>
        </div>

        <div v-if="back" class="fixed bottom-3 end-3">
            <router-link to="/" class="back-button size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><i data-feather="arrow-left" class="h-4 w-4"></i></router-link>
        </div>
       

    </div>
</template>

<script setup>
import feather from 'feather-icons'
import {defineProps, onMounted} from 'vue'

defineProps({
  back: Boolean
});

const htmlTag = document.getElementsByTagName("html")[0]

onMounted(()=>{
    feather.replace()
})

const changeThem = (event) =>{
    if (event.target.innerText === "LTR") {
        htmlTag.dir = "ltr"
    }
    else {
        htmlTag.dir = "rtl"
    }
}

const changeMode = () => {
    if (htmlTag.className.includes("dark")) {
        htmlTag.className = 'light'
    } else {
        htmlTag.className = 'dark'
    }
}

</script>

<style  scoped>
.invisible {
  visibility: hidden;
}
</style>