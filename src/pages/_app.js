// pages/_app.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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

  // If route is protected & not unlocked yet → show password screen instead
  if (isProtected && !unlocked) {
    return (
      <>
        <PasswordGate onUnlock={() => setUnlocked(true)} />
      </>
    );
  }

  // Normal render once unlocked or on unprotected routes
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
