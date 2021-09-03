import { Header } from './header'
import { Menu } from './menu'
import { Sidebar } from './sidebar'
import { ContentArea } from './content-area'
import { Footer } from './footer'
import './style.css'

export const App = () => {
  return (
    <div className="grid-container">
      <Header />
      <Menu />
      <Sidebar />
      <ContentArea />
      <Footer />
    </div>
  )
}