'use client';

import { useEffect, useState } from 'react';
import { fetcher } from '@/lib/fetcher';
import { logger } from '@/lib/logger';

interface TodoPreviewProps {
  heading: string;
  description: string;
  loadingLabel: string;
  errorLabel: string;
  completedLabel: string;
  inProgressLabel: string;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export function TodoPreview({
  heading,
  description,
  loadingLabel,
  errorLabel,
  completedLabel,
  inProgressLabel,
}: TodoPreviewProps) {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetcher<Todo>('/api/todos/1');
        logger.info('Fetched todo demo payload:', response);
        if (isMounted) {
          setTodo(response);
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        if (isMounted) {
          setError(message);
        }
        logger.error('Unable to load todo demo:', message);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="demo"
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-8 shadow-lg"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-2 text-center">
        <h2 className="text-2xl font-semibold text-white">{heading}</h2>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
      <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 px-6 py-5 text-left">
        {error ? (
          <p className="text-sm text-red-400">{errorLabel}</p>
        ) : todo ? (
          <div className="space-y-2 text-sm text-slate-200">
            <p className="font-semibold text-white">#{todo.id}</p>
            <p className="text-base font-medium">{todo.title}</p>
            <span
              className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${
                todo.completed
                  ? 'bg-emerald-500/20 text-emerald-300'
                  : 'bg-amber-500/20 text-amber-200'
              }`}
            >
              {todo.completed ? completedLabel : inProgressLabel}
            </span>
          </div>
        ) : (
          <p className="text-sm text-slate-400">{loadingLabel}</p>
        )}
      </div>
    </section>
  );
}
