export const getBasePath = (): string => {
  if ((import.meta as any).env?.PROD) {
    return (import.meta as any).env.VITE_BASE_URL ?? '/';
  }
  
  return '/';
};

// Утилита для создания полного пути к ресурсам
export const getAssetPath = (path: string): string => {
  const basePath = getBasePath();
  // Убираем начальный слеш если он есть
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}${cleanPath}`;
};
