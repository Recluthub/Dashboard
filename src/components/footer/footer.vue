<template>
    <footer class="shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 px-6 py-4">
        <div class="container-fluid">
            <div class="grid grid-cols-1">
                <div class="sm:text-start text-center mx-md-2">
                    <p class="mb-0 text-slate-400">©
                        {{ date }} Techwind. Design & Develop with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import { ref } from 'vue';
    const date = ref(new Date().getFullYear());
</script>
