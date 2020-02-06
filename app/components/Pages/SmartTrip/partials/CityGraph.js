import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import routes from 'components/Common/Router/routes';
import Loading from 'components/Common/Loading';

const CityGraph = ({ cityName, isStart, isEnd, transferType }) => {
  const howManyToShow = Math.floor(Math.random() * 3) + 1;
  const refers = [
    {
      title: 'جاهای دیدنیش کجاست؟',
      url: id => `${routes.city.path}/${id}`,
    },
    {
      title: 'غذا خوری خوبش کیه؟',
      url: id => `${routes.city.path}/${id}`,
    },
    {
      title: 'فاصله‌ش تا تهران؟',
      url: id => `${routes.city.path}/${id}`,
    },
    {
      title: 'آب و هواش چظوریه؟',
      url: id => `${routes.city.path}/${id}`,
    },
    {
      title: 'درخت و جنگل ایناش؟',
      url: id => `${routes.city.path}/${id}`,
    },
    {
      title: 'تاریخش چطووی بوده؟',
      url: id => `${routes.city.path}/${id}`,
    },
    {
      title: 'کجا بمونم؟',
      url: id => `${routes.city.path}/${id}`,
    },
    {
      title: 'برنامه ریزی ندارم!',
      url: id => `${routes.tripSchedule.path}/?city=${id}`,
    },
    {
      title: 'با کی مشورت کنم؟',
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
      setShowPredict(false);
    }, 200);
  }, []);

  return (
    <div>
      <div className="city-name">
        {cityName}
        <span>{transferType}</span>
      </div>
      <div className="city-description">
        {isStart ? (
          'شهر مبدا'
        ) : isEnd ? (
          'شهر مقصد'
        ) : showPredicts ? (
          <Loading />
        ) : (
          shuffleArray(refers)
            .filter((_, index) => index <= howManyToShow)
            .map(refer => <NavLink to={refer.url}>{refer.title}</NavLink>)
        )}
      </div>
    </div>
  );
};

CityGraph.propTypes = {
  cityName: PropTypes.string,
  isStart: PropTypes.bool,
  isEnd: PropTypes.bool,
  transferType: PropTypes.number,
};

export default CityGraph;
