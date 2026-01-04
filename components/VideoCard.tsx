import React from 'react';
import { PlayCircle } from 'lucide-react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  return (
    <div 
      className="group relative cursor-pointer flex flex-col gap-2"
      onClick={() => onClick(video)}
    >
      {/* Container da Imagem */}
      <div className="relative aspect-video w-full overflow-hidden rounded-md bg-neutral-800 transition-transform duration-300 md:group-hover:scale-105 md:group-hover:z-20 md:group-hover:shadow-xl md:group-hover:ring-2 md:group-hover:ring-white">
        <img 
          src={video.thumbnailUrl} 
          alt={video.title} 
          className="w-full h-full object-cover opacity-100 md:opacity-90 md:group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
        
        {/* Overlay APENAS para Desktop (Hover) */}
        <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-3">
          <div className="flex items-center gap-2 mb-2">
             <PlayCircle className="text-white fill-white" size={32} />
          </div>
          <h4 className="text-white font-semibold text-sm drop-shadow-md truncate">{video.title}</h4>
          <div className="flex items-center gap-2 text-[10px] text-neutral-300 mt-1">
              <span className="text-green-400 font-bold">Novo</span>
              <span className="border border-neutral-500 px-1 rounded-sm">{video.duration}</span>
              <span>HD</span>
          </div>
        </div>
      </div>

      {/* Informações APENAS para Mobile (Sempre visíveis abaixo da imagem) */}
      <div className="flex flex-col md:hidden px-1">
        <h4 className="text-white text-sm font-medium leading-tight line-clamp-2 min-h-[2.5rem]">
          {video.title}
        </h4>
        <div className="flex items-center gap-2 text-xs text-neutral-400 mt-1">
            <span>{video.year || 2024}</span>
            <span>•</span>
            <span>{video.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;