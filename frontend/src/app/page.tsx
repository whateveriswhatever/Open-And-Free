import Image from "next/image";
import Dashboard from "./{components}/Dashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-200 text-pink-900">
      <Dashboard />
    </main>
  );
}
