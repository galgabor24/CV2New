import React, { useState, useEffect } from 'react';
import { ExternalLink, Loader2, AlertCircle } from 'lucide-react';

interface LinkMetadata {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface LinkPreviewProps {
  url: string;
  onError?: (error: Error) => void;
}

export default function LinkPreview({ url, onError }: LinkPreviewProps) {
  const [metadata, setMetadata] = useState<LinkMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/metadata?url=${encodeURIComponent(url)}`);
        if (!response.ok) throw new Error('Failed to fetch metadata');
        
        const data = await response.json();
        setMetadata(data);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error occurred');
        setError(error);
        if (onError) onError(error);
      } finally {
        setLoading(false);
      }
    };

    if (url) fetchMetadata();
  }, [url, onError]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-6 border border-cyan-900/30 rounded-lg bg-slate-900/80 backdrop-blur-sm">
        <Loader2 className="w-6 h-6 text-cyan-400 animate-spin" />
        <span className="ml-2 text-gray-400">Loading preview...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center p-4 border border-red-900/30 rounded-lg bg-slate-900/80 backdrop-blur-sm">
        <AlertCircle className="w-5 h-5 text-red-400" />
        <span className="ml-2 text-gray-400">Failed to load preview</span>
      </div>
    );
  }

  if (!metadata) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="border border-cyan-900/30 rounded-lg bg-slate-900/80 backdrop-blur-sm overflow-hidden hover:border-cyan-500/50 transition-colors">
        {metadata.image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={metadata.image}
              alt={metadata.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </div>
        )}
        
        <div className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg text-cyan-400 mb-2 line-clamp-2">
                {metadata.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {metadata.description}
              </p>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
          </div>
          
          <div className="mt-3 flex items-center text-xs text-gray-500">
            <span className="truncate">{new URL(url).hostname}</span>
          </div>
        </div>
      </div>
    </a>
  );
}