import { ArrowRight, ArrowRightIcon, ChevronRight } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function NewsletterForm() {
  return (
    <div className="flex my-40">
      <div className="main-container bg-alternative text-white flex flex-row py-10 gap-5">
        <div className="flex flex-col w-full justify-center items-start gap-5">
          <h1 className="font-bold text-4xl text-highlightColor">Newsletter</h1>
          <p className="text-lg">
            Receba de forma resumida todas as notícias e novidades dentro no
            mundo de KPOP
          </p>
        </div>
        <form className="flex w-2/5 justify-center items-center gap-5">
          <Input placeholder="Email" />
          <Button variant={"destructive"}>Inscrever</Button>
        </form>
      </div>
    </div>
  );
}
