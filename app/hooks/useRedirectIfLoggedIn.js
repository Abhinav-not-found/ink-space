"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useRedirectIfLoggedIn = (redirectTo = "/home") => {
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      router.replace(redirectTo);
    }
  }, [router, redirectTo]);
};

export default useRedirectIfLoggedIn;
