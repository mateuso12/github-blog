import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { PostContent } from '../../components/PostContent/index'
import { PostInfo } from '../../components/PostInfo'

import { api } from '../../services/api'
import '../../styles/loading.css'

interface PostContentPageProps {
  body: string
  title: string
  created_at: Date
  comments: number
  html_url: string
  user: {
    login: string
  }
}

export function PostPage() {
  const [postContent, setPostContent] = useState<PostContentPageProps>(
    {} as PostContentPageProps,
  )
  const [isLoading, setIsLoading] = useState(true)

  const { issueNumber } = useParams<string>()

  const issueNumberRef = useRef(issueNumber)

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/mateuso12/github-blog-posts/issues/${issueNumberRef.current}`,
      )

      setPostContent(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPostDetails()
  }, [getPostDetails])

  return (
    <div className="lg:w-full md:w-full w-screen flex flex-col items-center overflow-y-auto overflow-x-hidden">
      <Header />
      <PostInfo
        title={postContent.title}
        comments={postContent.comments}
        createdAt={postContent.created_at}
        userLogin={postContent.user?.login}
        url={postContent.html_url}
        isLoading={isLoading}
      />
      <PostContent content={postContent.body} />
    </div>
  )
}
