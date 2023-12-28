"use client";

import { useEffect } from "react";

export interface DynamicBodyProps {
  className?: string;
}

export default function DynamicBody({ className }: DynamicBodyProps) {
  useEffect(() => {
    if (className) {
      document.body.classList.add(className);
      return () => {
        document.body.classList.remove(className);
      };
    }
  }, [className]);
  return <></>;
}
