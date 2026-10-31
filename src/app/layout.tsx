import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pravin Avhad — Backend SDE @ CRED | Distributed Systems & AI",
  description:
    "Portfolio of Pravin Avhad, Backend SDE at CRED, LeetCode Knight (Rating 2103), SIH 2024 Winner. Architecting distributed Go microservices, event-driven pipelines (Kafka, gRPC), agentic AI workflows, and cloud-native systems.",
  keywords: [
    "Pravin Avhad",
    "CRED",
    "Backend Engineer",
    "Go",
    "Golang",
    "Distributed Systems",
    "Microservices",
    "Kafka",
    "gRPC",
    "Uber Fx",
    "LeetCode Knight",
    "Smart India Hackathon",
    "Agentic AI",
    "n8n",
    "MCP",
  ],
  authors: [{ name: "Pravin Avhad", url: "https://github.com/thalapravin" }],
  openGraph: {
    title: "Pravin Avhad — Backend SDE @ CRED",
    description:
      "Backend SDE @ CRED • LeetCode Knight (2103) • SIH 2024 Winner • 22+ Production Freelance Projects",
    type: "website",
    url: "https://pravinavhad.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&family=Geist+Mono:wght@300;400;500;600&family=Geist:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050505] text-[#f2f2ee] font-sans antialiased min-h-screen selection:bg-[#00E599] selection:text-[#050505] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
