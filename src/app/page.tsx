"use client";

import { useEffect, useState } from "react";

import StepForm from "@/components/form/step-form";
import Status from "@/components/status";
import Spinner from "@/components/spinner";

export default function Page() {
  const [isRegisteredUser, setRegisteredUser] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const alreadyRegistered = sessionStorage.getItem("user_approved");
    setRegisteredUser(alreadyRegistered);
    setLoading(false);
  }, [isRegisteredUser]);

  const mainComponent = isRegisteredUser ? (
    <Status status={isRegisteredUser} />
  ) : (
    <StepForm setUser={setRegisteredUser} />
  );

  if (loading) return <Spinner />;

  return (
    <main className="pt-20 px-3.5 h-screen font-[family-name:var(--font-geist-sans)] flex flex-col justify-center items-center sm:grid sm:grid-cols-4">
      {mainComponent}
    </main>
  );
}
