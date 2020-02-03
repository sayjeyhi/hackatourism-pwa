import React from 'react';
import barfImage from 'resources/img/MusicBackgrounds/barf.jpg';
import rainImage from 'resources/img/MusicBackgrounds/rain.jpg';
import romanticImage from 'resources/img/MusicBackgrounds/romantic.jpg';
import shomalImage from 'resources/img/MusicBackgrounds/shomal.jpg';

import { StyledMusicsWrapper, StyledMusicWrapper } from './styles';

const Musics = () => {
  const groups = [
    {
      title: 'جاده شمال',
      image: shomalImage,
    },
    {
      title: 'هوای بارونی',
      image: rainImage,
    },
    {
      title: 'هوای برفی',
      image: barfImage,
    },
    {
      title: 'رمانتیک',
      image: romanticImage,
    },
  ];

  return (
    <StyledMusicsWrapper className="flex-row pb-2">
      {groups.map(group => (
        <StyledMusicWrapper className="no-effect-button">
          <div className="type-image">
            <img src={group.image} alt={group.title} />
          </div>
          <div className="type-name">{group.title}</div>
        </StyledMusicWrapper>
      ))}
    </StyledMusicsWrapper>
  );
};

Musics.propTypes = {};

export default Musics;
