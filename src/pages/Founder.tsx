import Layout from '../components/Layout';

export default function Founder() {
  return (
    <Layout>

    <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
      <div className="bg-gradient-to-r from-[#028a04] to-[#028a04] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Founder</h1>
          <p className="text-xl text-[#e6f7e9]">Visionary leadership for sustainable change</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-8 md:px-12 py-12 flex flex-col items-center text-center">
            <img 
              src="/edprofile.jpg" 
              alt="Founder" 
              className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full ring-4 ring-[#e6f7e9] shadow-lg mb-6"
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
    </Layout>
  );
}

