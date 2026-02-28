import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function CardPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight text-neutral-800">Card</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Content containers used to group related information and actions into organized units.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold border-b pb-2 text-neutral-800">Standard Card</h2>
        <div className="max-w-md p-8 border rounded-xl bg-neutral-50/50">
          <Card className="shadow-sm border-neutral-200">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold text-neutral-900">Module Configuration</CardTitle>
                <Badge variant="outline" className="text-primary border-primary/30">Active</Badge>
              </div>
              <CardDescription className="text-neutral-500">
                Manage basic settings for the Attendance Module.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-neutral-600 space-y-2">
              <p>Configure automated reminders, attendance thresholds, and notification templates.</p>
              <div className="p-3 bg-neutral-50 rounded border text-xs font-mono">
                module_id: AM-2026-X1
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <Button variant="ghost" className="text-neutral-500">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold border-b pb-2 text-neutral-800">Implementation</h2>
        <pre className="p-6 rounded-lg bg-neutral-900 text-neutral-100 overflow-x-auto text-sm">
{`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}`}
        </pre>
      </section>
    </div>
  );
}
