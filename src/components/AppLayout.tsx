import Counter from './Counter';
import ServiceCard from './ServiceCard';
import PartnerCarousel from './PartnerCarousel';
import Navigation from './Navigation';
import Footer from './Footer';
import HeroSlideshow from './HeroSlideshow';
import { Link } from 'react-router-dom';

export default function AppLayout() {
  const services = [
    {
      title: 'Eco-Briquettes Production & Distribution',
      desc: 'Clean, efficient, and affordable energy source',
      image: '/BiomassBriquetteProduction.jpg',
      link: '/services',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      rotateImage: true
    },
    {
      title: 'Climate Change & Environmental Consultancy',
      desc: 'Providing tailored community solutions',
      image: '/ClimateChange&EnvironmentalConsultancy.jpg',
      link: '/services',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      title: 'Health & Safety Training',
      desc: 'Occupational and environmental safety practices',
      image: '/Health&SafetyTraining.jpg',
      link: '/services',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
      title: 'Agricultural & Green Projects',
      desc: 'Restoring degraded lands and promoting smart farming',
      image: '/CleanEnergyDistribution.jpg',
      link: '/services',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v.5a1.5 1.5 0 003 0zm6-3v6m0-6v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v.5a1.5 1.5 0 003 0zm6-3v6m0-6v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v.5a1.5 1.5 0 003 0z" /></svg>,
      rotateImage: true
    },
    {
      title: 'Livelihood Empowerment Hub',
      desc: 'Creating opportunities for women and youth',
      image: '/Research&Development.jpg',
      link: '/services',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      rotateImage: true
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[500px] sm:h-[550px] md:h-[600px] bg-gradient-to-r from-[#028a04] to-[#028a04]">
        <HeroSlideshow />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center z-30">
          <div className="text-white max-w-3xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Eco-Energy and Livelihood Innovation Hub
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white">
              Transforming waste into clean energy while empowering women and youth
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link 
                to="/services"
                className="bg-white text-[#028a04] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#e6f7e9] transition-colors text-center touch-manipulation"
              >
                Our Services
              </Link>
              <Link 
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-[#028a04] transition-colors text-center touch-manipulation"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Counters */}
      <div className="bg-gradient-to-b from-[#e6f7e9] to-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#028a04] mb-8 sm:mb-12 md:mb-16">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <Counter end={600} suffix="+" label="Women Trained" />
            <Counter end={10000} suffix="+" label="Households Reached" />
            <Counter end={50} suffix="+" label="Tons of Biomass Converted" />
            <Counter end={25} suffix="%" label="Reduction in Fuel Costs" />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#028a04] mb-3 sm:mb-4">Our Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">Comprehensive solutions for sustainable development</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx} 
                title={service.title}
                description={service.desc}
                image={service.image}
                link={service.link}
                icon={service.icon}
                rotateImage={service.rotateImage}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-[#e6f7e9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#028a04] mb-3 sm:mb-4">Our Founder</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Visionary leadership for sustainable change</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 flex flex-col items-center text-center">
                <img 
                  src="/edprofile.jpg" 
                  alt="Founder" 
                  className="w-36 h-36 md:w-52 md:h-52 object-cover rounded-full ring-4 ring-[#e6f7e9] shadow-lg mb-6"
                />
                <h2 className="text-3xl font-bold text-[#028a04] mb-2">Dr. Bamidele A. Egbedimame</h2>
                <p className="text-[#028a04] text-lg mb-6">Executive Director and Founder, FAABY Global Services</p>
                
                <div className="space-y-4 text-gray-700 max-w-2xl">
                  <p className="text-lg leading-relaxed">
                    Dr. Bamidele A. Egbedimame is the Executive Director and Founder of FAABY Global Services. A distinguished public health expert and environmentalist, he is dedicated to creating sustainable solutions that link community health with climate resilience.
                  </p>
                  <p className="text-lg leading-relaxed">
                    With a specialty in Environmental Epidemiology—a field in which he is currently pursuing his PhD—Dr. Bamidele's work is driven by a mission to foster green enterprises led by the youth and women of Nigeria.
                  </p>
                  <p className="text-lg leading-relaxed">
                    His commitment to excellence in environmental health and safety is evidenced by his completion of a prestigious program with the Chartered Institute of Environment and Health Safety (CIEHS) Nevada, USA. He is presently an Associate Member of this distinguished organization, reflecting his deep expertise and professional dedication to advancing environmental health standards.
                  </p>
                  <p className="text-lg leading-relaxed">
                    In recognition of his outstanding contributions to sustainable development and capacity building, Dr. Bamidele has been honored with a Badge of Honor from UNITAR (United Nations Institute for Training and Research), cementing his position as a leader in global environmental initiatives.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Under his visionary leadership, FAABY has been positioned at the forefront of transforming local biomass waste into affordable, clean energy, directly improving the livelihoods of thousands while advancing the United Nations Sustainable Development Goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Carousel */}
      <PartnerCarousel />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#028a04] to-[#028a04] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Join Us in Creating Sustainable Change</h2>
          <p className="text-xl mb-8 text-[#e6f7e9]">
            Together, we can build a cleaner, healthier future for communities across Nigeria
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-[#028a04] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e6f7e9] transition-colors"
          >
            Partner With Us
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
