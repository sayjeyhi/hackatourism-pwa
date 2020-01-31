import React, { useEffect, useState } from 'react';
import SeoHead from 'components/Common/Seo/SeoHead';
import { Input } from '@snappmarket/ui';
import {
  StyledWeatherWrapper,
  StyledWeatherHeader,
  StyledWeatherContent,
  StyledSearchResult,
} from './styles';
import SearchIcon from 'resources/svg/Icons/SearchIcon';
import { useDebounce } from '@snappmarket/hooks';

const Weather = () => {
  const [citySearch, setCitySearch] = useState('');
  const [debouncedSearchTerm] = useDebounce(citySearch, 200);


  /**
   * Call api based on debounced value
   */
  useEffect(() => {
    if (debouncedSearchTerm.length > 0) {
      // handleShowSearchBoxPanel();
      // weatherAPI(debouncedSearchTerm);
    } else {
      // handleCloseSearchBoxPanel();
    }
  }, [debouncedSearchTerm]);


  const handleEnterPress = e => {
    if (e.which === 13 || e.keyCode === 13) {
      // call api search
    }
  };

  const handleSetSearchCity = e => {
    setCitySearch(e.target.value);
  };

  return (
    <>
      <SeoHead title="آب و هوا" />
      <StyledWeatherWrapper>
        <StyledWeatherHeader>
          <div className="icon sun-shower">
            <div className="cloud" />
            <div className="sun">
              <div className="rays" />
            </div>
            <div className="rain" />
          </div>

          <div className="icon thunder-storm">
            <div className="cloud" />
            <div className="lightning">
              <div className="bolt" />
              <div className="bolt" />
            </div>
          </div>

          <div className="icon cloudy">
            <div className="cloud" />
            <div className="cloud" />
          </div>

          <div className="icon flurries">
            <div className="cloud" />
            <div className="snow">
              <div className="flake" />
              <div className="flake" />
            </div>
          </div>

          <div className="icon sunny">
            <div className="sun">
              <div className="rays" />
            </div>
          </div>

          <div className="icon rainy">
            <div className="cloud" />
            <div className="rain" />
          </div>
        </StyledWeatherHeader>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fillOpacity="1"
            d="M0,64L30,53.3C60,43,120,21,180,58.7C240,96,300,192,360,224C420,256,480,224,540,224C600,224,660,256,720,266.7C780,277,840,267,900,245.3C960,224,1020,192,1080,165.3C1140,139,1200,117,1260,117.3C1320,117,1380,139,1410,149.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </svg>
        <StyledWeatherContent>
          <Input
            id="chooseCity"
            value={citySearch}
            onChange={handleSetSearchCity}
            label="انتخاب شهر"
            placeholder="عنوان شهر یا استان موردنظر را وارد کنید ..."
            onKeyPress={handleEnterPress}
            autoComplete="off"
          />
          <button
            className="no-effect-button"
          >
            <SearchIcon />
          </button>
        </StyledWeatherContent>

        <StyledSearchResult>

        </StyledSearchResult>
      </StyledWeatherWrapper>
    </>
  );
};

export default Weather;
