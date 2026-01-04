import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Catalog from './components/Catalog';
import Navbar from './components/Navbar';
import VideoModal from './components/VideoModal';
import { VIDEOS } from './constants';
import { User, Video } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for persisted session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('doramaflix_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = (email: string) => {
    const newUser = { email, isAuthenticated: true };
    setUser(newUser);
    localStorage.setItem('doramaflix_user', JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('doramaflix_user');
  };

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  if (loading) {
      return <div className="min-h-screen bg-black flex items-center justify-center text-white">Carregando...</div>;
  }

  return (
    <div className="bg-black min-h-screen font-sans text-neutral-100 selection:bg-red-600 selection:text-white">
      {!user || !user.isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Navbar onLogout={handleLogout} userEmail={user.email} />
          
          <Catalog 
            videos={VIDEOS} 
            onVideoSelect={handleVideoSelect} 
          />
          
          <VideoModal 
            video={selectedVideo} 
            onClose={handleCloseModal} 
          />
          
          {/* Footer */}
          <footer className="py-12 px-4 md:px-12 bg-neutral-900 text-neutral-500 text-sm text-center border-t border-neutral-800 mt-12">
            <p className="mb-4">Dúvidas? Fale no suporte via e-mail: suporte@doramaflix.com.br</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto mb-8">
                <ul>
                    <li className="hover:underline cursor-pointer mb-2">Perguntas Frequentes</li>
                    <li className="hover:underline cursor-pointer mb-2">Relações com Investidores</li>
                    <li className="hover:underline cursor-pointer mb-2">Privacidade</li>
                    <li className="hover:underline cursor-pointer mb-2">Teste de Velocidade</li>
                </ul>
                <ul>
                    <li className="hover:underline cursor-pointer mb-2">Centro de Ajuda</li>
                    <li className="hover:underline cursor-pointer mb-2">Carreiras</li>
                    <li className="hover:underline cursor-pointer mb-2">Preferências de Cookies</li>
                    <li className="hover:underline cursor-pointer mb-2">Avisos Legais</li>
                </ul>
                <ul>
                    <li className="hover:underline cursor-pointer mb-2">Conta</li>
                    <li className="hover:underline cursor-pointer mb-2">Formas de Assistir</li>
                    <li className="hover:underline cursor-pointer mb-2">Informações Corporativas</li>
                    <li className="hover:underline cursor-pointer mb-2">Só na DoramaFlix</li>
                </ul>
                <ul>
                    <li className="hover:underline cursor-pointer mb-2">Centro de Imprensa</li>
                    <li className="hover:underline cursor-pointer mb-2">Termos de Uso</li>
                    <li className="hover:underline cursor-pointer mb-2">Entre em Contato</li>
                </ul>
            </div>
            <p>© 2025 DoramaFlix MVP. Todos os direitos reservados.</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;