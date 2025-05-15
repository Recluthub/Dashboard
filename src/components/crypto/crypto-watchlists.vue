<template>
    <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md">
        <div class="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
            <h6 class="text-lg font-semibold">Watchlists</h6>

            <router-link to="" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-indigo-600 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white duration-500">
            <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 transition-all duration-500 bg-indigo-600 dark:bg-white"></span>See More <i class="uil uil-arrow-right"></i></router-link>
        </div>
        <div class="h-[521px]" data-simplebar>
            <table class="w-full text-start">
                <thead>
                    <tr>
                        <th class="px-4 py-5 font-semibold text-start">Name</th>
                        <th class="px-4 py-5 font-semibold text-center">Last</th>
                        <th class="px-4 py-5 font-semibold text-center">Chg</th>
                        <th class="px-4 py-5 font-semibold text-end">Chg%</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in datas" :key="item" class="border-t border-gray-100 dark:border-gray-700">
                        <td class="p-4"><router-link to="" class="flex items-center hover:text-indigo-600 font-semibold"><img :src="item.image" class="h-11 w-11 rounded-full shadow-sm dark:shadow-gray-700 p-1.5 me-1" alt="">{{item.name}}</router-link></td>
                        <td class="p-4 text-center">{{item.last}}</td>
                        <td v-if="item.class === 'text-emerald-600'" class="p-4 text-center text-emerald-600">{{item.change}}</td>
                        <td v-if="item.class === 'text-red-600'" class="p-4 text-center text-red-600">{{item.change}}</td>
                        <td v-if="item.class === 'text-emerald-600'" class="p-4 text-end text-emerald-600">{{item.change2}}</td>
                        <td v-if="item.class === 'text-red-600'" class="p-4 text-end text-red-600">{{item.change2}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import coin1 from '@/assets/images/coin/bitcoin.png'
import coin2 from '@/assets/images/coin/litecoin.png'
import coin3 from '@/assets/images/coin/auroracoin.png'
import coin4 from '@/assets/images/coin/coinye.png'
import coin5 from '@/assets/images/coin/ethereum.png'
import coin6 from '@/assets/images/coin/potcoin.png'
import coin7 from '@/assets/images/coin/zcash.png'
import coin8 from '@/assets/images/coin/primecoin.png'
import coin9 from '@/assets/images/coin/blocknet.png'
import coin10 from '@/assets/images/coin/kucoin.png'

const datas = [
    {
        image: coin1,
        name: 'BTC',
        last: '$34587',
        change: ' - $745',
        change2: '- 2.5 %',
        class: 'text-red-600'
    },
    {
        image: coin2,
        name: 'LTC',
        last: '$216',
        change: '+ $.264',
        change2: ' + .264 % ',
        class: 'text-emerald-600'
    },
    {
        image: coin3,
        name: 'ARC',
        last: '$452',
        change: ' - $1.9',
        change2: '- 1.9 %',
        class: 'text-red-600'
    },
    {
        image: coin4,
        name: 'CNY',
        last: '$154',
        change: '+ $1.05',
        change2: ' + 1.05 %',
        class: 'text-emerald-600'
    },
    {
        image: coin5,
        name: 'ETH',
        last: '$854',
        change: '+ $1.705',
        change2: ' + 1.705 %',
        class: 'text-emerald-600'
    },
    {
        image: coin6,
        name: 'PTC',
        last: '$548',
        change: ' - $3.2',
        change2: '- 3.2 %',
        class: 'text-red-600'
    },
    {
        image: coin7,
        name: 'ZCC',
        last: '$965',
        change: ' + $1.465',
        change2: '+ 1.465 %',
        class: 'text-emerald-600'
    },
    {
        image: coin8,
        name: 'XPM',
        last: '$4875',
        change: ' - $1.08',
        change2: '- 1.08 %',
        class: 'text-red-600'
    },
    {
        image: coin9,
        name: 'BLOCK',
        last: '$478',
        change: '+ $2.8',
        change2: ' + 2.8 %',
        class: 'text-emerald-600'
    },
    {
        image: coin10,
        name: 'KCS',
        last: '$545',
        change: '+ $1.5',
        change2: ' + 1.5 %',
        class: 'text-emerald-600'
    },
]
</script>