import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index/index.vue'


const routes = [
  {path: "/", component:Index},
  { path: "/index-crypto", name: "index-crypto", component: () => import('@/pages/index/index-crypto.vue'),},
  {
    path: "/index-ecommerce",
    name: "index-ecommerce",
    component: () => import('@/pages/index/index-ecommerce.vue'),
  },
  {
    path: "/index-dark",
    name: "index-dark",
    component: () => import('@/pages/index/index-dark.vue'),
  },
  {
    path: "/index-rtl",
    name: "index-rtl",
    component: () => import('@/pages/index/index-rtl.vue'),
  },
  {
    path: "/index-dark-rtl",
    name: "index-dark-rtl",
    component: () => import('@/pages/index/index-dark-rtl.vue'),
  },
  {
    path: "/index-sidebar-light",
    name: "index-sidebar-light",
    component: () => import('@/pages/index/index-sidebar-light.vue'),
  },
  {
    path: "/index-sidebar-colored",
    name: "index-sidebar-colored",
    component: () => import('@/pages/index/index-sidebar-colored.vue'),
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import('@/pages/app/chat.vue'),
  },
  {
    path: "/email",
    name: "email",
    component: () => import('@/pages/app/email.vue'),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import('@/pages/app/calendar.vue'),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import('@/pages/user-profile/profile.vue'),
  },
  {
    path: "/profile-billing",
    name: "profile-billing",
    component: () => import('@/pages/user-profile/profile-billing.vue'),
  },
  {
    path: "/profile-payment",
    name: "profile-payment",
    component: () => import('@/pages/user-profile/profile-payment.vue'),
  }, 
  {
    path: "/profile-social",
    name: "profile-social",
    component: () => import('@/pages/user-profile/profile-social.vue'),
  },
  {
    path: "/profile-notification",
    name: "profile-notification",
    component: () => import('@/pages/user-profile/profile-notification.vue'),
  },
  {
    path: "/profile-setting",
    name: "profile-setting",
    component: () => import('@/pages/user-profile/profile-setting.vue'),
  },
  {
    path: "/auth-lock-screen",
    name: "auth-lock-screen",
    component: () => import('@/pages/auth-pages/auth-lock-screen.vue'),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import('@/pages/blogs/blog.vue'),
  },
  {
    path: "/blog-detail",
    name: "blog-details",
    component: () => import('@/pages/blogs/blog-detail.vue'),
  },
  {
    path: "/blog-detail/:id",
    name: "blog-detail",
    component: () => import('@/pages/blogs/blog-detail.vue'),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import('@/pages/shop/shop.vue'),
  },
  {
    path: "/shop-item-detail",
    name: "shop-item-details",
    component: () => import('@/pages/shop/shop-item-detail.vue'),
  },
  {
    path: "/shop-item-detail/:id",
    name: "shop-item-detail",
    component: () => import('@/pages/shop/shop-item-detail.vue'),
  },
  {
    path: "/shop-cart",
    name: "shop-cart",
    component: () => import('@/pages/shop/shop-cart.vue'),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import('@/pages/shop/checkout.vue'),
  },
  {
    path: "/gallery-one",
    name: "gallery-one",
    component: () => import('@/pages/gallery/gallery-one.vue'),
  },
  {
    path: "/gallery-two",
    name: "gallery-two",
    component: () => import('@/pages/gallery/gallery-two.vue'),
  },
  {
    path: "/starter",
    name: "starter",
    component: () => import('@/pages/pages/starter.vue'),
  },
  {
    path: "/faqs",
    name: "faqs",
    component: () => import('@/pages/pages/faqs.vue'),
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () => import('@/pages/pages/pricing.vue'),
  },
  {
    path: "/team",
    name: "team",
    component: () => import('@/pages/pages/team.vue'),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import('@/pages/pages/terms.vue'),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import('@/pages/pages/privacy.vue'),
  },
  {
    path: "/email-confirmation",
    name: "email-confirmation",
    component: () => import('@/pages/email-template/email-confirmation.vue'),
  },
  {
    path: "/email-password-reset",
    name: "email-password-reset",
    component: () => import('@/pages/email-template/email-password-reset.vue'),
  },
  {
    path: "/email-alert",
    name: "email-alert",
    component: () => import('@/pages/email-template/email-alert.vue'),
  },
  {
    path: "/email-invoices",
    name: "email-invoice",
    component: () => import('@/pages/email-template/email-invoice.vue'),
  },
  {
    path: "/invoice-list",
    name: "invoice-list",
    component: () => import('@/pages/invoice/invoice-list.vue'),
  },
  {
    path: "/invoice",
    name: "invoice",
    component: () => import('@/pages/invoice/invoice.vue'),
  },
  {
    path: "/auth-login",
    name: "auth-login",
    component: () => import('@/pages/auth-pages/auth-login.vue'),
  },
  {
    path: "/auth-signup",
    name: "auth-signup",
    component: () => import('@/pages/auth-pages/auth-signup.vue'),
  },
  {
    path: "/auth-signup-success",
    name: "auth-signup-success",
    component: () => import('@/pages/auth-pages/auth-signup-success.vue'),
  },
  {
    path: "/auth-re-password",
    name: "auth-re-password",
    component: () => import('@/pages/auth-pages/auth-re-password.vue'),
  },
  {
    path: "/comingsoon",
    name: "comingsoon",
    component: () => import('@/pages/miscellaneous/comingsoon.vue'),
  },
  {
    path: "/maintenance",
    name: "maintenance",
    component: () => import('@/pages/miscellaneous/maintenance.vue'),
  },
  {
    path: "/thankyou",
    name: "thankyou",
    component: () => import('@/pages/miscellaneous/thankyou.vue'),
  },
  {
    path: "/error",
    name: "error",
    component: () => import('@/pages/miscellaneous/error.vue'),
  },
  {
    path: "/ui-components",
    name: "ui-components",
    component: () => import('@/pages/ui-components.vue'),
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;