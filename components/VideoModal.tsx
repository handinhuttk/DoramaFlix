import React, { useEffect, useRef } from 'react';
import { X, Maximize } from 'lucide-react';
import { Video } from '../types';

interface VideoModalProps {
  video: Video | null;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (video) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [video]);

  const handleFullscreen = () => {
    const elem = iframeRef.current;
    if (!elem) return;

    // Standard and vendor-prefixed fullscreen requests
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ((elem as any).webkitRequestFullscreen) { /* Safari/iOS */
      (elem as any).webkitRequestFullscreen();
    } else if ((elem as any).msRequestFullscreen) { /* IE/Edge */
      (elem as any).msRequestFullscreen();
    }
  };

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl border border-neutral-800">
        
        {/* Header/Close */}
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
          <h3 className="text-xl font-bold text-white drop-shadow-md">{video.title}</h3>
          <button
            onClick={onClose}
            className="p-2 bg-neutral-800/80 hover:bg-neutral-700 text-white rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative pt-[56.25%] bg-black">
          <iframe
            ref={iframeRef}
            className="absolute top-0 left-0 w-full h-full"
            src={`${video.embedUrl}?autoplay=0`}
            title={video.title}
            allow="fullscreen; picture-in-picture; autoplay"
            allowFullScreen
          ></iframe>
        </div>

        {/* Meta info */}
        <div className="p-6 bg-neutral-900">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4 text-sm text-neutral-400">
                    <span className="text-green-500 font-bold">98% Relevante</span>
                    <span>{video.year}</span>
                    <span className="border border-neutral-500 px-1 text-xs">HD</span>
                    <span>{video.duration}</span>
                </div>

                {/* Fullscreen Option */}
                <button 
                  onClick={handleFullscreen}
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 text-white rounded transition-colors text-sm font-semibold"
                >
                  <Maximize size={16} />
                  Tela cheia
                </button>
            </div>

            <p className="text-white text-lg">
                Assista <span className="font-bold">{video.title}</span> na DoramaFlix. Explore nossa vasta biblioteca de vídeos de alta qualidade.
            </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;