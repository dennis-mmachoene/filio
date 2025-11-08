'use client';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultsCount: number;
  totalCount: number;
}

export default function SearchBar({
  searchQuery,
  onSearchChange,
  resultsCount,
  totalCount,
}: SearchBarProps) {
  return (
    <div className="space-y-3">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 flex items-center justify-center group-focus-within:shadow-md group-focus-within:shadow-indigo-200/50 dark:group-focus-within:shadow-indigo-900/30 transition-shadow duration-300">
              <svg
                className="h-5 w-5 text-indigo-600 dark:text-indigo-400 group-focus-within:text-indigo-700 dark:group-focus-within:text-indigo-300 transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search files by name..."
            className="block w-full pl-16 pr-14 py-4 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl bg-white dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 text-slate-800 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-500/30 focus:border-indigo-400 dark:focus:border-indigo-500 transition-all duration-300 text-base font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center group/clear"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-gradient-to-br hover:from-rose-500 hover:to-red-600 flex items-center justify-center transition-all duration-300 hover:shadow-md hover:shadow-rose-200/50 dark:hover:shadow-rose-900/30">
                <svg
                  className="h-5 w-5 text-slate-400 dark:text-slate-500 group-hover/clear:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
      {searchQuery && (
        <div className="flex items-center gap-2 px-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border border-indigo-200/60 dark:border-indigo-700/60 rounded-xl">
            <svg
              className="h-4 w-4 text-indigo-600 dark:text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Showing <span className="text-indigo-600 dark:text-indigo-400">{resultsCount}</span> of <span className="text-slate-600 dark:text-slate-400">{totalCount}</span> files
            </p>
          </div>
        </div>
      )}
    </div>
  );
}