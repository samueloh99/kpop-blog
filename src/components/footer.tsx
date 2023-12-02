export function Footer() {
  return (
    <div className="bg-default w-full">
      <div className="main-container flex flex-row justify-between text-white h-full py-10">
        <div className="flex flex-col gap-5 w-1/4">
          <h1 className="text-highlightColor text-2xl font-bold">KPOP SPOT</h1>
          <p className="text-lg">
            Sua fonte de notícias e novidades para o mundo KPOP
          </p>
        </div>
        <div className="flex flex-row justify-center items-start gap-10">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-lg">Navegação</p>
            <p className="font-normal text-lg">Últimas notícias</p>
            <p className="font-normal text-lg">Trending</p>
            <p className="font-normal text-lg">Doramas</p>
            <p className="font-normal text-lg">Celeb</p>
            <p className="font-normal text-lg">TV/Filmes</p>
            <p className="font-normal text-lg">Músicas</p>
            <p className="font-normal text-lg">Fashion</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-lg">Sobre nós</p>
            <p className="font-normal text-lg">Termo de uso</p>
            <p className="font-normal text-lg">Política de privacidade</p>
          </div>
        </div>
      </div>
      <div className="main-container flex justify-start items-start text-white pb-10">
        <h1>KPopSpot @ 2023</h1>
      </div>
    </div>
  );
}
