import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { issueApi } from '../services/api'

interface PostProps {
  id: number
  title: string
  body: string
  created_at: Date
  updated_at: Date
  number: number
}

dayjs.extend(relativeTime)

export function PostsArea() {
  const [posts, setPosts] = useState<PostProps[]>()

  const { register } = useForm()
  const getPosts = async () => {
    await issueApi.get('').then((response) => setPosts(response.data))
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <main className=" max-w-[865px] w-full">
      <div>
        <div className="flex justify-between  ">
          <h1 className="font-bold text-[18px] text-base-title mb-[14px]">
            Publicações
          </h1>
          <span className="text-base-span text-[14px]">
            {posts?.length} {posts?.length === 1 ? 'Publicação' : 'Publicações'}
          </span>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          className="w-[864px] h-12 flex items-center px-4 py-3 rounded-md bg-base-input border-base-border border-solid border-2 text-base-text placeholder:text-base-label"
          {...register('search')}
        />
      </div>

      <section className="grid grid-cols-2 gap-8 mt-[46px] overflow-auto overflow-y-auto scroll-smooth ">
        {posts?.map((post) => {
          const createdDate = dayjs(post?.created_at).fromNow()
          return (
            <Link key={post?.id} to={`/${post?.number}`}>
              <div className=" flex flex-col max-h-[260px] rounded-xl bg-base-post p-8">
                <div className="flex justify-between w-full gap-4 mb-5">
                  <h1 className=" text-base-title font-semibold text-[20px]">
                    {post?.title}
                  </h1>
                  <span className="text-base-span text-[14px]">
                    {createdDate}
                  </span>
                </div>

                <div className="line-clamp-4">
                  <ReactMarkdown className="text-base text-base-text  ">
                    {post?.body}
                  </ReactMarkdown>
                </div>
              </div>
            </Link>
          )
        })}
      </section>
    </main>
  )
}
