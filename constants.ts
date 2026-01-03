import { Video } from './types';

// Raw data provided for the MVP
const RAW_VIDEOS = [
  {
    title: "Atenção A Lenda Viva Saiu da Prisão",
    dailymotionId: "x9wl5go"
  },
  {
    title: "Chamada pelo Meu Amor",
    dailymotionId: "x9wuaog"
  },
  {
    title: "Cuidado! Eu Sou a Chefona",
    dailymotionId: "x9vif92"
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
    title: "O Herdeiro Perdido: Nas Vésperas De Retomar Tudo",
    dailymotionId: "x9tkto2"
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
    title: "Uma Reviravolta no Coração",
    dailymotionId: "x9wc1sm"
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
  duration: 'Temporada 1',
  year: 2024
}));