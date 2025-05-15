<template>
    <div class="page-wrapper" :class="toggles === true ? 'toggled' : ''">
        <sidebar />
        <main class="page-content bg-gray-50 dark:bg-slate-800">
            <topheader :customClick="handleClick" />


            <div class="container-fluid relative px-3">
                <div class="layout-specing">
                    <div class="md:flex justify-between items-center">
                        <h5 class="text-lg font-semibold">UI Components</h5>

                        <ul class="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                            <li
                                class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                <router-link to="/">Techwind</router-link></li>
                            <li
                                class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                                <i class="uil uil-angle-right-b"></i></li>
                            <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white"
                                aria-current="page">Components</li>
                        </ul>
                    </div>

                    <div class="grid md:grid-cols-12 mt-6 gap-6 relative">
                        <div class="xl:col-span-3 md:col-span-4">
                            <div
                                class="rounded-md shadow-sm dark:shadow-gray-700 bg-white dark:bg-slate-900 p-6 sticky top-20">
                                <ul class="list-none sidebar-nav mb-0 py-0" id="navmenu-nav">
                                    <li class="navbar-item p-0" :class="activeId === 'buttons' ? 'active' : ''"><a href="#buttons" v-smooth-scroll class="text-base font-medium navbar-link">UI Buttons</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'badges' ? 'active' : ''"><a v-smooth-scroll href="#badges" class="text-base font-medium navbar-link">UI Badges</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'alerts' ? 'active' : ''"><a v-smooth-scroll href="#alerts" class="text-base font-medium navbar-link">UI Alerts</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'dropdowns' ? 'active' : ''"><a v-smooth-scroll href="#dropdowns" class="text-base font-medium navbar-link">UI Dropdowns</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'text-colors' ? 'active' : ''"><a v-smooth-scroll href="#text-colors" class="text-base font-medium navbar-link">UI Text Colors</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'backgrounds' ? 'active' : ''"><a v-smooth-scroll href="#backgrounds" class="text-base font-medium navbar-link">UI Background Colors</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'opacity' ? 'active' : ''"><a v-smooth-scroll href="#opacity" class="text-base font-medium navbar-link">UI Opacity</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'accordions' ? 'active' : ''"><a v-smooth-scroll href="#accordions" class="text-base font-medium navbar-link">UI Accordions</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'nav-tabs' ? 'active' : ''"><a v-smooth-scroll href="#nav-tabs" class="text-base font-medium navbar-link">UI Nav Tabs</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'form-inputs' ? 'active' : ''"><a v-smooth-scroll href="#form-inputs" class="text-base font-medium navbar-link">UI Form Elements</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'shadows' ? 'active' : ''"><a v-smooth-scroll href="#shadows" class="text-base font-medium navbar-link">UI Shadow</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'borders' ? 'active' : ''"><a v-smooth-scroll href="#borders" class="text-base font-medium navbar-link">UI Borders</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'breadcrumbs' ? 'active' : ''"><a v-smooth-scroll href="#breadcrumbs" class="text-base font-medium navbar-link">UI Breadcrumbs</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'paginations' ? 'active' : ''"><a v-smooth-scroll href="#paginations" class="text-base font-medium navbar-link">UI Paginations</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'modals' ? 'active' : ''"><a v-smooth-scroll href="#modals" class="text-base font-medium navbar-link">UI Modals</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'tables' ? 'active' : ''"><a v-smooth-scroll href="#tables" class="text-base font-medium navbar-link">UI Tables</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'headings' ? 'active' : ''"><a v-smooth-scroll href="#headings" class="text-base font-medium navbar-link">UI Headings</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'font-weights' ? 'active' : ''"><a v-smooth-scroll href="#font-weights" class="text-base font-medium navbar-link">UI Font Weights</a></li>
                                    <li class="navbar-item mt-3 p-0" :class="activeId === 'icons' ? 'active' : ''"><a  v-smooth-scroll href="#icons" class="text-base font-medium navbar-link">UI Icons</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="xl:col-span-9 md:col-span-8">
                            <div class="grid grid-cols-1 gap-6">
                                <div class="scroll-div" id="buttons">
                            <h5 class="font-bold text-xl mb-6">Buttons</h5>

                            <div class="grid grid-cols-1 gap-[30px] scroll-div" id="buttons">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900 scroll-div" id="buttons">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Default Buttons</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in buttons" :key="item"
                                                class="inline-block m-0.5 space-x-2">
                                                <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-md" :class="item.class">{{ item.button }}</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Rounded Buttons</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in buttons" :key="item" class="inline-block m-0.5">
                                                <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-cente rounded-full" :class="item.class">{{ item.button }}</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Outline Buttons</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in outline" :key="item" class="inline-block m-0.5">
                                                <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center  rounded-md" :class="item.class">{{ item.button }}</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Outline Rounded Buttons</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in outline" :key="item" class="inline-block m-0.5">
                                                <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center  rounded-full" :class="item.class">{{ item.button }}</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Soft Buttons</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in soft" :key="item" class="inline-block m-0.5">
                                                <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center  rounded-md" :class="item.class">{{ item.button }}</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Soft Rounded Buttons</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in soft" :key="item" class="inline-block m-0.5">
                                                <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center  rounded-full" :class="item.class">{{ item.button }}</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Button Size</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in size" :key="item" class="inline-block m-0.5">
                                                <router-link to="" class="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md" :class="item.class">{{ item.button }}</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Button Icons</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in icons" :key="item" class="inline-block m-0.5">
                                                <router-link to="#" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center" :class="item"><i data-feather="shopping-cart" class="size-4"></i></router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="badges">
                            <h5 class="font-bold text-xl mb-6">Badges</h5>

                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900 scroll-div" id="badges">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Default Badges</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in defaults" :key="item" class="inline-block me-1">
                                                <span class="text-[12px] font-semibold px-2.5 py-0.5 rounded h-5" :class="item.class">{{ item.badges }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Rounded Badges</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in defaults" :key="item" class="inline-block me-1">
                                                <span class="text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5" :class="item.class">{{ item.badges }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Outline Badges</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in outlines" :key="item" class="inline-block me-1">
                                                <span class="text-[12px] font-semibold px-2.5 py-0.5 rounded h-5" :class="item.class">{{ item.badges }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Outline Rounded Badges</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in outlines" :key="item" class="inline-block me-1">
                                                <span class="text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5" :class="item.class">{{ item.badges }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Soft Badges</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in softs" :key="item" class="inline-block me-1">
                                                <span class="text-[12px] font-semibold px-2.5 py-0.5 rounded h-5" :class="item.class">{{ item.badges }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Soft Rounded Badges</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in softs" :key="item" class="inline-block me-1">
                                                <span class="text-[12px] font-semibold px-2.5 py-0.5 rounded-full h-5" :class="item.class">{{ item.badges }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="alerts">
                            <h5 class="font-bold text-xl mb-6">Alerts</h5>
                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900 scroll-div" id="alerts">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Alerts</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <div class="space-y-3">
                                            <div v-for="item in alerts" :key="item" class="relative px-4 py-2 rounded-md font-medium block" :class="item.class">{{ item.name }}</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Soft Alerts</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <div class="space-y-3">
                                            <div v-for="item in alertsoft" :key="item" class="relative px-4 py-2 rounded-md font-medium block" :class="item.class">{{ item.name }}</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Alert with icon</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <div class="space-y-3">
                                            <div v-for="item in alerticons" :key="item" class="relative px-4 py-2 rounded-md font-medium block" :class="item.class">
                                                <i :class="item.icon"></i> {{ item.name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Alert with Link</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <div class="space-y-3">
                                            <div v-for="item in alertlink" :key="item" class="relative px-4 py-2 rounded-md font-medium block" :class="item.class">{{ item.name }}<router-link to="" class="font-bold ms-1">{{ item.link }}</router-link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="dropdowns">
                            <h5 class="font-bold text-xl mb-6">Dropdowns</h5>
                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Dropdowns</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button class="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md cursor-pointer" type="button" ref="dropdownToggle" @click="dropdownOpen = !dropdownOpen"> Indigo
                                                    <i class="uil uil-angle-down text-[20px] align-middle inline-block"></i>
                                                </button>
                                                <div class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 dark:shadow-gray-800"  v-show="dropdownOpen">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-indigo-600">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-indigo-600">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-indigo-600">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-indigo-600">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button role="button" @click="dropdownOpen2 = !dropdownOpen2" class="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md"  ref="dropdownToggle2" type="button">Emerald <i class="uil uil-angle-down text-[20px] align-middle inline-block"></i>
                                                </button>
                                                <div v-show="dropdownOpen2" class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-emerald-600">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-emerald-600">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-emerald-600">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-emerald-600">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="dropdown inline-block relative m-0.5">
                                                <button data-dropdown-toggle="dropdown" ref="dropdownToggle3" class="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-white rounded-md" @click="dropdownOpen3 = !dropdownOpen3" type="button">Yellow <i class="uil uil-angle-down text-[20px] align-middle inline-block"></i>
                                                </button>
                                                <div v-show="dropdownOpen3" class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-yellow-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-yellow-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-yellow-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-yellow-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button data-dropdown-toggle="dropdown" ref="dropdownToggle4" class="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md" @click="dropdownOpen4 = !dropdownOpen4" type="button">Red <i class="uil uil-angle-down text-[20px] align-middle inline-block"></i></button>
                                                <div v-show="dropdownOpen4" class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-red-600">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-red-600">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-red-600">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-red-600">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button data-dropdown-toggle="dropdown" ref="dropdownToggle5" class="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-sky-500 hover:bg-sky-600 border-sky-500 hover:border-sky-600 text-white rounded-md" @click="dropdownOpen5 = !dropdownOpen5" type="button">Sky <i class="uil uil-angle-down text-[20px] align-middle inline-block"></i>
                                                </button>
                                                <div v-show="dropdownOpen5" class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-sky-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-sky-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-sky-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-sky-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button data-dropdown-toggle="dropdown" ref="dropdownToggle6" class="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500 hover:bg-cyan-600 border-cyan-500 hover:border-cyan-600 text-white rounded-md" @click="dropdownOpen6 = !dropdownOpen6" type="button"> Cyan <i class="uil uil-angle-down text-[20px] align-middle inline-block"></i>
                                                </button>
                                                <div v-show="dropdownOpen6"
                                                    class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button data-dropdown-toggle="dropdown" ref="dropdownToggle7" class="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md" @click="dropdownOpen7 = !dropdownOpen7" type="button">Blue <i class="uil uil-angle-down text-[20px] align-middle inline-block"></i>
                                                </button>
                                                <div v-show="dropdownOpen7"
                                                    class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button data-dropdown-toggle="dropdown" ref="dropdownToggle8" class="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md" @click="dropdownOpen8 = !dropdownOpen8" type="button">Orange <i class="uil uil-angle-down text-[20px] align-middle inline-block"></i>
                                                </button>
                                                <div v-show="dropdownOpen8"
                                                    class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button data-dropdown-toggle="dropdown" ref="dropdownToggle9"
                                                    class="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 text-white rounded-md"
                                                    @click="dropdownOpen9 = !dropdownOpen9" type="button">
                                                    Purple <i
                                                        class="uil uil-angle-down text-[20px] align-middle inline-block"></i>
                                                </button>
                                                <div v-show="dropdownOpen9"
                                                    class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button data-dropdown-toggle="dropdown" ref="dropdownToggle10" class="dropdown-toggle py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-800 hover:bg-gray-950 border-gray-800 hover:border-gray-950 text-white rounded-md" @click="dropdownOpen10 = !dropdownOpen10" type="button">Dark <i class="uil uil-angle-down text-[20px] align-middle inline-block"></i>
                                                </button>
                                                <div v-show="dropdownOpen10"
                                                    class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Icon Dropdowns</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li class="dropdown inline-block relative m-0.5">
                                                <button  ref="dropdownIcon"
                                                    class="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md" @click="dropdownIcon = !dropdownIcon"
                                                    type="button">
                                                    <i class="uil uil-setting"></i>
                                                </button>
                                                <div  v-show="dropdownIcon"
                                                    class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button  ref="dropdownIcon2" class="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md" @click="dropdownIcon2 = !dropdownIcon2" type="button"> <i class="uil uil-setting"></i>
                                                </button>
                                                <div v-show="dropdownIcon2" class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button  ref="dropdownIcon3"
                                                    class="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-white rounded-md" @click="dropdownIcon3 = !dropdownIcon3"
                                                    type="button">
                                                    <i class="uil uil-setting"></i>
                                                </button>
                                                <div v-show="dropdownIcon3"
                                                    class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button  ref="dropdownIcon4"
                                                    class="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md" @click="dropdownIcon4 = !dropdownIcon4"
                                                    type="button">
                                                    <i class="uil uil-setting"></i>
                                                </button>
                                                
                                                <div v-show="dropdownIcon4"
                                                    class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button  ref="dropdownIcon5"
                                                    class="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-sky-500 hover:bg-sky-600 border-sky-500 hover:border-sky-600 text-white rounded-md" @click="dropdownIcon5 = !dropdownIcon5"
                                                    type="button">
                                                    <i class="uil uil-setting"></i>
                                                </button>
                                                
                                                <div v-show="dropdownIcon5"
                                                    class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button  ref="dropdownIcon6"
                                                    class="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500 hover:bg-cyan-600 border-cyan-500 hover:border-cyan-600 text-white rounded-md" @click="dropdownIcon6 = !dropdownIcon6"
                                                    type="button">
                                                    <i class="uil uil-setting"></i>
                                                </button>
                                                
                                                <div v-show="dropdownIcon6"
                                                    class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button ref="dropdownIcon7"
                                                    class="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md" @click="dropdownIcon7 = !dropdownIcon7"
                                                    type="button">
                                                    <i class="uil uil-setting"></i>
                                                </button>
                                                
                                                <div v-show="dropdownIcon7"
                                                    class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button  ref="dropdownIcon8"
                                                    class="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md" @click="dropdownIcon8 = !dropdownIcon8"
                                                    type="button">
                                                    <i class="uil uil-setting"></i>
                                                </button>
                                                
                                                <div v-show="dropdownIcon8"
                                                    class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button  ref="dropdownIcon9"
                                                    class="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 text-white rounded-md" @click="dropdownIcon9 = !dropdownIcon9"
                                                    type="button">
                                                    <i class="uil uil-setting"></i>
                                                </button>
                                                
                                                <div v-show="dropdownIcon9"
                                                    class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="dropdown inline-block relative m-0.5">
                                                <button  ref="dropdownIcon10"
                                                    class="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-gray-800 hover:bg-gray-950 border-gray-800 hover:border-gray-950 text-white rounded-md" @click="dropdownIcon10 = !dropdownIcon10"
                                                    type="button">
                                                    <i class="uil uil-setting"></i>
                                                </button>
                                                
                                                <div v-show="dropdownIcon10"
                                                    class="dropdown-menu absolute start-0 m-0 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                                    <ul class="py-2 text-start">
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Home</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Service</router-link></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">About us</router-link></li>
                                                        <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                                        <li><router-link to="" class="block font-medium py-1.5 px-4 hover:text-cyan-500">Contact</router-link></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="text-colors">
                            <h5 class="font-bold text-xl mb-6">Text Colors</h5>
                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Text Colors</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in colors" :key="item">
                                                <span class="font-semibold" :class="item.class">{{ item.name }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="backgrounds">
                            <h5 class="font-bold text-xl mb-6">Background Colors</h5>
                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Background Colors</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in bgcolors" :key="item" class="inline-block shadow-sm dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5" :class="item.class">{{ item.name }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="opacity">
                            <h5 class="font-bold text-xl mb-6">Opacity</h5>

                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Opacity</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in opacitys" :key="item" class="inline-block shadow-sm dark:shadow-gray-800 rounded-md py-2 px-3 m-0.5" :class="item.class">{{ item.name }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="accordions">
                            <h5 class="font-bold text-xl mb-6">Accordions</h5>

                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Accordion</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <div id="accordion-collapseone" data-accordion="collapse">
                                            <div v-for="item in datas" :key="item"
                                                class="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                                <h2 class="text-base font-semibold" id="accordion-collapse-heading-1">
                                                    <button @click="activeIndex = activeIndex === item.id ? null : item.id" :class="item.id === activeIndex ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''" type="button" class="flex justify-between items-center p-5 w-full font-medium text-start" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                        <span>{{ item.title }}</span>
                                                        <svg :class="item.id === activeIndex ? 'rotate-180' : ''" data-accordion-icon class="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                        </svg>
                                                    </button>
                                                </h2>
                                                <div id="accordion-collapse-body-1" :class="item.id === activeIndex ? '' : 'hidden'" aria-labelledby="accordion-collapse-heading-1">
                                                    <div class="p-5">
                                                        <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="nav-tabs">
                            <h5 class="font-bold text-xl mb-6">Nav Tabs</h5>

                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Horizontal Nav Tabs</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md"
                                            id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                                            <li v-for="item in navtabs" :key="item" role="presentation" class="inline-block me-1">
                                                <button @click="toggle2(item.id)" :class="item.id === isActive ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  dark:text-white hover:bg-gray-50 hover:text-indigo-600'" class="px-4 py-1 text-sm font-semibold rounded-md w-full duration-500" id="tab-one-tab" data-tabs-target="#tab-one" type="button" role="tab" aria-controls="tab-one" aria-selected="true">{{ item.tabs}}</button>
                                            </li>
                                        </ul>

                                        <div id="StarterContent" class="mt-6">
                                            <div :class="isActive === 1 ? '' : 'hidden'" class="" id="tab-one"
                                                role="tabpanel" aria-labelledby="tab-one-tab">
                                                <p class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum vero quae officiis earum odio, consequatur perferendis sapiente quo illum ipsam illo harum maiores minima dolor adipisci recusandae labore? Harum.</p>
                                            </div>

                                            <div :class="isActive === 2 ? '' : 'hidden'" id="tab-two" role="tabpanel" aria-labelledby="tab-two-tab">
                                                <p class="text-slate-400">1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum vero quae officiis earum odio, consequatur perferendis sapiente quo illum ipsam illo harum maiores minima dolor adipisci recusandae labore? Harum.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Vertical Nav Tabs</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                            <div class="lg:col-span-4 md:col-span-5">
                                                <ul class="flex-column text-center space-y-2" id="myTab2"
                                                    data-tabs-toggle="#myTabContent" role="tablist">
                                                    <li role="presentation">
                                                        <button @click="toggle3(1)" :class="isActive2 === 1 ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800 hover:text-indigo-600  hover:bg-gray-50 dark:text-white'" class="px-4 py-1 text-sm font-semibold rounded-md w-full duration-500" id="tab-three-tab" data-tabs-target="#tab-three" type="button" role="tab" aria-controls="tab-three" aria-selected="true">Tab One</button>
                                                    </li>
                                                    <li role="presentation">
                                                        <button @click="toggle3(2)" :class="isActive2 === 2 ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800  hover:bg-gray-50 hover:text-indigo-600 dark:text-white'" class="px-4 py-1 text-sm font-semibold rounded-md w-full duration-500" id="tab-four-tab" data-tabs-target="#tab-four" type="button" role="tab" aria-controls="tab-four" aria-selected="false">Tab Two</button>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="lg:col-span-8 md:col-span-7">
                                                <div id="myTabContent">
                                                    <div :class="isActive2 === 1 ? '' : 'hidden'" id="tab-three" role="tabpanel" aria-labelledby="tab-three-tab">
                                                        <p class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum vero quae officiis earum odio, consequatur perferendis sapiente quo illum ipsam illo harum maiores minima dolor adipisci recusandae labore? Harum.</p>
                                                    </div>

                                                    <div :class="isActive2 === 2 ? '' : 'hidden'" id="tab-four" role="tabpanel" aria-labelledby="tab-four-tab">
                                                        <p class="text-slate-400">1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum vero quae officiis earum odio, consequatur perferendis sapiente quo illum ipsam illo harum maiores minima dolor adipisci recusandae labore? Harum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="form-inputs">
                            <h5 class="font-bold text-xl mb-6">Form Inputs</h5>

                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Form Inputs</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <form>
                                            <div class="grid grid-cols-1 gap-5">
                                                <div class="">
                                                    <label class="form-label font-semibold">First Name:</label>
                                                    <input type="text" class="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="First Name:" id="firstname" name="name" required="">
                                                </div>

                                                <div class="">
                                                    <label class="form-label font-semibold">Username:</label>
                                                    <div class="relative mt-2">
                                                        <span class="absolute top-0.5 start-0.5 size-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="basic-addon1"><i class="uil uil-at"></i></span>
                                                        <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Username" required>
                                                    </div>
                                                </div>

                                                <div class="">
                                                    <label class="form-label font-semibold">Your Email:</label>
                                                    <input type="email" class="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Email" name="email" required="">
                                                </div>

                                                <div class="">
                                                    <label class="font-semibold">Select Input:</label>
                                                    <select class="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                                        <option value="USA">USA</option>
                                                        <option value="CAD">Canada</option>
                                                        <option value="CHINA">China</option>
                                                    </select>
                                                </div>

                                                <div class="">
                                                    <label class="form-label font-semibold">Number:</label>
                                                    <input type="number" class="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Zip:" id="zipcode" name="number" required="">
                                                </div>

                                                <div class="">
                                                    <h6 class="font-semibold">Form Checkbox</h6>

                                                    <div class="flex items-center w-full mb-0">
                                                        <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" checked value="" id="sameaddress">
                                                        <label class="form-check-label text-slate-400" for="sameaddress">Checkbox 1</label>
                                                    </div>

                                                    <div class="flex items-center w-full mb-0">
                                                        <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="savenexttime">
                                                        <label class="form-check-label text-slate-400" for="savenexttime">Checkbox 2</label>
                                                    </div>

                                                    <div class="flex items-center w-full mb-0">
                                                        <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" disabled value="" id="checkbox-d">
                                                        <label class="form-check-label text-slate-400" for="checkbox-d">Disabled Checkbox</label>
                                                    </div>
                                                </div>

                                                <div class="">
                                                    <h6 class="font-semibold">Form Radio</h6>
                                                    <div class="block">
                                                        <div>
                                                            <label class="inline-flex items-center">
                                                                <input type="radio" class="form-radio size-4 appearance-none rounded-full border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" checked name="radio-colors" value="1">
                                                                <span class="text-slate-400">Radio 1</span>
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div class="block mt-2">
                                                        <div>
                                                            <label class="inline-flex items-center">
                                                                <input type="radio" class="form-radio size-4 appearance-none rounded-full border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" name="radio-colors" value="1">
                                                                <span class="text-slate-400">Radio 2</span>
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div class="block mt-2">
                                                        <div>
                                                            <label class="inline-flex items-center">
                                                                <input type="radio" class="form-radio size-4 appearance-none rounded-full border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" disabled name="radio-colors" value="1">
                                                                <span class="text-slate-400">Disabled Radio</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="shadows">
                            <h5 class="font-bold text-xl mb-6">Shadows</h5>

                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Shadows</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none space-y-6">
                                            <li v-for="item in shadows" :key="item" class="dark:shadow-gray-800 py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400" :class="item.class">{{ item.name }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="scroll-div" id="borders">
                            <h5 class="font-bold text-xl mb-6">Borders</h5>

                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Borders</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none space-x-4 space-y-4">
                                            <li v-for="item in borders" :key="item" class="inline-block dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400" :class="item.class">{{ item.name }}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Border Styles</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none space-x-4 space-y-4">
                                            <li v-for="item in borderstyle" :key="item" class="inline-block border-2 dark:border-gray-800 sm:w-[150px] py-2 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400" :class="item.class">{{ item.name }}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Border Radious</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none space-x-4 space-y-4">
                                            <li v-for="item in borderradious" :key="item" class="inline-block shadow-sm dark:shadow-gray-800 py-6 px-3 m-0.5 bg-white dark:bg-slate-900 text-slate-400" :class="item.class">{{ item.name }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="breadcrumbs">
                            <h5 class="font-bold text-xl mb-6">Breadcrumb</h5>

                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Breadcrumb</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="tracking-[0.5px] mb-0 inline-block">
                                            <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
                                                <router-link to="/">Techwind</router-link>
                                            </li>
                                            <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                                                <i class="uil uil-angle-right-b"></i>
                                            </li>
                                            <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
                                                <router-link to="">Components</router-link>
                                            </li>
                                            <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                                                <i class="uil uil-angle-right-b"></i>
                                            </li>
                                            <li class="inline-block uppercase text-[13px] font-bold text-indigo-600" aria-current="page">Typography</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="paginations">
                            <h5 class="font-bold text-xl mb-6">Pagination</h5>

                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Pagination</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <nav aria-label="Page navigation example">
                                            <ul class="inline-flex items-center -space-x-px">
                                                <li>
                                                    <router-link to="#" class="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                                        <i class="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="#" class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">1</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="#" class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">2</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="#" aria-current="page" class="z-10 size-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">3</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="#" class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">4</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="#" class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">5</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="#" class="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                                        <i class="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="modals">
                            <h5 class="font-bold text-xl mb-6">Modals</h5>

                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Modals</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Modal</router-link>

                                        <dialog id="ContactUs"
                                            class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                                            <div class="relative h-auto min-w-[480px]">
                                                <div
                                                    class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                                                    <h3 class="font-bold text-lg">Add Payment Method</h3>
                                                    <form method="dialog">
                                                        <button class="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost"><i data-feather="x" class="size-4"></i></button>
                                                    </form>
                                                </div>
                                                <div class="p-6 text-center">
                                                    <div class="relative overflow-hidden text-transparent -m-3">
                                                        <i data-feather="hexagon"
                                                            class="size-32 fill-red-600/5 mx-auto"></i>
                                                        <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-red-600 rounded-xl duration-500 text-4xl flex align-middle justify-center items-center">
                                                            <i class="uil uil-heart-break"></i>
                                                        </div>
                                                    </div>

                                                    <h4 class="text-xl font-semibold mt-6">Your wishlist is empty.</h4>
                                                    <p class="text-slate-400 my-3">Create your first wishlist request...</p>

                                                    <router-link to="" class="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-transparent hover:bg-indigo-600 border border-indigo-600 text-indigo-600 hover:text-white rounded-md mt-2">Create a new wishlist</router-link>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="tables">
                            <h5 class="font-bold text-xl mb-6">Tables</h5>

                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Tables</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <div
                                            class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                                            <table class="w-full text-start">
                                                <thead>
                                                    <tr>
                                                        <th class="px-4 py-5 text-start">Lessons</th>
                                                        <th class="px-4 py-5 text-end">Time</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr class="border-t border-gray-100 dark:border-gray-700">
                                                        <td class="p-4"><router-link to="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 1</router-link></td>
                                                        <td class="p-4 text-end"><span class="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Watch Free</span></td>
                                                    </tr>

                                                    <tr class="border-t border-gray-100 dark:border-gray-700">
                                                        <td class="p-4"><router-link to="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 2</router-link></td>
                                                        <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                                    </tr>

                                                    <tr class="border-t border-gray-100 dark:border-gray-700">
                                                        <td class="p-4"><router-link to="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 3</router-link></td>
                                                        <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                                    </tr>

                                                    <tr class="border-t border-gray-100 dark:border-gray-700">
                                                        <td class="p-4"><router-link to="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 4</router-link></td>
                                                        <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="headings">
                            <h5 class="font-bold text-xl mb-6">Heading</h5>
                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Heading</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <ul class="list-none">
                                            <li v-for="item in headings" :key="item"><span class="font-semibold text-slate-400" :class="item.class">{{item.name }}</span>{{ item.name2 }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="font-weights">
                            <h5 class="font-bold text-xl mb-6">Font Weight</h5>

                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Font Weight</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <p v-for="item in fontweight" :key="item" class="text-lg text-red-600 mt-2">{{ item.name }} <span :class="item.class" class="text-slate-400">{{item.name2 }}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="scroll-div" id="icons">
                            <h5 class="font-bold text-xl mb-6">Icons</h5>

                            <div class="grid grid-cols-1 gap-[30px]">
                                <div class="shadow-sm dark:shadow-slate-800 rounded bg-white dark:bg-slate-900">
                                    <div class="p-5">
                                        <h5 class="text-lg font-semibold">Icons</h5>
                                    </div>
                                    <div class="p-5 border-t border-gray-100 dark:border-slate-800">
                                        <h6 class="text-lg font-medium">Feather Icons</h6>
                                        <p class="text-slate-400">There are 280+ feather icons and you can get all icons info from here: <a href="https://feathericons.com/" target="_blank"><code class="text-indigo-600">https://feathericons.com/</code></a></p>
                                        <h6 class="text-slate-400 mb-4 pb-2">Ex. <code class="text-red-600">&lt;i data-feather="mail" class="size-8"&gt; &lt;/i&gt;</code></h6>

                                        <ul class="list-none">
                                            <li v-for="item in feathericons" :key="item" class="inline-block"><i :data-feather="item" class="size-8 me-2"></i></li>
                                        </ul>

                                        <h6 class="mt-6 text-lg font-medium">Material Design Icons</h6>
                                        <p class="text-slate-400">There are 4400+ Material Design icons and you can get all icons info from here: <a href="https://materialdesignicons.com/" target="_blank"><code class="text-indigo-600">https://materialdesignicons.com/</code></a></p>
                                        <h6 class="text-slate-400 mb-4 pb-2">Ex. <code class="text-red-600">&lt;i class="mdi mdi-home"&gt; &lt;/i&gt;</code></h6>
                                        <i v-for="item in materialicons" :key="item" :class="item"></i>
                                        <h6 class="mt-6 text-lg font-medium">Iconscout (Unicons) Icons</h6>
                                        <p class="text-slate-400">There are 1100+ Iconscout (Unicons) Icons and you can get all icons info from here: <a href="https://iconscout.com/unicons" target="_blank"><code class="text-indigo-600">https://www.flaticon.com/packs/basic-icon</code></a></p>
                                        <h6 class="text-slate-400 mb-4 pb-2">Ex. <code class="text-red-600"><br>&lt;i class="uil uil-0-plus"&gt;&lt;/i&gt;<br>&lt;/span&gt;</code></h6>

                                        <span v-for="item in iconscout" :key="item" class="text-lg text-indigo-600 me-2"><i :class="item"></i></span>
                                    </div>
                                </div>
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
import sidebar from '@/components/sidebar/sidebar-dark.vue';
import topheader from '@/components/top-header/top-header.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import { ref } from 'vue';

const toggles = ref(true)
const dropdownOpen = ref(false)
const dropdownOpen2 = ref(false)
const dropdownOpen3 = ref(false)
const dropdownOpen4 = ref(false)
const dropdownOpen5 = ref(false)
const dropdownOpen6 = ref(false)
const dropdownOpen7 = ref(false)
const dropdownOpen8 = ref(false)
const dropdownOpen9 = ref(false)
const dropdownOpen10 = ref(false)
const activeId = ref('')
const activeIndex = ref(1)
const isActive = ref(1)
const isActive2 = ref(1)

const buttons = [
    {
        class: 'bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700',
        button: 'Indigo'
    },
    {
        class: 'bg-emerald-600 text-white hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700',
        button: 'Emerald'
    },
    {
        class: 'bg-red-600 text-white hover:bg-red-700 border-red-600 hover:border-red-700',
        button: 'Red'
    },
    {
        class: 'bg-yellow-500 text-white hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600',
        button: 'Yellow'
    },
    {
        class: 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600 hover:border-blue-700',
        button: 'Blue'
    },
    {
        class: 'bg-sky-500 text-white hover:bg-sky-600 border-sky-500 hover:border-sky-600',
        button: 'Sky'
    },
    {
        class: 'bg-cyan-500 text-white hover:bg-cyan-600 border-cyan-500 hover:border-cyan-600',
        button: 'Cyan'
    },
    {
        class: 'bg-orange-600 text-white hover:bg-orange-700 border-orange-600 hover:border-orange-700',
        button: 'Orange'
    },
    {
        class: 'bg-purple-600 text-white hover:bg-purple-700 border-purple-600 hover:border-purple-700',
        button: 'Purple'
    },
    {
        class: 'bg-gray-800 text-white hover:bg-gray-950 border-gray-800 hover:border-gray-950',
        button: 'Dark'
    },
    {
        class: 'bg-gray-500 text-white hover:bg-gray-600 border-gray-500 hover:border-gray-600',
        button: 'Secondary'
    },
    {
        class: 'bg-gray-50 hover:bg-gray-100 border-gray-50 hover:border-gray-100 text-slate-900',
        button: 'Light'
    },
]
const outline = [
    {
        class: 'bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white',
        button: 'Indigo'
    },
    {
        class: 'bg-transparent hover:bg-emerald-600 border-emerald-600 text-emerald-600 hover:text-white',
        button: 'Emerald'
    },
    {
        class: 'bg-transparent hover:bg-red-600 border-red-600 text-red-600 hover:text-white',
        button: 'Red'
    },
    {
        class: 'bg-transparent hover:bg-yellow-500 border-yellow-500 text-yellow-500 hover:text-white',
        button: 'Yellow'
    },
    {
        class: ' bg-transparent hover:bg-blue-600 border-blue-600 text-blue-600 hover:text-white',
        button: 'Blue'
    },
    {
        class: 'bg-transparent hover:bg-sky-500 border-sky-500 text-sky-500 hover:text-white',
        button: 'Sky'
    },
    {
        class: 'bg-transparent hover:bg-cyan-500 border-cyan-500 text-cyan-500 hover:text-white',
        button: 'Cyan'
    },
    {
        class: ' bg-transparent hover:bg-orange-600 border-orange-600 text-orange-600 hover:text-white',
        button: 'Orange'
    },
    {
        class: 'bg-transparent hover:bg-purple-600 border-purple-600 text-purple-600 hover:text-white',
        button: 'Purple'
    },
    {
        class: 'bg-transparent hover:bg-gray-800 border-gray-800 text-gray-800 dark:text-white hover:text-white',
        button: 'Dark'
    },
    {
        class: 'bg-transparent hover:bg-gray-500 border-gray-500 text-gray-500 hover:text-white',
        button: 'Secondary'
    },
    {
        class: 'bg-transparent hover:bg-gray-100 border-gray-100 hover:border-gray-100 text-slate-900 dark:text-white dark:hover:text-slate-900 ',
        button: 'Light'
    },
]

const soft = [
    {
        class: 'bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white',
        button: 'Indigo'
    },
    {
        class: 'bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white',
        button: 'Emerald'
    },
    {
        class: 'bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white',
        button: 'Red'
    },
    {
        class: 'bg-yellow-500/5 hover:bg-yellow-500 border-yellow-500/10 hover:border-yellow-500 text-yellow-500 hover:text-white',
        button: 'Yellow'
    },
    {
        class: 'bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white',
        button: 'Blue'
    },
    {
        class: 'bg-sky-500/5 hover:bg-sky-500 border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white',
        button: 'Sky'
    },
    {
        class: 'bg-cyan-500/5 hover:bg-cyan-500 border-cyan-500/10 hover:border-cyan-500 text-cyan-500 hover:text-white',
        button: 'Cyan'
    },
    {
        class: 'bg-orange-600/5 hover:bg-orange-600 border-orange-600/10 hover:border-orange-600 text-orange-600 hover:text-white',
        button: 'Orange'
    },
    {
        class: 'bg-purple-600/5 hover:bg-purple-600 border-purple-600/10 hover:border-purple-600 text-purple-600 hover:text-white',
        button: 'Purple'
    },
    {
        class: 'bg-gray-800/5 hover:bg-gray-800 border-gray-800/10 hover:border-gray-800 text-gray-800 dark:text-white hover:text-white',
        button: 'Dark'
    },
    {
        class: 'bg-gray-500/5 hover:bg-gray-500 border-gray-500/10 hover:border-gray-500 text-gray-500 hover:text-white',
        button: 'Secondary'
    },
    {
        class: 'bg-gray-50/5 hover:bg-gray-100 border-gray-50 dark:border-gray-100/5 hover:border-gray-100 text-slate-900 dark:text-white dark:hover:text-slate-900',
        button: 'Light'
    },
]
const size = [
    {
        class: 'text-sm',
        button: 'Small'
    },
    {
        class: 'text-base',
        button: 'Default'
    },
    {
        class: 'text-lg',
        button: 'Large'
    },
]
const icons = ['rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white', 'rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white', 'rounded-md border bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white', 'rounded-full border bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white', 'rounded-md border bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white', 'rounded-full border bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white', 'rounded-md border bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white', 'rounded-full border bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white']

const defaults = [
    {
        class: 'bg-indigo-600 text-white',
        badges: 'Indigo'
    },
    {
        class: 'bg-emerald-600 text-white',
        badges: 'Emerald'
    },
    {
        class: 'bg-red-600 text-white',
        badges: 'Red'
    },
    {
        class: 'bg-yellow-500 text-white',
        badges: 'Yellow'
    },
    {
        class: 'bg-blue-600 text-white',
        badges: 'Blue'
    },
    {
        class: 'bg-sky-500 text-white',
        badges: 'Sky'
    },
    {
        class: 'bg-cyan-500 text-white',
        badges: 'Cyan'
    },
    {
        class: 'bg-orange-600 text-white',
        badges: 'Orange'
    },
    {
        class: 'bg-purple-600 text-white',
        badges: 'Purple'
    },
    {
        class: 'bg-gray-800 text-white',
        badges: 'Dark'
    },
    {
        class: 'bg-gray-500 text-white',
        badges: 'Secondary'
    },
    {
        class: 'bg-gray-50 text-slate-900',
        badges: 'Light'
    },
]

const outlines = [
    {
        class: 'bg-transparent border border-indigo-600 text-indigo-600',
        badges: 'Indigo'
    },
    {
        class: 'bg-transparent border border-emerald-600 text-emerald-600',
        badges: 'Emerald'
    },
    {
        class: 'bg-transparent border border-red-600 text-red-600',
        badges: 'Red'
    },
    {
        class: 'bg-transparent border border-yellow-500 text-yellow-500',
        badges: 'Yellow'
    },
    {
        class: 'bg-transparent border border-blue-600 text-blue-600',
        badges: 'Blue'
    },
    {
        class: 'bg-transparent border border-sky-500 text-sky-500',
        badges: 'Sky'
    },
    {
        class: 'bg-transparent border border-cyan-500 text-cyan-500',
        badges: 'Cyan'
    },
    {
        class: 'bg-transparent border border-orange-600 text-orange-600',
        badges: 'Orange'
    },
    {
        class: 'bg-transparent border border-purple-600 text-purple-600',
        badges: 'Purple'
    },
    {
        class: 'bg-transparent border border-gray-800 text-gray-800 dark:text-gray-500',
        badges: 'Dark'
    },
    {
        class: 'bg-transparent border border-gray-500 text-gray-500',
        badges: 'Secondary'
    },
    {
        class: 'bg-transparent border border-gray-50 text-gray-50',
        badges: 'Light'
    },
]

const softs = [
    {
        class: 'bg-indigo-600/5 border border-indigo-600/5 text-indigo-600',
        badges: 'Indigo'
    },
    {
        class: 'bg-emerald-600/5 border border-emerald-600/5 text-emerald-600',
        badges: 'Emerald'
    },
    {
        class: 'bg-red-600/5 border border-red-600/5 text-red-600',
        badges: 'Red'
    },
    {
        class: 'bg-yellow-500/5 border border-yellow-500/5 text-yellow-500',
        badges: 'Yellow'
    },
    {
        class: 'bg-blue-600/5 border border-blue-600/5 text-blue-600',
        badges: 'Blue'
    },
    {
        class: 'bg-sky-500/5 border border-sky-500/5 text-sky-500',
        badges: 'Sky'
    },
    {
        class: 'bg-cyan-500/5 border border-cyan-500/5 text-cyan-500',
        badges: 'Cyan'
    },
    {
        class: 'bg-orange-600/5 border border-orange-600/5 text-orange-600',
        badges: 'Orange'
    },
    {
        class: 'bg-purple-600/5 border border-purple-600/5 text-purple-600',
        badges: 'Purple'
    },
    {
        class: 'bg-gray-800/5 border border-gray-800/5 text-gray-800 dark:text-gray-500',
        badges: 'Dark'
    },
    {
        class: 'bg-gray-500/5 border border-gray-500/5 text-gray-500',
        badges: 'Secondary'
    },
    {
        class: 'bg-gray-50/5 border border-gray-50/5 text-gray-900 dark:text-gray-500',
        badges: 'Light'
    },
]

const alerts = [
    {
        class: 'bg-indigo-600 border border-indigo-600 text-white',
        name: 'A simple alert—check it out!'
    },
    {
        class: 'bg-emerald-600 border border-emerald-600 text-white',
        name: 'A simple alert—check it out!'
    },
    {
        class: 'bg-yellow-500 border border-yellow-500 text-white',
        name: 'A simple alert—check it out!'
    },
    {
        class: 'bg-red-600 border border-red-600 text-white',
        name: 'A simple alert—check it out!'
    },
    {
        class: 'bg-sky-500 border border-sky-500 text-white',
        name: 'A simple alert—check it out!'
    },
    {
        class: 'bg-slate-900 border border-slate-900 text-white',
        name: 'A simple alert—check it out!'
    },
    {
        class: 'bg-gray-400 border border-gray-400 text-white',
        name: 'A simple alert—check it out!'
    },
]

const alertsoft = [
    {
        class: 'bg-indigo-600/10 border border-indigo-600/10 text-indigo-600',
        name: 'A simple alert—check it out!'
    },
    {
        class: 'bg-emerald-600/10 border border-emerald-600/10 text-emerald-600',
        name: 'A simple alert—check it out!'
    },
    {
        class: 'bg-yellow-500/10 border border-yellow-500/10 text-yellow-500',
        name: 'A simple alert—check it out!'
    },
    {
        class: 'bg-red-600/10 border border-red-600/10 text-red-600',
        name: 'A simple alert—check it out!'
    },
    {
        class: 'bg-sky-500/10 border border-sky-500/10 text-sky-500',
        name: 'A simple alert—check it out!'
    },
    {
        class: 'bg-slate-900/10 border border-slate-900/10 text-slate-900 dark:text-white',
        name: 'A simple alert—check it out!'
    },
    {
        class: 'bg-gray-400/10 border border-gray-400/10 text-gray-400',
        name: 'A simple alert—check it out!'
    },
]
const alertlink = [
    {
        link: 'Click here!',
        class: 'bg-indigo-600/10 border border-indigo-600/10 text-indigo-600',
        name: 'A simple alert—check it out!'
    },
    {
        link: 'Click here!',
        class: 'bg-emerald-600/10 border border-emerald-600/10 text-emerald-600',
        name: 'A simple alert—check it out!'
    },
    {
        link: 'Click here!',
        class: 'bg-yellow-500/10 border border-yellow-500/10 text-yellow-500',
        name: 'A simple alert—check it out!'
    },
    {
        link: 'Click here!',
        class: 'bg-red-600/10 border border-red-600/10 text-red-600',
        name: 'A simple alert—check it out!'
    },
    {
        link: 'Click here!',
        class: 'bg-sky-500/10 border border-sky-500/10 text-sky-500',
        name: 'A simple alert—check it out!'
    },
]

const colors = [
    {
        class: 'text-indigo-600',
        name: '.text-indigo-600'
    },
    {
        class: 'text-emerald-600',
        name: '.text-emerald-600'
    },
    {
        class: 'text-red-600',
        name: '.text-red-600'
    },
    {
        class: 'text-yellow-500',
        name: '.text-yellow-500'
    },
    {
        class: 'text-amber-500',
        name: '.text-amber-500'
    },
    {
        class: 'text-blue-600',
        name: '.text-blue-600'
    },
    {
        class: 'text-sky-500',
        name: '.text-sky-500'
    },
    {
        class: 'text-cyan-500',
        name: '.text-cyan-500'
    },
    {
        class: 'text-orange-600',
        name: '.text-orange-600'
    },
    {
        class: 'text-purple-600',
        name: '.text-purple-600'
    },
    {
        class: 'text-slate-900',
        name: '.text-slate-900'
    },
]
const bgcolors = [
    {
        class: 'text-white bg-indigo-600',
        name: '.bg-indigo-600'
    },
    {
        class: 'text-white bg-emerald-600',
        name: '.bg-emerald-600'
    },
    {
        class: 'text-white bg-red-600',
        name: '.bg-red-600'
    },
    {
        class: 'text-white bg-yellow-500',
        name: '.bg-yellow-500'
    },
    {
        class: 'text-white bg-blue-600',
        name: '.bg-blue-600'
    },
    {
        class: 'text-white bg-sky-500',
        name: '.bg-sky-500'
    },
    {
        class: 'text-white bg-cyan-500',
        name: '.bg-cyan-500'
    },
    {
        class: 'text-white bg-orange-600',
        name: '.bg-orange-600'
    },
    {
        class: 'text-white bg-purple-600',
        name: '.bg-purple-600'
    },
    {
        class: 'text-white bg-slate-800',
        name: '.bg-slate-800'
    },
    {
        class: 'text-white bg-slate-900',
        name: '.bg-slate-900'
    },
    {
        class: 'text-slate-900 bg-gray-50',
        name: '.bg-gray-50'
    },
    {
        class: 'text-slate-900 bg-white',
        name: '.bg-white'
    },
]

const opacitys = [
    {
        class: 'bg-indigo-600',
        name: '.bg-indigo-600'
    },
    {
        class: 'bg-indigo-600/95',
        name: '.bg-indigo-600 .opacity-95'
    },
    {
        class: 'bg-indigo-600/90',
        name: '.bg-indigo-600 .opacity-90'
    },
    {
        class: 'bg-indigo-600/85',
        name: '.bg-indigo-600 .opacity-85'
    },
    {
        class: 'bg-indigo-600/80',
        name: '.bg-indigo-600 .opacity-80'
    },
    {
        class: 'bg-indigo-600/75',
        name: '.bg-indigo-600 .opacity-75'
    },
    {
        class: 'bg-indigo-600/70',
        name: '.bg-indigo-600 .opacity-70'
    },
    {
        class: 'bg-indigo-600/65',
        name: '.bg-indigo-600 .opacity-65'
    },
    {
        class: 'bg-indigo-600/60',
        name: '.bg-indigo-600 .opacity-60'
    },
    {
        class: 'bg-indigo-600/55',
        name: '.bg-indigo-600 .opacity-55'
    },
    {
        class: 'bg-indigo-600/50',
        name: '.bg-indigo-600 .opacity-50'
    },
    {
        class: 'bg-indigo-600/45',
        name: '.bg-indigo-600 .opacity-45'
    },
    {
        class: 'bg-indigo-600/40',
        name: '.bg-indigo-600 .opacity-40'
    },
    {
        class: 'bg-indigo-600/35',
        name: '.bg-indigo-600 .opacity-35'
    },
    {
        class: 'bg-indigo-600/30',
        name: '.bg-indigo-600 .opacity-30'
    },
    {
        class: 'bg-indigo-600/25',
        name: '.bg-indigo-600 .opacity-25'
    },
    {
        class: 'bg-indigo-600/20',
        name: '.bg-indigo-600 .opacity-20'
    },
    {
        class: 'bg-indigo-600/15',
        name: '.bg-indigo-600 .opacity-15'
    },
    {
        class: 'bg-indigo-600/10',
        name: '.bg-indigo-600 .opacity-10'
    },
    {
        class: 'bg-indigo-600/5',
        name: '.bg-indigo-600 .opacity-5'
    },
    {
        class: 'bg-indigo-600/0',
        name: '.bg-indigo-600 .opacity-0'
    },
]
const datas = [
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

]

const navtabs = [
    {
        id: 1,
        tabs: 'Tab One'
    },
    {
        id: 2,
        tabs: 'Tab Two'
    }
]

const shadows = [
    {
        class: 'shadow',
        name: '.shadow'
    },
    {
        class: 'shadow-xs',
        name: '.shadow-xs'
    },
    {
        class: 'shadow-md',
        name: '.shadow-md'
    },
    {
        class: 'shadow-lg',
        name: '.shadow-lg'
    },
    {
        class: 'shadow-xl',
        name: '.shadow-xl'
    },
    {
        class: 'shadow-2xl',
        name: '.shadow-2xl'
    },
    {
        class: 'shadow-none',
        name: '.shadow-none'
    },
]

const borders = [
    {
        class: 'border-0',
        name: '.border-0'
    },
    {
        class: 'border-2',
        name: '.border-2'
    },
    {
        class: 'border-4',
        name: '.border-4'
    },
    {
        class: 'border-8',
        name: '.border-8'
    },
    {
        class: 'border',
        name: '.border'
    },
    {
        class: 'border-t',
        name: '.border-t'
    },
    {
        class: 'border-s',
        name: '.border-s'
    },
    {
        class: 'border-b',
        name: '.border-b'
    },
    {
        class: 'border-e',
        name: '.border-e'
    },
    {
        class: 'border-x',
        name: '.border-x'
    },
    {
        class: 'border-y',
        name: '.border-y'
    },
]
const borderstyle = [
    {
        class: 'border-solid',
        name: '.border-solid'
    },
    {
        class: 'border-dashed',
        name: '.border-dashed'
    },
    {
        class: 'border-dotted',
        name: '.border-dotted'
    },
    {
        class: 'border-double',
        name: '.border-double'
    },
]

const borderradious = [
    {
        class: 'rounded-none',
        name: '.rounded-none'
    },
    {
        class: 'rounded-sm',
        name: '.rounded-sm'
    },
    {
        class: 'rounded shadow',
        name: '.rounded shadow'
    },
    {
        class: 'rounded-md',
        name: '.rounded-md'
    },
    {
        class: 'rounded-lg',
        name: '.rounded-lg'
    },
    {
        class: 'rounded-xl',
        name: '.rounded-xl'
    },
    {
        class: 'rounded-2xl',
        name: '.rounded-2xl'
    },
    {
        class: 'rounded-3xl',
        name: '.rounded-3xl'
    },
    {
        class: 'rounded-full',
        name: '.rounded-full'
    },
]
const headings = [
    {
        class: 'text-xs',
        name: 'Hello',
        name2: '(.text-xs)'
    },
    {
        class: 'text-sm',
        name: 'Hello',
        name2: '(.text-sm)'
    },
    {
        class: 'text-base',
        name: 'Hello',
        name2: '(.text-base)'
    },
    {
        class: 'text-lg',
        name: 'Hello',
        name2: '(.text-lg)'
    },
    {
        class: 'text-xl',
        name: 'Hello',
        name2: '(.text-xl)'
    },
    {
        class: 'text-2xl',
        name: 'Hello',
        name2: '(.text-2xl)'
    },
    {
        class: 'text-3xl',
        name: 'Hello',
        name2: '(.text-3xl)'
    },
    {
        class: 'text-4xl',
        name: 'Hello',
        name2: '(.text-4xl)'
    },
    {
        class: 'text-5xl',
        name: 'Hello',
        name2: '(.text-5xl)'
    },
    {
        class: 'text-6xl',
        name: 'Hello',
        name2: '(.text-6xl)'
    },
    {
        class: 'text-7xl',
        name: 'Hello',
        name2: '(.text-7xl)'
    },
    {
        class: 'text-8xl',
        name: 'Hello',
        name2: '(.text-8xl)'
    },
    {
        class: 'text-9xl',
        name: 'Hello',
        name2: '(.text-9xl)'
    },
]
const fontweight = [
    {
        class: 'font-thin',
        name: '.font-thin',
        name2: ': The quick brown fox jumps over the lazy dog.'
    },
    {
        class: 'font-extralight',
        name: '.font-extralight',
        name2: ': The quick brown fox jumps over the lazy dog.'
    },
    {
        class: 'font-light',
        name: '.font-light',
        name2: ': The quick brown fox jumps over the lazy dog.'
    },
    {
        class: 'font-normal',
        name: '.font-normal',
        name2: ': The quick brown fox jumps over the lazy dog.'
    },
    {
        class: 'font-medium',
        name: '.font-medium',
        name2: ': The quick brown fox jumps over the lazy dog.'
    },
    {
        class: 'font-semibold',
        name: '.font-semibold',
        name2: ': The quick brown fox jumps over the lazy dog.'
    },
    {
        class: 'font-bold',
        name: '.font-bold',
        name2: ': The quick brown fox jumps over the lazy dog.'
    },
    {
        class: 'font-extrabold',
        name: '.font-extrabold',
        name2: ': The quick brown fox jumps over the lazy dog.'
    },
]
const feathericons = ['user', 'facebook', 'map-pin', 'linkedin', 'camera', 'mail']

const  materialicons = ['mdi mdi-home text-lg me-2', 'mdi mdi-facebook text-lg me-2', 'mdi mdi-chevron-tight text-lg me-2', 'mdi mdi-camera-image text-lg me-2', 'mdi mdi-car-light-high text-lg me-2', 'mdi mdi-silverware-fork-knife text-lg me-2']

const iconscout = ['uil uil-0-plus', 'uil uil-android', 'uil uil-bitcoin', 'uil uil-calendar-alt', 'uil uil-chart-pie-alt']

const handleClick = () => {
  toggles.value = !toggles.value;
};

const toggle2 = (id) => {
  isActive.value = id;
};

const toggle3 = (id) => {
  isActive2.value = id;
};
</script>
