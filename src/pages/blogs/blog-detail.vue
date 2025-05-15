<template>
    <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />
          
            <div class="container-fluid relative px-3">
                    <div class="layout-specing">
                        <div class="md:flex justify-between items-center">
                            <h5 class="text-lg font-semibold">{{data && data.title ? data.title : 'My Very Minimal Interior Design Ideas' }}</h5>
                            <ul class="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                                <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><router-link to="/">Techwind</router-link></li>
                                <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                                <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Blog Detail</li>
                            </ul>
                        </div>

                        <div class="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                            <div class="lg:col-span-8 md:col-span-6">
                                <div class="p-6 rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900">
        
                                    <img :src="data && data.image ? data.image : blogimage" class="rounded-md w-full object-cover" alt="">
        
                                    <div class="mt-6">
                                        <p class="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>
                                        <p class="text-slate-400 italic border-x-4 border-indigo-600 rounded-ss-xl rounded-ee-xl mt-3 p-3">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                        <p class="text-slate-400 mt-3">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                                    </div>
                                </div>
                                <div class="p-6 rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 mt-6">
                                    <blogcomments />
                                </div>
        
                                <div class="p-6 rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 mt-6">
                                    <h5 class="text-lg font-semibold">Leave A Comment:</h5>
                                    <form class="mt-6">
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
        
                            <div class="lg:col-span-4 md:col-span-6">
                              <blogsidebar />
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
    import { useRoute } from 'vue-router';
    import sidebar from '@/components/sidebar/sidebar-dark.vue';
    import topheader from '@/components/top-header/top-header.vue';
    import footers from '@/components/footer/footer.vue';
    import switcher from '@/components/switcher.vue';
    import blogimage from '../../assets/images/blog/bg.jpg';
    import blogsidebar from '@/components/blogs/blog-sidebar.vue';
    import blogcomments from '@/components/blogs/blog-comments.vue';

    import blog1 from '@/assets/images/blog/01.jpg'
    import blog2 from '@/assets/images/blog/02.jpg'
    import blog3 from '@/assets/images/blog/03.jpg'
    import blog4 from '@/assets/images/blog/04.jpg'
    import blog5 from '@/assets/images/blog/05.jpg'
    import blog6 from '@/assets/images/blog/06.jpg'
    import blog7 from '@/assets/images/blog/07.jpg'
    import blog8 from '@/assets/images/blog/08.jpg'

    const route = useRoute();
    const toggle = ref(true);
    const id = ref('');
    const data = ref('');
    const datas = ref([
        {
            id: 1,
            image: blog1,
            title: 'Design your apps in your own way',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            id: 2,
            image: blog2,
            title: 'How apps is changing the IT world',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            id: 3,
            image: blog3,
            title: 'Smartest Applications for Business',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            id: 4,
            image: blog4,
            title: 'Mobile Marketing, Its Synthes and 2021 Offer Prognosis',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            id: 5,
            image: blog5,
            title: 'Stop Worrying About Deadlines! We Got You Covered',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            id: 6,
            image: blog6,
            title: 'Change Your Strategy: Find a Business Consultant',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            id: 7,
            image: blog7,
            title: 'Everything About Financial Modeling',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            id: 8,
            image: blog8,
            title: 'On the other hand we provide denounce',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            id: 9,
            image: blog6,
            title: 'Consultant Business',
            time: '1st May 2022'
        },
        {
            id: 10,
            image: blog8,
            title: 'Grow Your Business',
            time: '1st May 2022'
        },
        {
            id: 11,
            image: blog8,
            title: 'Look On The Glorious Balance',
            time: '1st May 2022'
        }
    ]);

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
        id.value = route.params.id;
        data.value = datas.value.find((item) => item.id === parseInt(id.value));
        darkmode();
        bodurtl();
    });
</script>
