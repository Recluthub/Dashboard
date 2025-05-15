<template>
<div>
    <div class="">
        <router-link to="#" class="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md me-1" @click="show = !show">Sent</router-link>
        <router-link to="#" class="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md" @click="show2 = !show2">Request</router-link>
    </div>
    <div v-if="show" class="fixed inset-0 flex items-center justify-center w-full h-screen bg-slate-900/75 z-9999">
        <div id="sentCrypto" class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white inline-block">
            <div class="relative h-auto md:w-[480px] w-300px">
                <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                    <h3 class="font-bold text-lg">Send Coin</h3>
                    <form method="dialog">
                        <button  @click="show = !show" class="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost"><i class="uil-uil-multiply size-4"></i></button>
                    </form>
                </div>
                <div class="p-6">
                    <form>
                        <div class="grid grid-cols-12 gap-3">
                            <div class="col-span-12">
                                <label class="font-semibold">Crypto Currency</label>
                                <select
                                    class="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                    <option selected>-- Currency --</option>
                                    <option value="BTC">BTC</option>
                                    <option value="ETH">ETH</option>
                                </select>
                            </div>

                            <div class="col-span-12">
                                <label class="font-semibold">Currency From</label>
                                <select
                                    class="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                    <option selected>-- My wallet --</option>
                                    <option value="BTC">BTC</option>
                                    <option value="ETH">ETH</option>
                                </select>
                            </div>

                            <div class="col-span-12">
                                <label class="form-label font-semibold">To</label>
                                <div class="relative mt-2">
                                    <span class="absolute top-0.5 start-0.5 size-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="QUcode"><i class="uil uil-qrcode-scan"></i></span>
                                    <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Can you scan" required>
                                </div>
                            </div>

                            <div class="md:col-span-6 col-span-12">
                                <label class="form-label font-semibold">USD</label>
                                <div class="relative mt-2">
                                    <span class="absolute top-0.5 start-0.5 size-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="USD"><i class="uil uil-dollar-sign"></i></span>
                                    <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="USD" required>
                                </div>
                            </div>

                            <div class="md:col-span-6 col-span-12">
                                <label class="form-label font-semibold">BTC</label>
                                <div class="relative mt-2">
                                    <span class="absolute top-0.5 start-0.5 size-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="BTC"><i class="uil uil-bitcoin-circle"></i></span>
                                    <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="BTC" required>
                                </div>
                            </div>

                            <div class="col-span-12">
                                <label for="comments" class="font-semibold">Description</label>
                                <div class="relative mt-2">
                                    <textarea name="comments" id="comments" class="form-input w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Description"></textarea>
                                </div>
                            </div>

                            <div class="col-span-12">
                                <h6 class="font-semibold">Network Free</h6>
                                <div class="inline-block mt-2">
                                    <div>
                                        <label class="inline-flex items-center">
                                            <input type="radio" class="form-radio size-4 appearance-none rounded-full border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" checked name="radio-colors" value="1">
                                            <span class="text-slate-400">Regular</span>
                                        </label>
                                    </div>
                                </div>

                                <div class="inline-block mt-2 ms-2">
                                    <div>
                                        <label class="inline-flex items-center">
                                            <input type="radio" class="form-radio size-4 appearance-none rounded-full border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" name="radio-colors" value="1">
                                            <span class="text-slate-400">Priority</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="text-end p-4 border-t border-gray-100 dark:border-gray-700">
                    <router-link to="#" class="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Continue</router-link>
                </div>
            </div>
        </div>
    </div>
    <div v-if="show2" class="fixed inset-0 flex items-center justify-center w-full h-screen bg-slate-900/75 z-9999">
        <div id="requestCrypto" class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white inline-block">
            <div class="relative h-auto md:w-[480px] w-300px">
                <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                    <h3 class="font-bold text-lg">Request Coin</h3>
                    <form method="dialog">
                        <button @click="show2 = !show2" class="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost"><i class="uil-uil-multiply size-4"></i></button>
                    </form>
                </div>
                <div class="p-6">
                    <form>
                        <div class="grid grid-cols-12 gap-3">
                            <div class="col-span-12">
                                <label class="font-semibold">Crypto Currency</label>
                                <select
                                    class="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                    <option selected>-- Currency --</option>
                                    <option value="BTC">BTC</option>
                                    <option value="ETH">ETH</option>
                                </select>
                            </div>

                            <div class="col-span-12">
                                <label class="font-semibold">Currency From</label>
                                <select class="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                    <option selected>-- My wallet --</option>
                                    <option value="BTC">BTC</option>
                                    <option value="ETH">ETH</option>
                                </select>
                            </div>

                            <div class="col-span-12">
                                <label class="form-label font-semibold">Address</label>
                                <div class="relative mt-2">
                                    <router-link to="#" class="absolute top-0.5 end-0.5 size-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="QUcode"><i class="uil uil-copy"></i></router-link>
                                    <input type="text" class="form-input pe-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value="c12b001a15f9bd46ef1c6551386c" required>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="text-end p-4 border-t border-gray-100 dark:border-gray-700">
                    <router-link to="#"  class="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md">Done</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>

import feather from 'feather-icons'
import { onMounted, ref } from 'vue';

const show = ref(false)
const show2 = ref(false)

onMounted(()=>{
    feather.replace()
})

</script>
