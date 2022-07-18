import {useEffect, useRef, useState} from 'react';

type AudioPlayerProps = {
  isPlaying: boolean,
  src: string,
  onPlayBtnClick: () => void,
}

function AudioPlayer({isPlaying, src, onPlayBtnClick}: AudioPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current !== null) {
      audioRef.current.addEventListener('loadeddata', () => setIsLoading(false), {once: true});
    }
  }, [src]);

  useEffect(() => {
    if (audioRef.current === null) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <button
        className={`track__button track__button--${isPlaying ? 'pause' : 'play'}`}
        type="button"
        disabled={isLoading}
        onClick={onPlayBtnClick}
      />
      <div className="track__status">
        <audio src={src} ref={audioRef} />
      </div>
    </>
  );
}

export default AudioPlayer;
