import Layout from '../components/Layout';
import Counter from '../components/Counter';

export default function Impact() {

  const stories = [
    {
      name: 'Amina Mohammed',
      location: 'Kano State',
      story: 'After completing the training program, I started my own briquette production business. Now I employ 5 other women and we are making a real difference in our community.',
      image: 'https://d64gsuwffb70l.cloudfront.net/690753a1911d06a8361fe1aa_1762088017722_16ee3234.webp'
    },
    {
      name: 'Youth Cooperative Group',
      location: 'Kaduna',
      story: 'FAABY trained 30 young people in our community. We now run a successful clean energy distribution business that serves over 500 households.',
      image: 'https://d64gsuwffb70l.cloudfront.net/690753a1911d06a8361fe1aa_1762088019468_8250d5fb.webp'
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

