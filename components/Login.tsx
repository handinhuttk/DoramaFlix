import React, { useState } from 'react';
import { Lock, User as UserIcon } from 'lucide-react';

interface LoginProps {
  onLogin: (email: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '@dorama2026') {
      onLogin(email);
    } else {
      setError('Senha inválida. Dica: @dorama2026');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-90 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-blend-overlay">
      <div className="bg-black/80 p-12 rounded-lg w-full max-w-md backdrop-blur-sm border border-neutral-800">
        <h2 className="text-3xl font-bold text-white mb-8">Entrar</h2>
        
        {error && (
          <div className="bg-orange-600 text-white text-sm p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                <UserIcon size={20} />
             </div>
            <input
              type="email"
              placeholder="Email ou número de telefone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-neutral-700 text-white rounded px-10 py-3.5 focus:outline-none focus:bg-neutral-600 focus:ring-2 focus:ring-red-600 transition"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                <Lock size={20} />
             </div>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              required
              className="w-full bg-neutral-700 text-white rounded px-10 py-3.5 focus:outline-none focus:bg-neutral-600 focus:ring-2 focus:ring-red-600 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-3.5 rounded hover:bg-red-700 transition duration-200 mt-4"
          >
            Entrar
          </button>
        </form>

        <div className="mt-8 text-neutral-400 text-sm">
          <p>Novo por aqui? <span className="text-white hover:underline cursor-pointer">Assine agora</span>.</p>
          <p className="mt-4 text-xs">Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;