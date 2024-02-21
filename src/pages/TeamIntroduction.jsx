import React from 'react';

const TeamIntroduction = () => {
  return (
    <div className="team-introduction bg-gradient-to-b from-gray-100 to-gray-300">
      <h1 className="text-center  py-4">メンバー</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 섹션들 */}
        <div className="flex flex-col items-center">
          <img src="./assets/images/haru.png" alt="haru" className="rounded-full shadow-lg mb-3" />
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
            <p className="text-center">
              宇野 ハル
              <br/>
              担当: バックエンド
              <br/>
              得意言語: Python
              <br/>
              uno.ha07@gmail.com
              <br/>
              Instagram: giga_ru07
            </p>
          </div>
        </div>
        {/* 섹션 2 */}
        <div className="flex flex-col items-center">
          <img src="./assets/images/sewon.png" alt="sewon" className="rounded-full shadow-lg mb-3" />
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
            <p className="text-center">
              パク セウォン
              <br/>
              担当: フロントエンド
              <br/>
              得意言語: Python, Javascript
              <br/>
              parksewonoffce@gmail.com
              <br/>
              Instagram: bbarksebb
            </p>
          </div>
        </div>
        {/* 섹션 3 */}
        <div className="flex flex-col items-center">
          <img src="./assets/images/kamo.png" alt="kamo" className="rounded-full shadow-lg mb-3" />
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
          <p className="text-center">
            加茂 遥音
              <br/>
              担当: フロントエンド
              <br/>
              得意言語: HTML,CSS
              <br/>
              suusuus321@gmail.com
              
            </p>
          </div>
        </div>
        {/* 섹션 4 */}
        <div className="flex flex-col items-center">
          <img src="./assets/images/tokasiki.png" alt="tokasiki" className="rounded-full shadow-lg mb-3" />
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
            <p className="text-center">
            渡嘉敷 星矢
              <br/>
              担当: フロントエンド
              <br/>
              得意言語: HTML,Javascript
              <br/>
              mm3820123@gmail.com
              
            </p>
          </div>
        </div>
        {/* 섹션 5 */}
        <div className="flex flex-col items-center">
          <img src="./assets/images/shintaro.png" alt="shintaro" className="rounded-full shadow-lg mb-3" />
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
          <p className="text-center">
          高橋 伸太朗
              <br/>
              担当: フロントエンド
              <br/>
              得意言語: HTML,CSS,Python
              <br/>
              shintarou.takahahsi.723@gmail.com
              <br/>
              Instagram: tkhs_wts_
            </p>
          </div>
        </div>
        {/* 섹션 6 */}
        <div className="flex flex-col items-center">
          <img src="./assets/images/urukun.png" alt="urukun" className="rounded-full shadow-lg mb-3" />
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
          <p className="text-center">
          WURIGENG
              <br/>
              担当: フロントエンド
              <br/>
              得意言語: JAVA
              <br/>
              q120502662@gmail.com
              <br/>
              Instagram: WURIGENG
              
            </p>
          </div>
        </div>
        {/* 섹션 7 */}
        <div className="flex flex-col items-center">
          <img src="./assets/images/toda.png" alt="toda" className="rounded-full shadow-lg mb-3" />
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
          <p className="text-center">
          戸田 康介
              <br/>
              担当: バックエンド
              <br/>
              得意言語: Python
              <br/>
              kohsuke1616@gmail.com
             
              
            </p>
          </div>
        </div>
        {/* 섹션 8 */}
      </div>
      <footer className="g-whiteb p-4  bottom-0 w-full">
        <p className="text-center text-xs mt-8">&copy; 2024 Living Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TeamIntroduction;
