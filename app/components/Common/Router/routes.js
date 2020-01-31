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
    index: '/weather',
    now: '/weather/now/:cityName',
    forecast: '/weather/forecast/:cityname',
  },
};

export default routes;
