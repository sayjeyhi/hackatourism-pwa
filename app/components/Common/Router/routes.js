const routes = {
  root: '/',
  home: '/',
  basket: '/basket',
  user: {
    profile: '/user/profile',
    schedules: '/user/schedules',
    credit: '/user/credit',
  },
  search: {
    path: '/search',
    index: '/search/:term?',
  },
  info: {
    about: '/about',
    faq: '/faq',
    rules: '/rules',
    contact: '/contact',
    privacyPolicy: '/privacyPolicy',
    whyUs: '/whyUs',
    pricing: '/pricing',
  },
  aroundHere: '/around-here',
  smartTip: '/smart-tip',
  smartTicket: '/smart-ticket',
  ai: '/intelligent-analysis',
  tripSchedule: '/trip-schedule',
  hotel: '/hotel',
  tripAdvice: {
    path: '/trip-adviser',
    index: '/trip-adviser/:cityId?',
  },
  weather: {
    path: '/weather',
    index: '/weather/:cityIdOrName?',
  },
  city: {
    path: '/city',
    index: '/city/:id?',
  },
  place: {
    path: '/place',
    index: '/place/:id?',
  },
  profile: {
    path: '/profile',
    index: '/profile/:id?',
  },
};

export default routes;
