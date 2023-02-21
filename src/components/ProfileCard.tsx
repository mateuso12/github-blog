import * as Avatar from '@radix-ui/react-avatar'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { FaGithub } from 'react-icons/fa'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { userApi } from '../services/api'

interface ProfileCardProps {
  avatar_url: string
  login: string
  name: string
  url: string
  followers: number
  company?: string
  bio?: string
}

export function ProfileCard() {
  const [user, setUser] = useState<ProfileCardProps>()
  console.log('user: ', user)

  useEffect(() => {
    userApi.get('').then((response) => {
      setUser(response.data)
    })
  }, [])

  return (
    <div className="relative bg-base-profile w-full flex rounded-[10px] max-w-[864px] shadow-xl py-8 px-10 bottom-20">
      <Avatar.Root className="mr-8 w-[148px] h-[148px]">
        <Avatar.Image
          src={user?.avatar_url}
          alt={user?.name}
          className="w-full h-full rounded-[10px]"
        />
        <Avatar.Fallback />
      </Avatar.Root>

      <div className="flex flex-col max-w-[612px]">
        <div className="flex justify-between items-center">
          <h1 className="text-base-title font-bold text-2xl mb-2">
            {user?.name}
          </h1>
          <Link
            to="https://github.com/mateuso12"
            target="_blank"
            className="flex uppercase font-bold gap-2 text-xs text-blue"
          >
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </div>
        <p className="text-base-text font-normal text-xl mb-6">{user?.bio}</p>
        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-base-subtitle">
            <FaGithub size={18} className="text-base-label" />
            <p>{user?.login}</p>
          </div>
          <div className="flex items-center gap-2 text-base-subtitle">
            <FontAwesomeIcon icon={faBuilding} className="text-base-label" />
            <p>{user?.company}</p>
          </div>
          <div className="flex items-center gap-2 text-base-subtitle">
            <FontAwesomeIcon icon={faUserGroup} className="text-base-label" />
            <p>{user?.followers}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
