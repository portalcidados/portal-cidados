import { Suspense } from "react";
import { CatalogPage } from "@/components/CatalogPage";
import { Header } from "@/components/Header";

export default function CatalogoDeDados() {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <CatalogPage />
      </Suspense>
    </div>
  );
}
