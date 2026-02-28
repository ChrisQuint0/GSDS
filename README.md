# GSDS Minimum Viable Design System

## Overview

This project implements a controlled color and component standard. The goal is a minimal enforceable foundation that ensures visual consistency across modules.

**Stack:** Vite, React, Tailwind CSS, shadcn/ui, AG Grid

**Deliverable:** A documentation site with live component previews, copyable code, and usage guidelines.

## Objectives

- Eliminate inconsistent color usage
- Define a small, enforced token system mapped to Tailwind
- Deliver production-ready core components
- Provide a documentation site developers can reference and copy from immediately

## Usage

This project is a React application powered by Vite. To get started locally:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Design System Guidelines

### Token System

All components use design tokens mapped directly to the Tailwind theme (`index.css`). 
**Direct Tailwind color classes (e.g., `bg-green-600`, `text-gray-500`) are prohibited.** All styles must reference semantic tokens only.

**Color tokens defined:**
- **Primary**: `primary-500`, `primary-600`, `primary-700`
- **Neutral**: `neutral-50`, `neutral-100`, `neutral-200`, `neutral-500`, `neutral-900`
- **Semantic**: `success`, `warning`, `destructive`, `info`
- **Additional**: `border-default`, `border-radius-base`, `bg-card`, `text-muted`

### Core Components Included

- **Button** — variants: `primary`, `secondary`, `outline`, `destructive`
- **Input** — states: `default`, `error`
- **Alert** — variants: `success`, `error`, `warning`, `info`
- **Card** — variants: `standard`, `with header`
- **DataTable Wrapper** (AG Grid)
- **Sidebar Layout Component**

### Color Usage Rules

The institutional palette follows a strict usage ratio to maintain a professional academic appearance:
- **60%** neutral backgrounds (`neutral-50`, `neutral-100`)
- **30%** white card surfaces
- **10%** school green (primary tokens)

Green appears **only** in primary buttons, active sidebar items, focus rings, selected row highlights, and status badges. Green must **never** appear in body text, paragraph content, or large background areas.
