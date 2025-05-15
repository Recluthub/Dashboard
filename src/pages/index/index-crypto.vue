<template>
  <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
    <sidebar />
    <main class="page-content bg-gray-50 dark:bg-slate-800">
      <topheader :customClick="handleClick" />
      <div class="container-fluid relative px-3">
        <div class="layout-specing">
          <div class="flex justify-between items-center">
            <div>
              <h5 class="text-xl font-bold">Cristina Murfy</h5>
              <h6 class="text-slate-400 font-semibold">My balance: <span class="text-emerald-600">$ 45,578.032</span>
              </h6>
            </div>
            <modal />
          </div>

          <div class="grid xl:grid-cols-12 mt-6 gap-6">
            <div class="xl:col-span-8 col-span-12">
              <div
                class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 p-4">
                <div id="tradingview_123"></div>
                <apex />
              </div>
            </div>

            <div class="xl:col-span-4 col-span-12">
              <watchlist />
            </div>
          </div>

          <criptocharts />

          <div class="grid grid-cols-12 mt-6 gap-6">
            <transections />

            <exchange />

            <orders />
          </div>
        </div>
      </div>
      <footers />
    </main>
    <switcher />

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import sidebar from '@/components/sidebar/sidebar-dark.vue';
import topheader from '@/components/top-header/top-header.vue';
import apex from '@/components/apexchart/crypto-apexchart.vue';
import modal from '@/components/crypto/crypto-modal.vue';
import watchlist from '@/components/crypto/crypto-watchlists.vue';
import criptocharts from '@/components/crypto/crypto-charts.vue';
import transections from '@/components/crypto/crypto-transections.vue';
import exchange from '@/components/crypto/crypto-exchange.vue';
import switcher from '@/components/switcher.vue';
import footers from '@/components/footer/footer.vue';
import orders from '@/components/crypto/crypto-orders.vue';

// Reactive state
const toggle = ref(true);

// Functions
const handleClick = () => {
  toggle.value = !toggle.value;
};

const darkmode = () => {
  document.documentElement.classList.remove('dark');
};

const bodurtl = () => {
  document.documentElement.removeAttribute('dir', 'rtl');
};

onMounted(() => {
  darkmode();
  bodurtl();
});
</script>