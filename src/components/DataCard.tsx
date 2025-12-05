"use client";

import type { DataCatalogItem } from "@/lib/data/catalog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ExternalLink, Link as LinkIcon } from "lucide-react";

interface DataCardProps {
  item: DataCatalogItem;
}

export function DataCard({ item }: DataCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatTags = (tags: string[]) => {
    return tags.map((tag) => {
      if (tag === "Disponível para download") return "Download";
      if (tag === "Sala segura do Insper") return "Sala segura";
      return tag;
    });
  };

  const formattedTags = formatTags(item.tags);
  const hasLink = item.link && item.link.trim() !== "";

  const handleCardClick = () => {
    if (hasLink) {
      setIsModalOpen(true);
    }
  };

  const handleAccessClick = () => {
    if (item.link) {
      window.open(item.link, "_blank", "noopener,noreferrer");
    }
  };

  const cardContent = (
    <>
      <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 flex items-center gap-2">
        <span>{item.title}</span>
        {hasLink && (
          <LinkIcon className="h-4 w-4 text-muted-foreground shrink-0" />
        )}
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
    </>
  );

  return (
    <>
      {hasLink ? (
        <button
          type="button"
          className="bg-background-2 p-6 transition-shadow cursor-pointer hover:shadow-sm w-full text-left"
          onClick={handleCardClick}
        >
          {cardContent}
        </button>
      ) : (
        <div className="bg-background-2 p-6 transition-shadow hover:shadow-sm">
          {cardContent}
        </div>
      )}

      {hasLink && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-foreground">
                {item.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {item.theme} • {item.region}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              {/* Descrição completa */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">
                  Descrição
                </h4>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {item.description}
                </p>
              </div>

              {/* Palavras-chave */}
              {item.keywords && item.keywords.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Palavras-chave
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-foreground/6 text-foreground"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">
                  Informações
                </h4>
                <div className="flex flex-wrap gap-2">
                  {formattedTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-foreground/6 text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data de criação */}
              {item.createdAt && (
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Data de criação
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {new Date(item.createdAt).toLocaleDateString("pt-BR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleAccessClick}
                className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
              >
                Acessar informação
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
