import * as Avatar from '@radix-ui/react-avatar'

import { FaGithub } from 'react-icons/fa'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function ProfileCard() {
  return (
    <div className="bg-base-profile w-full flex rounded-[10px] max-w-[864px] px-8 py-10 top-52">
      <Avatar.Root className="mr-8 w-[148px] h-[148px]">
        <Avatar.Image
          src="https://github.com/mateuso12.png"
          alt="Mateus Santos"
          className="w-full h-full rounded-[10px]"
        />
        <Avatar.Fallback />
      </Avatar.Root>

      <div className="flex flex-col max-w-[612px]">
        <h1 className="text-base-title font-bold text-2xl mb-2">
          Mateus Santos
        </h1>
        <p className="text-base-text font-normal text-xl mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          pariatur dolor saepe voluptates, et commodi?
        </p>
        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-base-subtitle">
            <FaGithub size={18} className="text-base-label" />
            <p>mateuso12</p>
          </div>
          <div className="flex items-center gap-2 text-base-subtitle">
            <FontAwesomeIcon icon={faBuilding} className="text-base-label" />
            <p>Xtrategie</p>
          </div>
          <div className="flex items-center gap-2 text-base-subtitle">
            <FontAwesomeIcon icon={faUserGroup} className="text-base-label" />
            <p>30 seguidores</p>
          </div>
        </div>
      </div>
    </div>
  )
}
