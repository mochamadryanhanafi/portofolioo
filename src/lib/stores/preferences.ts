import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

const defaultTheme: Theme = 'light';

function storedValue<T extends string>(key: string, fallback: T): T {
  if (!browser) return fallback;
  return (localStorage.getItem(key) as T | null) ?? fallback;
}

export const theme = writable<Theme>(storedValue('porto-theme', defaultTheme));

if (browser) {
  theme.subscribe((value) => {
    localStorage.setItem('porto-theme', value);
    document.documentElement.dataset.theme = value;
  });
}
