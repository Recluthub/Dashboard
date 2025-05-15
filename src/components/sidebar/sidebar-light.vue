<template>
    <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
            <div class="sidebar-brand">
                <router-link to="/">
                    <img :src="logoDark" height="24" class="block dark:hidden" alt="">
                    <img :src="logoLight" height="24" class="hidden dark:block" alt="">
                </router-link>
            </div>

            <ul class="sidebar-menu border-t dark:border-white/10 border-gray-100" data-simplebar style="height: calc(100% - 70px);">
                <li class="sidebar-dropdown" :class="['/', '/index-crypto', '/index-desc','/index-ecommerce'].includes(activeMenu) ? 'active' : ''">
                    <router-link to="" @click="submenu(menuOpen === '/index-desc' ? '' : '/index-desc')" class="cursor-pointer"><i class="uil uil-chart-line me-2"></i>Dashboard</router-link>
                    <div class="sidebar-submenu" :class="['/', '/index-crypto', '/index-desc','/index-ecommerce'].includes(menuOpen) ? 'block' : ''">
                        <ul>
                            <li :class="activeMenu === '/' ? 'active' : ''"><router-link to="/">Analytics</router-link></li>
                            <li :class="activeMenu === '/index-crypto' ? 'active' : ''"><router-link to="/index-crypto">Cryptocurrency</router-link></li>
                            <li :class="activeMenu === '/index-ecommerce' ? 'active' : ''"><router-link to="/index-ecommerce">eCommerce</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/index-dark', '/index-rtl', '/index-dark-rtl', '/index-sidebar-light', '/index-sidebar-colored', '/index-layouts'].includes(activeMenu) ? 'active' : ''">
                    <router-link to="" @click="submenu(menuOpen === '/index-layouts' ? '' : '/index-layouts')" class="cursor-pointer"><i class="uil uil-browser me-2"></i>Layouts</router-link>
                    <div class="sidebar-submenu" :class="['/index-dark', '/index-rtl', '/index-dark-rtl', '/index-sidebar-light', '/index-sidebar-colored', '/index-layouts'].includes(menuOpen) ? 'block' : ''">
                        <ul>
                            <li :class="activeMenu === '/index-dark' ? 'active' : ''"><router-link to="/index-dark">Dark Dashboard</router-link></li>
                            <li :class="activeMenu === '/index-rtl' ? 'active' : ''"><router-link to="/index-rtl">RTL Dashboard</router-link></li>
                            <li :class="activeMenu === '/index-dark-rtl' ? 'active' : ''"><router-link to="/index-dark-rtl">Dark RTL Dashboard</router-link></li>
                            <li :class="activeMenu === '/index-sidebar-light' ? 'active' : ''"><router-link  to="/index-sidebar-light">Light Sidebar</router-link></li>
                            <li :class="activeMenu === '/index-sidebar-colored' ? 'active' : ''"><router-link to="/index-sidebar-colored">Colored Sidebar</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/chat', '/email', '/calendar', '/index-app'].includes(activeMenu) ? 'active' : ''">
                    <router-link to="" @click="submenu(menuOpen === '/index-app' ? '' : '/index-app')"><i class="uil uil-apps me-2"></i>Apps</router-link>
                    <div class="sidebar-submenu" :class="['/chat', '/email', '/calendar', '/index-app'].includes(menuOpen) ? 'block' : ''">
                        <ul>
                            <li :class="activeMenu === '/chat' ? 'active' : ''"><router-link to="/chat">Chat</router-link></li>
                            <li :class="activeMenu === '/email' ? 'active' : ''"><router-link to="/email">Email</router-link></li>
                            <li :class="activeMenu === '/calendar' ? 'active' : ''"><router-link to="/calendar">Calendar</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/profile', '/profile-billing', '/profile-payment', '/profile-social', '/profile-notification', '/profile-setting', '/users'].includes(activeMenu) ? 'active' : ''">
                    <router-link to="" @click="submenu(menuOpen === '/users' ? '' : '/users')"><i class="uil uil-user me-2"></i>User Profile</router-link>
                    <div class="sidebar-submenu" :class="['/profile', '/profile-billing', '/profile-payment', '/profile-social', '/profile-notification', '/profile-setting', '/users'].includes(menuOpen) ? 'block' : ''">
                        <ul>
                            <li :class="activeMenu === '/profile' ? 'active' : ''"><router-link to="/profile">Profile</router-link></li>
                            <li :class="activeMenu === '/profile-billing' ? 'active' : ''"><router-link to="/profile-billing">Billing Info</router-link></li>
                            <li :class="activeMenu === '/profile-payment' ? 'active' : ''"><router-link to="/profile-payment">Payment</router-link></li>
                            <li :class="activeMenu === '/profile-social' ? 'active' : ''"><router-link to="/profile-social">Social Profile</router-link></li>
                            <li :class="activeMenu === '/profile-notification' ? 'active' : ''"><router-link to="/profile-notification">Notifications</router-link></li>
                            <li :class="activeMenu === '/profile-setting' ? 'active' : ''"><router-link to="/profile-setting">Profile Settings</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/blog', '/blog-detail', '/blogs']">
                    <router-link to="" @click="submenu(menuOpen === '/blogs' ? '' : '/blogs')"><i class="uil uil-blogger me-2"></i>Blog</router-link>
                    <div class="sidebar-submenu" :class="['/blog', '/blog-detail', '/blogs'].includes(menuOpen) ? 'block' : ''">
                        <ul>
                            <li :class="activeMenu === '/blog' ? 'active' : ''"><router-link to="/blog">Blogs</router-link></li>
                            <li :class="activeMenu === '/blog-detail' ? 'active' : ''"><router-link to="/blog-detail">Blog Detail</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/shop', '/shop-item-detail', '/shop-cart', '/checkout', '/e-commerce'].includes(activeMenu) ? 'active' : ''">
                    <router-link to="" @click="submenu(menuOpen === '/e-commerce' ? '' : '/e-commerce')"><i class="uil uil-shopping-cart me-2"></i>E-Commerce</router-link>
                    <div class="sidebar-submenu" :class="['/shop', '/shop-item-detail', '/shop-cart', '/checkout', '/e-commerce'].includes(menuOpen) ? 'block' : ''">
                        <ul>
                            <li :class="activeMenu === '/shop' ? 'active' : ''"><router-link to="/shop">Shop</router-link></li>
                            <li :class="activeMenu === '/shop-item-detail' ? 'active' : ''"><router-link to="/shop-item-detail">Shop Detail</router-link></li>
                            <li :class="activeMenu === '/shop-cart' ? 'active' : ''"><router-link to="/shop-cart">Shopcart</router-link></li>
                            <li :class="activeMenu === '/checkout' ? 'active' : ''"><router-link to="/checkout">Checkout</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/gallery-one', '/gallery-two', '/gallery'].includes(activeMenu) ? 'active' : ''">
                    <router-link to="" @click="submenu(menuOpen === '/gallery' ? '' : '/gallery')"><i class="uil uil-camera me-2"></i>Gallery</router-link>
                    <div class="sidebar-submenu" :class="['/gallery-one', '/gallery-two', '/gallery'].includes(menuOpen) ? 'block' : ''">
                        <ul>
                            <li :class="activeMenu === '/gallery-one' ? 'active' : ''"><router-link to="/gallery-one">Gallary One</router-link></li>
                            <li :class="activeMenu === '/gallery-two' ? 'active' : ''"><router-link to="/gallery-two">Gallery Two</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/starter', '/faqs', '/pricing', '/team', '/privacy', '/terms', '/pages'].includes(activeMenu) ? 'active' : ''">
                    <router-link to="" @click="submenu(menuOpen === '/pages' ? '' : '/pages')"><i class="uil uil-file me-2"></i>Pages</router-link>
                    <div class="sidebar-submenu" :class="['/starter', '/faqs', '/pricing', '/team', '/privacy', '/terms', '/pages'].includes(menuOpen) ? 'block' : ''">
                        <ul>
                            <li :class="activeMenu === '/starter' ? 'active' : ''"><router-link to="/starter">Starter</router-link></li>
                            <li :class="activeMenu === '/faqs' ? 'active' : ''"><router-link to="/faqs">FAQs</router-link></li>
                            <li :class="activeMenu === '/pricing' ? 'active' : ''"><router-link to="/pricing">Pricing</router-link></li>
                            <li :class="activeMenu === '/team' ? 'active' : ''"><router-link to="/team">Team</router-link></li>
                            <li :class="activeMenu === '/privacy' ? 'active' : ''"><router-link to="/privacy">Privacy Policy</router-link></li>
                            <li :class="activeMenu === '/terms' ? 'active' : ''"><router-link to="/terms">Term & Condition</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="" :class="activeMenu === '/ui-components' ? 'active' : ''">
                    <router-link to="/ui-components"><i class="uil uil-chart-line me-2"></i>UI Components</router-link>
                </li>

                <li class="sidebar-dropdown" :class="['/email-confirmation', '/email-password-reset', '/email-alert', '/email-invoices', '/template'].includes(activeMenu) ? 'active' : ''">
                    <router-link to="" @click="submenu(menuOpen === '/template' ? '' : '/template')"><i class="uil uil-envelope me-2"></i>Email Template</router-link>
                    <div class="sidebar-submenu" :class="['/email-confirmation', '/email-password-reset', '/email-alert', '/email-invoices', '/template'].includes(menuOpen) ? 'block' : ''">
                        <ul>
                            <li :class="activeMenu === '/email-confirmation' ? 'active' : ''"><router-link to="/email-confirmation">Confirmation</router-link></li>
                            <li :class="activeMenu === '/email-password-reset' ? 'active' : ''"><router-link to="/email-password-reset">Reset Password</router-link></li>
                            <li :class="activeMenu === '/email-alert' ? 'active' : ''"><router-link  to="/email-alert">Alert</router-link></li>
                            <li :class="activeMenu === '/email-invoices' ? 'active' : ''"><router-link to="/email-invoices">Invoice</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/invoice-list', '/invoice', '/invoices'].includes(activeMenu) ? 'active' : ''">
                    <router-link to="" @click="submenu(menuOpen === '/invoices' ? '' : '/invoices')"><i class="uil uil-invoice me-2"></i>Invoice</router-link>
                    <div class="sidebar-submenu" :class="['/invoice-list', '/invoice', '/invoices'].includes(menuOpen) ? 'block' : ''">
                        <ul>
                            <li :class="activeMenu === '/invoice-list' ? 'active' : ''"><router-link to="/invoice-list">Invoice List</router-link></li>
                            <li :class="activeMenu === '/invoice' ? 'active' : ''"><router-link to="/invoice">Invoice Preview</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/auth-login', '/auth-signup', '/auth-signup-success', '/auth-re-password', '/auth-lock-screen', '/authentication'].includes(activeMenu) ? 'active' : ''">
                    <router-link to="" @click="submenu(menuOpen === '/authentication' ? '' : '/authentication')"><i class="uil uil-sign-in-alt me-2"></i>Authentication</router-link>
                    <div class="sidebar-submenu" :class="['/auth-login', '/auth-signup', '/auth-signup-success', '/auth-re-password', '/auth-lock-screen', '/authentication'].includes(menuOpen) ? 'block' : ''">
                        <ul>
                            <li :class="activeMenu === '/auth-login' ? 'active' : ''"><router-link to="/auth-login">Login</router-link></li>
                            <li :class="activeMenu === '/auth-signup' ? 'active' : ''"><router-link to="/auth-signup">Signup</router-link></li>
                            <li :class="activeMenu === '/auth-signup-success' ? 'active' : ''"><router-link to="/auth-signup-success">Signup Success</router-link></li>
                            <li :class="activeMenu === '/auth-re-password' ? 'active' : ''"><router-link to="/auth-re-password">Reset Password</router-link></li>
                            <li :class="activeMenu === '/auth-lock-screen' ? 'active' : ''"><router-link to="/auth-lock-screen">Lockscreen</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/comingsoon', '/maintenance', '/error', '/thankyou', '/miscellaneous'].includes(activeMenu) ? 'active' : ''">
                    <router-link to="" @click="submenu(menuOpen === '/miscellaneous' ? '' : '/miscellaneous')"><i class="uil uil-layers me-2"></i>Miscellaneous</router-link>
                    <div class="sidebar-submenu" :class="['/comingsoon', '/maintenance', '/error', '/thankyou', '/miscellaneous'].includes(menuOpen) ? 'block' : ''">
                        <ul>
                            <li :class="activeMenu === '/comingsoon' ? 'active' : ''"><router-link to="/comingsoon">Comingsoon</router-link></li>
                            <li :class="activeMenu === '/maintenance' ? 'active' : ''"><router-link to="/maintenance">Maintenance</router-link></li>
                            <li :class="activeMenu === '/error' ? 'active' : ''"><router-link to="/error">Error</router-link></li>
                            <li :class="activeMenu === '/thankyou' ? 'active' : ''"><router-link to="/thankyou">Thank You</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="relative lg:m-8 m-6 px-8 py-10 rounded-lg bg-gradient-to-b to-transparent from-gray-50 dark:from-slate-800 text-center">
                    <span class="relative z-10">
                        <span class="text-xl font-bold h5">Upgrade to Pro</span>
                        <span class="text-slate-400 mt-3 mb-5 block">Get one month free and subscribe to pro</span>
                        <a href="https://shreethemes.in" target="_blank" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-gray-100/5 hover:bg-gray-100 border-gray-100 dark:border-gray-100/5 hover:border-gray-100 text-slate-900 dark:text-white dark:hover:text-slate-900 rounded-md">Subscribe</a>
                    </span>

                    <img :src="shree" class="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto text-center h-40 w-40 z-0 opacity-5" alt="">
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
    import { ref } from 'vue';
    import logoLight from '@/assets/images/logo-light.png'
    import logoDark from '@/assets/images/logo-dark.png'
    import shree from '@/assets/images/shree-276.png'
    import 'simplebar/dist/simplebar.css';
    import 'simplebar';

    const activeMenu = ref('')
    const menu = ref(true)
    const menuOpen = ref('')

    activeMenu.value = window.location.pathname
    menuOpen.value = activeMenu.value

    const submenu = (item) =>{
        menu.value = !menu.value
        menuOpen.value = item
    }
   
</script>