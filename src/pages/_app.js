// pages/_app.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../components/Navbar";
import PasswordGate from "@/components/PasswordGate";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ok = window.localStorage.getItem("wedding_pw_ok") === "true";
      setUnlocked(ok);
      setReady(true);
    }
  }, []);

  // which routes are protected
  const protectedRoutes = [
    "/",
    "/wedding-details",
    "/rsvp",
    "/wedding-party",
    "/our-story",
    "/travel",
    "/activities",
    "/registry",
    "/faq",
  ];

  const isProtected = protectedRoutes.includes(router.pathname);

  // wait until we've checked localStorage
  if (!ready) return null;

  const content = (
    <>
      <Head>
        <title>Syrena & George&apos;s Wedding</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      {isProtected && !unlocked ? (
        <PasswordGate onUnlock={() => setUnlocked(true)} />
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
        </>
      )}
      <Analytics />
    </>
  );

  return content;
}
