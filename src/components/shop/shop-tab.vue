<template>
    <div class="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
        <div class="lg:col-span-3 md:col-span-5">
            <div class="sticky top-20">
                <ul class="flex-column p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li v-for="item in datas" :key="item" role="presentation" class="ms-0">
                        <button  @click="handleclick(item.id)" :class="item.id === activeIndex ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50'"
                            class="px-4 py-2 mt-3 text-start text-base font-semibold rounded-md w-full duration-500"
                            id="description-tab" data-tabs-target="#description" type="button" role="tab"
                            aria-controls="description" aria-selected="true">{{item.name}}</button>
                    </li>
                </ul>
            </div>
        </div>

        <div class="lg:col-span-9 md:col-span-7">
            <div id="myTabContent" class="p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                <div :class="activeIndex === 1 ? '' : 'hidden'" id="description" role="tabpanel" aria-labelledby="profile-tab">
                    <p  class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>
                </div>

                <div :class="activeIndex === 2 ? '' : 'hidden'" id="addinfo" role="tabpanel" aria-labelledby="addinfo-tab">
                    <table class="w-full text-start">
                        <tbody>
                            <tr class="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                                <td class="font-semibold py-4" style="width: 100px;">Color</td>
                                <td class="text-slate-400 py-4">Red, White, Black, Orange</td>
                            </tr>

                            <tr class="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                                <td class="font-semibold py-4">Material</td>
                                <td class="text-slate-400 py-4">Cotton</td>
                            </tr>

                            <tr class="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                                <td class="font-semibold py-4">Size</td>
                                <td class="text-slate-400 py-4">S, M, L, XL, XXL</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div :class="activeIndex === 3 ? '' : 'hidden'" id="review" role="tabpanel" aria-labelledby="review-tab">
                    

                    <div v-for="item in report" :key="item" class="mt-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img :src="item.image" class="size-11 rounded-full shadow-sm" alt="">

                                <div class="ms-3 flex-1">
                                    <router-link to="#" class="text-lg font-semibold hover:text-indigo-600 duration-500">{{item.name}}</router-link>
                                    <p class="text-sm text-slate-400">{{item.time}}</p>
                                </div>
                            </div>

                            <router-link to="#" class="text-slate-400 hover:text-indigo-600 duration-500 ms-5"><i class="mdi mdi-reply"></i> Reply</router-link>
                        </div>
                        <div class="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow-sm dark:shadow-gray-800 mt-6">
                            <ul class="list-none inline-block text-orange-400">
                                <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                                <li class="inline text-slate-400 font-semibold">5.0</li>
                            </ul>

                            <p class="text-slate-400 italic">{{item.desc}}</p>
                        </div>
                    </div>

                    <div class="p-6 rounded-md shadow-sm dark:shadow-gray-800 mt-8">
                        <h5 class="text-lg font-semibold">Leave A Comment:</h5>

                        <form class="mt-8">
                            <div class="grid lg:grid-cols-12 lg:gap-6">
                                <div class="lg:col-span-6 mb-5">
                                    <div class="text-start">
                                        <label for="name" class="font-semibold">Your Name:</label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="user" class="size-4 absolute top-3 start-4"></i>
                                            <input name="name" id="name" type="text" class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :">
                                        </div>
                                    </div>
                                </div>

                                <div class="lg:col-span-6 mb-5">
                                    <div class="text-start">
                                        <label for="email" class="font-semibold">Your Email:</label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="mail" class="size-4 absolute top-3 start-4"></i>
                                            <input name="email" id="email" type="email" class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email :">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-cols-1">
                                <div class="mb-5">
                                    <div class="text-start">
                                        <label for="comments" class="font-semibold">Your Comment:</label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="message-circle" class="size-4 absolute top-3 start-4"></i>
                                            <textarea name="comments" id="comments" class="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" id="submit" name="send" class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    import client1 from '@/assets/images/client/01.jpg'
    import client2 from '@/assets/images/client/02.jpg'
    import client3 from '@/assets/images/client/03.jpg'
    import client4 from '@/assets/images/client/04.jpg'


    const activeIndex = ref(1)

    const datas = [
        {
            id:1,
            name: 'Description'
        },
        {
            id:2,
            name: 'Additional Information'
        },
        {
            id: 3,
            name: 'Review'
        }
    ]

    const report = [
        {
            image: client1,
            name: 'Calvin Carlo',
            time: '6th May 2022 at 01:25 pm',
            desc: '" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
        },
        {
            image: client2,
            name: 'Calvin Carlo',
            time: '6th May 2022 at 01:25 pm',
            desc: '" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
        },
        {
            image: client3,
            name: 'Calvin Carlo',
            time: '6th May 2022 at 01:25 pm',
            desc: '" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
        },
        {
            image: client4,
            name: 'Calvin Carlo',
            time: '6th May 2022 at 01:25 pm',
            desc: '" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
        },
    ]

    const handleclick = (id) =>{
        activeIndex.value = id;
    }

</script>
