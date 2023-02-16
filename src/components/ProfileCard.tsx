import * as Avatar from '@radix-ui/react-avatar'

export function ProfileCard() {
  return (
    <div className="bg-base-profile w-full flex rounded-[10px] max-w-[864px] px-8 py-10 top-52">
      <Avatar.Root className="mr-8">
        <Avatar.Image
          src="https://github.com/mateuso12.png"
          alt="Mateus Santos"
          className="w-[148px] rounded-md"
        />
        <Avatar.Fallback />
      </Avatar.Root>

      <div className="flex flex-col gap-2">
        <h1 className="text-base-title font-bold text-2xl">Mateus Santos</h1>
        <p className="text-base-subtitle font-normal text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          pariatur dolor saepe voluptates, et commodi?
        </p>
      </div>
    </div>
  )
}
