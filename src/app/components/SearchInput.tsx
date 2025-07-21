// src/app/components/SearchInput.tsx
"use client";

import { useCallback } from "react";
import debounce from "lodash.debounce";

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
  const debounced = useCallback(
    debounce((val: string) => onSearch(val), 500),
    []
  );

  return (
    <input
      type="text"
      placeholder="Search for a movie..."
      onChange={(e) => debounced(e.target.value)}
      className="w-full sm:w-3/4 lg:w-2/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
    />
  );
}
