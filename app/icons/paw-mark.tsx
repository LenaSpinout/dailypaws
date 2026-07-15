const ACCENT = "#c97a44";
const MARK = "#faf3ea";

// Shared by favicon (icon.tsx), iOS home screen icon (apple-icon.tsx) and the
// PWA manifest icons (pwa-icons/[size]/route.tsx) so all install surfaces
// show the same mark. `padded` leaves extra margin for maskable icons, whose
// safe zone the OS may crop into when applying its own shape mask.
export function PawMark({ size, padded = false }: { size: number; padded?: boolean }) {
  const inset = padded ? size * 0.18 : 0;
  const contentSize = size - inset * 2;

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: ACCENT,
      }}
    >
      <div style={{ position: "relative", width: contentSize, height: contentSize, display: "flex" }}>
        <div
          style={{
            position: "absolute",
            display: "flex",
            left: "27%",
            top: "52%",
            width: "46%",
            height: "34%",
            borderRadius: "50%",
            background: MARK,
          }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            left: "6%",
            top: "30%",
            width: "22%",
            height: "22%",
            borderRadius: "50%",
            background: MARK,
          }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            left: "29%",
            top: "10%",
            width: "22%",
            height: "22%",
            borderRadius: "50%",
            background: MARK,
          }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            left: "52%",
            top: "10%",
            width: "22%",
            height: "22%",
            borderRadius: "50%",
            background: MARK,
          }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            left: "75%",
            top: "30%",
            width: "22%",
            height: "22%",
            borderRadius: "50%",
            background: MARK,
          }}
        />
      </div>
    </div>
  );
}
