import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Experience } from '../components/Experience';

const MainPage = () => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center w-full h-screen">🌀Loading...</div>}>
    <div className="h-screen bg-contain b
    g-no-repeat bg-center animate-fadeIn relative">
      <div className="absolute top-0 left-0 right-0 mt-12 text-center z-10">
        <h1 className="text-4xl font-medium mb-2">Living Hub</h1>
        <p className="mb-2">プレゼンテーションサイト</p>
        <p className='mb-2'>3/05(火) 335教室<br/></p>
        <p className="text-xl mb-5 animate-rise">IT42-303<br/>不動産物件情報サイト</p>

        <Link to="/project-description">
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            作品説明へ
          </button>
        </Link>
      </div>
      <div className="container mx-auto p-4 z-0 opacity-0">
        {/* 다른 콘텐츠 */}
      </div>
      <div className="flex justify-center items-center h-full z-0">
        <Canvas shadows camera={{ position: [30, 30, 30], fov: 30 }}>
          <color attach="background" args={["#ffffff"]} />
          
          <Experience />
        </Canvas>
      </div>
      <footer className="bg-white p-4 shadow-lg w-full fixed bottom-0 z-10">
        <p className="text-center text-xs">&copy; 2024 Living Hub. All rights reserved.</p>
      </footer>
    </div>
    </Suspense>
  );
};

export default MainPage;
