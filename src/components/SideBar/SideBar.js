import React, { useState } from 'react';
import './SideBar.css';
import MenuIcon from '@mui/icons-material/Menu';
const Sidebar = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    onClose();
  
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <ul>
        <li onClick={handleLinkClick}>Home</li>
        <li onClick={handleLinkClick}>About</li>
        <li onClick={handleLinkClick}>Contact</li>
      </ul>
    </div>
  );
};

function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="spp">
      <button className="toggle-button" onClick={handleToggleSidebar}>
        {<MenuIcon/>}
      </button>
      {sidebarOpen && <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
      <div className={`content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        
      </div>
    </div>
  );
}

export default SideBar;
