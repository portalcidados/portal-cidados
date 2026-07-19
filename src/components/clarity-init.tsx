"use client";

import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

export default function ClarityInit() {
  useEffect(() => {
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
    if (clarityId) {
      Clarity.init(clarityId);
    }
  }, []);

  return null;
}
