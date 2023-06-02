import './App.css'
import Name from './components/Name'
import Price from './components/Price'
import Image from './components/Image'
import Description from './components/Description'


function App() {

  return (
    <>
      <div className="product-card">
        <Name />
        <Image />
        <Description />
        <Price />
      </div>
    </>
  )
}

export default App
