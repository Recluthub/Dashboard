<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />
           
            <div class="container-fluid relative px-3">
                    <div class="layout-specing">
                        <div class="md:flex justify-between items-center">
                            <h5 class="text-lg font-semibold">Terms & Conditions</h5>

                            <ul class="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                                <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><router-link to="/">Techwind</router-link></li>
                                <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                                <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Terms</li>
                            </ul>
                        </div>

                        <div class="container relative mt-6">
                            <div class="md:flex justify-center">
                                <div class="lg:w-4/5 w-full">
                                    <div class="p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md">
                                        <h5 class="text-lg font-semibold mb-4">Introduction :</h5>
                                        <p class="text-slate-400">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
            
                                        <h5 class="text-lg font-semibold mb-4 mt-6">User Agreements :</h5>
                                        <p class="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have <b class="text-red-600">originated</b> in the 16th century. Lorem Ipsum is <b class="text-red-600">composed</b> in a pseudo-Latin language which more or less <b class="text-red-600">corresponds</b> to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also <b class="text-red-600">incomprehensible</b>, but it imitates the rhythm of most European languages in Latin script. The <b class="text-red-600">advantage</b> of its Latin origin and the relative <b class="text-red-600">meaninglessness</b> of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's <b class="text-red-600">attention</b> from the layout.</p>
                                        <p class="text-slate-400 mt-3">There is now an <b class="text-red-600">abundance</b> of readable dummy texts. These are usually used when a text is <b class="text-red-600">required purely</b> to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or <b class="text-red-600">nonsensical</b> stories.</p>
                                        <p class="text-slate-400 mt-3">It seems that only <b class="text-red-600">fragments</b> of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                                        
                                        <h5 class="text-lg font-semibold mb-4 mt-6">Restrictions :</h5>
                                        <p class="text-slate-400">You are specifically restricted from all of the following :</p>
                                        <ul class="list-none text-slate-400 mt-3">
                                            <li class="flex mt-2"><i class="uil uil-arrow-right text-indigo-600 text-lg align-middle me-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                            <li class="flex mt-2"><i class="uil uil-arrow-right text-indigo-600 text-lg align-middle me-2"></i>Our Talented & Experienced Marketing Agency</li>
                                            <li class="flex mt-2"><i class="uil uil-arrow-right text-indigo-600 text-lg align-middle me-2"></i>Create your own skin to match your brand</li>
                                            <li class="flex mt-2"><i class="uil uil-arrow-right text-indigo-600 text-lg align-middle me-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                            <li class="flex mt-2"><i class="uil uil-arrow-right text-indigo-600 text-lg align-middle me-2"></i>Our Talented & Experienced Marketing Agency</li>
                                            <li class="flex mt-2"><i class="uil uil-arrow-right text-indigo-600 text-lg align-middle me-2"></i>Create your own skin to match your brand</li>
                                        </ul>
            
                                        <h5 class="text-lg font-semibold mt-6">Users Question & Answer :</h5>
            
                                        <div id="accordion-collapse" data-accordion="collapse" class="mt-6">
                                            <div v-for="item in datas" :key="item" class="relative shadow-sm dark:shadow-gray-700 rounded-md overflow-hidden mt-4 first:mt-0">
                                                <h2 class="text-base font-semibold" id="accordion-collapse-heading-1">
                                                    <button type="button" @click="activeIndex = activeIndex === item.id ? null : item.id" :class="item.id === activeIndex ? 'text-indigo-600 bg-gray-50 dark:bg-slate-800' : ''" class="flex justify-between items-center p-5 w-full font-medium text-start" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                        <span>{{item.title}}</span>
                                                        <svg :class="item.id === activeIndex ? 'rotate-180' : ''" data-accordion-icon class="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                        </svg>
                                                    </button>
                                                </h2>
                                                <div :class="item.id === activeIndex ? '' : 'hidden'" id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                                                    <div class="p-5">
                                                        <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                                    </div>
                                                </div>
                                            </div>
            
                                           
                                        </div>
            
                                        <div class="mt-6">
                                            <a href="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Accept</a>
                                            <a href="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md ms-2">Decline</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <footers />
            <switcher />
        </main>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import sidebar from '@/components/sidebar/sidebar-dark.vue';
import topheader from '@/components/top-header/top-header.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';

const toggle = ref(true);
const activeIndex = ref(1);
const datas = ref([
  {
    id: 1,
    title: 'How does it work ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    id: 2,
    title: 'Do I need a designer to use Techwind ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    id: 3,
    title: 'What do I need to do to start selling ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    id: 4,
    title: 'What happens when I receive an order ?',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
]);

const handleClick = () => {
  toggle.value = !toggle.value;
};

const darkmode = () => {
  document.documentElement.classList.remove('dark');
};

const bodurtl = () => {
  document.documentElement.removeAttribute('dir');
};

onMounted(() => {
  darkmode();
  bodurtl();
});
</script>
