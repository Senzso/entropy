'use client'

import { useEffect } from 'react'

export default function IconRefresher() {
  useEffect(() => {
    const refreshFavicon = () => {
      const link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
      if (link) {
        link.href = `/newicon.png?v=${new Date().getTime()}`;
      }
    };

    refreshFavicon();
    window.addEventListener('focus', refreshFavicon);

    return () => {
      window.removeEventListener('focus', refreshFavicon);
    };
  }, []);

  return null;
}

