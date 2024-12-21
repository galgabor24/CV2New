import React, { useState } from 'react';
import LinkPreview from './LinkPreview';

export default function Demo() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // URL validation could be added here
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-400 mb-2">
            Enter URL
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full px-4 py-2 bg-slate-800/50 border border-cyan-900/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-gray-100 placeholder-gray-500"
            required
          />
        </div>
      </form>

      {url && <LinkPreview url={url} />}
    </div>
  );
}