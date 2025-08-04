"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GlobalNotFound() {
  const router = useRouter();

  useEffect(() => {
    // Default to English locale for static export
    router.replace("/en/not-found-page");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p>Redirecting to the proper page...</p>
      </div>
    </div>
  );
}
