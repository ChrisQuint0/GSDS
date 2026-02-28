import React, { useMemo } from 'react';
import { DataTable } from '@/components/DataTable';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

export function DataGridPage() {
  const columnDefs = useMemo(() => [
    { field: 'id', headerName: 'ID', width: 80, flex: 0 },
    { field: 'studentName', headerName: 'Student Name', minWidth: 200 },
    { field: 'grade', headerName: 'Grade' },
    { field: 'module', headerName: 'Module' },
    {
      field: 'status', headerName: 'Status', cellRenderer: (params) => {
        const color = params.value === 'Active' ? 'text-success' : 'text-neutral-400';
        return <span className={`font-bold ${color}`}>{params.value}</span>;
      }
    },
    { field: 'enrollmentDate', headerName: 'Enrollment' }
  ], []);

  const rowData = useMemo(() => [
    { id: 1, studentName: 'Alice Johnson', grade: 'Year 10', module: 'Mathematics', status: 'Active', enrollmentDate: '2025-09-01' },
    { id: 2, studentName: 'Bob Smith', grade: 'Year 11', module: 'Physics', status: 'Active', enrollmentDate: '2025-08-15' },
    { id: 3, studentName: 'Charlie Brown', grade: 'Year 9', module: 'History', status: 'Inactive', enrollmentDate: '2024-11-20' },
    { id: 4, studentName: 'Diana Prince', grade: 'Year 12', module: 'Chemistry', status: 'Active', enrollmentDate: '2025-01-10' },
    { id: 5, studentName: 'Edward Norton', grade: 'Year 10', module: 'Biology', status: 'Active', enrollmentDate: '2025-03-05' },
  ], []);

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight">DataTable</h1>
        <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
          A thin wrapper around AG Grid Community that applies institutional styling to the grid surface.
        </p>
      </header>

      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b pb-2">
          <h2 className="text-2xl font-semibold">Live Preview</h2>
          <span className="text-xs bg-primary text-white px-2 py-0.5 rounded font-black uppercase tracking-tighter">Production Ready</span>
        </div>
        <div className="p-8 border rounded-2xl bg-neutral-50/30">
          <DataTable
            rowData={rowData}
            columnDefs={columnDefs}
            className="h-[400px]"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-neutral-800 border-b pb-2">Styling Targets</h2>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li className="flex items-start gap-2 italic">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 shrink-0"></span>
              Column header background and typography with high contrast for academic clarity.
            </li>
            <li className="flex items-start gap-2 italic">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 shrink-0"></span>
              Row hover state using neutral-100 token for subtle visual feedback.
            </li>
            <li className="flex items-start gap-2 italic">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 shrink-0"></span>
              Selected row highlight using the primary color at low opacity (10%).
            </li>
            <li className="flex items-start gap-2 italic">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 shrink-0"></span>
              Pagination and navigation styling consistency.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-neutral-800 border-b pb-2">Institutional Rule</h2>
          <div className="p-6 bg-primary-50/50 border border-primary-500/20 rounded-xl">
            <p className="text-sm text-primary-700 leading-relaxed italic">
              "Do not override the core grid CSS variables directly in individual modules.
              Always use the GSDS DataTable component to ensure visual consistency across all data modules."
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-neutral-800 border-b pb-2">Code Example</h2>
        <pre className="p-6 rounded-lg bg-neutral-900 text-neutral-100 overflow-x-auto text-sm">
          {`import { DataTable } from "@/components/DataTable"

const columnDefs = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name' },
  { field: 'status', headerName: 'Status' }
]

const rowData = [
  { id: 1, name: 'Alice', status: 'Active' },
  { id: 2, name: 'Bob', status: 'Inactive' }
]

export function GridDemo() {
  return (
    <DataTable 
      rowData={rowData} 
      columnDefs={columnDefs} 
    />
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
              {`import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, themeQuartz } from 'ag-grid-community';
import { cn } from '@/lib/utils';

// Register all Community modules
ModuleRegistry.registerModules([AllCommunityModule]);

/**
 * GSDS DataTable Wrapper
 * Applies institutional styling to AG Grid using the v33+ Theming API
 */
export function DataTable({ 
  rowData, 
  columnDefs, 
  className,
  ...props 
}) {
  const defaultColDef = useMemo(() => ({
    flex: 1,
    minWidth: 100,
    filter: true,
    sortable: true,
    resizable: true,
  }), []);

  // Use the Theming API to customize the grid
  const greenSchoolTheme = themeQuartz.withParams({
    backgroundColor: 'var(--neutral-50)',
    headerBackgroundColor: 'var(--neutral-100)',
    headerTextColor: 'var(--neutral-900)',
    dataColor: 'var(--neutral-900)',
    oddRowBackgroundColor: 'var(--bg-card)',
    rowHoverColor: 'var(--neutral-100)',
    selectedRowBackgroundColor: 'color-mix(in srgb, var(--primary-500) 10%, transparent)',
    borderColor: 'var(--neutral-200)',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '14px',
    headerFontWeight: '700',
    gridSize: 8,
  });

  return (
    <div 
      className={cn(
        "gsds-grid-wrapper w-full h-[400px] border rounded-lg overflow-hidden shadow-sm",
        className
      )}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        pagination={true}
        paginationPageSize={10}
        theme={greenSchoolTheme}
        {...props}
      />
      
      <style>{\`
        .gsds-grid-wrapper .ag-header-cell-label {
          text-transform: uppercase;
          letter-spacing: 0.025em;
          font-size: 11px;
          color: var(--neutral-500);
        }

        .gsds-grid-wrapper .ag-row {
          transition: background-color 0.1s ease;
        }

        .gsds-grid-wrapper .ag-cell {
          display: flex;
          align-items: center;
        }
      \`}</style>
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
