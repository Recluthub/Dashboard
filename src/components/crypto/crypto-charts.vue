<template>
    <div class="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
        <div class="relative overflow-hidden p-4 rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
            <div class="relative flex justify-between items-center mb-8 z-1">
                <div class="flex items-center">
                    <img src="../../assets/images/coin/kucoin.png"
                        class="h-11 w-11 rounded-full shadow-sm dark:shadow-gray-700 p-1.5 me-1" alt="">
                    <h6 class="mb-0 font-semibold text-lg ms-2">Kucoin</h6>
                </div>
                <span class="text-slate-400 font-semibold">KCS</span>
            </div>

            <div class="relative flex justify-between items-center font-semibold z-1">
                <span class="text-sm text-emerald-600">+15.55%</span>
                <span class="text-sm text-emerald-600">+$ 155</span>
                <span class="text-sm">$ 41245</span>
            </div>

            <div class="absolute p-4 inset-0 z-0 opacity-10">
                <kucoin />
            </div>
        </div>

        <div class="relative overflow-hidden p-4 rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
            <div class="relative flex justify-between items-center mb-8 z-1">
                <div class="flex items-center">
                    <img src="../../assets/images/coin/ethereum.png"
                        class="h-11 w-11 rounded-full shadow-sm dark:shadow-gray-700 p-1.5 me-1" alt="">
                    <h6 class="mb-0 font-semibold text-lg ms-2">Ethereum</h6>
                </div>
                <span class="text-slate-400 font-semibold">ETS</span>
            </div>

            <div class="relative flex justify-between items-center font-semibold z-1">
                <span class="text-sm text-red-600">-25.01%</span>
                <span class="text-sm text-red-600">-$ 524</span>
                <span class="text-sm">$ 1458</span>
            </div>

            <div class="absolute p-4 inset-0 z-0 opacity-10">
                <ethereum />
            </div>
        </div>

        <div class="relative overflow-hidden p-4 rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
            <div class="relative flex justify-between items-center mb-8 z-1">
                <div class="flex items-center">
                    <img src="../../assets/images/coin/monero.png"
                        class="h-11 w-11 rounded-full shadow-sm dark:shadow-gray-700 p-1.5 me-1" alt="">
                    <h6 class="mb-0 font-semibold text-lg ms-2">Monero</h6>
                </div>
                <span class="text-slate-400 font-semibold">XMR</span>
            </div>

            <div class="relative flex justify-between items-center font-semibold z-1">
                <span class="text-sm text-emerald-600">+3.08%</span>
                <span class="text-sm text-emerald-600">+$ 58</span>
                <span class="text-sm">$ 448</span>
            </div>

            <div class="absolute p-4 inset-0 z-0 opacity-10">
                <monero />
            </div>
        </div>

        <div class="relative overflow-hidden p-4 rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
            <div class="relative flex justify-between items-center mb-8 z-1">
                <div class="flex items-center">
                    <img src="../../assets/images/coin/litecoin.png"
                        class="h-11 w-11 rounded-full shadow-sm dark:shadow-gray-700 p-1.5 me-1" alt="">
                    <h6 class="mb-0 font-semibold text-lg ms-2">Litecoin</h6>
                </div>
                <span class="text-slate-400 font-semibold">LTC</span>
            </div>

            <div class="relative flex justify-between items-center font-semibold z-1">
                <span class="text-sm text-red-600">-5.05%</span>
                <span class="text-sm text-red-600">-$ 48</span>
                <span class="text-sm">$ 478</span>
            </div>

            <div class="absolute p-4 inset-0 z-0 opacity-10">
                <litecoin />
            </div>
        </div>

        <div class="relative overflow-hidden p-4 rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
            <div class="relative flex justify-between items-center mb-8 z-1">
                <div class="flex items-center">
                    <img src="../../assets/images/coin/blocknet.png"
                        class="h-11 w-11 rounded-full shadow-sm dark:shadow-gray-700 p-1.5 me-1" alt="">
                    <h6 class="mb-0 font-semibold text-lg ms-2">Blocknet</h6>
                </div>
                <span class="text-slate-400 font-semibold">BLOCK</span>
            </div>

            <div class="relative flex justify-between items-center font-semibold z-1">
                <span class="text-sm text-red-600">-8.05%</span>
                <span class="text-sm text-red-600">-$ 58</span>
                <span class="text-sm">$ 546</span>
            </div>

            <div class="absolute p-4 inset-0 z-0 opacity-10">
                <blocknet />
            </div>
        </div>

        <div class="relative overflow-hidden p-4 rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
            <div class="relative flex justify-between items-center mb-8 z-1">
                <div class="flex items-center">
                    <img src="../../assets/images/coin/bittorrent.png"
                        class="h-11 w-11 rounded-full shadow-sm dark:shadow-gray-700 p-1.5 me-1" alt="">
                    <h6 class="mb-0 font-semibold text-lg ms-2">Bittorrent</h6>
                </div>
                <span class="text-slate-400 font-semibold">BTT</span>
            </div>

            <div class="relative flex justify-between items-center font-semibold z-1">
                <span class="text-sm text-emerald-600">+3.08%</span>
                <span class="text-sm text-emerald-600">+$ 58</span>
                <span class="text-sm">$ 448</span>
            </div>

            <div class="absolute p-4 inset-0 z-0 opacity-10">
                <bittorrent />
            </div>
        </div>
    </div>
</template>

<script>
import kucoin from '@/components/crypto/crypto-kucoin.vue';
import ethereum from '@/components/crypto/crypto-ethereum.vue';
import monero from '@/components/crypto/crypto-monero.vue';
import litecoin from '@/components/crypto/crypto-litecoin.vue';
import blocknet from '@/components/crypto/crypto-blocknet.vue';
import bittorrent from '@/components/crypto/crypto-bittorrent.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        kucoin,
        ethereum,
        monero,
        litecoin,
        blocknet,
        bittorrent
    }
}
</script>
