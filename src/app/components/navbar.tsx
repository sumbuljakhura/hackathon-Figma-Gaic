"use client"

import Link from 'next/link';
import { faCartShopping, faHeart, faSearch, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
config.autoAddCss = false;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-6 sm:px-14 h-16 sm:h-20 bg-[#FBEBB5] text-black shadow-md">
      {/* Logo or Brand */}
      <div className="text-lg sm:text-xl font-semibold">
        <Link href="/"></Link>
      </div>

      {/* Centered Menu for Larger Screens */}
      <nav className="hidden sm:flex flex-grow justify-center space-x-6 text-sm sm:text-base">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        <FontAwesomeIcon icon={faSearch} className="hover:text-gray-700 cursor-pointer" aria-label="Search" />
        <Link href="/singleproduct">
          <FontAwesomeIcon icon={faHeart} className="hover:text-gray-700 cursor-pointer" aria-label="Wishlist" />
        </Link>
        <Link href="/cart">
          <FontAwesomeIcon icon={faCartShopping} className="hover:text-gray-700 cursor-pointer" aria-label="Cart" />
        </Link>
        <Link href="/account">
          <FontAwesomeIcon icon={faUser} className="hover:text-gray-700 cursor-pointer" aria-label="User Profile" />
        </Link>
        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-xl hover:text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
