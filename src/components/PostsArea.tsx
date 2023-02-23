import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { api } from '../services/api'
import { SearchInput } from './SearchInput'
import '.././styles/loading.css'

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
  const [posts, setPosts] = useState<PostProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(async (query = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20label:published%20repo:mateuso12/github-blog-posts`,
      )

      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <main className="max-w-4xl mx-3 my-5 md:my-6 lg:my-0 lg:mx-7 md:mx-4">
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <div className="loader" />
      ) : (
        <section className="lg:grid lg:grid-cols-2 md:flex md:flex-wrap md:gap-8 flex flex-col gap-6 mt-[46px]">
          {posts?.map((post) => {
            const createdDate = dayjs(post?.created_at).fromNow()
            return (
              <Link key={post?.id} to={`/${post?.number}`}>
                <div className="flex flex-col max-h-[260px] rounded-xl bg-base-post p-8 transition-all border border-base-post hover:border-base-label">
                  <div className="flex justify-between w-full gap-4 mb-5">
                    <h1 className="text-base-title font-semibold text-[20px]">
                      {post?.title}
                    </h1>
                    <span className="text-base-span text-[14px]">
                      {createdDate}
                    </span>
                  </div>
                  <div className="md:line-clamp-3 lg:line-clamp-4 line-clamp-2">
                    <ReactMarkdown className="text-base text-base-text text-justify">
                      {post?.body}
                    </ReactMarkdown>
                  </div>
                </div>
              </Link>
            )
          })}
        </section>
      )}
    </main>
  )
}
