import { Video } from './types';

// Raw data provided for the MVP
// Organized alphabetically and deduplicated
const RAW_VIDEOS = [
  {
    title: "A Chefa Não Finge Mais",
    dailymotionId: "x9nzyvs"
  },
  {
    title: "A Imperatriz Esquecida",
    dailymotionId: "x9qx7t6"
  },
  {
    title: "A Lenda do Senhor Guerreiro",
    dailymotionId: "x9p6pj4"
  },
  {
    title: "Atenção A Lenda Viva Saiu da Prisão",
    dailymotionId: "x9wl5go"
  },
  {
    title: "Chamada pelo Meu Amor",
    dailymotionId: "x9wuaog"
  },
  {
    title: "Chefão Não! Agora Só Quero Estudar",
    dailymotionId: "x9riuto"
  },
  {
    title: "Cuidado! Eu Sou a Chefona",
    dailymotionId: "x9vif92"
  },
  {
    title: "Do Demitido ao Temido: Jamais ao Seu Alcance",
    dailymotionId: "x9wnk7u"
  },
  {
    title: "Do Lixo ao Luxo Pais Bilionários Caindo do Céu",
    dailymotionId: "x9s1frm"
  },
  {
    title: "Do Trambolho Ao Triunfo - O Devaneador Pobre",
    dailymotionId: "x9wfpbm"
  },
  {
    title: "Escolta Mortal Jornada de Sangue",
    dailymotionId: "x9v32eg"
  },
  {
    title: "Esposa e Buff Absurdo: Subindo para Dominar Tudo",
    dailymotionId: "x9riutq"
  },
  {
    title: "Eu te amo mais do que a vida",
    dailymotionId: "x9u3noy"
  },
  {
    title: "Filho do Alfa Segredo do Amor",
    dailymotionId: "x9tsee0"
  },
  {
    title: "Fortuna e Poder em Minutos",
    dailymotionId: "x9tl0pq"
  },
  {
    title: "Garota do Interior vs Dono do Crime",
    dailymotionId: "x9tpu4c"
  },
  {
    title: "Herdeira Retoma Seu Trono",
    dailymotionId: "x9u2yc0"
  },
  {
    title: "Jurei Te Amar, Aprendi Te Largar",
    dailymotionId: "x9wqyko"
  },
  {
    title: "Ligada à Honra",
    dailymotionId: "x9txjkk"
  },
  {
    title: "Marido de Aluguel",
    dailymotionId: "x9o78we"
  },
  {
    title: "Marido em Casa Melhor Supremo Imortal",
    dailymotionId: "x9wxreu"
  },
  {
    title: "Meu CEO Meu Milagre",
    dailymotionId: "x9wl74k"
  },
  {
    title: "Meu Dom da Riqueza",
    dailymotionId: "x9vcxea"
  },
  {
    title: "Meu Pai é Chefão Secreto",
    dailymotionId: "x9txlf4"
  },
  {
    title: "Namoro De Mentira Com Meu Rico Inimigo",
    dailymotionId: "x9tagk2"
  },
  {
    title: "O Amor Desce com Benção e Barriga",
    dailymotionId: "x9umln2"
  },
  {
    title: "O Esplendor De Um Pai",
    dailymotionId: "x9rcobe"
  },
  {
    title: "O Herdeiro Perdido: Nas Vésperas De Retomar Tudo",
    dailymotionId: "x9tkto2"
  },
  {
    title: "O Homem por Trás do Uniforme",
    dailymotionId: "x9s4niq"
  },
  {
    title: "O Poder do Conhecimento - O Retorno da Herdeira Gênio",
    dailymotionId: "x9txlmw"
  },
  {
    title: "O Retorno do Jovem Mestre",
    dailymotionId: "x9oavq8"
  },
  {
    title: "O Retorno Triunfal do Deus Infinito",
    dailymotionId: "x9o5tli"
  },
  {
    title: "Reivindicada pelo Irmão Alfa do meu Ex",
    dailymotionId: "x9ubl48"
  },
  {
    title: "Renascer Para Terminar Os Três Casamentos",
    dailymotionId: "x9r0m0i"
  },
  {
    title: "Renascer para Amar o Sr. Perfeito",
    dailymotionId: "x9u9ibi"
  },
  {
    title: "Renascendo das Cinzas",
    dailymotionId: "x9qtqpq"
  },
  {
    title: "Sinto Tua Falta Depois do Adeus",
    dailymotionId: "x9sj1vy"
  },
  {
    title: "Superando Meu Guarda-Costas",
    dailymotionId: "x9vlp34"
  },
  {
    title: "Supremo Mestre Demônio",
    dailymotionId: "x9lrhng"
  },
  {
    title: "Três Golpes E Uma Pena De Adeus",
    dailymotionId: "x9r0jt2"
  },
  {
    title: "Trapaça Fina, Vingança Divina",
    dailymotionId: "x9ws99u"
  },
  {
    title: "Últimas Palavras do Amor",
    dailymotionId: "x9uu9wy"
  },
  {
    title: "Um Beijo, Uma Facada",
    dailymotionId: "x9sh4y8"
  },
  {
    title: "Uma Reviravolta no Coração",
    dailymotionId: "x9wc1sm"
  },
  {
    title: "Urgente Capturar o Pai Milionário",
    dailymotionId: "x9qvoxc"
  },
  {
    title: "Vagabundo Imortal: Não Teste Meu Poder",
    dailymotionId: "x9uubpg"
  }
];

// Transform raw data into the Video interface used by the UI
export const VIDEOS: Video[] = RAW_VIDEOS.map(video => ({
  id: video.dailymotionId,
  title: video.title,
  // Dynamic thumbnail generation
  thumbnailUrl: `https://www.dailymotion.com/thumbnail/video/${video.dailymotionId}`,
  // Dynamic embed generation
  embedUrl: `https://www.dailymotion.com/embed/video/${video.dailymotionId}`,
  // Placeholder metadata for UI consistency (since raw data didn't provide it)
  duration: 'Dublado em PT',
  year: 2026
}));