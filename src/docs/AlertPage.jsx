import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import {
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
  Terminal,
  ChevronRight
} from 'lucide-react';

export function AlertPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight text-neutral-800">Alert</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Contextual feedback messages for user actions and system status updates.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold border-b pb-2 text-neutral-800">Variants</h2>
        <div className="space-y-6 max-w-3xl p-8 border rounded-xl bg-neutral-50/50">
          <Alert variant="default" className="bg-white border-neutral-200">
            <Info className="h-4 w-4 text-info" />
            <AlertTitle className="text-neutral-900 font-bold">Heads up!</AlertTitle>
            <AlertDescription className="text-neutral-500">
              This system will be under maintenance on Sunday at 10:00 PM.
            </AlertDescription>
          </Alert>

          <Alert variant="default" className="bg-success/5 border-success text-success">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle className="font-bold">Success</AlertTitle>
            <AlertDescription className="opacity-80">
              Student profile has been updated successfully.
            </AlertDescription>
          </Alert>

          <Alert variant="default" className="bg-warning/5 border-warning text-warning-700">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <AlertTitle className="font-bold">Warning</AlertTitle>
            <AlertDescription className="opacity-80">
              Missing mandatory contact information for this profile.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle className="font-bold">Error</AlertTitle>
            <AlertDescription>
              Failed to connect to the central module database.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 text-neutral-800">Implementation</h2>
        <pre className="p-6 rounded-lg bg-neutral-900 text-neutral-100 overflow-x-auto text-sm">
          {`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export function AlertDemo() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
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
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props} />
  );
}

function AlertTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="alert-title"
      className={cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className)}
      {...props} />
  );
}

function AlertDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props} />
  );
}

export { Alert, AlertTitle, AlertDescription }`}
            </pre>
          </div>
        </details>
      </section>
    </div>
  );
}
