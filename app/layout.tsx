import type { Metadata, Viewport } from "next";
import { strings } from "@/i18n/strings";
import { MissionSessionProvider } from "@/state/mission-session";
import { OnboardingProvider } from "@/state/onboarding-session";
import "./globals.css";

export const metadata: Metadata = {
  title: strings.app.name,
  description: strings.app.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf3ea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <OnboardingProvider>
          <MissionSessionProvider>{children}</MissionSessionProvider>
        </OnboardingProvider>
      </body>
    </html>
  );
}
