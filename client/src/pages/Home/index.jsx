import React from 'react'
import Popular from '../../components/Popular'
import Search from '../../components/Search'
import LikedSongs from '../../components/LikedSongs'

const Home = () => {
  return (
    <div className='contaMusic' >
     <Popular/>
     <Search/>
     <LikedSongs/>
    </div>
  )
}

export default Home
