import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FaChevronLeft, FaGithub } from 'react-icons/fa'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import '../styles/loading.css'

interface PostInfoProps {
  title: string
  comments: number
  createdAt: Date
  userLogin: string
  url: string
  isLoading: boolean
}

dayjs.extend(relativeTime)
export function PostInfo({
  title,
  comments,
  createdAt,
  userLogin,
  url,
  isLoading,
}: PostInfoProps) {
  const createdDate = dayjs(createdAt).fromNow()

  return (
    <div
      className="
  md:relative
  lg:relative
bg-base-profile
  flex
  rounded-[10px]
  shadow-xl
  md:flex-col
  flex-wrap
  justify-center
  mx-3
  py-5
  px-6
  mt-4
  md:mt-6
  lg:mt-0
  gap-3
  md:flex-nowrap
  md:mx-3
  md:py-6
  md:px-10
  md:gap-0
  md:bottom-16
  lg:w-full
  lg:gap-0
  lg:py-8
  lg:px-10
  lg:max-w-4xl
  lg:bottom-20"
    >
      <div className="flex justify-between w-full">
        <Link
          to="/"
          className="flex uppercase font-bold gap-2 text-xs text-blue mb-5"
        >
          <FaChevronLeft />
          <p>Voltar</p>
        </Link>
        <Link
          to={`${url}`}
          target="_blank"
          className="flex text-blue font-bold text-xs uppercase gap-2 border-b border-base-profile hover:border-solid hover:border-blue transition-all"
        >
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </div>
      <div className="flex flex-col max-w-[612px]">
        <h1 className="text-base-title font-bold text-2xl mb-2">
          {isLoading ? <div className="loader" /> : title}
        </h1>
        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-base-subtitle">
            <FaGithub size={18} className="text-base-label" />
            <p>{userLogin}</p>
          </div>
          <div className="flex items-center gap-2 text-base-subtitle">
            <FontAwesomeIcon icon={faCalendarDay} className="text-base-label" />
            <p>{createdDate}</p>
          </div>
          {isLoading ? (
            <div className="loader" />
          ) : (
            <>
              {comments !== undefined ? (
                <div className="flex items-center gap-2 text-base-subtitle">
                  <FontAwesomeIcon
                    icon={faComment}
                    className="text-base-label"
                  />
                  <p>
                    {comments > 1 ? comments : 'Nenhum'}{' '}
                    {comments > 1 ? 'comentários' : 'comentário'}
                  </p>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
