import { faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaChevronLeft, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function PostInfo() {
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
        <h1 className="text-base-title font-bold text-2xl mb-2">
          Teste de titulo um pouco maior Lorem, ipsum dolor sit amet consectetur
          adipisicing elit.
        </h1>
        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-base-subtitle">
            <FaGithub size={18} className="text-base-label" />
            <p>mateuso12</p>
          </div>
          <div className="flex items-center gap-2 text-base-subtitle">
            <FontAwesomeIcon icon={faCalendarDay} className="text-base-label" />
            <p>Há 1 dia</p>
          </div>
          <div className="flex items-center gap-2 text-base-subtitle">
            <FontAwesomeIcon icon={faComment} className="text-base-label" />
            <p>30 seguidores</p>
          </div>
        </div>
      </div>
    </div>
  )
}
