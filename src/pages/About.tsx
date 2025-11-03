import Layout from '../components/Layout';
import { useState, useEffect, useRef } from 'react';
import { 
  Target, 
  Eye, 
  Leaf, 
  Users, 
  Lightbulb,
  Shield,
  Handshake,
  Award,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Counter from '../components/Counter';
import { Link } from 'react-router-dom';

interface Value {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function About() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const valueRefs = useRef<(HTMLDivElement | null)[]>([]);

  const values: Value[] = [
    { 
      title: 'Sustainability', 
      desc: 'Environmental stewardship in everything we do',
      icon: <Leaf className="w-6 h-6" />
    },
    { 
      title: 'Empowerment', 
      desc: 'Building capacity and creating opportunities',
      icon: <Users className="w-6 h-6" />
    },
    { 
      title: 'Innovation', 
      desc: 'Creative solutions to complex challenges',
      icon: <Lightbulb className="w-6 h-6" />
    },
    { 
      title: 'Integrity', 
      desc: 'Transparency and accountability in our work',
      icon: <Shield className="w-6 h-6" />
    },
    { 
      title: 'Collaboration', 
      desc: 'Working together for greater impact',
      icon: <Handshake className="w-6 h-6" />
    },
    { 
      title: 'Excellence', 
      desc: 'Commitment to quality and continuous improvement',
      icon: <Award className="w-6 h-6" />
    }
  ];

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    [...sectionRefs.current, ...valueRefs.current].forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
        {/* Hero Header */}
        <div className="bg-[#028a04] text-white py-20 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">About FAABY Global Services</h1>
            <p className="text-xl md:text-2xl text-[#e6f7e9] max-w-3xl leading-relaxed">
              Established in 2022, FAABY Global Services is a livelihood innovation hub transforming waste into wealth through clean energy solutions, community capacity building, and climate-resilient livelihoods. The organization empowers women and youth through bio-briquette production, climate education, and health and safety training.
            </p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="max-w-7xl mx-auto px-4 pb-16 md:pb-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
            {/* Mission */}
            <div
              ref={(el) => { sectionRefs.current[0] = el; }}
              className="opacity-0 bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#028a04] flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#028a04] mb-6 leading-tight">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                FAABY Global Services is dedicated to creating sustainable solutions that address environmental challenges while empowering women and youth in underserved communities.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Through innovative waste-to-energy technologies and comprehensive training programs, we're building a cleaner, healthier future for all.
              </p>
            </div>

            {/* Vision */}
            <div
              ref={(el) => { sectionRefs.current[1] = el; }}
              className="opacity-0 bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#028a04] flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#028a04] mb-6 leading-tight">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                A cleaner, healthier, and more resilient society powered by innovation and sustainable energy.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We envision communities where waste is seen as a resource, where women and youth are economically empowered, and where clean energy is accessible to all.
              </p>
            </div>
          </div>

          {/* Geographic Reach Section */}
          <div
            ref={(el) => { sectionRefs.current[2] = el; }}
            className="opacity-0 bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 mb-20"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#028a04] mb-4">Geographic Reach</h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                FAABY Global Services operates across the BAY states – Borno, Adamawa, and Yobe – with expanding projects in Taraba State and other regions of Nigeria. Our work is community-driven, focusing on sustainable local solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="bg-[#e6f7e9] rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-[#028a04] mb-2">Borno</h3>
                <p className="text-gray-700 text-sm">Primary operations</p>
              </div>
              <div className="bg-[#e6f7e9] rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-[#028a04] mb-2">Adamawa</h3>
                <p className="text-gray-700 text-sm">Active projects</p>
              </div>
              <div className="bg-[#e6f7e9] rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-[#028a04] mb-2">Yobe</h3>
                <p className="text-gray-700 text-sm">Community engagement</p>
              </div>
              <div className="bg-[#e6f7e9] rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-[#028a04] mb-2">Taraba</h3>
                <p className="text-gray-700 text-sm">Expanding reach</p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div
            ref={(el) => { sectionRefs.current[3] = el; }}
            className="opacity-0 bg-gradient-to-br from-[#e6f7e9] to-white rounded-2xl p-8 md:p-12 mb-20 border border-[#028a04]/20"
          >
            <div className="text-center mb-10">
              <TrendingUp className="w-12 h-12 text-[#028a04] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#028a04] mb-4">Our Impact in Numbers</h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                Measurable results that demonstrate our commitment to creating positive change
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Counter end={600} suffix="+" label="Women Trained" />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Counter end={10000} suffix="+" label="Households Reached" />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Counter end={50} suffix="+" label="Tons of Biomass Converted" />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Counter end={25} suffix="%" label="Reduction in Fuel Costs" />
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#028a04] mb-4">Our Core Values</h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  ref={(el) => { valueRefs.current[idx] = el; }}
                  className="opacity-0 bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-lg bg-[#028a04] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-md">
                    {value.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#028a04] mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-[#028a04] py-16 md:py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-lg md:text-xl mb-8 text-[#e6f7e9] max-w-2xl mx-auto leading-relaxed">
              Together, we can build a cleaner, healthier future for communities across Nigeria. 
              Discover how you can be part of the change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-[#028a04] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e6f7e9] transition-all transform hover:scale-105 shadow-xl"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/impact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#028a04] transition-all transform hover:scale-105"
              >
                See Our Impact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </Layout>
  );
}
