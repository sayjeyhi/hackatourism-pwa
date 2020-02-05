export default {
  promiseFailed: 'مشکلی پیش  آمده است، لطفا دوباره تلاش کنید!',
  pricingUnit: 'تومان',
  addToCard: 'افزودن به سبد خرید',
  editBasket: 'ویرایش سبد خرید',
  basketReview: 'مشاهده و بررسی سبد خرید',
  sortTitle: 'مرتب سازی بر اساس :',

  outOfStock: 'ناموجود',
  specialOffer: 'فروش ویژه',
  basket: 'سبد خرید',
  nearYou: 'اطراف شما',
  fieldIsRequired: 'این فیلد اجباری است',
  productStock: 'موجودی این محصول رو به اتمام است',
  productStockOrPrice: 'موجودی و یا قیمت بعضی از محصولات تغییر یافته',
  relatedProducts: 'انتخاب محصول مشابه',
  productBrand: 'برند :',
  addToFavorites: 'اضافه به علاقه مندی ها',
  productShare: 'این محصول را به اشتراک بگذارید',
  productPrice: 'قیمت مصرف کننده :',
  relatedProductsTitle: 'محصولات مشابه',
  seeMoreProduct: 'مشاهده بیشتر',
  suggestionProductsTitle: 'پیشنهادات ما',
  waitUntilResend: seconds => `برای ارسال مجدد کد ${seconds} ثانیه صبر کنید`,
  accept: 'تایید',
  dismiss: 'انصراف',
  filter: {
    range: {
      from: 'از',
      to: 'تا',
    },
  },
  categories: 'دسته‌بندی‌ها',
  footer: {
    downloadApplicationTitle: 'دانلود اپلیکیشن',
    downloadApplicationDescription:
      'اپلیکیشن اسنپ مارکت را دانلود کنید و هر روز تخفیفات هیجان انگیز مشاهده کنید',

    topSection: {
      moreDiscount: 'تخفیف بیشتر محصولات',
      moreDiscountDescription: 'کالاها با قیمت کمتر از درج شده ارسال میشود',
      sendInTime: 'ارسال به موقع سفارش ها',
      sendInTimeDescription: 'سفارشات شما در زمان مقرر ارسال میشود',
      bestProducts: 'ارسال بهترین کالاها',
      bestProductsDescription: 'محصولات ارسالی از بین بهترین ها گلچین می شود',
      bestPacking: 'بسته بندی مناسب',
      bestPackingDescription: 'بسته بندی مناسب',
    },
    accesses: 'دسترسی‌ها',
    aboutUs: 'درباره‌ما',
    aboutUsDescription: `اسنپ مارکت حاصل همکاری دو شرکت بزرگ اسنپ و هایپرمارکت است و عضو جدید
            خانواده اسنپ محصوب میشود تا کالاهای مورد نیاز کاربران را در اسرع
            وقت برای آنها ارسال کند`,
    contactUs: 'تماس با ما',
    rules: 'قوانین',
    jobs: 'استخدام',
    companyPhone: 'تلفن : ۰۲۱۴۹۲۷۸۶۰',
    companyAddress:
      'آدرس: خیابان ولیعصر بالاتر از اسفندیار خیابان سعیدی نبش کوچه مهردادپلاک۱ طبقه ۳',
  },
  header: {
    basket: 'سبد خرید',
    profile: 'پروفایل',
    sendingTo: 'ارسال به',
    searchBoxPlaceholder: 'شهر، استان یا محل مورد نظر را جستجو کنید...',
    chooseVendor: {
      buyingFrom: 'خرید از',
      hyperStar: 'هایپراستار',
      superMarket: 'سوپرمارکت',
      maxOffIs: off => `تا ${off} تخفیف`,
      showDistance: distance => `${distance} کیلومتر`,
    },
    menu: {
      categories: 'دسته‌بندی‌ها',
      aboutUs: 'درباره‌ما',
      faq: 'سوالات متداول',
    },
    search: {
      pleaseWait: 'لطفا کمی صبر کنید',
      notFound: 'متاسفانه هیچ نتیجه‌ای یافت نشد',
      categoriesPartTitle: 'دسته‌بندی‌ها',
      suggestionPartTitle: 'نتایج مرتبط',
    },
    userPanel: {
      increase: 'افزایش',
      credit: 'اعتبار',
      creditIncrease: 'افزایش اعتبار',
      userAccount: 'حساب کاربری',
      ordersList: 'لیست سفارش‌ها',
      exit: 'خروج',
    },
    addAddressFirst: 'ابتدا آدرس خود را انتخاب کنید',
    loginOrRegister: 'ورود/عضویت',
  },
  category: {
    errorGettingInfo: 'خطایی در دریافت اطلاعات دسته بندی رخ داده است',
  },

  priceIncreased: (price, title) => `قیمت  ${title} ${price} افزایش داشته است!`,
  priceDecreased: (price, title) => `قیمت ${title} ${price} کاهش داشته است!`,
  productNotAvailable: title => `موجودی ${title} به اتمام رسیده است`,
  maxOrderCap: (capacity, title) =>
    `تعداد قابل سفارش ${title} ${capacity} عدد است!`,

  showMore: 'نمایش بیشتر',
  showLess: 'نمایش کمتر',
  feedbackSuccessfully: 'نظر شما با موفقیت ثبت شد',
};
