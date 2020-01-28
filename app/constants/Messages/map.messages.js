export default {
  placeholders: {
    cellphone: 'شماره تلفن',
    address: 'آدرس',
    title: 'عنوان',
  },
  phoneMessages: {
    required: 'وارد کردن شماره موبایل اجباری است',
    pattern: 'فرمت شماره موبایل صحیح نیست',
    maxLength: 'حداکثر طول شماره موبایل ۱۱ رقم می‌باشد',
  },
  addressMessages: {
    required: 'وارد کردن آدرس اجباری است',
  },
  selectAddress: {
    title: 'انتخاب آدرس',
    description: 'آدرس تحویل سفارش خود را وارد نمایید',
    submit: 'تایید آدرس',
    confirmation: title =>
      `این آدرس در محدوده سرویس دهی ${title} نمیباشد. با انتخاب این آدرس سبد خرید شما پاک می شود. آیا اطمینان دارید؟`,
    success: 'انتخاب آدرس با موفقیت انجام شد',
    pleaseAddAnAddress: 'لطفا آدرس خود را ثبت کنید!',
  },
  addAddress: {
    title: 'آدرس جدید',
    new: 'افزودن آدرس جدید',
    addNewAddress: 'اضافه کردن آدرس جدید',
    description: 'لطفا اطلاعات زیر را دقیق وارد کنید',
    submit: 'ثبت آدرس جدید',
    success: 'افزودن آدرس با موفقیت انجام شد',
  },
  editAddress: {
    title: 'ویرایش آدرس',
    buttonTitle: 'ویرایش آدرس',
    success: 'ویرایش آدرس با موفقیت انجام شد',
  },
  deleteAddress: {
    title: 'حذف آدرس',
    description: 'آیا از حذف این آدرس اطمینان دارید؟',
    success: 'آدرس با موفقیت حذف شد',
    acceptButton: 'بله، حذف شود',
    dismissButton: 'لغو',
  },
  chooseLocation: {
    title: 'انتخاب آدرس',
    description:
      'برای نمایش فروشگاه های اطافتان، لطفا مکان تحویل سفارش خود را مشخص کنید',
    submit: 'تایید',
  },
  map: {
    noCoverage: 'منطقه تحت پوشش نیست',
    description:
      'برای بهبود خدمات اسنپ مارکت آدرس دقیق خود را بر روی نقشه مشخص کنید',
    coverage: 'در حال حاضر محدوده خدمات ما فقط شامل تهران می باشد!',
    getUserLocation: {
      error: {
        dismissed: 'مشکلی در دریافت موقعیت جغرافیایی شما پیش آمده است!',
        permissionDenied: 'دسترسی برای دریافت موقعیت جغرافیایی شما وجود ندارد!',
      },
    },
    placeholders: {
      searchLocation: 'جستجوی محل',
    },
    outOfIranAddressChoose: 'انتخاب موقعیت خارج از ایران امکان پذیر نمی‌باشد',
  },
};
