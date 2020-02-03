import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Container } from '@snappmarket/ui';
import { persianNumber } from '@snappmarket/helpers';

import { Next, SongsList, Pause, Play, Speaker } from 'resources/svg/Music';
import {
  StyledMusicPlayer,
  StyledTimer,
  StyledButton,
  StyledRange,
  StyledSongsList,
} from './styles';

const MusicPlayer = props => {
  // const { urls } = props;
  const urls = [
    'http://dls.music-fa.com/tagdl/downloads/Koveytipoor%20-%20Yaran%20Che%20Gharibane%20(320).mp3',
    'http://dls.music-fa.com/tagdl/downloads/Koveytipoor%20-%20Rokhsate%20Didar%20(320).mp3',
    'http://dls.music-fa.com/tagdl/downloads/Koveytipoor%20-%20Change%20Del%20(320).mp3',
  ];

  let player = useRef(null);
  const [played, setPlayed] = useState(40);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [songPointer, setSongPointer] = useState(1);
  const [duration, setDuration] = useState(0);
  const [elapsed, setElapsed] = useState(0);

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
    setSongPointer(songPointer === urls.length - 1 ? 1 : songPointer + 1);
  };
  const handlePrevious = () => {
    setSongPointer(songPointer === -1 ? urls.length - 1 : songPointer - 1);
  };
  const handleProgress = status => {
    if (status.played) {
      setPlayed(status.played);
      setElapsed(status.playedSeconds);
    }
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
          url={urls[songPointer]}
          width="100%"
          height={10}
          playing={playing}
          loop={false}
          muted={muted}
          onProgress={handleProgress}
          onDuration={setDuration}
        />

        <StyledSongsList>
          <SongsList /> لیست‌ آهنگ‌ها
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
            disabled={!urls.length}
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
            disabled={!urls.length}
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

export default MusicPlayer;
