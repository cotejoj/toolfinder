import React from 'react';
import ToolCard from './components/ToolCard';
import toolsData from './data/tools.json';
import type { Tool } from './types/Tool';


const tools: Tool[] = toolsData;

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">ToolFinder</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default App;
