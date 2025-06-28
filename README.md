# Dev Tools Catalog

A React-based web app showcasing a curated list of developer tools.  
Built with React, Tailwind CSS, and React Router, featuring search, tag filtering, dark mode, and detailed tool pages.

---

## Features

- Browse a collection of developer tools with name, description, category, tags, and links.  
- Search tools by name or description.  
- Filter tools by tags.  
- Click on any tool card to see detailed info on a dedicated page.  
- Responsive design with a modern Tailwind CSS color palette.  
- Dark mode support with smooth theme transitions.  

---

## Technologies Used

- React (with functional components and hooks)  
- React Router v6 for client-side routing  
- Tailwind CSS for styling and theming  
- TypeScript for static typing  
- Vite / Create React App (specify your setup) for bundling and dev server  

---

## Getting Started

### Prerequisites

- Node.js (v16 or newer recommended)  
- npm or yarn package manager  

### Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/yourusername/dev-tools-catalog.git
   cd dev-tools-catalog
   ```

2. Install dependencies  
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the app locally  
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open http://localhost:3000 (or specified port) in your browser.

---

## Project Structure

```
/src
  /components
    ToolCard.tsx        # Card component for displaying tool summary
  /pages
    ToolsList.tsx       # Main page with search, filter, and listing
    ToolDetail.tsx      # Detailed page for each tool
  /data
    tools.json          # JSON file containing tool data
  /types
    Tool.ts             # TypeScript interface for tool data
App.tsx                # Router and main app setup
tailwind.config.js     # Tailwind CSS configuration and color theme
```

---

## Customization

- Update `tools.json` to add or modify tools.  
- Adjust Tailwind colors in `tailwind.config.js` for theming.  
- Extend functionality by adding dark mode toggle or sorting.

---