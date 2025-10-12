import type { DataCatalogItem } from "@/lib/data/catalog";

interface DataCardProps {
  item: DataCatalogItem;
}

export function DataCard({ item }: DataCardProps) {
  const formatTags = (tags: string[]) => {
    return tags.map((tag) => {
      if (tag === "Disponível para download") return "Download";
      if (tag === "Sala segura do Insper") return "Sala segura";
      return tag;
    });
  };

  return (
    <div className="bg-background-2 p-6 hover:shadow-sm transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
        {item.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {formatTags(item.tags).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
