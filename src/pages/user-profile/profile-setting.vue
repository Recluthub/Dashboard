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
                                        <h5 class="text-lg font-semibold mb-4">Personal Detail :</h5>
                                        <form>
                                            <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                                <div>
                                                    <label class="form-label font-medium">First Name : <span class="text-red-600">*</span></label>
                                                    <div class="form-icon relative mt-2">
                                                        <i data-feather="user" class="size-4 absolute top-3 start-4"></i>
                                                        <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="First Name:" id="firstname" name="name" required="">
                                                    </div>
                                                </div>
                                                <div>
                                                    <label class="form-label font-medium">Last Name : <span class="text-red-600">*</span></label>
                                                    <div class="form-icon relative mt-2">
                                                        <i data-feather="user-check" class="size-4 absolute top-3 start-4"></i>
                                                        <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Last Name:" id="lastname" name="name" required="">
                                                    </div>
                                                </div>
                                                <div>
                                                    <label class="form-label font-medium">Your Email : <span class="text-red-600">*</span></label>
                                                    <div class="form-icon relative mt-2">
                                                        <i data-feather="mail" class="size-4 absolute top-3 start-4"></i>
                                                        <input type="email" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email" name="email" required="">
                                                    </div>
                                                </div>
                                                <div>
                                                    <label class="form-label font-medium">Occupation : </label>
                                                    <div class="form-icon relative mt-2">
                                                        <i data-feather="bookmark" class="size-4 absolute top-3 start-4"></i>
                                                        <input name="name" id="occupation" type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Occupation :">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="grid grid-cols-1">
                                                <div class="mt-5">
                                                    <label class="form-label font-medium">Description : </label>
                                                    <div class="form-icon relative mt-2">
                                                        <i data-feather="message-circle" class="size-4 absolute top-3 start-4"></i>
                                                        <textarea name="comments" id="comments" class="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <input type="submit" id="submit" name="send" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5" value="Save Changes">
                                        </form>
                                    </div>

                                    <div class="p-6 relative rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                        <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                                            <div>
                                                <h5 class="text-lg font-semibold mb-4">Contact Info :</h5>
            
                                                <form>
                                                    <div class="grid grid-cols-1 gap-5">
                                                        <div>
                                                            <label class="form-label font-medium">Phone No. :</label>
                                                            <div class="form-icon relative mt-2">
                                                                <i data-feather="phone" class="size-4 absolute top-3 start-4"></i>
                                                                <input name="number" id="number" type="number" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Phone :">
                                                            </div>
                                                        </div>
            
                                                        <div>
                                                            <label class="form-label font-medium">Website :</label>
                                                            <div class="form-icon relative mt-2">
                                                                <i data-feather="globe" class="size-4 absolute top-3 start-4"></i>
                                                                <input name="url" id="url" type="url" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Url :">
                                                            </div>
                                                        </div>
                                                    </div>
            
                                                    <button class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Add</button>
                                                </form>
                                            </div>
                                            
                                            <div> 
                                                <h5 class="text-lg font-semibold mb-4">Change password :</h5>
                                                <form>
                                                    <div class="grid grid-cols-1 gap-5">
                                                        <div>
                                                            <label class="form-label font-medium">Old password :</label>
                                                            <div class="form-icon relative mt-2">
                                                                <i data-feather="key" class="size-4 absolute top-3 start-4"></i>
                                                                <input type="password" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Old password" required="">
                                                            </div>
                                                        </div>
                
                                                        <div>
                                                            <label class="form-label font-medium">New password :</label>
                                                            <div class="form-icon relative mt-2">
                                                                <i data-feather="key" class="size-4 absolute top-3 start-4"></i>
                                                                <input type="password" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="New password" required="">
                                                            </div>
                                                        </div>
                
                                                        <div>
                                                            <label class="form-label font-medium">Re-type New password :</label>
                                                            <div class="form-icon relative mt-2">
                                                                <i data-feather="key" class="size-4 absolute top-3 start-4"></i>
                                                                <input type="password" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Re-type New password" required="">
                                                            </div>
                                                        </div>
                                                    </div>
                
                                                    <button class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Save password</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="p-6 relative rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                        <h5 class="text-lg font-semibold mb-4 text-red-600">Delete Account :</h5>

                                        <p class="text-slate-400 mb-4">Do you want to delete the account? Please press below "Delete" button</p>

                                        <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md">Delete</router-link>
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

// State variable using ref
const toggle = ref(true);

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