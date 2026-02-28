import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Loader2, ChevronRight } from 'lucide-react';

export function ButtonPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight">Button</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          The primary interaction component. Used for actions, navigation, and state triggers.
        </p>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-2 border-b pb-2">
          <h2 className="text-2xl font-semibold">Variants</h2>
          <span className="text-xs bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded uppercase font-bold tracking-wider">Required</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Previews</h3>
            <div className="flex flex-wrap gap-4 items-center p-8 border rounded-xl bg-neutral-50/50">
              <Button variant="default">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Usage Note</h3>
            <div className="prose prose-sm text-neutral-600">
              <ul className="space-y-2 list-disc pl-4">
                <li><strong>Primary:</strong> Use for the main call-to-action on a page. Limit to one per view.</li>
                <li><strong>Secondary:</strong> Use for alternative actions or secondary emphasis.</li>
                <li><strong>Outline:</strong> Use for neutral actions or when placed on colored backgrounds.</li>
                <li><strong>Destructive:</strong> Use exclusively for permanent delete or high-risk actions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold border-b pb-2">States & Composition</h2>
        <div className="flex flex-wrap gap-4 items-center p-8 border rounded-xl">
          <Button disabled>Disabled</Button>
          <Button>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
          <Button>
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">Code</h2>
        <pre className="p-6 rounded-lg bg-neutral-900 text-neutral-100 overflow-x-auto text-sm">
{`import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Primary Action</Button>
      <Button variant="outline">Secondary Action</Button>
    </div>
  )
}`}
        </pre>
      </section>
    </div>
  );
}
