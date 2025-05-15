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
                                    <div class="relative rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                        <div class="p-6 border-b border-gray-100 dark:border-gray-700">
                                            <h5 class="text-lg font-semibold">Account Notifications :</h5>
                                        </div>
            
                                        <div class="p-6">
                                            <div class="flex justify-between pb-4">
                                                <h6 class="mb-0 font-medium">When someone mentions me</h6>
                                                <div class="">
                                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="noti1">
                                                    <label class="form-check-label" for="noti1"></label>
                                                </div>
                                            </div>
                                            <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                                <h6 class="mb-0 font-medium">When someone follows me</h6>
                                                <div class="">
                                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" checked id="noti2">
                                                    <label class="form-check-label" for="noti2"></label>
                                                </div>
                                            </div>
                                            <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                                <h6 class="mb-0 font-medium">When shares my activity</h6>
                                                <div class="">
                                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="noti3">
                                                    <label class="form-check-label" for="noti3"></label>
                                                </div>
                                            </div>
                                            <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                                <h6 class="mb-0 font-medium">When someone messages me</h6>
                                                <div class="">
                                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="noti4">
                                                    <label class="form-check-label" for="noti4"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div class="relative rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                        <div class="p-6 border-b border-gray-100 dark:border-gray-700">
                                            <h5 class="text-lg font-semibold">Marketing Notifications :</h5>
                                        </div>
            
                                        <div class="p-6">
                                            <div class="flex justify-between pb-4">
                                                <h6 class="mb-0 font-medium">There is a sale or promotion</h6>
                                                <div class="">
                                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="noti5">
                                                    <label class="form-check-label" for="noti5"></label>
                                                </div>
                                            </div>
                                            <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                                <h6 class="mb-0 font-medium">Company news</h6>
                                                <div class="">
                                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="noti6">
                                                    <label class="form-check-label" for="noti6"></label>
                                                </div>
                                            </div>
                                            <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                                <h6 class="mb-0 font-medium">Weekly jobs</h6>
                                                <div class="">
                                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" checked id="noti7">
                                                    <label class="form-check-label" for="noti7"></label>
                                                </div>
                                            </div>
                                            <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                                <h6 class="mb-0 font-medium">Unsubscribe News</h6>
                                                <div class="">
                                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" checked id="noti8">
                                                    <label class="form-check-label" for="noti8"></label>
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