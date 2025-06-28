import { useState } from 'react';
import toolsData from './data/tools.json';
import ToolCard from './components/ToolCard';
import type { Tool } from './types/Tool';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tools: Tool[] = toolsData;

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag ? tool.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-50">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Dev Tools</h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search tools..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        {/* Tag Filter */}
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {[...new Set(tools.flatMap((t) => t.tags))].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1 rounded-full border ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Tool Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
