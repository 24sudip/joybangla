import { useEffect, useState } from 'react'
import './App.css'
import Image from './components/Image'
import Logo from "../src/assets/market1.png"
import Mothel from "../src/assets/gallery1.jpg"
import Container from './components/Container'
import Flex from './components/Flex'
import List from './components/List'
import Header from './components/layouts/Header'
import axios from 'axios'

function App() {
  let [allCountry, setAll] = useState([]);
  useEffect(()=>{
    async function allCountry() {
      let countryData = await axios.get('https://restcountries.com/v3.1/all');
      setAll(countryData.data);
    }
    allCountry();
  },[])
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* <ul className='flex gap-x-5'>
        <List menuName='Home'/>
        <List menuName='About'/>
        <List menuName='Service'/>
      </ul>
      <Flex className='gap-10'>
      <div className='w-1/4'>
        <h1>Al-Amin</h1>
      </div>
      <div className='w-1/4'>
        <h1>Manus</h1>
      </div>
      </Flex>
      <h1 className='bg-teal-500 text-white font-bold'>Sudip Saha</h1>
      <h2 className="bg-red-700">kazi</h2>
      <Image src={Logo} alt="Logo"/>
      <Image src={Mothel} alt="Mothel"/>
      <Container>
        <h1>Lorem ipsum dolor sit amet.</h1>
      </Container> */}
      <select>
        {allCountry.map(item=>
            <option>{item.name.common}</option>
        )}
      </select>
    </>
  )
}

export default App
