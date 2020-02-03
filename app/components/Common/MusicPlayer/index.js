import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import { Container } from '@snappmarket/ui';

import { persianNumber } from '@snappmarket/helpers';
import { Next, SongsList, Pause, Play, Speaker } from 'resources/svg/Music';
import SONGS from 'resources/data/songs';
import { playerSelectors } from 'ducks';
import {
  StyledMusicPlayer,
  StyledTimer,
  StyledButton,
  StyledRange,
  StyledSongsList,
} from './styles';

const MusicPlayer = ({ songType, playerVisibility }) => {
  console.log({
    songType,
    playerVisibility,
  });

  let player = useRef(null);
  const [songsListVisibility, setSongsListVisibility] = useState(false);
  const [played, setPlayed] = useState(40);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [songPointer, setSongPointer] = useState(1);
  const [duration, setDuration] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  if (!playerVisibility) {
    return null;
  }

  const songs = SONGS[songType];

  const togglePlay = () => {
    setPlaying(!playing);
  };
  const handleToggleMuted = () => {
    setMuted(!muted);
  };
  const handleSeekChange = e => {
    setPlayed(e.target.value);
  };
  const handleSeekMouseUp = e => {
    player.seekTo(parseFloat(e.target.value));
  };
  const handleNext = () => {
    setSongPointer(songPointer === songs.length - 1 ? 1 : songPointer + 1);
  };
  const handlePrevious = () => {
    setSongPointer(songPointer === -1 ? songs.length - 1 : songPointer - 1);
  };

  const handleProgress = status => {
    if (status.played) {
      setPlayed(status.played);
      setElapsed(status.playedSeconds);
    }
  };

  const handleToggleSongsList = () => {
    setSongsListVisibility(!songsListVisibility);
  };

  const setRef = e => {
    player = e;
  };

  const calculateTime = time =>
    persianNumber(
      `${(time - Math.floor(time / 60) * 60).toFixed(0)} : ${Math.floor(
        time / 60,
      )}`,
    );

  return (
    <StyledMusicPlayer className="align-center">
      <Container className="fixed">
        <ReactPlayer
          className="player"
          ref={setRef}
          url={songs[songPointer].url}
          width="100%"
          height={10}
          playing={playing}
          loop={false}
          muted={muted}
          onProgress={handleProgress}
          onDuration={setDuration}
        />

        <StyledSongsList
          className="no-effect-button"
          onClick={handleToggleSongsList}
        >
          <SongsList /> لیست‌ آهنگ‌ها
          <div className={`songsList ${songsListVisibility ? 'active' : ''}`}>
            <ul>
              {songs.map((song, index) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                <li key={song.url} onClick={() => setSongPointer(index)}>
                  {song.title}{' '}
                  <span className="duration">
                    {persianNumber(song.duration)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </StyledSongsList>
        <StyledRange>
          <input
            type="range"
            className="slider"
            value={played}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            min={0}
            max={1}
            step="any"
          />

          <StyledTimer>
            <p>{calculateTime(duration)}</p>
            <p>{calculateTime(elapsed)}</p>
          </StyledTimer>
        </StyledRange>

        <div className="music-controls flex-row">
          <StyledButton
            type="button"
            className="no-effect-button circle"
            onClick={handleNext}
            disabled={!songs.length}
          >
            <Next />
          </StyledButton>
          <StyledButton
            type="button"
            className="no-effect-button circle"
            onClick={togglePlay}
          >
            {playing ? <Pause /> : <Play />}
          </StyledButton>
          <StyledButton
            type="button"
            className="no-effect-button circle"
            onClick={handlePrevious}
            disabled={!songs.length}
          >
            <Next className="rotate-180" />
          </StyledButton>

          <StyledButton
            type="button"
            className="no-effect-button circle"
            onClick={handleToggleMuted}
          >
            <Speaker mute={muted} />
          </StyledButton>
        </div>
      </Container>
    </StyledMusicPlayer>
  );
};

MusicPlayer.propTypes = {
  songType: PropTypes.string,
  playerVisibility: PropTypes.bool,
};

const mapStateToProps = state => ({
  playerVisibility: playerSelectors.getPlayerStatus(state),
  songType: playerSelectors.getSongType(state),
});

export default connect(mapStateToProps)(MusicPlayer);
