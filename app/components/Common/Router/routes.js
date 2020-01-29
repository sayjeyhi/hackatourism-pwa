const routes = {
  root: '/',
  home: '/',
  basket: '/basket',
  user: {
    profile: '/user/profile',
    orders: '/user/orders',
    credit: '/user/credit',
  },
  search: {
    path: '/search',
    index: '/search/:term',
  },
  info: {
    about: '/about',
    faq: {
      path: '/faq',
      index: '/faq/:step?',
    },
    rules: '/rules',
  },
  aroundHere: '/around-here',
  smartTip: '/smart-tip',
  smartTicket: '/smart-ticket',
  ai: '/intelligent-analysis',
  tripAdvice: '/trip-adviser',
  weather: {
    index: '/weather',
    now: '/weather/now/:cityName',
    forecast: '/weather/forecast/:cityname',
  },
};

export default routes;
