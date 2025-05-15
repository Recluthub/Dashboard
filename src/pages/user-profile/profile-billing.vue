<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />
           
                <div class="container-fluid relative px-3">
                    <div class="layout-specing">
                        <banner />

                        <div class="grid md:grid-cols-12 grid-cols-1">
                           <usertab />
                           
                           <div class="xl:col-span-9 lg:col-span-8 md:col-span-8 mt-6">
                                <div class="grid grid-cols-1 gap-6">
                                    <div class="p-6 relative rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                        <h6 class="text-slate-400 mb-0">The following addresses will be used on the checkout page by default.</h6>
                                        <div class="md:flex mt-6">
                                            <div class="md:w-1/2 md:px-3">
                                                <div class="flex items-center mb-4 justify-between">
                                                    <h5 class="text-xl font-semibold">Billing Address:</h5>
                                                    <router-link to="#" class="text-indigo-600 text-lg"><i class="uil uil-edit align-middle"></i></router-link>
                                                </div>
                                                <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
                                                    <p class="text-lg font-semibold mb-2">Cristina Murfy</p>

                                                    <ul class="list-none">
                                                        <li class="flex">
                                                            <i class="uil uil-map-marker text-lg me-2"></i>
                                                            <p class="text-slate-400">C/54 Northwest Freeway, Suite 558, <br> Houston, USA 485</p>
                                                        </li>

                                                        <li class="flex mt-1">
                                                            <i class="uil uil-phone text-lg me-2"></i>
                                                            <p class="text-slate-400">+123 897 5468</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            <div class="md:w-1/2 md:px-3 mt-[30] md:mt-0">
                                                <div class="flex items-center mb-4 justify-between">
                                                    <h5 class="text-xl font-semibold">Shipping Address:</h5>
                                                    <router-link to="#" class="text-indigo-600 text-lg"><i class="uil uil-edit align-middle"></i></router-link>
                                                </div>
                                                <div class="pt-4 border-t border-gray-100 dark:border-gray-700">
                                                    <p class="text-lg font-semibold mb-2">Cristina Murfy</p>

                                                    <ul class="list-none">
                                                        <li class="flex">
                                                            <i class="uil uil-map-marker text-lg me-2"></i>
                                                            <p class="text-slate-400">C/54 Northwest Freeway, Suite 558, <br> Houston, USA 485</p>
                                                        </li>

                                                        <li class="flex mt-1">
                                                            <i class="uil uil-phone text-lg me-2"></i>
                                                            <p class="text-slate-400">+123 897 5468</p>
                                                        </li>
                                                    </ul>
                                                </div>
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
import usertab from '@/components/user-profile/user-tab.vue';
import banner from '@/components/user-profile/user-banner.vue';

const toggle = ref(true);

const handleClick = () => {
  toggle.value = !toggle.value;
};

const darkmode = () => {
  document.documentElement.classList.remove('dark');
};

const bodurtl = () => {
  document.documentElement.removeAttribute('dir', 'rtl');
};

onMounted(() => {
  darkmode();
  bodurtl();
});
</script>