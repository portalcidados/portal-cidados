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

  const formattedTags = formatTags(item.tags);

  return (
    <div className="bg-background-2 p-6 hover:shadow-sm transition-shadow">
      <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
        {item.title}
      </h3>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
        {item.description}
      </p>

      <div className="flex flex-col gap-2">
        {/* Tema e Região */}
        <div className="flex flex-wrap gap-2">
          {formattedTags.slice(0, -1).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-foreground/6 text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Forma de Acesso - sempre na linha de baixo */}
        {formattedTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-foreground/6 text-foreground">
              {formattedTags[formattedTags.length - 1]}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
