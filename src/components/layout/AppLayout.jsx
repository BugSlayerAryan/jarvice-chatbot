import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function AppLayout({ children, onNewChat = () => {} }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#0b0f19] text-white">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={handleSidebarToggle}
        onNewChat={onNewChat}
      />

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <TopBar onMenuToggle={handleSidebarToggle} />

        <div className="min-h-0 flex-1 overflow-hidden">
          {children}
        </div>
      </main>
    </div>
  );
}