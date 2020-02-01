import React, { useState } from 'react';
import { ProgressBar } from '@snappmarket/ui';
import { StyledCreativeSideBarCard } from './styles';
// import useInterval from './useInterval';

const BlogPostCard = () => (
  // const [percent, setPercent] = useState(0);
  //
  // useInterval(() => {
  //   setPercent(percent + 10);
  // }, 1000);

  <StyledCreativeSideBarCard className="flex-column">
    <h3>خانه فروغ فرخزاد، خانه شاعری تنها و نامی</h3>
    <p className="description">
      عالمی از دلتنگی ها، دنیای غریبانه یک شاعر، خستگی و رنج سال ها. این کلمات و
      عبارات چه چیز را در ذهن شما زنده می کنند؟! شاعری تنها و عاشق، زنی آرام و
      متفکر که مظلومانه رخت از جهان بست. آری، قصد و منظور من فروغ فرخزاد است،
      شاعری که امروز تنها یادگارش برای نسل جوان جامعه ما علاوه بر دیوان اشعارش
      که خلوص و پاکی در آن موج می زند،
    </p>
    {/* <ProgressBar className={"progress-bar"} percent={percent} /> */}
    <div className="author flex-row align-center">
      <div className="avatar">
        <img
          alt="@2"
          src="http://cdn.hamgardi.com/Images/Profile/20180520091/100/Hamgardi_1516ho7ie5F.jpg"
        />
      </div>
      <span className="author-name"> گلاره یوسف پور </span>
      <a href="#" className="read-more">
        بیشتر
      </a>
    </div>
  </StyledCreativeSideBarCard>
);
export default BlogPostCard;