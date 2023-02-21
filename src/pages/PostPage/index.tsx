import { Header } from '../../components/Header'
import { PostContent } from '../../components/PostContent'
import { PostInfo } from '../../components/PostInfo'

export function PostPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-hidden">
      <Header />
      <PostInfo />
      <PostContent />
    </div>
  )
}
