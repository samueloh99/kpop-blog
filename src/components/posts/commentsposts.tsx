import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CommentsCard } from "./commentscard";

export function CommentsPosts() {
  return (
    <div className="flex flex-col w-full gap-10 mb-40">
      <p className="font-bold text-lg">Comentários (31)</p>

      <div className="flex flex-row justify-center items-center w-2/3 gap-5">
        <Input type="text" />
        <Button>Postar comentário</Button>
      </div>

      <div className="flex flex-col divide-y">
        <CommentsCard />
        <CommentsCard />
        <CommentsCard />
        <CommentsCard />
        <CommentsCard />
      </div>
    </div>
  );
}
