import { Header } from './components/Header'
import { PostsArea } from './components/PostsArea'
import { ProfileCard } from './components/ProfileCard'
import './styles/global.css'

export function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-hidden">
      <Header />
      <ProfileCard />
      <PostsArea />
    </div>
  )
}
