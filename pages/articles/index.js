import React from 'react'
import Blog from '../../components/blogz/blog'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div>
      <Header />
        <Blog />
        <Footer />
    </div>
  )
}

export default index