import React, { useState } from 'react'
import Header from '../../components/Navbar/header/Header'
import ExploreMenu from '../../components/Exploremenu/ExploreMenu'
import FoodDisplay from '../../components/fooddisplay/FoodDisplay'
import { AppDownload } from '../../components/fooddownload/AppDownload'

const Home = ({ searchQuery }) => {
  const [category, setCategory] = useState("All")

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} searchQuery={searchQuery} />
      <AppDownload />
    </div>
  )
}

export default Home
