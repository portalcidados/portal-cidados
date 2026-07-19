"use client";

import { Suspense } from "react";
import PropertyMap from "./components/property-map";

export default function GeoportalPage() {
  return (
    <div>
      <Suspense fallback={null}>
        <PropertyMap />
      </Suspense>
    </div>
  );
}
