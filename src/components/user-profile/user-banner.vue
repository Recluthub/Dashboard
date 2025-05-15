<template>
    <div class="grid grid-cols-1">
        <div class="profile-banner relative text-transparent rounded-md shadow-sm dark:shadow-gray-700 overflow-hidden">
            <input id="pro-banner" name="profile-banner" type="file" class="hidden" @change="loadFile">
            <div class="relative shrink-0">
                <img :src="imageSrc" class="h-80 w-full object-cover" id="profile-banner" alt=""/>
                <div class="absolute inset-0 bg-black/70"></div>
                <label class="absolute inset-0 cursor-pointer" for="pro-banner"></label>
            </div>
        </div>
    </div>
</template>

<script setup>
    import bg from '@/assets/images/blog/bg.jpg'
    import { ref } from 'vue';

    const imageSrc = ref(bg)
    const image = ref('')

    const loadFile = (event) => {
        image.value = document.getElementById(event.target.name);
        imageSrc.value = URL.createObjectURL(event.target.files[0]);
    }
</script>