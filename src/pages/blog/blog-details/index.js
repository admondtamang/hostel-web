import React from 'react'
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BlogDetails from '../../../components/blog-details/blogDetails';
import BlogHero from '../../../components/blog-details/BlogHero';
const index = () => {
  return (
    <div className='px-8'>
    <Header />
    <BlogHero />
    <BlogDetails />
    <Footer />
    </div>
  )
}

export default index