import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Button } from '@snappmarket/ui';
import { StyledMusicPlayer, StyledTimer } from './styles';

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
  const [loop, setLoop] = useState(false);
  const [muted, setMuted] = useState(false);
  const [songPointer, setSongPointer] = useState(1);
  const [duration, setDuration] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const handlePlay = () => {
    setPlaying(true);
  };
  const handlePause = () => {
    setPlaying(false);
  };
  const handleLoop = () => {
    setLoop(!loop);
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
    console.log(status);
    if (status.played) {
      setPlayed(status.played);
      setElapsed(status.playedSeconds);
    }
  };
  const handleDuration = duration => {
    setDuration(duration);
  };
  const setRef = e => {
    player = e;
  };
  console.log(elapsed);
  return (
    <StyledMusicPlayer>
      <ReactPlayer
        ref={setRef}
        url={urls[songPointer]}
        width="100%"
        height={10}
        playing={playing}
        loop={loop}
        muted={muted}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <StyledTimer>
        <p>
          {(duration - Math.floor(duration / 60) * 60).toFixed(0)} :{' '}
          {Math.floor(duration / 60)}
        </p>
        <p>
          {(elapsed - Math.floor(elapsed / 60) * 60).toFixed(0)} :{' '}
          {Math.floor(elapsed / 60)}
        </p>
      </StyledTimer>
      <input
        type="range"
        value={played}
        onChange={handleSeekChange}
        onMouseUp={handleSeekMouseUp}
        min={0}
        max={1}
        step="any"
      />
      <div>
        <Button title="play" onClick={handlePlay} />
        <Button title="next" onClick={handleNext} disabled={!urls.length} />
        <Button title="prev" onClick={handlePrevious} disabled={!urls.length} />
        <Button title="Mute" onClick={handleToggleMuted} />
        <Button title="pause" onClick={handlePause} />
        <Button title="loop" onClick={handleLoop} />
      </div>
    </StyledMusicPlayer>
  );
};

export default MusicPlayer;
