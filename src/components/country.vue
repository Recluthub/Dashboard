<template>
    <div class="lg:col-span-4">
        <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
            <div class="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                <h6 class="text-lg font-semibold">Customers by Country</h6>

                <div class="dropdown relative">
                    <button ref="dropdownToggle" @click="dropdownOpen = !dropdownOpen" class="dropdown-toggle items-center" type="button">
                        <span class="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"><i class="mdi mdi-dots-vertical"></i></span>
                    </button>
                    <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700" v-show="dropdownOpen">
                        <ul class="py-2 text-start">
                            <li>
                                <router-link to="" class="block font-medium py-1 px-4 text-slate-400 dark:text-white/70 hover:text-slate-900 dark:hover:text-white">Profile</router-link>
                            </li>
                            <li>
                                <router-link to="" class="block font-medium py-1 px-4 text-slate-400 dark:text-white/70 hover:text-slate-900 dark:hover:text-white">Profile Settings</router-link>
                            </li>
                            <li>
                                <router-link to="" class="block font-medium py-1 px-4 text-slate-400 dark:text-white/70 hover:text-slate-900 dark:hover:text-white">Delete</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="p-6 border-b border-gray-100 dark:border-gray-800">
                <apexchart  type="polarArea" height="258" :options="chartOptions" :series="series"></apexchart>
            </div>

            <div class="p-6">
                <ul class="list-none flex">
                    <li class="inline-block w-1/2"><span class="text-indigo-600 font-semibold">Canada</span>:<span class="text-slate-400 ms-2">12468</span></li>
                    <li class="inline-block w-1/2"><span class="text-indigo-600 font-semibold">Greenland</span>:<span class="text-slate-400 ms-2">14168</span></li>
                </ul>
                <ul class="list-none flex">
                    <li class="inline-block w-1/2"><span class="text-indigo-600 font-semibold">Russia</span>:<span class="text-slate-400 ms-2">15468</span></li>
                    <li class="inline-block w-1/2"><span class="text-indigo-600 font-semibold">Palestine</span>:<span class="text-slate-400 ms-2">17468</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import vClickOutside from 'v-click-outside';
import ApexCharts from 'vue3-apexcharts'
export default {
    directives: {
        clickOutside: vClickOutside.directive,
    },
    data() {
        return {
            dropdownOpen: false,
            series: [12468, 14168, 15468, 17468],
            chartOptions: {
                chart: {
                     height: 258,
                    type: 'polarArea'
                },
                labels: ['Canada', 'Russia', 'Greenland', 'Palestine'],
                fill: {
                    opacity: 1
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']

                },
                colors: ['#c7d2fe', '#818cf8' ,'#6366f1', '#4f46e5'],
                yaxis: {
                    show: false,
                },
                legend: {
                    position: 'bottom'
                },
                plotOptions: {
                    polarArea: {
                        rings: {
                            strokeWidth: 0
                        },
                        spokes: {
                            strokeWidth: 0
                        },
                    }
                },
            },
        }
    },
    components: {
        apexchart: ApexCharts
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);

    },
    unmounted() {
        document.removeEventListener('click', this.handleClickOutside);

    },
    methods: {
        handleClickOutside(event) {
            if (!this.$refs.dropdownToggle.contains(event.target)) {
                this.dropdownOpen = false;
            }
        },
    },

}
</script>

<style lang="scss" scoped></style>