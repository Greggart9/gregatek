import Navbar from './components/navbar'
import Landingpage from './components/landingpage'
import Landingabout from './components/landingabout'
import Featuredproject from './components/featuredproject'
import Landingservices from './components/landingservices'
import Landingnumbers from './components/landingnumbers'
import CustomerShowcase from './components/CustomerShowcase'
import Faq from './components/FAQAccordion'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='flex flex-col min-h-screen m-6'>
      <Navbar />
      <Landingpage />
      <Landingabout />
      <Featuredproject />
      <Landingservices />
      <Landingnumbers />
      <CustomerShowcase />
      <Faq />
      <Footer />
      


    </div>

    
  )
}

export default page