import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-semibold">Living Hub</Link>
        </div>

        <div>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12m0-12L6 18" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <ul ref={menuRef} className="z-50 absolute top-14 right-0 bg-white shadow-md py-2 w-full sm:relative sm:w-auto sm:flex sm:space-x-4">
            <li className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <Link to="/" className="block px-4 py-2" onClick={toggleMenu}>トップページ</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <Link to="/project-description" className="block px-4 py-2" onClick={toggleMenu}>作品説明</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <Link to="/team-introduction" className="block px-4 py-2" onClick={toggleMenu}>メンバー</Link>
            </li>
            {/* 추가적인 메뉴 항목들 */}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
