import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import routes from 'components/Common/Router/routes';
import Loading from 'components/Common/Loading';
import TrainIcon from 'resources/svg/Icons/TrainIcon';
import BusIcon from 'resources/svg/Icons/BusIcon';
import AirPlaneIcon from 'resources/svg/Icons/AirPlaneIcon';

const CityGraph = ({ cityId, cityName, isStart, isEnd, transferType }) => {
  const howManyToShow = Math.floor(Math.random() * 3) + 1;
  const refers = [
    {
      title: 'جاهای دیدنیش کجاست؟',
      color: 'rgb(185, 219, 90)',
      url: id => `${routes.city.path}/${id}`,
    },
    {
      title: 'غذا خوری خوبش کیه؟',
      color: 'rgb(121, 245, 247)',
      url: id => `${routes.city.path}/${id}`,
    },
    {
      title: 'فاصله‌ش تا تهران؟',
      color: 'rgba(255, 191, 241)',
      url: id => `${routes.city.path}/${id}`,
    },
    {
      title: 'آب و هواش چطوریه؟',
      color: 'rgb(250, 170, 181)',
      url: id => `${routes.city.path}/${id}`,
    },
    {
      title: 'درخت و جنگل ایناش؟',
      color: 'rgb(213, 206, 219)',
      url: id => `${routes.city.path}/${id}`,
    },
    {
      title: 'تاریخش چطووی بوده؟',
      color: 'rgb(185, 219, 90)',
      url: id => `${routes.city.path}/${id}`,
    },
    {
      title: 'کجا بمونم؟',
      color: 'rgb(121, 245, 247)',
      url: id => `${routes.city.path}/${id}`,
    },
    {
      title: 'برنامه ریزی ندارم!',
      color: 'rgba(255, 191, 241)',
      url: id => `${routes.tripSchedule.path}/?city=${id}`,
    },
    {
      title: 'با کی مشورت کنم؟',
      color: 'rgb(250, 170, 181)',
      url: id => `${routes.tripAdvice.path}/?city=${id}`,
    },
  ];
  const shuffleArray = a => {
    let i;
    let t;
    let j;
    for (i = a.length - 1; i > 0; i -= 1) {
      t = a[i];
      j = Math.floor(Math.random() * (i + 1));
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  };

  const [showPredicts, setShowPredict] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowPredict(true);
    }, 1600);
  }, []);

  return (
    <div>
      <div className="city-name">
        {cityName}
        <span>
          {transferType === 1 ? (
            <>
              <BusIcon /> زمینی
            </>
          ) : transferType === 2 ? (
            <>
              <TrainIcon /> ریلی
            </>
          ) : (
            <>
              <AirPlaneIcon /> هوایی
            </>
          )}
        </span>
      </div>
      <div className="city-description">
        {isStart ? (
          'شهر مبدا'
        ) : isEnd ? (
          'شهر مقصد'
        ) : !showPredicts ? (
          <Loading />
        ) : (
          shuffleArray(refers)
            .filter((_, index) => index <= howManyToShow)
            .map(refer => (
              <NavLink
                style={{ background: refer.color }}
                to={refer.url(cityId)}
              >
                {refer.title}
              </NavLink>
            ))
        )}
      </div>
    </div>
  );
};

CityGraph.propTypes = {
  cityId: PropTypes.number,
  cityName: PropTypes.string,
  isStart: PropTypes.bool,
  isEnd: PropTypes.bool,
  transferType: PropTypes.number,
};

export default CityGraph;
