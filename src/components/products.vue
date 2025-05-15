<template>
    <div class="xl:col-span-3 lg:col-span-6">
        <div class="rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
            <div class="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                <h6 class="text-lg font-semibold">Top Products / Items</h6>
                <router-link to="" class="text-slate-400 hover:text-indigo-600 dark:text-white/70 dark:hover:text-white text-[20px]"><i class="mdi mdi-swap-vertical"></i></router-link>
            </div>

            <div class="relative overflow-x-auto block w-full max-h-[400px]" data-simplebar>
                <table class="w-full text-start">
                    <thead class="text-base">
                        <tr>
                            <th class="text-start font-semibold text-[15px] p-4 min-w-[150px]">Products</th>
                            <th class="text-start font-semibold text-[15px] p-4 min-w-[100px]">Earnings</th>
                            <th class="text-end font-semibold text-[15px] p-4 min-w-[80px]">Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in datas2" :key="item">
                            <th class="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">{{ item.product }}</th>
                            <td class="text-start border-t border-gray-100 dark:border-gray-800 p-4">{{ item.earning }}</td>
                            <td class="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                <span v-if="item.class === 'text-emerald-600'" class="text-emerald-600 text-sm ms-1 font-semibold"><i class="uil uil-arrow-growth"></i> {{ item.progres}}</span>
                                <span v-if="item.class === 'text-red-600'" class="text-red-600 text-sm ms-1 font-semibold"><i class="uil uil-chart-down"></i> {{ item.progres}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
    const datas2 = [
        {
            product: 'Techwind',
            earning: '$4120',
            progres: '5.5%',
            class: 'text-emerald-600'
        },
        {
            product: 'Landrick',
            earning: '$5648',
            progres: '15.8%',
            class: 'text-red-600',
        },
        {
            product: 'Hously',
            earning: '$456',
            progres: '1.3%',
            class: 'text-emerald-600'
        },
        {
            product: 'Jobstack',
            earning: '$546',
            progres: '1.54%',
            class: 'text-red-600',
        },
        {
            product: 'Giglink',
            earning: '$124',
            progres: '8.5%',
            class: 'text-red-600'
        },
        {
            product: 'Upwind',
            earning: '$1545',
            progres: '6.4%',
            class: 'text-emerald-600'
        },
        {
            product: 'Fronter',
            earning: '$1215',
            progres: '4.8%',
            class: 'text-red-600'
        },
        {
            product: 'Doctris',
            earning: '$2321',
            progres: '4.1%',
            class: 'text-emerald-600'

        },
    ]
</script>