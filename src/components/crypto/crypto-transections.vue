<template>
    <div class="xl:col-span-6 col-span-12">
        <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
            <div class="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                <div>
                    <h6 class="text-lg font-semibold">Transections</h6>
                    <h6 class="text-slate-400 font-semibold">Latest Transections</h6>
                </div>

                <div class="position-relative">
                    <select class="form-select form-input w-full py-2 px-2 pe-6 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0"
                        id="yearchart">
                        <option value="T" selected>Today</option>
                        <option value="W">This Week</option>
                        <option value="M">This Month</option>
                        <option value="Y">This Year</option>
                    </select>
                </div>
            </div>

            <div class="h-[290px]" data-simplebar>
                <table class="w-full text-start">
                    <thead>
                        <tr class="">
                            <th class="p-4 font-semibold text-start">Type</th>
                            <th class="p-4 font-semibold text-center">Assets</th>
                            <th class="p-4 font-semibold text-center">Date</th>
                            <th class="p-4 font-semibold text-center">Amount</th>
                            <th class="p-4 font-semibold text-center">Wallet</th>
                            <th class="p-4 font-semibold text-end">Status</th>
                        </tr>
                    </thead>

                    <tbody class="border-t border-gray-100 dark:border-gray-800">
                        <tr v-for="item in datas" :key="item">
                            <td class="px-4 pt-3 text-start"><span v-if="item.type === 'Buy'" class="bg-emerald-600 inline-block text-white text-[12px] font-bold px-2.5 rounded">Buy</span>
                                <span v-if="item.type === 'Sell'" class="bg-red-600 inline-block text-white text-[12px] font-bold px-2.5 rounded">Sell</span>
                            </td>
                            <td class="px-4 pt-3 text-center">{{item.assets}}</td>
                            <td class="px-4 pt-3 text-center">{{item.date}}</td>
                            <td class="px-4 pt-3 text-center">{{item.amount}}</td>
                            <td class="px-4 pt-3 text-center text-indigo-600">{{item.wallet}}</td>
                            <td class="px-4 pt-3 text-end text-red-600"><span v-if="item.status === 'Progress'"  class="bg-cyan-500/10 text-cyan-500 inline-block text-[12px] font-bold px-2.5 rounded">{{item.status}}</span>
                                <span v-if="item.status === 'Pending'"  class="bg-red-600/10 text-red-600 inline-block text-[12px] font-bold px-2.5 rounded">{{item.status}}</span>
                                <span v-if="item.status === 'Success'"  class="bg-emerald-600/10 text-emerald-600 inline-block text-[12px] font-bold px-2.5 rounded">{{item.status}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
    const datas = [
        {
            type: 'Buy',
            assets: 'BTC',
            date: '25th Nov 23',
            amount: '$350',
            wallet: 'qhut0...hfteh45',
            status: 'Progress',
        },
        {
            type: 'Sell',
            assets: 'BTC',
            date: '25th Nov 23',
            amount: '1.45 BTC',
            wallet: 'qhut0...hfteh45',
            status: 'Pending',
        },
        {
            type: 'Sell',
            assets: 'LTC',
            date: '25th Nov 23',
            amount: '1.45 LTC',
            wallet: 'qhut0...hfteh45',
            status: 'Success',
        },
        {
            type: 'Buy',
            assets: 'ARC',
            date: '25th Nov 23',
            amount: '$350',
            wallet: 'qhut0...hfteh45',
            status: 'Pending',
        },
        {
            type: 'Sell',
            assets: 'CNY',
            date: '25th Nov 23',
            amount: '1.45 CNY',
            wallet: 'qhut0...hfteh45',
            status: 'Success',
        },
        {
            type: 'Buy',
            assets: 'ETH',
            date: '25th Nov 23',
            amount: '$350',
            wallet: 'qhut0...hfteh45',
            status: 'Progress',
        },
        {
            type: 'Sell',
            assets: 'PTC',
            date: '25th Nov 23',
            amount: '1.45 PTC',
            wallet: 'qhut0...hfteh45',
            status: 'Pending',
        },
        {
            type: 'Sell',
            assets: 'ZCC',
            date: '25th Nov 23',
            amount: '1.45 ZCC',
            wallet: 'qhut0...hfteh45',
            status: 'Success',
        },
        {
            type: 'Buy',
            assets: 'XPM',
            date: '25th Nov 23',
            amount: '$350',
            wallet: 'qhut0...hfteh45',
            status: 'Success',
        },
        {
            type: 'Buy',
            assets: 'BLOCK',
            date: '25th Nov 23',
            amount: '$350',
            wallet: 'qhut0...hfteh45',
            status: 'Progress',
        },
    ]
</script>
