<template>
  <div class="xl:col-span-3 md:col-span-6 col-span-12">
    <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
      <div class="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <div>
          <h6 class="text-lg font-semibold">Orders</h6>
          <h6 class="text-slate-400 font-semibold">My Order List</h6>
        </div>

        <div class="position-relative">
          <select class="form-select form-input w-full py-2 px-2 pe-6 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
            <option value="T" selected>Today</option>
            <option value="W">This Week</option>
            <option value="M">This Month</option>
            <option value="Y">This Year</option>
          </select>
        </div>
      </div>

      <div class="p-4 h-[290px]" data-simplebar>
        <div v-for="item in datas" :key="item" class="rounded shadow-sm p-3 mt-4 first:mt-0">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
                <span v-if="item.type === 'Buy'" class="bg-emerald-600 inline-block text-white text-[12px] font-bold px-2.5 rounded">{{item.type}}</span>
                <span v-if="item.type === 'Sell'" class="bg-red-600 text-white inline-block text-[12px] font-bold px-2.5 rounded">{{item.type}}</span>
                <h6 class="font-semibold mb-0 ms-2">{{item.name}}</h6>
            </div>

              <span v-if="item.status === 'Success'" class="bg-emerald-600/10 text-emerald-600 inline-block text-[12px] font-bold px-2.5 rounded">{{item.status}}</span>
              <span v-if="item.status === 'Pending'" class="bg-red-600/10 text-red-600 inline-block text-[12px] font-bold px-2.5 rounded">{{item.status}}</span>
              <span v-if="item.status === 'Progress'" class="bg-cyan-500/10 text-cyan-500 inline-block text-[12px] font-bold px-2.5 rounded">{{item.status}}</span>
          </div>

          <div class="flex items-center mt-6">
            <div class="">
              <h6 class="text-slate-400 mb-0">{{item.spend}}</h6>
              <h6 class="mb-0">{{item.price}}</h6>
            </div>

            <div class="ms-3">
              <h6 class="text-slate-400 mb-0">{{item.recieved}}</h6>
              <h6 class="mb-0">{{item.price2}}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    const datas = [
      {
        type: 'Buy',
        name: 'Bitcoin',
        status: 'Success',
        spend: 'Spend',
        price: '$ 45,456',
        recieved: 'Recieved',
        price2: '0.00956BTC'
      },
      {
        type: 'Sell',
        name: 'Blocknet',
        status: 'Pending',
        spend: 'Spend',
        price: '0.00956BTC',
        recieved: 'Recieved',
        price2: '$ 45,456'
      },
      {
        type: 'Sell',
        name: 'Litecoin',
        status: 'Progress',
        spend: 'Spend',
        price: '$ 45,456',
        recieved: 'Recieved',
        price2: '0.00956BTC'
      },
      {
        type: 'Buy',
        name: 'Kucoin',
        status: 'Success',
        spend: 'Spend',
        price: '$ 45,456',
        recieved: 'Recieved',
        price2: '0.00956BTC'
      },
    ]
</script>