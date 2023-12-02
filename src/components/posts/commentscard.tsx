import { ThumbsDown, ThumbsUp, User } from "lucide-react";

export function CommentsCard() {
  return (
    <div className="flex flex-col justify-center items-start gap-5 py-5">
      <div className="flex flex-row gap-2 items-center justify-start w-full">
        <div className="bg-slate-400 p-2 rounded-full">
          <User size={30} />
        </div>
        <div>
          <p className="font-bold text-lg">Samuel Oh</p>
          <p className="font-normal text-lg">01/12/2023 - 20:20:30</p>
        </div>
      </div>
      <div className="flex w-full justify-between items-end">
        <div className="flex flex-col">
          <p className="text-lg">
            Comentario teste <br />
            Comentario teste Comentario teste{" "}
          </p>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="flex justify-center items-center gap-2">
            <ThumbsUp size={20} />
            <p className="text-lg">10</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <ThumbsDown size={20} />
            <p className="text-lg">10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
