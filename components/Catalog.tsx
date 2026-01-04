import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Video, GroupedVideos } from '../types';
import VideoCard from './VideoCard';

interface CatalogProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
}

const Catalog: React.FC<CatalogProps> = ({ videos, onVideoSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Logic for Alphabetical Grouping (Default View)
  const groupedVideos = useMemo(() => {
    const sorted = [...videos].sort((a, b) => a.title.localeCompare(b.title));
    const groups: GroupedVideos = {};
    
    sorted.forEach(video => {
      const firstChar = video.title.charAt(0).toUpperCase();
      const normalizedChar = firstChar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const key = /[A-Z]/.test(normalizedChar) ? normalizedChar : '#';
      
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(video);
    });
    
    return groups;
  }, [videos]);

  const sortedKeys = Object.keys(groupedVideos).sort();

  // Logic for Search Filtering
  const filteredVideos = useMemo(() => {
    if (!searchTerm) return [];
    return videos.filter(video => 
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [videos, searchTerm]);

  return (
    <div className="pb-20 pt-24 px-4 md:px-12 bg-neutral-900 min-h-screen">
       
      {/* Hero / Search Section */}
      <div className="mb-12 relative h-[50vh] bg-neutral-800 rounded-xl overflow-hidden shadow-2xl">
         {/* Background Image - Generic Cinematic Background */}
         <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
            className="w-full h-full object-cover opacity-40" 
            alt="Background"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent flex flex-col justify-center items-center text-center p-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg max-w-3xl">
                Catálogo atualizado diariamente com todos os lançamentos
            </h2>
            <p className="text-neutral-200 max-w-lg mb-8 text-lg drop-shadow-md">
                Encontre seus doramas favoritos e descubra novas paixões agora mesmo.
            </p>
            
            {/* Search Bar */}
            <div className="relative w-full max-w-2xl group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="text-neutral-400 group-focus-within:text-white transition-colors" size={24} />
                </div>
                <input 
                    type="text" 
                    placeholder="O que você quer assistir hoje?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-black/60 backdrop-blur-md border border-neutral-600 text-white pl-12 pr-4 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-black/80 transition-all shadow-lg placeholder:text-neutral-400"
                />
            </div>
        </div>
      </div>

      <div className="space-y-10 min-h-[300px]">
        
        {/* VIEW: SEARCH RESULTS */}
        {searchTerm ? (
            <div>
                <h3 className="text-xl text-neutral-400 mb-6">
                    Resultados para: <span className="text-white font-bold">"{searchTerm}"</span>
                </h3>
                {filteredVideos.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8 md:gap-y-4">
                        {filteredVideos.map(video => (
                            <VideoCard 
                                key={video.id} 
                                video={video} 
                                onClick={onVideoSelect} 
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-neutral-800/30 rounded-lg border border-neutral-800">
                        <p className="text-xl text-white font-semibold">Nenhum título encontrado.</p>
                        <p className="text-neutral-400 mt-2">Tente buscar por outro termo.</p>
                    </div>
                )}
            </div>
        ) : (
            /* VIEW: DEFAULT ALPHABETICAL LIST */
            <>
                {sortedKeys.map(letter => (
                <div key={letter} className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 px-1 border-l-4 border-red-600 pl-3">
                    {letter}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8 md:gap-y-4">
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
                    Nenhum vídeo disponível no momento.
                </div>
                )}
            </>
        )}

      </div>
    </div>
  );
};

export default Catalog;