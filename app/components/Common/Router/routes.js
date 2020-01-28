const routes = {
  root: '/',
  home: '/',
  categories: {
    path: '/categories',
    index: '/categories/:criterion',
  },
  campaigns: {
    path: '/campaigns',
    index: '/campaigns/:criterion',
  },
  brands: {
    path: '/brands',
    index: '/brands/:criterion',
  },
  tags: {
    path: '/tags',
    index: '/tags/:criterion',
  },
  search: {
    path: '/search',
    index: '/search/:term',
  },
  product: {
    path: '/products',
    index: '/products/:criterion',
  },
  checkout: {
    path: '/checkout',
    failure: '/checkout/failure/:orderHash',
    success: '/checkout/success/:orderHash',
  },
  basket: '/basket',
  products: {
    path: '/products',
    index: '/products/:criterion',
  },
  order: {
    feedback: '/order/feedback/:orderHash',
    followup: '/order/followup/:orderHash',
    receipt: '/order/receipt/:orderHash',
  },
  user: {
    profile: '/user/profile',
    orders: '/user/orders',
    credit: '/user/credit',
  },
  info: {
    about: '/about',
    faq: {
      path: '/faq',
      index: '/faq/:step?',
    },
    rules: '/rules',
  },
  aroundHere: '/aroundHere',
  smartTip: '/smartTip',
  smartTicket: '/smartTicket',
};

export default routes;
