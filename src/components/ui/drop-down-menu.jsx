import React, { useState } from 'react';
import '../../styles/components/ui/drop-down-menu.css'; // Подключите свои стили

function DropdownMenu({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <div key={index} className="dropdown-item">
              {item}
            </div>
          ))}
        </div>
      )}
      {isOpen && (
        <div className="dropdown-overlay" onClick={closeDropdown}></div>
      )}
    </div>
  );
}

export default DropdownMenu;
