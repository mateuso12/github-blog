import { Header } from '../../components/Header'
import { PostsArea } from '../../components/PostsArea'
import { ProfileCard } from '../../components/ProfileCard'

export function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-y-auto">
      <Header />
      <ProfileCard />
      <PostsArea />
    </div>
  )
}
