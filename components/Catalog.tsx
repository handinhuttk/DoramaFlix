import React, { useMemo } from 'react';
import { Video, GroupedVideos } from '../types';
import VideoCard from './VideoCard';

interface CatalogProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
}

const Catalog: React.FC<CatalogProps> = ({ videos, onVideoSelect }) => {
  
  const groupedVideos = useMemo(() => {
    // 1. Sort videos alphabetically
    // localeCompare handles accents correctly for sorting (e.g. A comes before B)
    const sorted = [...videos].sort((a, b) => a.title.localeCompare(b.title));
    
    // 2. Group by first letter
    const groups: GroupedVideos = {};
    sorted.forEach(video => {
      // Get first character
      const firstChar = video.title.charAt(0).toUpperCase();
      // Normalize to handle accents (e.g. 'Ú' -> 'U') so they group correctly
      const normalizedChar = firstChar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      
      // Use the normalized char if it's a letter, otherwise '#'
      const key = /[A-Z]/.test(normalizedChar) ? normalizedChar : '#';
      
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(video);
    });
    
    return groups;
  }, [videos]);

  const sortedKeys = Object.keys(groupedVideos).sort();

  return (
    <div className="pb-20 pt-24 px-4 md:px-12 bg-neutral-900 min-h-screen">
       {/* Hero/Featured Section Placeholder (Visual flair) */}
      <div className="mb-12 relative h-[40vh] md:h-[50vh] bg-neutral-800 rounded-xl overflow-hidden shadow-2xl">
         <img 
            src="https://s1.dmcdn.net/v/x9wl5go/x1080" 
            className="w-full h-full object-cover opacity-60" 
            alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">Atenção A Lenda Viva</h2>
            <p className="text-neutral-200 max-w-lg mb-6 text-lg drop-shadow-md">
                Experimente o drama, a paixão e o poder. Assista aos mais recentes doramas de sucesso exclusivamente no DoramaFlix.
            </p>
            <div className="flex gap-4">
                <button className="bg-white text-black px-8 py-2 md:py-3 rounded font-bold hover:bg-neutral-200 transition flex items-center gap-2">
                    Assistir
                </button>
                <button className="bg-neutral-600/70 text-white px-8 py-2 md:py-3 rounded font-bold hover:bg-neutral-600/90 transition">
                    Mais Informações
                </button>
            </div>
        </div>
      </div>

      <div className="space-y-10">
        {sortedKeys.map(letter => (
          <div key={letter} className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4 px-1 border-l-4 border-red-600 pl-3">
              {letter}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {groupedVideos[letter].map(video => (
                <VideoCard 
                  key={video.id} 
                  video={video} 
                  onClick={onVideoSelect} 
                />
              ))}
            </div>
          </div>
        ))}
        
        {sortedKeys.length === 0 && (
          <div className="text-center text-white py-20">
            Nenhum vídeo encontrado.
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;