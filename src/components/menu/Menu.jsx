import React, { useState, useRef, useEffect } from 'react';
import { heroItems } from '../../constant/data'
import { Link } from 'react-router-dom';
import { IoCloseOutline, IoChevronDown, IoChevronUp } from 'react-icons/io5';

const Menu = ({ onClick, isOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <nav className={`fixed top-0 left-0 bg-white z-40 w-full max-w-[360px] h-screen px-8 pt-10 transition-transform duration-300 overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="sticky top-0 bg-white pt-2 pb-4">
        <button className="ml-auto block" onClick={onClick} aria-label="Close menu">
          <IoCloseOutline size={28} />
        </button>
      </div>

      <ul className="space-y-1   pb-8">
        {heroItems.map((item) => {
          const hasDropdown = item.dropdown;
          const isActive = openDropdown === item.id;
          
          return (
            <li key={item.id} className="border-b border-gray-100 last:border-b-0">
              {hasDropdown ? (
                <>
                  <button
                    className="flex justify-between items-center w-full py-3 hover:text-secondaryClr2 transition-colors"
                    onClick={() => toggleDropdown(item.id)}
                    aria-expanded={isActive}
                  >
                    <span>{item.label}</span>
                    {isActive ? <IoChevronUp /> : <IoChevronDown />}
                  </button>
                  
                  <div
                    ref={el => dropdownRefs.current[item.id] = el}
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ height: isActive ? `${dropdownRefs.current[item.id]?.scrollHeight}px` : 0 }}
                  >
                    <ul className="pl-4 pb-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.path}>
                          <Link
                            to={subItem.path}
                            className="block py-2 text-sm hover:text-secondaryClr2 transition-colors"
                            onClick={onClick}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  to={item.path || '#'}
                  className="block py-3 hover:text-secondaryClr2 transition-colors"
                  onClick={onClick}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;