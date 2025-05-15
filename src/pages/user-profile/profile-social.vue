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
                                            <h5 class="text-lg font-semibold">Social Profiles :</h5>
                                        </div>
            
                                        <div class="p-6">

                                            <div v-for="item in datas" :key="item" class="md:flex mt-8 first:mt-0">
                                                <div class="md:w-1/3">
                                                    <span class="font-medium">{{item.name}}</span>
                                                </div>
            
                                                <div class="md:w-2/3 mt-4 md:mt-0">
                                                    <form>
                                                        <div class="form-icon relative">
                                                            <i :data-feather="item.icon" class="size-4 absolute top-3 start-4"></i>
                                                            <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" :placeholder="item.placeholder " id="twitter_name" name="name" required="">
                                                        </div>
                                                    </form>
            
                                                    <p class="text-slate-400 mt-1">{{item.desc}}</p>
                                                </div>
                                            </div>
                                                    
                                            <div class="lg:flex">
                                                <div class="lg:w-1/3">
                                                    <button class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Save Social Profile</button>
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
const datas = ref([
  {
    name: 'Twitter',
    icon: 'twitter',
    placeholder: 'Twitter Profile Name',
    desc: 'Add your Twitter username (e.g. jennyhot).'
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    placeholder: 'Facebook Profile Name',
    desc: 'Add your Facebook username (e.g. jennyhot).'
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    placeholder: 'Instagram Profile Name',
    desc: 'Add your Instagram username (e.g. jennyhot).'
  },
  {
    name: 'Linkedin',
    icon: 'linkedin',
    placeholder: 'Linkedin Profile Name',
    desc: 'Add your Linkedin username (e.g. jennyhot).'
  },
  {
    name: 'Youtube',
    icon: 'youtube',
    placeholder: 'Youtube URL',
    desc: 'Add your Youtube channel URL.'
  },
]);

// Methods
const handleClick = () => {
  toggle.value = !toggle.value;
};

const darkmode = () => {
  document.documentElement.classList.remove('dark');
};

const bodurtl = () => {
  document.documentElement.removeAttribute('dir', 'rtl');
};

// Lifecycle Hook
onMounted(() => {
  darkmode();
  bodurtl();
});
</script>