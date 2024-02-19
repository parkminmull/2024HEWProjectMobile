import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="h-screen bg-[url('./assets/images/bg.png')] bg-contain bg-no-repeat bg-center animate-fadeIn" style={{ backgroundPosition: 'center top 10%' }}>
      <div className="container p-4">
        <div className="text-center mt-12">
          <h1 className="text-4xl font-medium mb-3">Living Hub</h1>
          <p className='mb-4'>プレゼンテーションサイト</p>
          <p className="text-xl animate-rise font- opacity-0 mb-5">IT42-303<br/>不動産物件情報サイト</p>

          <Link to="/project-description">
            <button className="animate-rise bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
              作品説明へ
            </button>
          </Link>
          
        </div>
      </div>
      <footer className="bg-white p-4 rounded-t-lg shadow-lg bottom-0 w-full fixed">
        <p className="text-center text-xs">&copy; 2024 Living Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
