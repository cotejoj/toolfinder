import { useParams, Link, useNavigate } from 'react-router-dom';
import toolsData from '../data/tools.json';
import type { Tool } from '../types/Tool';

export default function ToolDetail() {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  // Decode in case of encoded URI
  const decodedName = name ? decodeURIComponent(name) : '';

  const tool = toolsData.find((t) => t.name === decodedName);

  if (!tool) {
    return (
      <main className="p-6 max-w-5xl mx-auto min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 underline"
        >
          Go Back
        </button>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-5xl mx-auto min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">
        ← Back to Tools
      </Link>

      <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
      <p className="mb-2">{tool.description}</p>
      <p className="mb-2">
        <strong>Category:</strong> {tool.category}
      </p>
      <p className="mb-4">
        <strong>Tags:</strong>{' '}
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block mr-2 px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded"
          >
            #{tag}
          </span>
        ))}
      </p>

      <a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-700 underline"
      >
        Visit website
      </a>
    </main>
  );
}
