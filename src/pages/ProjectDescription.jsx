import React from 'react';

const ProjectDescription = () => {
  return (
    <div className="project-description bg-white p-6 rounded-lg shadow-lg bg-gradient-to-b from-gray-100 to-gray-300">
      
      
      <div className="bg-white/30 backdrop-blur-sm p-4 rounded-lg shadow-md mb-6">
        <p className="mb-1 text-lg">概要 </p>
        <p>
        共通の趣味やライフスタイルに合わせた物件を提供します。<br/>このサービスは、同じ趣味や興味を持つ人々が集まるコミュニティを形成し、快適な住生活をサポートします。</p>
        <img src="./assets/images/main.png" alt="概要イメージ" className="rounded-lg" />
      </div>

      <div className="bg-white/30 backdrop-blur-sm p-4 rounded-lg shadow-md mb-6">
        <p className="mb-1 text-lg">売りポイント</p>
        <p>充実した検索機能、3Dを使用した内見、契約後使える掲示板機能。独自の3D技術でリアルな内見体験を提供し、ユーザーが物件を選ぶ際の決定要因を強化します。</p>
        <img src="./assets/images/3d.png" alt="売りポイントイメージ" className="rounded-lg" />
        <br/>
        <img src="./assets/images/4.png" alt="売りポイントイメージ" className="rounded-lg" />
        <br/>
        <img src="./assets/images/2.png" alt="売りポイントイメージ" className="rounded-lg" />
        <br/>
        <img src="./assets/images/3.png" alt="売りポイントイメージ" className="rounded-lg" />
        
      </div>


      <div className="bg-white/30 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <p className="mb-1 text-lg">使用言語</p>
        <p>Python(Django), html, css, js, react, MySql</p>
        <p><a href="https://github.com/unoharu" className="text-blue-600 hover:text-blue-800">GitHub</a></p>
      </div>

      
     
     
      <footer className="g-whiteb p-4  bottom-0 w-full">
        <p className="text-center text-xs mt-8">&copy; 2024 Living Hub. All rights reserved.</p>
      </footer>
    </div>
    
  );
};

export default ProjectDescription;
