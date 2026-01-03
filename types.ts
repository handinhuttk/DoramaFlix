export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  embedUrl: string;
  duration?: string;
  year?: number;
}

export interface User {
  email: string;
  isAuthenticated: boolean;
}

export type GroupedVideos = Record<string, Video[]>;
