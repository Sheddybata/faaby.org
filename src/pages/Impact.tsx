import Layout from '../components/Layout';
import Counter from '../components/Counter';

export default function Impact() {

  const stories = [
    {
      name: 'Aisha & Zainab',
      location: 'Borno State',
      story: '“We used to depend on expensive firewood. After FAABY’s briquette training, we now produce and sell eco-briquettes from our homes. The extra income supports our children’s schooling and we have become mentors to other women in Maiduguri.”',
      image: '/success story 1/Aishazainab.jpg'
    },
    {
      name: 'Takum Women Group',
      location: 'Taraba State',
      story: '“With FAABY’s support we formed a cooperative, learned briquette production and now supply clean cooking fuel across local markets. Our partnership has created a new revenue stream for dozens of families and reduced deforestation around Takum.”',
      image: '/success story 2/Takumwomengroup.jpg'
    },
    {
      name: 'Jere Women Community',
      location: 'Borno State',
      story: '“The FAABY innovation hub opened our eyes. We now understand how to turn agricultural waste into energy, run safe production lines and train other women. Knowledge has become our greatest asset.”',
      image: '/success story 3/jerewomencommunity.jpg'
    },
    {
      name: 'National Open University Nigeria',
      location: 'Borno State',
      story: '“Our students complete their practicum at the FAABY innovation hub where they work on real briquette production lines. The hands-on experience prepares them to lead climate-smart energy projects across Nigeria.”',
      image: '/success story 4/Nationalopenuniversitynigeria.jpg'
    }
  ];

  return (
    <Layout>
    <div className="min-h-screen bg-white overflow-x-hidden max-w-full">

      <div className="bg-[#028a04] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Impact</h1>
          <p className="text-xl text-[#e6f7e9]">Measuring change, celebrating success</p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#e6f7e9] to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#028a04] mb-12">Impact by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Counter end={600} suffix="+" label="Women Trained" />
            <Counter end={10000} suffix="+" label="Households Reached" />
            <Counter end={50} suffix="+" label="Tons of Biomass Converted" />
            <Counter end={25} suffix="%" label="Reduction in Fuel Costs" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-[#028a04] mb-12">Success Stories</h2>
        <div className="space-y-12">
          {stories.map((story, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-[#028a04] mb-2">{story.name}</h3>
                  <p className="text-[#028a04] mb-4">{story.location}</p>
                  <p className="text-gray-700 italic leading-relaxed">"{story.story}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
}

