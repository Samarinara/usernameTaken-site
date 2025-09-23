import React from 'react';
import Header from './Header';
import './Layout.css';
import SettingsToggles from './SettingsToggles';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      <div className="floating-settings">
        <SettingsToggles />
      </div>
    </div>
  );
}

export default Layout;