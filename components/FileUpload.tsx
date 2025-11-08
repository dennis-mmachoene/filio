'use client';

import { useState, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { UploadProgress } from '@/lib/types';

interface FileUploadProps {
  onUploadComplete: () => void;
}

export default function FileUpload({ onUploadComplete }: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<UploadProgress[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    const filesArray = Array.from(files);
    
    // Initialize progress for all files
    setUploadProgress(
      filesArray.map((file) => ({
        fileName: file.name,
        progress: 0,
        status: 'uploading',
      }))
    );

    // Upload files sequentially
    for (let i = 0; i < filesArray.length; i++) {
      const file = filesArray[i];
      await uploadFile(file, i);
    }

    setUploading(false);
    onUploadComplete();
    
    // Clear file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }

    // Clear progress after 3 seconds
    setTimeout(() => {
      setUploadProgress([]);
    }, 3000);
  };

  const uploadFile = async (file: File, index: number) => {
    try {
      // Generate unique filename to avoid collisions
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error } = await supabase.storage
        .from('uploads')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) {
        setUploadProgress((prev) =>
          prev.map((p, i) =>
            i === index
              ? { ...p, status: 'error', error: error.message }
              : p
          )
        );
      } else {
        setUploadProgress((prev) =>
          prev.map((p, i) =>
            i === index ? { ...p, progress: 100, status: 'success' } : p
          )
        );
      }
    } catch (error) {
      setUploadProgress((prev) =>
        prev.map((p, i) =>
          i === index
            ? { ...p, status: 'error', error: 'Upload failed' }
            : p
        )
      );
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-center w-full">
        <label className="group relative flex flex-col items-center justify-center w-full h-72 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-3xl cursor-pointer bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-transparent to-purple-50/40 dark:from-indigo-950/20 dark:via-transparent dark:to-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 dark:via-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative flex flex-col items-center justify-center px-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 mb-6 shadow-lg shadow-indigo-100/50 dark:shadow-indigo-900/30 group-hover:shadow-xl group-hover:shadow-indigo-200/50 dark:group-hover:shadow-indigo-800/50 transition-all duration-500 group-hover:scale-110">
              <svg
                className="w-10 h-10 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <p className="mb-2 text-base text-slate-700 dark:text-slate-300">
              <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Click to upload</span>
              <span className="text-slate-600 dark:text-slate-400"> or drag and drop</span>
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Any file type supported</p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileSelect}
            disabled={uploading}
            className="hidden"
          />
        </label>
      </div>

      {uploadProgress.length > 0 && (
        <div className="space-y-3">
          {uploadProgress.map((progress, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 shadow-sm transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-transparent to-purple-50/30 dark:from-indigo-950/20 dark:via-transparent dark:to-purple-950/20 opacity-50"></div>
              
              <div className="relative p-4">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-200/50 dark:shadow-indigo-900/30">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                      {progress.fileName}
                    </span>
                  </div>
                  {progress.status === 'success' && (
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-200/50 dark:shadow-emerald-900/30">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                  {progress.status === 'error' && (
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center shadow-md shadow-rose-200/50 dark:shadow-rose-900/30">
                      <svg
                        className="h-5 w-5 text-white"
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
                  )}
                </div>
                {progress.status === 'uploading' && (
                  <div className="relative w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                  </div>
                )}
                {progress.status === 'error' && (
                  <div className="mt-2 px-3 py-2 bg-rose-50 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-800/60 rounded-xl">
                    <p className="text-xs font-medium text-rose-600 dark:text-rose-400">{progress.error}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}