import Image from "next/image";

export function CategorieSection() {
  return (
    <div className="main-container flex flex-row pb-20">
      <div className="grid grid-cols-4 w-full gap-5">
        <div className="grid grid-rows-2 gap-5">
          <div className="flex relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 gap-5">
              <h1 className="text-xl font-bold text-white">Doramas</h1>
            </div>
            <Image
              src="https://blog.onehallyu.com/wp-content/uploads/2023/06/FmCyeUZaMAAGWQ--350x250.jpeg"
              alt="banner1"
              width={400}
              height={400}
            />
          </div>
          <div className="flex relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 gap-5">
              <h1 className="text-xl font-bold text-white">Músicas</h1>
            </div>
            <Image
              src="https://blog.onehallyu.com/wp-content/uploads/2023/06/FmCyeUZaMAAGWQ--350x250.jpeg"
              alt="banner1"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-5 gap-5">
            <h1 className="text-xl font-bold text-white">Celeb</h1>
          </div>
          <Image
            src="https://blog.onehallyu.com/wp-content/uploads/2023/06/FmCyeUZaMAAGWQ--350x250.jpeg"
            alt="banner1"
            width={400}
            height={400}
          />
        </div>
        <div className="grid grid-rows-2 gap-5">
          <div className="flex relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 gap-5">
              <h1 className="text-xl font-bold text-white">Filmes</h1>
            </div>
            <Image
              src="https://blog.onehallyu.com/wp-content/uploads/2023/06/FmCyeUZaMAAGWQ--350x250.jpeg"
              alt="banner1"
              width={400}
              height={400}
            />
          </div>
          <div className="flex relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 gap-5">
              <h1 className="text-xl font-bold text-white">Fashion</h1>
            </div>
            <Image
              src="https://blog.onehallyu.com/wp-content/uploads/2023/06/FmCyeUZaMAAGWQ--350x250.jpeg"
              alt="banner1"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-5 gap-5">
            <h1 className="text-xl font-bold text-white">Culture</h1>
          </div>
          <Image
            src="https://blog.onehallyu.com/wp-content/uploads/2023/06/FmCyeUZaMAAGWQ--350x250.jpeg"
            alt="banner1"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
