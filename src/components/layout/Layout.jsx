import React from 'react';
import { Sidebar } from './Sidebar';

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      <Sidebar />
      <main className="flex-1 overflow-y-auto h-screen bg-white shadow-sm border-l border-neutral-100">
        <div className="max-w-4xl mx-auto p-12">
          {children}
        </div>
      </main>
    </div>
  );
}
