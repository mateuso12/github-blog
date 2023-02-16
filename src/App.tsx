import { Header } from './components/Header'
import { ProfileCard } from './components/ProfileCard'
import './styles/global.css'

export function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Header />
      <ProfileCard />
    </div>
  )
}
