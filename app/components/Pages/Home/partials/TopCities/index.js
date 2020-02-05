import React from 'react';

import qeshmImage from 'resources/img/TopCities/chahkooh-768x512.jpeg';
import gilanImage from 'resources/img/TopCities/gilan.jpg';
import hamedanImage from 'resources/img/TopCities/hamedan.jpeg';
import mashhadImage from 'resources/img/TopCities/mashhad.jpeg';
import shirazImage from 'resources/img/TopCities/shiraz2.jpeg';
import tabrizImage from 'resources/img/TopCities/tabriz.jpeg';
import TopCity from './TopCity';

import { StyledCitiesHolder } from './styles';

const TopCities = () => (
  <StyledCitiesHolder className="flex-row">
    <TopCity
      id={185}
      name="شیراز"
      description="مرکز شهر فارس و از مهمترین شهرهای توریستی ایران است"
      image={shirazImage}
      weather_id={115019}
    />
    <TopCity
      id={312}
      name="قشم"
      description=" بزرگ‌ترین جزیره ایران و معروف به جزیره عجایب هفت‌گانه است "
      image={qeshmImage}
      weather_id={119374}
    />
    <TopCity
      id={264}
      name="گیلان"
      description=" انتهای غربی رشته کوه البرز و بخش غربی جلگه‌های حاشیه دریای خزر ایران است"
      image={gilanImage}
      weather_id={133349}
    />
    <TopCity
      id={1}
      name="تبریز"
      description="بزرگ‌ترین شهر منطقهٔ شمال غرب کشور و قطب اداری، ارتباطی، بازرگانی است"
      image={tabrizImage}
      weather_id={113646}
    />
    <TopCity
      id={119}
      name="مشهد"
      description=" شهری زیارتی و سیاحتی در شمال شرق کشور و مهم ترین قطب گردشگری مذهبی کشور است"
      image={mashhadImage}
      weather_id={124665}
    />
    <TopCity
      id={322}
      name="همدان"
      description="یکی از کلان شهرهای ایران در منطقه غربی و کوهستانی ایران در دامنهٔ کوه الوند است"
      image={hamedanImage}
      weather_id={132144}
    />
  </StyledCitiesHolder>
);

export default TopCities;
