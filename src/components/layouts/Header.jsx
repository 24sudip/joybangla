import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Logo from '../../assets/market1.png'
import Flex from '../Flex'
import List from '../List'

const Header = () => {
  return (
    <>
      <nav className='bg-teal-500'>
        <Container>
            <Flex>
                <div className='w-1/2'>
                    <Image src={Logo}/>
                </div>
                <div className='w-1/2'>
                    <ul className='flex gap-x-7'>
                        <List menuName='Home'/>
                        <List menuName='Home'/>
                        <List menuName='Home'/>
                        <List menuName='Home'/>
                        <List menuName='Home'/>
                        <List menuName='Home'/>
                    </ul>
                </div>
            </Flex>
        </Container>
      </nav>
    </>
  )
}

export default Header
