import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronRight } from 'lucide-react';

export function InputPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight">Input</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Standard text field for collecting data. Built with a focus on academic clarity and controlled visual weight.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold border-b pb-2 text-neutral-800">Standard Usage</h2>
        <div className="max-w-md p-8 border rounded-xl bg-neutral-50/50 space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email" className="font-bold text-neutral-700">Email Address</Label>
            <Input type="email" id="email" placeholder="e.g., student@isams.com" />
            <p className="text-xs text-neutral-500">Use a valid institutional email address.</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold border-b pb-2 text-neutral-800">Error State</h2>
        <div className="max-w-md p-8 border rounded-xl space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="error-input" className="font-bold text-destructive">User Name</Label>
            <Input id="error-input" className="border-destructive ring-destructive/20 focus-visible:ring-destructive/50" />
            <p className="text-xs text-destructive font-semibold">User name is already taken.</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold border-b pb-2 text-neutral-800">Password State</h2>
        <div className="max-w-md p-8 border rounded-xl space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="password-input" className="font-bold text-neutral-700">Password</Label>
            <Input type="password" id="password-input" value="12345678" readOnly />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 text-neutral-800">Implementation</h2>
        <pre className="p-6 rounded-lg bg-neutral-900 text-neutral-100 overflow-x-auto text-sm">
          {`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}`}
        </pre>

        <details className="group border rounded-lg [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 font-medium cursor-pointer bg-neutral-50 hover:bg-neutral-100 transition-colors">
            <span>Component Implementation</span>
            <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90 text-neutral-500" />
          </summary>
          <div className="p-4 border-t bg-neutral-900 rounded-b-lg">
            <pre className="text-neutral-100 overflow-x-auto text-sm">
              {`import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props} />
  );
}

export { Input }`}
            </pre>
          </div>
        </details>
      </section>
    </div>
  );
}
