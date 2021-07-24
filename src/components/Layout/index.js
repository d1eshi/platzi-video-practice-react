import Header from 'components/Header'
import Footer from 'components/Footer'

export default function Layout ({ children }) {
  return (
    <div className='App'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
