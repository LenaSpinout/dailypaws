"use client";

import { useEffect } from "react";
import { strings } from "@/i18n/strings";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 12,
          maxWidth: 480,
          padding: "32px 20px 48px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          background: "#faf3ea",
          color: "#3a332c",
        }}
      >
        <p style={{ fontSize: "1.375rem", fontWeight: 700, margin: 0 }}>
          {strings.error.heading}
        </p>
        <p style={{ color: "#7a6f63", lineHeight: 1.5, margin: "0 0 12px" }}>
          {strings.error.body}
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            background: "#c97a44",
            color: "#ffffff",
            border: "none",
            borderRadius: 14,
            padding: 16,
            fontSize: "1rem",
            fontWeight: 700,
            cursor: "pointer",
            width: "100%",
          }}
        >
          {strings.error.retry}
        </button>
      </body>
    </html>
  );
}
