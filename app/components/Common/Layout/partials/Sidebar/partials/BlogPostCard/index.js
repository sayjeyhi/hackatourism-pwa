import React from 'react';
import userImage from 'resources/img/user.png';
import { StyledCreativeSideBarCard } from './styles';

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
        <img alt="@2" src={userImage} />
      </div>
      <span className="author-name">احمد محمدی</span>
      <a href="#" className="read-more">
        بیشتر
      </a>
    </div>
  </StyledCreativeSideBarCard>
);
export default BlogPostCard;
