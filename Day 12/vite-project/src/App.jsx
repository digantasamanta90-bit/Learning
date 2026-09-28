import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header
        title="NEXGEAR"
        subtitle="Electronics for Everyone"
      />
      <ProductList />
      <Footer
        company="NEXGEAR"
        year={2026}
        message="Built for modern tech lovers"
      />
    </div>
  )
}

export default App