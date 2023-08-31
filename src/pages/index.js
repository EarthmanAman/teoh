import Image from 'next/image'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Layout from '@/components/layout'
import NavBar from '@/components/navBar'
import Hero from '@/components/hero'
import Benefits from '@/components/benefit'
import Services from '@/components/services'
import MiniBlog from '@/components/minBlog'
import Banner from '@/components/Banner'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'
import CopyRight from '@/components/copyright'

import Logo from "../../public/testimonials/avatar.jpg"


const imageLoader = require("../loader");

export default function Home() {
  return (
    <Layout>
      <NavBar />
      <Hero />
      <Benefits />
      <MiniBlog />
      <Banner />
      <Services />
      <Testimonials />
      <FloatingWhatsApp accountName='TeOH Kenya' phoneNumber='254701467872' avatar="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
      <Footer />
      <CopyRight />
    </Layout>
  )
}
