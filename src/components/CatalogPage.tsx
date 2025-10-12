"use client";

import type { CatalogFilters as FiltersType } from "@/app/api/catalog/route";
import { useDebounce } from "@/hooks/useDebounce";
import type { DataCatalogItem } from "@/lib/data/catalog";
import { useCallback, useEffect, useState } from "react";
import { CardSkeleton } from "./CardSkeleton";
import { CatalogFilters } from "./CatalogFilters";
import { DataCard } from "./DataCard";
import { SearchBar } from "./SearchBar";
import { SelectedFilters } from "./SelectedFilters";
import { SortDropdown } from "./SortDropdown";

interface CatalogResponse {
  data: DataCatalogItem[];
  total: number;
  filters: {
    themes: string[];
    regions: string[];
    accessMethods: string[];
  };
}

export function CatalogPage() {
  const [data, setData] = useState<DataCatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const [filters, setFilters] = useState<FiltersType>({
    sortBy: "newest",
  });
  const [filterOptions, setFilterOptions] = useState<{
    themes: string[];
    regions: string[];
    accessMethods: string[];
  }>({
    themes: [],
    regions: [],
    accessMethods: [],
  });

  const fetchData = useCallback(
    async (currentFilters: FiltersType, isInitialLoad = false) => {
      if (!isInitialLoad) {
        setLoading(true);
      }

      try {
        const params = new URLSearchParams();

        if (currentFilters.search)
          params.append("search", currentFilters.search);
        if (currentFilters.theme) params.append("theme", currentFilters.theme);
        if (currentFilters.region)
          params.append("region", currentFilters.region);
        if (currentFilters.accessMethod)
          params.append("accessMethod", currentFilters.accessMethod);
        if (currentFilters.sortBy)
          params.append("sortBy", currentFilters.sortBy);

        const response = await fetch(`/api/catalog?${params.toString()}`);
        const result: CatalogResponse = await response.json();

        setData(result.data);

        // Only set filter options on initial load
        if (isInitialLoad) {
          setFilterOptions(result.filters);
        }
      } catch (error) {
        console.error("Error fetching catalog data:", error);
      } finally {
        setLoading(false);
        if (isInitialLoad) {
          setInitialLoading(false);
        }
      }
    },
    [],
  );

  useEffect(() => {
    fetchData(filters, initialLoading);
  }, [filters, fetchData, initialLoading]);

  // Debounced search
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Update filters when debounced search term changes
  useEffect(() => {
    setFilters((prev: FiltersType) => ({
      ...prev,
      search: debouncedSearchTerm,
    }));
  }, [debouncedSearchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFiltersChange = (newFilters: FiltersType) => {
    setFilters((prev: FiltersType) => ({ ...prev, ...newFilters }));
  };

  const handleRemoveFilter = (filterType: keyof FiltersType) => {
    setFilters((prev: FiltersType) => ({ ...prev, [filterType]: undefined }));
  };

  const handleClearAllFilters = () => {
    setFilters({ sortBy: "newest" });
  };

  const handleSortChange = (sortBy: "newest" | "oldest") => {
    setFilters((prev: FiltersType) => ({ ...prev, sortBy }));
  };

  // Show initial loading skeleton
  if (initialLoading) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left sidebar skeleton */}
            <div className="lg:col-span-1">
              {/* Search bar skeleton */}
              <div className="mb-6">
                <div className="h-10 bg-background-2 rounded animate-pulse"></div>
              </div>

              {/* Filters skeleton */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-12 animate-pulse"></div>
                </div>

                {/* Filter groups skeleton */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="mb-6">
                    <div className="h-4 bg-gray-200 rounded w-20 mb-3 animate-pulse"></div>
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map((j) => (
                        <div key={j} className="flex items-center space-x-2">
                          <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right content skeleton */}
            <div className="lg:col-span-3">
              {/* Top bar skeleton */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
                </div>
                <div className="h-9 bg-gray-200 rounded w-32 animate-pulse"></div>
              </div>

              {/* Cards grid skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <CardSkeleton key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            {/* Search Bar */}
            <div className="mb-6">
              <SearchBar onSearch={handleSearch} />
            </div>

            {/* Filters */}
            <CatalogFilters
              onFiltersChange={handleFiltersChange}
              initialFilters={filters}
              filterOptions={filterOptions}
            />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-3">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-6">
              <SelectedFilters
                filters={filters}
                onRemoveFilter={handleRemoveFilter}
                onClearAll={handleClearAllFilters}
              />
              <div className="ml-auto">
                <SortDropdown
                  onSortChange={handleSortChange}
                  currentSort={filters.sortBy || "newest"}
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-600">
                {data.length} resultado{data.length !== 1 ? "s" : ""} encontrado
                {data.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Data Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {loading
                ? // Show skeleton cards when loading
                  [1, 2, 3, 4, 5, 6].map((i) => <CardSkeleton key={i} />)
                : data.map((item) => <DataCard key={item.id} item={item} />)}
            </div>

            {/* No Results */}
            {data.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  Nenhum resultado encontrado com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
