"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Button from "@/components/ui/Button/Button";

const Dashboard = () => {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="dashboard">
      <h2>Welcome to Dashboard, {user.name.first}</h2>
      <Button type="button" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
