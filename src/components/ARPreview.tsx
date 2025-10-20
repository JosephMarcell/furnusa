'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';

interface ARPreviewProps {
  productId: number;
  productName: string;
  isOpen: boolean;
  onClose: () => void;
  isPremium: boolean;
  onUpgradeToPremium: () => void;
}

export default function ARPreview({ 
  productId, 
  productName, 
  isOpen, 
  onClose, 
  isPremium, 
  onUpgradeToPremium 
}: ARPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sample AR video URLs - in real implementation, these would come from your backend
  const arVideoUrl = `/videos/ar-preview-${productId}.mp4`;
  const fallbackVideoUrl = '/videos/sample-ar-furniture.mp4';

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
    }
  }, [isOpen]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const resetVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  // Non-premium user view
  if (!isPremium) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="text-center">
            <div className="mb-4">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--wood-light)'}}>
                <svg className="w-10 h-10" style={{color: 'var(--primary)'}} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: 'var(--wood-dark)'}}>
                AR Preview Premium
              </h3>
              <p className="text-gray-600 mb-4">
                Lihat bagaimana <strong>{productName}</strong> akan terlihat di rumah Anda dengan teknologi AR yang menakjubkan!
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2" style={{color: 'var(--primary)'}}>
                Fitur Premium Eksklusif:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Video AR 360° interaktif</li>
                <li>• Simulasi pencahayaan real-time</li>
                <li>• Berbagai angle dan posisi</li>
                <li>• Kualitas HD tanpa watermark</li>
              </ul>
            </div>
            
            <button
              onClick={onUpgradeToPremium}
              className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:opacity-90"
              style={{backgroundColor: 'var(--primary)'}}
            >
              Upgrade ke Premium
            </button>
            
            <p className="text-xs text-gray-500 mt-3">
              Mulai dari Rp 99.000/bulan
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Premium user view with full AR video
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div 
        ref={containerRef}
        className={`relative w-full max-w-4xl ${isFullscreen ? 'h-full' : 'max-h-[80vh]'} bg-black rounded-xl overflow-hidden`}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-4 z-10">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold">
              AR Preview: {productName}
            </h3>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          poster="/images/ar-preview-poster.jpg"
        >
          <source src={arVideoUrl} type="video/mp4" />
          <source src={fallbackVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          {/* Progress Bar */}
          <div className="mb-4">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${(currentTime / duration) * 100}%, #4B5563 ${(currentTime / duration) * 100}%, #4B5563 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-gray-300 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={togglePlay}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              
              <button
                onClick={resetVideo}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <RotateCcw size={20} />
              </button>
              
              <button
                onClick={toggleMute}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-300 bg-black/50 px-2 py-1 rounded">
                AR PREMIUM
              </span>
              
              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Maximize2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}