import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Palette,
  Layers,
  Code,
  Square,
  Type,
  Table2,
  Layout as LayoutIcon,
  AlertCircle,
  MousePointer2,
  Inbox,
  X,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Introduction", icon: Home, href: "/" },
  { title: "Colors", icon: Palette, href: "/colors" },
  { title: "Gradients", icon: Layers, href: "/gradients" },
  { title: "Tokens", icon: Code, href: "/tokens" },
  {
    title: "Components",
    items: [
      { title: "Button", icon: MousePointer2, href: "/components/button" },
      { title: "Input", icon: Type, href: "/components/input" },
      { title: "Alert", icon: AlertCircle, href: "/components/alert" },
      { title: "Card", icon: Inbox, href: "/components/card" },
    ],
  },
  { title: "Data Grid", icon: Table2, href: "/data-grid" },
  { title: "Layout", icon: LayoutIcon, href: "/layout" },
];

export function Sidebar({ onClose }) {
  return (
    <div className="w-64 border-r bg-white h-[100dvh] lg:h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-primary flex items-center gap-2">
            Green School
          </h1>
          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">
            Design System
          </p>
        </div>
        {onClose && (
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        )}
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-6">
          {navItems.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.items ? (
                <>
                  <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {item.title}
                  </h3>
                  {item.items.map((subItem) => (
                    <SidebarLink key={subItem.href} item={subItem} onClick={onClose} />
                  ))}
                </>
              ) : (
                <SidebarLink item={item} onClick={onClose} />
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t bg-neutral-50">
        <div className="text-[10px] text-muted-foreground text-center">
          v1.0.0 (Minimal Foundation)
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item, onClick }) {
  const Icon = item.icon;
  return (
    <NavLink
      to={item.href}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
          isActive
            ? "bg-primary text-white"
            : "text-neutral-900 hover:bg-neutral-100",
        )
      }
    >
      <Icon className="w-4 h-4" />
      {item.title}
    </NavLink>
  );
}
