<template>
    <div class="xl:col-span-3 lg:col-span-4 md:col-span-4 mx-6">
        <div class="p-6 relative rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 -mt-48">
            <div class="profile-pic text-center mb-5">
                <input id="pro-img" name="profile-image" type="file" class="hidden" @change="loadFile" />
                <div>
                    <div class="relative size-24 mx-auto">
                        <img :src="imageSrc" class="rounded-full shadow-sm dark:shadow-gray-700 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="">
                        <label class="absolute inset-0 cursor-pointer" for="pro-img"></label>
                    </div>

                    <div class="mt-4">
                        <h5 class="text-lg font-semibold">Cristina Murfy</h5>
                        <p class="text-slate-400">cristina@hotmail.com</p>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-100 dark:border-gray-700">
                <ul class="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">
                    <li :class="activeMenu === '/profile' ? 'active' : ''"  class="navbar-item account-menu">
                        <router-link to="/profile" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 text-[18px] mb-0"><i class="uil uil-dashboard"></i></span>
                            <h6 class="mb-0 font-semibold">Profile</h6>
                        </router-link>
                    </li>

                    <li :class="activeMenu === '/profile-billing' ? 'active' : ''"  class="navbar-item account-menu">
                        <router-link to="/profile-billing" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 text-[18px] mb-0"><i class="uil uil-diary-alt"></i></span>
                            <h6 class="mb-0 font-semibold">Billing Info</h6>
                        </router-link>
                    </li>

                    <li :class="activeMenu === '/profile-payment' ? 'active' : ''"  class="navbar-item account-menu">
                        <router-link to="/profile-payment" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 text-[18px] mb-0"><i class="uil uil-credit-card"></i></span>
                            <h6 class="mb-0 font-semibold">Payment</h6>
                        </router-link>
                    </li>

                    <li :class="activeMenu === '/profile-social' ? 'active' : ''"  class="navbar-item account-menu">
                        <router-link to="/profile-social" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 text-[18px] mb-0"><i class="uil uil-process"></i></span>
                            <h6 class="mb-0 font-semibold">Social Profile</h6>
                        </router-link>
                    </li>

                    <li :class="activeMenu === '/profile-notification' ? 'active' : ''"  class="navbar-item account-menu">
                        <router-link to="/profile-notification" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 text-[18px] mb-0"><i class="uil uil-bell"></i></span>
                            <h6 class="mb-0 font-semibold">Notifications</h6>
                        </router-link>
                    </li>

                    <li :class="activeMenu === '/profile-setting' ? 'active' : ''"  class="navbar-item account-menu">
                        <router-link to="/profile-setting" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 text-[18px] mb-0"><i class="uil uil-setting"></i></span>
                            <h6 class="mb-0 font-semibold">Settings</h6>
                        </router-link>
                    </li>
                            
                    <li :class="activeMenu === '/auth-lock-screen' ? 'active' : ''"  class="navbar-item account-menu">
                        <router-link to="/auth-lock-screen" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                            <span class="me-2 text-[18px] mb-0"><i class="uil uil-power"></i></span>
                            <h6 class="mb-0 font-semibold">Sign Out</h6>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import bg from '@/assets/images/client/05.jpg'


const activeMenu = ref('')

const imageSrc = ref(bg)
const image = ref('')

onMounted(()=>{
    activeMenu.value =  window.location.pathname
})

const loadFile = (event) => {
    image.value = document.getElementById(event.target.name);
    imageSrc.value = URL.createObjectURL(event.target.files[0]);
}
</script>
