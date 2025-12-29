import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';


function getHtmlEntries() {
  return fs.readdirSync(__dirname)
    .filter(file => file.endsWith('.html'))
    .reduce((entries, file) => {
      const name = file.replace('.html', '');
      entries[name] = resolve(__dirname, file);
      return entries;
    },{});
} 
      
export default defineConfig({
  base: './',
  server: { 
    port: 5173,
     open: true,
      watch: { 
        usePolling: true, 
      },
  },
    
  build: { 
    rollupOptions: { 
      input: getHtmlEntries(), 
    },
  },
});