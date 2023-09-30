import React, { useState, useRef, useEffect } from 'react';
import '../../styles/components/ui/drop-down-menu.css';

const DropdownMenu = ({ options, onSelect, icon: Icon, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const containerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const handleOutsideClick = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      closeMenu();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
      <div className={`dropdown-menu ${isOpen && 'dropdown-menu_active'}`} ref={containerRef} onClick={toggleMenu}>
        <Icon size={20} color={isOpen ? '#fff' : '#27272a'} strokeWidth={2} />
        <div className="dropdown-button">
          {selectedOption || placeholder}
        </div>
        {isOpen && (
          <ul className={`dropdown-list ${isOpen ? 'show' : ''}`}>
            {options.map((option) => (
              <li
                key={option}
                className="dropdown-item"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
  );
};

export default DropdownMenu;

