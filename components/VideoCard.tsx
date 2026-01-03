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
      className="group relative bg-neutral-800 rounded-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-20 hover:shadow-xl ring-0 hover:ring-2 hover:ring-white"
      onClick={() => onClick(video)}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={video.thumbnailUrl} 
          alt={video.title} 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
      </div>
      
      {/* Overlay content appearing on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
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
  );
};

export default VideoCard;