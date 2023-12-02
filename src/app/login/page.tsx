import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen h-full main-container justify-center items-center">
      <SignIn />
    </main>
  );
}
