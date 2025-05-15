<template>
    <div class="xl:col-span-3 md:col-span-6 col-span-12">
        <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
            <div class="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                <div>
                    <h6 class="text-lg font-semibold">Exchange</h6>
                    <h6 class="text-slate-400 font-semibold">1BTC = <span class="text-emerald-600">$ 27,427.17</span>
                    </h6>
                </div>

                <div class="position-relative">
                    <select
                        class="form-select form-input w-full py-2 px-2 pe-6 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0"
                        id="yearchart">
                        <option value="Y" selected>Market</option>
                        <option value="M">Market</option>
                        <option value="W">Market</option>
                        <option value="T">Market</option>
                    </select>
                </div>
            </div>

            <div class="p-4">
                <ul class="inline-block w-full mx-auto flex-wrap justify-center  text-center p-2 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md"
                    id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                    <li v-for="item in datas" :key="item" role="presentation" class="inline-block me-1 w-[47%]">
                        <button @click="toggle(item.id)" :class="item.id === activeId ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50'"
                            class="px-4 py-1 text-sm font-semibold rounded-md w-full  duration-500"
                            id="tab-one-tab" data-tabs-target="#tab-one" type="button" role="tab"
                            aria-controls="tab-one" aria-selected="true">{{item.name}}</button>
                    </li>
                    
                </ul>

                <div id="StarterContent" class="mt-4">
                    <div :class="activeId === 1 ? '' : 'hidden'" id="tab-one" role="tabpanel" aria-labelledby="tab-one-tab">
                        <form action="">
                            <div class="grid grid-cols-1 gap-4">
                                <div class="">
                                    <label class="form-label font-semibold hidden">Username:</label>
                                    <div class="relative">
                                        <span
                                            class="absolute top-0.5 start-0.5 h-9 px-2 bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded"
                                            id="basic-addon1">Amount</span>

                                        <input type="text"
                                            class="form-input ps-[88px] pe-[52px] w-full py-2 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                            placeholder="Username" required>

                                        <span
                                            class="absolute top-0.5 end-0.5 h-9 px-2 bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded"
                                            id="basic-addon1">BTC</span>
                                    </div>
                                </div>

                                <div class="">
                                    <div class="relative rounded overflow-hidden">
                                        <div class="absolute bg-gray-100 dark:bg-slate-800">
                                            <select
                                                class="form-select form-input w-[100px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 outline-none border-0 focus:ring-0">
                                                <option value="USA">USA</option>
                                                <option value="CAD">Canada</option>
                                                <option value="CHINA">China</option>
                                            </select>
                                        </div>

                                        <input type="number"
                                            class="form-input ps-28 w-full py-2 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                            placeholder="$ 25,000" required>

                                        <span
                                            class="absolute top-0.5 end-0.5 h-9 px-2 bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded"
                                            id="basic-addon1">$ Dollar</span>
                                    </div>
                                </div>

                                <div class="">
                                    <div class="relative">
                                        <span
                                            class="absolute top-0.5 start-0.5 h-9 px-2 bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded"
                                            id="basic-addon1">Total</span>

                                        <input type="number"
                                            class="form-input ps-[88px] pe-[52px] w-full py-2 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                            placeholder="" required>

                                        <span
                                            class="absolute top-0.5 end-0.5 h-9 px-2 bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded"
                                            id="basic-addon1">$ Dollar</span>
                                    </div>
                                </div>

                                <div class="">
                                    <router-link to="#"
                                        class="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md me-1">Buy
                                        Now</router-link>
                                    <router-link to="#"
                                        class="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md">Sell
                                        Now</router-link>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div :class="activeId === 2 ? '' : 'hidden'" id="tab-two" role="tabpanel" aria-labelledby="tab-two-tab">
                        <div :style="{ width: '380px' }">
    <crypto-converter-widget
      :live="true"
      :shadow="true"
      :symbol="true"
      :fiat="'united-states-dollar'"
      :crypto="'bitcoin'"
      :amount="1"
      :border-radius="'0.60rem'"
      :background-color="'#383a59'"
      :decimal-places="2"
    >
      <a
        href="https://cr.today/"
        target="_blank"
        rel="noopener"
      >
        Converter Widget
      </a>
    </crypto-converter-widget>
  </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        activeId: 1,
        datas: [
            {
                id: 1,
                name: 'Buy or Sell'
            },
            {
                id: 2,
                name: 'Calculator'
            },
        ]
    }
},
mounted() {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/gh/dejurin/crypto-converter-widget/dist/latest.min.js'
    script.async = true
    document.body.appendChild(script)
  },
methods: {
    toggle(id){
        this.activeId = id
    }
},
}
</script>

<style lang="scss" scoped></style>