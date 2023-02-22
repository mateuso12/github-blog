import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { PostContent } from '../../components/PostContent'
import { PostInfo } from '../../components/PostInfo'
import { issueApi } from '../../services/api'

interface PostContentPageProps {
  body: string
  title: string
  created_at: Date
  comments: number
  user: {
    login: string
  }
}

export function PostPage() {
  const [postContent, setPostContent] = useState<PostContentPageProps>()
  const { issueNumber } = useParams<string>()

  const issueNumberRef = useRef(issueNumber)

  useEffect(() => {
    const getContentPost = async () => {
      if (issueApi) {
        await issueApi
          ?.get(`${issueNumberRef.current}`)
          .then((response) => setPostContent(response.data))
      }
    }
    getContentPost()
  }, [])

  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-hidden">
      <Header />
      <PostInfo
        title={postContent?.title}
        comments={postContent?.comments}
        createdAt={postContent?.created_at}
        userLogin={postContent?.user?.login}
      />
      <PostContent body={postContent?.body} />
    </div>
  )
}
