import React from 'react'
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import HostelHero from '../../../components/hostel-details/HostelHero';
import HostelDetails from '../../../components/hostel-details/HostelDetails';
const index = () => {
  return (
    <div className='px-8'>
    <Header />
    <HostelHero />
    <HostelDetails />
    <Footer />
    </div>
  )
}

export default index