import React, { useState, useEffect, useRef } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const AudioPlayer: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(0.3);

  useEffect(() => {
    const audio = new Audio('/assets/cinematic-music-sketches-11-cinematic-percussion-sketch-116186.mp3');
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    const handleScroll = () => {
      if (!isMuted && audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play().catch(err => console.log('Audio playback failed:', err));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isMuted, volume]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(err => console.log('Audio playback failed:', err));
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-4 right-4 z-50 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
      aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
    >
      {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
    </button>
  );
};

export default AudioPlayer;
