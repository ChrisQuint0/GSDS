import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ButtonPage } from "./docs/ButtonPage";
import { InputPage } from "./docs/InputPage";
import { AlertPage } from "./docs/AlertPage";
import { CardPage } from "./docs/CardPage";
import { DataGridPage } from "./docs/DataGridPage";
import { LayoutPage } from "./docs/LayoutPage";
import { GradientPage } from "./docs/GradientPage";
import { TokensPage } from "./docs/TokensPage";
import {
  GraduationCap,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Info,
  Star,
  Settings,
  Layers,
  Code,
} from "lucide-react";

const Home = () => (
  <div className="space-y-6">
    <h1 className="text-4xl font-bold text-neutral-900 tracking-tight">
      Green School Design System
    </h1>
    <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">
      A minimal, enforceable foundation for visual consistency.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <section className="p-8 border rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border-neutral-100 group">
        <h3 className="font-bold text-2xl text-primary mb-3 flex items-center gap-2">
          Design Tokens
          <div className="w-2 h-2 rounded-full bg-success"></div>
        </h3>
        <p className="text-neutral-600 leading-relaxed">
          The core color palette and spacing rules that drive the entire system.
          Managed via CSS Custom Properties and Tailwind CSS v4.
        </p>
        <div className="mt-6 flex gap-2">
          <div className="w-8 h-8 rounded bg-primary-500"></div>
          <div className="w-8 h-8 rounded bg-primary-600"></div>
          <div className="w-8 h-8 rounded bg-primary-700"></div>
          <div className="w-8 h-8 rounded bg-neutral-100"></div>
          <div className="w-8 h-8 rounded bg-neutral-200"></div>
        </div>
      </section>

      <section className="p-8 border rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border-neutral-100 group">
        <h3 className="font-bold text-2xl text-primary mb-3">
          Core Components
        </h3>
        <p className="text-neutral-600 leading-relaxed">
          Six production-ready components built using semantic tokens
          exclusively. Designed for institutional weight and academic clarity.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-y-2 text-sm font-medium text-neutral-500">
          <li className="flex items-center gap-2">✓ Buttons</li>
          <li className="flex items-center gap-2">✓ Inputs</li>
          <li className="flex items-center gap-2">✓ Alerts</li>
          <li className="flex items-center gap-2">✓ Cards</li>
          <li className="flex items-center gap-2">✓ Data Grid</li>
          <li className="flex items-center gap-2">✓ Sidebar</li>
        </ul>
      </section>
    </div>

    <section className="mt-16 p-10 bg-gradient-primary rounded-3xl text-white relative overflow-hidden shadow-xl">
      <div className="relative z-10 max-w-lg">
        <h2 className="text-3xl font-bold mb-4 italic">
          "Institutional Integrity by Design"
        </h2>
        <p className="opacity-80 text-lg">
          Ensuring that every developer produces a unified interface without
          making a single color or spacing decision themselves.
        </p>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
    </section>
  </div>
);

const IconCard = ({ icon: Icon, title, color, usage }) => (
  <div className="p-4 border rounded-xl bg-neutral-50 flex flex-col items-center text-center space-y-3">
    <div className="p-3 bg-white rounded-full shadow-sm">
      <Icon className={`w-5 h-5 ${color}`} />
    </div>
    <div>
      <h4 className="font-bold text-neutral-900 text-[13px]">{title}</h4>
      <p className="text-[10px] text-neutral-500 mt-1 leading-tight">{usage}</p>
    </div>
  </div>
);

const Colors = () => (
  <div className="space-y-12">
    <header className="space-y-4">
      <h1 className="text-4xl font-bold text-neutral-900 tracking-tight">
        Colors & Tokens
      </h1>
      <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
        The institutional palette follows a strict usage ratio to maintain a
        professional academic appearance.
      </p>
    </header>

    <div className="grid grid-cols-1 gap-12">
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-neutral-800">
            Primary (Green School Green)
          </h2>
          <span className="bg-primary/10 text-primary text-[10px] uppercase font-black px-2 py-1 rounded tracking-widest">
            Core
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ColorCard
            name="Green School Green 500"
            variable="--primary-500"
            value="#008A45"
            usage="Interactive states, focus rings, primary brand"
          />
          <ColorCard
            name="Green 600"
            variable="--primary-600"
            value="#006B35"
            usage="Main actions, active navigation"
          />
          <ColorCard
            name="Green 700"
            variable="--primary-700"
            value="#004D26"
            usage="Deep emphasis, hover states"
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-neutral-800">
            Secondary (Green School Gold)
          </h2>
          <span className="bg-gold-500/10 text-gold-600 text-[10px] uppercase font-black px-2 py-1 rounded tracking-widest">
            Accent
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ColorCard
            name="Gold 400"
            variable="--gold-400"
            value="#FFD700"
            usage="Subtle highlights"
          />
          <ColorCard
            name="Green School Gold 500"
            variable="--gold-500"
            value="#FFCE00"
            usage="Official accent, badges"
          />
          <ColorCard
            name="Gold 600"
            variable="--gold-600"
            value="#E6B800"
            usage="Emphasis on light backgrounds"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-3">
          Neutral Palette
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <ColorCard
            name="Neutral 50"
            variable="--neutral-50"
            value="#f9fafb"
            usage="Backgrounds"
          />
          <ColorCard
            name="Neutral 100"
            variable="--neutral-100"
            value="#f3f4f6"
            usage="Secondary UI surfaces"
          />
          <ColorCard
            name="Neutral 200"
            variable="--neutral-200"
            value="#e5e7eb"
            usage="Borders, dividers"
          />
          <ColorCard
            name="Neutral 500"
            variable="--neutral-500"
            value="#6b7280"
            usage="Muted text"
          />
          <ColorCard
            name="Neutral 900"
            variable="--neutral-900"
            value="#111827"
            usage="Body text, headings"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-800 border-b pb-3">
          Semantic Feedback
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <ColorCard
            name="Success"
            variable="--success"
            value="#10b981"
            usage="Validation, completed states"
          />
          <ColorCard
            name="Warning"
            variable="--warning"
            value="#f59e0b"
            usage="Cautions, attention required"
          />
          <ColorCard
            name="Destructive"
            variable="--destructive-semantic"
            value="#ef4444"
            usage="Errors, high-risk actions"
          />
          <ColorCard
            name="Info"
            variable="--info"
            value="#3b82f6"
            usage="Announcements, help text"
          />
        </div>
      </section>
    </div>

    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-neutral-800 border-b pb-3">
        Iconography
      </h2>
      <p className="text-neutral-500 max-w-2xl">
        Icons should be colored intentionally to convey meaning or hierarchy.
        Use the provided semantic tokens to ensure harmony with the Green School
        brand.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <IconCard
          icon={GraduationCap}
          title="Primary Brand"
          color="text-primary-600"
          usage="Main navigation, active module"
        />
        <IconCard
          icon={Clock}
          title="Neutral"
          color="text-neutral-500"
          usage="Secondary metadata, timestamps"
        />
        <IconCard
          icon={CheckCircle2}
          title="Success"
          color="text-success"
          usage="Completed tasks, validations"
        />
        <IconCard
          icon={AlertTriangle}
          title="Warning"
          color="text-warning"
          usage="Cautions, attention items"
        />
        <IconCard
          icon={Info}
          title="Info"
          color="text-info"
          usage="Help text, announcements"
        />
        <IconCard
          icon={Star}
          title="Accent"
          color="text-gold-500"
          usage="Highlighted content, awards"
        />
      </div>
    </section>

    <section className="mt-12 p-8 border rounded-2xl bg-neutral-50 border-neutral-200 border-dashed">
      <h3 className="font-bold text-neutral-700 mb-2">Usage Rule</h3>
      <p className="text-sm text-neutral-500 max-w-xl">
        Direct Tailwind color classes (e.g., <code>bg-green-600</code>) are
        strictly prohibited. Always use semantic tokens or the primary mapping
        variables.
      </p>
    </section>
  </div>
);

const ColorCard = ({ name, variable, value, usage }) => (
  <div className="group space-y-3">
    <div
      className="h-32 rounded-2xl border shadow-sm transition-transform group-hover:scale-[1.02] duration-200"
      style={{ backgroundColor: `var(${variable})` }}
    ></div>
    <div className="space-y-1">
      <p className="text-sm font-bold text-neutral-900">{name}</p>
      <div className="flex items-center gap-2">
        <code className="text-[10px] text-muted-foreground block py-0.5 px-1.5 bg-neutral-100 w-fit rounded">
          {variable}
        </code>
        <span className="text-[10px] font-mono text-neutral-400">{value}</span>
      </div>
      {usage && (
        <p className="text-[11px] text-neutral-500 italic mt-1 leading-tight">
          {usage}
        </p>
      )}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/gradients" element={<GradientPage />} />
          <Route path="/tokens" element={<TokensPage />} />
          <Route path="/components/button" element={<ButtonPage />} />
          <Route path="/components/input" element={<InputPage />} />
          <Route path="/components/alert" element={<AlertPage />} />
          <Route path="/components/card" element={<CardPage />} />
          <Route path="/data-grid" element={<DataGridPage />} />
          <Route path="/layout" element={<LayoutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
