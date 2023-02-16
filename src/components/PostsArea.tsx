export function PostsArea() {
  return (
    <main className=" max-w-[865px] w-full h-full">
      <div>
        <div className="flex justify-between  ">
          <h1 className="font-bold text-[18px] text-base-title mb-[14px]">
            Publicações
          </h1>
          <span className="text-base-span text-[14px]">8 publicações</span>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          className="w-[864px] h-12 flex items-center px-4 py-3 rounded-md bg-base-input border-base-border border-solid border-2 text-base-label"
        />
      </div>

      <main className="grid grid-cols-2 gap-8 mt-[46px]">
        <div className=" flex flex-col rounded-xl bg-base-post p-8">
          <div className="flex justify-between mb-5">
            <h1 className=" text-base-title font-semibold text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <span className="text-base-span text-[14px] whitespace-nowrap">
              Há 1 dia
            </span>
          </div>

          <div className="max-h-[116px] line-clamp-4">
            <p className="text-base text-justify text-base-text  ">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Sit
              sequi rem, quo doloribus dolorem nulla. Distinctio blanditiis odio
              nisi maxime! Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Reprehenderit cumque ipsam dolores id nam ducimus iste
              adipisci hic nihil aut porro quisquam, incidunt impedit sint quod
              saepe provident delectus! Veniam!
            </p>
          </div>
        </div>
      </main>
    </main>
  )
}
