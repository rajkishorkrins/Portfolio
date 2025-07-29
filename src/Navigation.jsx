import React, { useState, useEffect, useCallback } from 'react';
import './Navigation.css';

const MenuIcon = () => (
  <svg width="24" height="24" aria-hidden="true" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" aria-hidden="true" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const NAV_HEIGHT = 75;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPos = element.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top: elementPos, behavior: 'smooth' });
    }
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + NAV_HEIGHT + 12;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = e => {
      if (!e.target.closest('.navigation')) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Trap scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav className="navigation" role="navigation" aria-label="Main Navigation">
      <div className="nav-wrapper">
        <div className="nav-content">
          <div
            className="nav-logo"
            tabIndex={0}
            onClick={() => scrollToSection('hero')}
            onKeyPress={e => e.key === 'Enter' && scrollToSection('hero')}
            aria-label="Scroll to Home"
          >
            Portfolio
          </div>
          <div className="nav-desktop">
            <div className="nav-desktop-menu">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-button${activeSection === item.id ? ' active' : ''}`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className={`mobile-menu-button${isOpen ? ' active' : ''}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`mobile-menu${isOpen ? ' active' : ''}`}
        role="menu"
      >
        <div className="mobile-menu-content">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`mobile-menu-item${activeSection === item.id ? ' active' : ''}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
              role="menuitem"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
