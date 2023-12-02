import { Heart, MessageCircle, Share } from "lucide-react";

export function HeaderPost() {
  return (
    <div className="flex flex-col w-full justify-center items-start gap-5">
      <h1 className="font-bold text-3xl">
        7 Korean Webtoons That Will Have You Glued To Your Phone
      </h1>
      <div className="flex flex-row justify-start items-center w-full gap-10">
        <p className="font-normal text-lg">01/12/2023 - 08:49</p>
        <div className="bg-pink-400 rounded-lg px-2">
          <p>Music</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-2 justify-center items-center border border-[#ccc] px-2 py-2 rounded-full">
            <Heart size={20} />
            1231
          </div>
          <div className="flex flex-row gap-2 justify-center items-center border border-[#ccc] px-2 py-2 rounded-full">
            <MessageCircle />
            21312
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-2 justify-center items-center border border-[#ccc] px-2 py-2 rounded-full">
            <Share />
            Compartilhe
          </div>
        </div>
      </div>
    </div>
  );
}
