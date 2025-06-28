import React from 'react';
import type { Tool } from '../types/Tool';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800">{tool.name}</h2>
      <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
      <span className="inline-block text-xs bg-gray-200 px-2 py-1 rounded-full mb-2">
        {tool.category}
      </span>
      <div className="flex flex-wrap gap-2 text-xs">
        {tool.tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
      <a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-blue-600 font-medium hover:underline"
      >
        Visit Site →
      </a>
    </div>
  );
};

export default ToolCard;
