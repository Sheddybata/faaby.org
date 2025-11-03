import Layout from '../components/Layout';

export default function Partners() {
  const partners = [
    { name: 'FAO', full: 'Food and Agriculture Organization', desc: 'Supporting sustainable agriculture and food security initiatives' },

    { name: 'NCA', full: 'Norwegian Church Aid', desc: 'Partnering on climate resilience and community empowerment programs' },
    { name: 'Mercy Corps', full: 'Mercy Corps', desc: 'Collaborating on economic development and humanitarian relief' },
    { name: 'UNDP', full: 'United Nations Development Programme', desc: 'Working together on sustainable development goals' },
    { name: 'GIZ', full: 'Deutsche Gesellschaft für Internationale Zusammenarbeit', desc: 'Technical cooperation for renewable energy projects' },
    { name: 'USAID', full: 'United States Agency for International Development', desc: 'Supporting capacity building and economic growth initiatives' },
    { name: 'World Bank', full: 'The World Bank Group', desc: 'Funding sustainable development and poverty reduction programs' },
    { name: 'UN Women', full: 'United Nations Entity for Gender Equality', desc: 'Advancing women\'s empowerment and gender equality' },
  ];

  return (
    <Layout>
    <div className="min-h-screen bg-white">

      <div className="bg-[#028a04] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Partners</h1>
          <p className="text-xl text-[#e6f7e9]">Building impact through collaboration</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          We are proud to work with leading international organizations that share our commitment to sustainable development and community empowerment.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-2 border-[#e6f7e9] hover:border-[#028a04]">
              <div className="h-24 flex items-center justify-center mb-6 bg-[#e6f7e9] rounded-lg">
                <span className="text-3xl font-bold text-[#028a04]">{partner.name}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#028a04] mb-2">{partner.full}</h3>
              <p className="text-gray-600 text-sm">{partner.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#028a04] to-[#028a04] rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Partnership?</h2>
          <p className="text-lg mb-6 text-[#e6f7e9]">
            We welcome collaborations with organizations that share our vision for sustainable development.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[#028a04] px-8 py-3 rounded-lg font-semibold hover:bg-[#e6f7e9] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
    </Layout>
  );
}

