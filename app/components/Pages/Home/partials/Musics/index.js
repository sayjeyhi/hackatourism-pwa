import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { playerActions } from 'ducks';

import barfImage from 'resources/img/MusicBackgrounds/barf.jpg';
import rainImage from 'resources/img/MusicBackgrounds/rain.jpg';
import romanticImage from 'resources/img/MusicBackgrounds/romantic.jpg';
import shomalImage from 'resources/img/MusicBackgrounds/shomal.jpg';

import { StyledMusicsWrapper, StyledMusicWrapper } from './styles';

const Musics = ({ showPlayer, setSongType }) => {
  const groups = [
    {
      title: 'جاده شمال',
      image: shomalImage,
      slug: 'shomal',
    },
    {
      title: 'هوای بارونی',
      image: rainImage,
      slug: 'baran',
    },
    {
      title: 'هوای برفی',
      image: barfImage,
      slug: 'barf',
    },
    {
      title: 'رمانتیک',
      image: romanticImage,
      slug: 'romantic',
    },
  ];

  const handleChangeSongTypeAndPlay = type => {
    setSongType(type);
    showPlayer();
  };

  return (
    <StyledMusicsWrapper className="flex-row pb-2">
      {groups.map(group => (
        <StyledMusicWrapper
          onClick={() => handleChangeSongTypeAndPlay(group.slug)}
          key={group.image}
          className="no-effect-button"
        >
          <div className="type-image">
            <img src={group.image} alt={group.title} />
          </div>
          <div className="type-name">{group.title}</div>
        </StyledMusicWrapper>
      ))}
    </StyledMusicsWrapper>
  );
};

Musics.propTypes = {
  showPlayer: PropTypes.func,
  setSongType: PropTypes.func,
};

export default connect(null, {
  showPlayer: playerActions.showPlayer,
  setSongType: playerActions.setSongType,
})(Musics);
