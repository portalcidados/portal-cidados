export function CardSkeleton() {
  return (
    <div className="bg-background-2 p-6">
      <div className="h-6 bg-gray-200 rounded w-full mb-3 animate-pulse"></div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
      </div>
      <div className="flex flex-wrap gap-2">
        <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded-full w-18 animate-pulse"></div>
      </div>
    </div>
  );
}
