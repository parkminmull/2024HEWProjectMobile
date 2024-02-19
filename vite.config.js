// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0', // 모든 네트워크 인터페이스에서 접근 가능하도록 설정
        port: 3000, // 사용할 포트 (기본적으로 3000을 사용합니다)
    },
});