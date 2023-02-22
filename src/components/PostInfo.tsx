import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import { FaChevronLeft, FaGithub } from 'react-icons/fa'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

interface PostInfoProps {
  title?: string
  comments?: number
  createdAt?: Date
  userLogin?: string
}

dayjs.extend(relativeTime)
export function PostInfo({
  title,
  comments,
  createdAt,
  userLogin,
}: PostInfoProps) {
  const createdDate = dayjs(createdAt).fromNow()
  return (
    <div className="relative bg-base-profile w-full flex rounded-[10px] max-w-[864px] shadow-xl py-8 px-10 bottom-20">
      <div className="flex flex-col max-w-[612px]">
        <Link
          to="/"
          className="flex uppercase items-center font-bold gap-2 text-xs text-blue mb-5"
        >
          <FaChevronLeft />
          <p>Voltar</p>
        </Link>
        <h1 className="text-base-title font-bold text-2xl mb-2">{title}</h1>
        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-base-subtitle">
            <FaGithub size={18} className="text-base-label" />
            <p>{userLogin}</p>
          </div>
          <div className="flex items-center gap-2 text-base-subtitle">
            <FontAwesomeIcon icon={faCalendarDay} className="text-base-label" />
            <p>{createdDate}</p>
          </div>
          {comments !== undefined ? (
            <div className="flex items-center gap-2 text-base-subtitle">
              <FontAwesomeIcon icon={faComment} className="text-base-label" />
              <p>
                {comments > 1 ? comments : 'Nenhum'}{' '}
                {comments > 1 ? 'comentários' : 'comentário'}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
