import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const GradientCard = ({ name, className, code, description }) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-xl font-bold text-neutral-900">{name}</h3>
        <p className="text-sm text-neutral-500 mt-1">{description}</p>
      </div>
    </div>
    
    <div 
      className={`h-48 w-full rounded-2xl shadow-lg transition-transform hover:scale-[1.01] duration-300 ${className}`} 
    />
    
    <div className="space-y-2">
      <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Implementation</h4>
      <pre className="p-4 rounded-lg bg-neutral-900 text-neutral-100 overflow-x-auto text-xs font-mono">
        {code}
      </pre>
    </div>
  </div>
);

export function GradientPage() {
  return (
    <div className="space-y-12 pb-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight">Gradients</h1>
        <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
          The GSDS gradient system uses brand-aligned color combinations to create depth and visual interest while maintaining institutional integrity.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-12">
        <GradientCard 
          name="Primary Deep (Green)"
          className="bg-gradient-primary"
          description="The core Green School Green gradient. Use for high-impact hero sections, landing page headers, and primary branding elements."
          code={`<div className="bg-gradient-primary">
  {/* Content */}
</div>

/* Or with standard CSS */
background: var(--gradient-primary);`}
        />

        <GradientCard 
          name="Institutional Heritage (Green to Gold)"
          className="bg-gradient-heritage"
          description="A powerful combination of the school's primary and secondary identity colors. Best for prestigious banners and module intros."
          code={`<div className="bg-gradient-heritage">
  {/* Content */}
</div>

/* Or with standard CSS */
background: var(--gradient-heritage);`}
        />

        <GradientCard 
          name="Accent Glow (Gold)"
          className="bg-gradient-accent"
          description="A bright, energetic gradient derived from Green School Gold. Use sparingly for call-outs, achievement badges, or special emphasis."
          code={`<div className="bg-gradient-accent">
  {/* Content */}
</div>

/* Or with standard CSS */
background: var(--gradient-accent);`}
        />
      </section>

      <section className="mt-12 p-8 border rounded-2xl bg-neutral-50 border-neutral-200 border-dashed">
        <h3 className="font-bold text-neutral-700 mb-2 italic">Institutional Note</h3>
        <p className="text-sm text-neutral-500 leading-relaxed">
          Gradients must always maintain a minimum contrast ratio of 4.5:1 with any text placed over them. 
          When using the <strong>Primary Deep</strong> or <strong>Heritage</strong> gradients, use white text for readability.
        </p>
      </section>
    </div>
  );
}
