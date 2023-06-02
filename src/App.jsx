import './App.css'
import Name from './components/Name'
import Price from './components/Price'
import Image from './components/Image'
import Description from './components/Description'


function App() {
  const myName = "Oluwatomisin";
  return (
    <>
      <div className="product-card">
        <Name />
        <Image />
        <Description />
        <Price />
      </div>
      <div>{myName.length !== 0 ? myName : <img alt='my Image' />}</div>
    </>
  )
}

export default App
