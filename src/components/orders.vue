<template>
    <div class="xl:col-span-5 lg:col-span-12">
        <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
            <div class="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                <h6 class="text-lg font-semibold">Orders</h6>
                <router-link to="" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-indigo-600 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white duration-500">
                    <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 transition-all duration-500 bg-indigo-600 dark:bg-white"></span> View data <i class="uil uil-arrow-right"></i>'
                </router-link>
            </div>

            <div class="relative overflow-x-auto block w-full max-h-[400px]" data-simplebar>
                <table class="w-full text-start">
                    <thead class="text-base">
                        <tr>
                            <th class="text-start font-semibold text-[15px] p-4 min-w-[100px]">No.</th>
                            <th class="text-start font-semibold text-[15px] p-4 min-w-[128px]">ID</th>
                            <th class="text-start font-semibold text-[15px] p-4 min-w-[128px]">Date</th>
                            <th class="text-start font-semibold text-[15px] p-4 min-w-[128px]">Price</th>
                            <th class="text-end font-semibold text-[15px] p-4 min-w-[128px]">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in datas" :key="item">
                            <th class="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">{{ item.no }}</th>
                            <td class="text-start border-t border-gray-100 dark:border-gray-800 p-4">{{ item.id }}</td>
                            <td class="text-start border-t border-gray-100 dark:border-gray-800 p-4"><span class="text-slate-400">{{ item.date }}</span></td>
                            <td  class="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                <span class="text-slate-400">{{ item.price }}</span>
                            </td>
                            <td v-if="item.status === 'Delivered'" class="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                <span class="bg-emerald-600/10 dark:bg-emerald-600/20 border border-emerald-600/10 dark:border-emerald-600/20 text-emerald-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">{{item.status }}</span>
                            </td>
                            <td v-if="item.status === 'New Order'" class="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                <span class="bg-indigo-600/10 dark:bg-indigo-600/20 border border-indigo-600/10 dark:border-indigo-600/20 text-indigo-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">{{item.status }}</span>
                            </td>
                            <td v-if="item.status === 'Return'" class="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                <span class="bg-red-600/10 dark:bg-red-600/20 border border-red-600/10 dark:border-red-600/20 text-red-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">{{item.status }}</span>
                            </td>
                            <td v-if="item.status === 'Cancel'" class="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                <span class="bg-gray-500/5 border border-gray-500/5 text-gray-500 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">{{item.status }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
    const  datas = [
        {
            no: '01',
            id: '#tw001',
            date: '10th Aug 2023',
            price: '$253',
            status: 'Delivered',
        },
        {
            no: '02',
            id: '#tw002',
            date: '13th Aug 2023',
            price: '$123',
            status: 'New Order',
        },
        {
            no: '03',
            id: '#tw003',
            date: '18th Aug 2023',
            price: '$245',
            status: 'Return',
        },
        {
            no: '04',
            id: '#tw004',
            date: '21st Aug 2023',
            price: '$157',
            status: 'Cancel',
        },
        {
            no: '05',
            id: '#tw005',
            date: '22nd Aug 2023',
            price: '$62',
            status: 'New Order',
            class: 'bg-indigo-600/10 dark:bg-indigo-600/20 border border-indigo-600/10 dark:border-indigo-600/20 text-indigo-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1'
        },
        {
            no: '06',
            id: '#tw006',
            date: '23rd Aug 2023',
            price: '$456',
            status: 'Delivered',
            class: 'bg-emerald-600/10 dark:bg-emerald-600/20 border border-emerald-600/10 dark:border-emerald-600/20 text-emerald-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1'
        },
        {
            no: '07',
            id: '#tw007',
            date: '24th Aug 2023',
            price: '$478',
            status: 'Delivered',
            class: 'bg-emerald-600/10 dark:bg-emerald-600/20 border border-emerald-600/10 dark:border-emerald-600/20 text-emerald-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1'
        },
    ]
</script>