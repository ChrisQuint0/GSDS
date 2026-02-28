import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar with Mobile Toggle */}
      <div className={`
        fixed inset-y-0 left-0 z-50 transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      <main className="flex-1 overflow-y-auto h-screen w-full bg-white shadow-sm lg:border-l border-neutral-100 relative pt-16 lg:pt-0">
        <div className="lg:hidden absolute top-0 left-0 w-full p-4 border-b bg-white flex justify-between items-center z-30">
          <h1 className="font-bold text-primary">GSDS</h1>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        <div className="max-w-4xl mx-auto p-4 sm:p-8 lg:p-12">
          {children}
        </div>
      </main>
    </div>
  );
}
