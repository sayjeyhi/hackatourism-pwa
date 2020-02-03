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
    faq: '/faq',
    rules: '/rules',
    privacyPolicy: '/privacyPolicy',
  },
  aroundHere: '/around-here',
  smartTip: '/smart-tip',
  smartTicket: '/smart-ticket',
  ai: '/intelligent-analysis',
  tripSchedule: '/trip-schedule',
  hotel: '/hotel',
  tripAdvice: '/trip-adviser',
  weather: {
    path: '/weather',
    index: '/weather/:cityIdOrName',
  },
  city: {
    path: '/city',
    index: '/city/:id',
  },
  place: {
    path: '/place',
    index: '/place/:id',
  },
  profile: {
    path: '/profile',
    index: '/profile/:id',
  },
};

export default routes;
