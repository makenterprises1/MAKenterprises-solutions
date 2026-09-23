import { ImageResponse } from "next/og";
import { getContent, Locale } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage({ params }: { params: { locale: Locale } }) {
  const t = getContent(params.locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0F1215",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 20, height: 20, background: "#C4491F" }} />
          <span style={{ color: "#F7F6F3", fontSize: 22, letterSpacing: 1 }}>
            MAK ENTERPRISES
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 980 }}>
          <span
            style={{
              color: "#F7F6F3",
              fontSize: 48,
              lineHeight: 1.25,
              fontWeight: 500,
            }}
          >
            {t.hero.title}
          </span>
          <span style={{ color: "#8A9199", fontSize: 22 }}>
            {t.footer.positioning}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
