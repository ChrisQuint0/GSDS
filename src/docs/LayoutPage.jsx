import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Sidebar } from '@/components/layout/Sidebar';
import { ChevronRight } from 'lucide-react';

export function LayoutPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight">Sidebar Layout</h1>
        <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
          The standard application shell used across all ISAMS modules to ensure consistent navigation and branding.
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold border-b pb-2">Visual Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl space-y-3">
            <h3 className="font-bold text-primary">Active State</h3>
            <p className="text-sm text-neutral-500">
              Active links use the <code>primary-600</code> background with white text for maximum prominence.
            </p>
          </div>
          <div className="p-6 border rounded-xl space-y-3">
            <h3 className="font-bold text-neutral-700">Hover State</h3>
            <p className="text-sm text-neutral-500">
              Hovering over inactive items uses the <code>neutral-100</code> token for subtle feedback.
            </p>
          </div>
          <div className="p-6 border rounded-xl space-y-3">
            <h3 className="font-bold text-neutral-700">Branding</h3>
            <p className="text-sm text-neutral-500">
              The sidebar header must contain the GSDS/Module logo and versioning information at the bottom.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Structure</h2>
        <div className="p-4 sm:p-8 border rounded-2xl bg-neutral-100/50 relative overflow-x-auto">
          <div className="w-[800px] h-[300px] relative">
            <div className="absolute inset-0 flex">
              <div className="w-24 border-r bg-white h-full flex flex-col p-2 space-y-2">
                <div className="w-full h-4 bg-primary/20 rounded"></div>
                <div className="w-full h-8 bg-primary rounded"></div>
                <div className="w-full h-8 bg-neutral-100 rounded"></div>
                <div className="w-full h-8 bg-neutral-100 rounded"></div>
              </div>
              <div className="flex-1 bg-white p-4 space-y-4">
                <div className="w-1/3 h-6 bg-neutral-200 rounded"></div>
                <div className="w-full h-32 bg-neutral-50 border border-dashed border-neutral-200 rounded-lg flex items-center justify-center text-xs text-neutral-400">
                  Main Content Area
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">Implementation</h2>
        <pre className="p-6 rounded-lg bg-neutral-900 text-neutral-100 overflow-x-auto text-sm">
          {`import { Layout } from "@/components/layout/Layout"

function App() {
  return (
    <Layout>
      <header>
        <h1>Module Dashboard</h1>
      </header>
      <section>
        {/* Your module content here */}
      </section>
    </Layout>
  )
}`}
        </pre>

        <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 font-medium cursor-pointer bg-neutral-50 hover:bg-neutral-100 transition-colors">
            <span>Layout Implementation</span>
            <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90 text-neutral-500" />
          </summary>
          <div className="p-4 border-t bg-neutral-900 rounded-b-lg">
            <pre className="text-neutral-100 overflow-x-auto text-sm">
              {`import React from 'react';
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
}`}
            </pre>
          </div>
        </details>

        <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 font-medium cursor-pointer bg-neutral-50 hover:bg-neutral-100 transition-colors">
            <span>Sidebar Implementation</span>
            <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90 text-neutral-500" />
          </summary>
          <div className="p-4 border-t bg-neutral-900 rounded-b-lg">
            <pre className="text-neutral-100 overflow-x-auto text-sm">
              {`import React from 'react';
import { NavLink } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Users, BookOpen, Settings, Droplets } from 'lucide-react';

const navItems = [
  ...
];

export function Sidebar() {
  return (
    <div className="w-64 border-r bg-sidebar h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-primary flex items-center gap-2">
          Green School
        </h1>
        <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">
          Design System
        </p>
      </div>
      ...
    </div>
  );
}`}
            </pre>
          </div>
        </details>
      </section>
    </div>
  );
}
