import React from 'react'
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BlogDetails from '../../../components/hostel-details/HostelDetails';
import BlogHero from '../../../components/hostel-details/HostelHero';
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