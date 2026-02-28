import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ title, code }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400">{title}</h3>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-8 text-xs gap-2"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied!" : "Copy Code"}
        </Button>
      </div>
      <pre className="p-6 rounded-xl bg-neutral-900 text-neutral-100 overflow-x-auto text-xs font-mono leading-relaxed border border-neutral-800 shadow-2xl">
        {code}
      </pre>
    </div>
  );
};

export function TokensPage() {
  const cssCode = `:root {
  /* GSDS Tokens - Green School Identity */
  --primary-500: #008a45; /* Green School Green */
  --primary-600: #006b35;
  --primary-700: #004d26;
  
  --gold-400: #ffd700;
  --gold-500: #ffce00; /* Green School Gold */
  --gold-600: #e6b800;
  
  --neutral-50: #f9fafb;
  --neutral-100: #f3f4f6;
  --neutral-200: #e5e7eb;
  --neutral-500: #6b7280;
  --neutral-900: #111827;
  
  --success: #10b981;
  --warning: #f59e0b;
  --destructive-semantic: #ef4444;
  --info: #3b82f6;

  /* Brand Gradients */
  --gradient-primary: linear-gradient(135deg, var(--primary-700) 0%, var(--primary-500) 100%);
  --gradient-heritage: linear-gradient(135deg, var(--primary-600) 0%, var(--gold-500) 100%);
  --gradient-accent: linear-gradient(135deg, var(--gold-600) 0%, var(--gold-400) 100%);
}`;

  const tailwindCode = `@theme inline {
  --color-primary-500: var(--primary-500);
  --color-primary-600: var(--primary-600);
  --color-primary-700: var(--primary-700);
  
  --color-gold-400: var(--gold-400);
  --color-gold-500: var(--gold-500);
  --color-gold-600: var(--gold-600);
  
  --color-neutral-50: var(--neutral-50);
  --color-neutral-100: var(--neutral-100);
  --color-neutral-200: var(--neutral-200);
  --color-neutral-500: var(--neutral-500);
  --color-neutral-900: var(--neutral-900);
  
  --color-success: var(--success);
  --color-warning: var(--warning);
  --color-destructive-semantic: var(--destructive-semantic);
  --color-info: var(--info);

  /* Gradients */
  --background-image-gradient-primary: var(--gradient-primary);
  --background-image-gradient-heritage: var(--gradient-heritage);
  --background-image-gradient-accent: var(--gradient-accent);
}`;

  return (
    <div className="space-y-12 pb-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight">System Tokens</h1>
        <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
          The core definitions of the Green School Design System. Copy these into your global CSS to ensure institutional consistency.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12">
        <CodeBlock title="CSS Variables (index.css)" code={cssCode} />
        <CodeBlock title="Tailwind v4 Mapping" code={tailwindCode} />
      </div>

      <section className="p-8 border rounded-2xl bg-primary-50/30 border-primary-100">
        <h3 className="font-bold text-primary-700 mb-2">Integration Guide</h3>
        <ul className="text-sm text-primary-900/70 space-y-2 list-disc pl-4">
          <li>Paste the <code>:root</code> block at the top of your main CSS file.</li>
          <li>Paste the <code>@theme inline</code> block after your Tailwind imports.</li>
          <li>Restart your development server to ensure Tailwind v4 picks up the new tokens.</li>
        </ul>
      </section>
    </div>
  );
}
