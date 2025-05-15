<template>
    <div>
        <div class="container-fluid relative px-3">
            <div class="layout-specing">
                <div class="md:flex justify-between items-center">
                    <h5 class="text-lg font-semibold">Email / Messages</h5>
                    <ul class="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                        <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                            <router-link to="/">Techwind</router-link></li>
                        <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                            <i class="uil uil-angle-right-b"></i>
                        </li>
                        <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white">Emails</li>
                    </ul>
                </div>

                <div class="grid md:grid-cols-12 grid-cols-1 mt-6 gap-2">
                    <div class="xl:col-span-2 lg:col-span-3 md:col-span-4">
                        <div class="rounded-md shadow-sm dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                            <router-link to="#"  @click="modal = !modal" class="py-2 px-5 inline-flex justify-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"><i class="uil uil-plus me-1"></i> Compose</router-link>
                                <ul class="flex-column mt-3">
                                    <li>
                                        <button @click="activeId = 1" class="px-4 py-2 text-base font-semibold rounded-md w-full hover:text-indigo-600 duration-500 text-start cursor-pointer" :class="activeId === 1 ? 'text-white bg-indigo-600 hover:text-white' : ''"><i class="uil uil-inbox me-1"></i> Inbox</button>
                                    </li>
                                    <li>
                                        <button @click="activeId = 2" class="px-4 py-2 text-base font-semibold rounded-md w-full mt-2 duration-500 text-start cursor-pointer" :class="activeId === 2 ? 'text-white bg-indigo-600 hover:text-white' : ''"><i class="uil uil-envelope-star me-1"></i> Starred</button>
                                    </li>
                                    <li>
                                        <button @click="activeId = 3" class="px-4 py-2 text-base font-semibold rounded-md w-full mt-2 duration-500 text-start cursor-pointer" :class="activeId === 3 ? 'text-white bg-indigo-600 hover:text-white' : ''"><i class="uil uil-envelope-times me-1"></i> Spam</button>
                                    </li>
                                    <li>
                                        <button @click="activeId = 4" class="px-4 py-2 text-base font-semibold rounded-md w-full mt-2 duration-500 text-start cursor-pointer" :class="activeId === 4 ? 'text-white bg-indigo-600 hover:text-white' : ''"><i class="uil uil-envelope-upload me-1"></i> Sent</button>
                                    </li>
                                    <li>
                                        <button @click="activeId = 5" class="px-4 py-2 text-base font-semibold rounded-md w-full mt-2 duration-500 text-start cursor-pointer" :class="activeId === 5 ? 'text-white bg-indigo-600 hover:text-white' : ''"><i class="uil uil-envelope-edit me-1"></i> Drafts</button>
                                    </li>
                                    <li>
                                        <button @click="activeId = 6" class="px-4 py-2 text-base font-semibold rounded-md w-full mt-2 duration-500 text-start cursor-pointer" :class="activeId === 6 ? 'text-white bg-indigo-600 hover:text-white' : ''"><i class="uil uil-trash me-1"></i> Delete</button>
                                    </li>
                                    <li>
                                        <button class="px-4 py-2 text-base font-semibold rounded-md w-full mt-2 duration-500 text-start cursor-pointer"><i class="uil uil-notes me-1"></i> Notes</button>
                                    </li>
                                </ul>
                        </div>
                    </div>

                    <div class="xl:col-span-10 lg:col-span-9 md:col-span-8">
                        <div>
                            <div :class="activeId === 1 ? '' : 'hidden'">
                                <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md">
                                    <table class="w-full text-start">
                                        <thead class="text-base">
                                            <tr>
                                                <th class="text-start p-4 w-10 min-w-[30px] max-w-[30px]">
                                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="allcheck">
                                                </th>
                                                <th class="text-center p-4 w-10 min-w-[30px] max-w-[30px]"></th>
                                                <th class="text-start p-4 w-48 min-w-[200px]">Name</th>
                                                <th class="text-start p-4 w-auto min-w-[300px]">Subject</th>
                                                <th class="text-end p-4 w-48 min-w-[200px]">Date & Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in datas2" :key="item">
                                                <th class="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="firstcheck">
                                                </th>
                                                <td v-if="item.class === 'text-yellow-500'" :class="item.class" class="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <router-link to=""><i class="mdi mdi-star text-[18px] text-yellow-500 align-middle"></i></router-link>
                                                </td>
                                                <td v-else class="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <router-link to=""><i class="mdi mdi-star-outline text-[18px] text-slate-400 align-middle"></i></router-link>
                                                </td>
                                                <td class="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <router-link to="" class="font-semibold hover:text-indigo-600" onclick="emailpreview.showModal()">{{item.name}}</router-link>
                                                </td>
                                                <td class="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <span class="text-slate-400">{{item.desc}}</span>
                                                </td>
                                                <td class="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <span class="text-slate-400">{{item.time}}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="mt-4 flex items-center justify-between">
                                    <div class="">
                                        <router-link to=""
                                            class="h-8 w-8 inline-flex items-center justify-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 border-gray-100 dark:border-gray-700 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full me-1"><i
                                                class="mdi mdi-arrow-left"></i></router-link>
                                        <router-link to="" class="h-8 w-8 inline-flex items-center justify-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 border-gray-100 dark:border-gray-700 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full"><i
                                                class="mdi mdi-arrow-right"></i></router-link>
                                    </div>

                                    <span class="text-slate-400">Showing 1 - 10 out of 45</span>
                                </div>
                            </div>


                            <div :class="activeId === 2 ? '' : 'hidden'">
                                <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md">
                                    <table class="w-full text-start">
                                        <thead class="text-base">
                                            <tr>
                                                <th class="text-start p-4 w-10 min-w-[30px] max-w-[30px]">
                                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="allcheck">
                                                </th>
                                                <th class="text-center p-4 w-10 min-w-[30px] max-w-[30px]"></th>
                                                <th class="text-start p-4 w-48 min-w-[200px]">Name</th>
                                                <th class="text-start p-4 w-auto min-w-[200px]">Subject</th>
                                                <th class="text-end p-4 w-48 min-w-[200px]">Date & Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            <tr v-for="item in datas2" :key="item">
                                                <th v-if="item.class === 'text-yellow-500'" class="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="firstcheck">
                                                </th>
                                                <td v-if="item.class === 'text-yellow-500'" class="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <router-link to=""><i class="mdi mdi-star text-[18px] text-yellow-500 align-middle"></i></router-link>
                                                </td>
                                                <td v-if="item.class === 'text-yellow-500'" class="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <router-link to="" class="font-semibold hover:text-indigo-600" onclick="emailpreview.showModal()">{{item.name}}</router-link>
                                                </td>
                                                <td v-if="item.class === 'text-yellow-500'" class="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <span class="text-slate-400">{{item.desc}}</span>
                                                </td>
                                                <td v-if="item.class === 'text-yellow-500'" class="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <span class="text-slate-400">{{item.time}}</span>
                                                </td>
                                            
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            <div :class="activeId === 3 ? '' : 'hidden'">
                                <div
                                    class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md p-6">
                                    <span class="text-slate-400">Hooray, no spam here!</span>
                                </div>
                            </div>


                            <div :class="activeId === 4 ? '' : 'hidden'">
                                <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md">
                                    <table class="w-full text-start">
                                        <thead class="text-base">
                                            <tr>
                                                <th class="text-start p-4 w-10 min-w-[30px] max-w-[30px]">
                                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="allcheck">
                                                </th>
                                                <th class="text-center p-4 w-10 min-w-[30px] max-w-[30px]"></th>
                                                <th class="text-start p-4 w-48 min-w-[200px]">Name</th>
                                                <th class="text-start p-4 w-auto min-w-[200px]">Subject</th>
                                                <th class="text-end p-4 w-48 min-w-[200px]">Date & Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th class="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="firstcheck">
                                                </th>
                                                <td class="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <router-link to=""><i class="mdi mdi-star-outline text-[18px] text-slate-400 align-middle"></i></router-link>
                                                </td>
                                                <td class="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <router-link to="" class="font-semibold hover:text-indigo-600" onclick="emailpreview.showModal()">Calvin Carlo</router-link>
                                                </td>
                                                <td class="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <span class="text-slate-400">Techwind Customization</span>
                                                </td>
                                                <td class="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <span class="text-slate-400">03:05PM</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            <div :class="activeId === 5 ? '' : 'hidden'" id="draft" role="tabpanel"
                                aria-labelledby="draft-tab">
                                <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md p-6">
                                    <span class="text-slate-400">You don't have any saved drafts. Saving a draft allows you to keep a message you aren't ready to send yet.</span>
                                </div>
                            </div>


                            <div :class="activeId === 6 ? '' : 'hidden'">
                                <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md p-6">
                                    <span class="text-slate-400">No conversations in Trash.</span>
                                </div>
                            </div>


                            <div :class="activeId === 7 ? '' : 'hidden'">
                                <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md p-6">
                                    <span class="text-slate-400">No notes in Notes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="modal" class="w-full h-screen bg-slate-900/75 flex justify-center items-center fixed inset-0">
            <div class="rounded-md inline-block shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                <div class="relative h-auto md:w-[720px] w-300px">
                    <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                        <h3 class="font-bold text-lg">Compose</h3>
                        <form>
                            <button @click="modal = !modal" class="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost">
                                <i  data-feather="x" class="size-4"></i>
                            </button>
                        </form>
                    </div>
                    <div class="p-6 text-center">
                        <form>
                            <div class="grid md:grid-cols-12 grid-cols-1 gap-4">
                                <div class="md:col-span-12">
                                    <div class="form-icon relative">
                                        <input name="email" id="toemail" type="email" class="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="To">
                                    </div>
                                </div>

                                <div class="md:col-span-6">
                                    <div class="form-icon relative">
                                        <input name="email" id="ccemail" type="email" class="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Cc">
                                    </div>
                                </div>

                                <div class="md:col-span-6">
                                    <div class="form-icon relative">
                                        <input name="email" id="bccemail" type="email" class="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Bcc">
                                    </div>
                                </div>

                                <div class="md:col-span-12">
                                    <textarea name="comments" id="comments" class="form-input ps-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                   
                                </div>

                                <div class="md:col-span-12">
                                    <button type="submit" id="submit" name="send" class="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center">Send Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <dialog id="emailpreview" class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            <div class="relative h-auto md:w-[720px] w-300px">
                <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                    <h3 class="font-bold text-lg">Techwind Customization</h3>
                    <form method="dialog">
                        <button class="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost"><i data-feather="x" class="size-4"></i></button>
                    </form>
                </div>
                <div class="p-4 border-b border-gray-100 dark:border-gray-800">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <img src="../../assets/images/client/05.jpg" class="size-14 rounded-full shadow-sm dark:shadow-gray-700" alt="">
                            <div class="ms-2">
                                <span class="block font-semibold">Cristina Julia</span>
                                <div class="dropdown relative">
                                    <button data-dropdown-toggle="dropdown" class="dropdown-toggle text-slate-400"  type="button">cristinajulia@xyz.mail <i class="mdi mdi-menu-down text-slate-900 dark:text-white"></i>
                                    </button>
                                    <div class="dropdown-menu absolute start-0 m-0 mt-1 z-10 w-[250px] rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hidden">
                                        <ul class="list-none py-2 text-start">
                                            <li class="mx-2 text-slate-400 text-sm flex">From: <span class="text-slate-900 dark:text-white ms-1">cristinajulia@xyz.mail</span></li>
                                            <li class="mx-2 text-slate-400 text-sm flex">To: <span class="text-slate-900 dark:text-white ms-1">support@shreethemes.in</span></li>
                                            <li class="mx-2 text-slate-400 text-sm flex">Date: <span class="text-slate-900 dark:text-white ms-1">3:45pm 16th Aug, 2021</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="space-x-1">
                            <router-link to="" class="h-8 w-8 inline-flex items-center justify-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 border-gray-100 dark:border-gray-700 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full" data-bs-toggle="tooltip" data-bs-placement="top" title="Reply"><i class="mdi mdi-arrow-left-top"></i></router-link>
                            <router-link to="" class="h-8 w-8 inline-flex items-center justify-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 border-gray-100 dark:border-gray-700 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full" data-bs-toggle="tooltip" data-bs-placement="top" title="Forward"><i class="mdi mdi-arrow-right-top"></i></router-link>
                        </div>
                    </div>
                </div>

                <div class="p-4 border-b border-gray-100 dark:border-gray-800">
                    <p class="text-slate-400 mb-0">Hello,<br><br> If the distribution of letters and 'words' is random, the
                        reader will not be distracted from making a neutral judgement on the visual impact and readability
                        of the typefaces (typography), or the distribution of text on the page (layout or type area). <br><br>Thank you</p>
                </div>

                <div class="p-4">
                    <p class="text-slate-400 mb-0">Click here to <router-link to="" class="text-indigo-600">Reply</router-link> or <router-link to="" class="text-indigo-600">Forward</router-link></p>
                </div>
            </div>
        </dialog>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const activeId = ref(1)  

const modal = ref(false)

const datas2 = [
    {
        class: '',
        name: '	Calvin Carlo',
        desc: 'Techwind Customization',
        time: '03:05PM'
    },
    {
        class: '',
        name: 'Madeleine Jackson',
        desc: 'User-friendly value-added application 😊',
        time: '12:00PM'
    },
    {
        class: 'text-yellow-500',
        name: 'Sherrie Miller',
        desc: 'Focused impactful open system 📷 😃',
        time: '8hours ago'
    },
    {
        class: '',
        name: 'John Belgrave',
        desc: 'Profound systemic alliance 🎉 🎊',
        time: '20hours ago'
    },
    {
        class: '',
        name: 'Jimmy Bojorquez',
        desc: 'Organized value-added model',
        time: '15th August 2023'
    },
    {
        class: '',
        name: 'Louise Stewart',
        desc: 'Waterfall Model Update',
        time: '10th August 2023'
    },
    {
        class: '',
        name: 'Kelly Hair',
        desc: 'Company Report',
        time: '8th August 2023'
    },
    {
        class: 'text-yellow-500',
        name: 'Ester Casella',
        desc: 'Theme Update',
        time: '7th August 2023'
    },
    {
        class: 'text-yellow-500',
        name: 'Richard Benavides',
        desc: 'Your product has been updated!',
        time: '5th August 2023'
    },
    {
        class: '',
        name: 'Calvin Hudson',
        desc: 'ThemeForest Sale',
        time: '1st August 2023'
    },
]

</script>
