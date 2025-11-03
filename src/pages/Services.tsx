import Layout from '../components/Layout';
import { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  Users, 
  Flame, 
  Handshake, 
  Beaker,
  ArrowRight,
  CheckCircle2,
  Leaf,
  ShieldCheck,
  Sprout
} from 'lucide-react';
import Counter from '../components/Counter';
import { Link } from 'react-router-dom';

interface Service {
  title: string;
  desc: string;
  benefits: string[];
  icon: React.ReactNode;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  image: string;
  rotateImage?: boolean;
  stats: {
    value: number;
    label: string;
    suffix?: string;
  };
}

export default function Services() {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services: Service[] = [
    {
      title: 'Eco-Briquettes Production & Distribution',
      desc: 'Clean, efficient, and affordable energy source. Converting agricultural waste into clean-burning fuel briquettes that reduce deforestation and provide sustainable energy alternatives.',
      benefits: [
        'Clean and efficient energy source',
        'Reduces carbon emissions significantly',
        'Affordable alternative to traditional fuels',
        'Creates income opportunities for communities'
      ],
      icon: <Flame className="w-8 h-8" />,
      color: '#028a04',
      gradientFrom: '#028a04',
      gradientTo: '#03ac13',
      image: '/BiomassBriquetteProduction.jpg',
      rotateImage: true,
      stats: {
        value: 50,
        label: 'Tons Produced Monthly',
        suffix: '+'
      }
    },
    {
      title: 'Climate Change & Environmental Consultancy',
      desc: 'Providing tailored community solutions for climate resilience and environmental sustainability through expert consultation and strategic planning.',
      benefits: [
        'Tailored community solutions',
        'Climate resilience planning',
        'Environmental impact assessment',
        'Sustainable development strategies'
      ],
      icon: <Leaf className="w-8 h-8" />,
      color: '#03ac13',
      gradientFrom: '#03ac13',
      gradientTo: '#26c742',
      image: '/ClimateChange&EnvironmentalConsultancy.jpg',
      stats: {
        value: 25,
        label: 'Communities Served',
        suffix: '+'
      }
    },
    {
      title: 'Health & Safety Training',
      desc: 'Occupational and environmental safety practices training to ensure safe working conditions and promote health awareness in communities.',
      benefits: [
        'Occupational safety training',
        'Environmental safety practices',
        'Health awareness programs',
        'Workplace safety standards'
      ],
      icon: <ShieldCheck className="w-8 h-8" />,
      color: '#26c742',
      gradientFrom: '#26c742',
      gradientTo: '#5ae077',
      image: '/Health&SafetyTraining.jpg',
      stats: {
        value: 600,
        label: 'People Trained',
        suffix: '+'
      }
    },
    {
      title: 'Agricultural & Green Projects',
      desc: 'Restoring degraded lands and promoting smart farming practices to enhance agricultural productivity and environmental sustainability.',
      benefits: [
        'Land restoration programs',
        'Smart farming techniques',
        'Sustainable agriculture practices',
        'Environmental conservation'
      ],
      icon: <Sprout className="w-8 h-8" />,
      color: '#5ae077',
      gradientFrom: '#5ae077',
      gradientTo: '#7df59f',
      image: '/CleanEnergyDistribution.jpg',
      rotateImage: true,
      stats: {
        value: 15,
        label: 'Projects Active',
        suffix: '+'
      }
    },
    {
      title: 'Livelihood Empowerment Hub',
      desc: 'Creating opportunities for women and youth through skills development, entrepreneurship training, and economic empowerment programs.',
      benefits: [
        'Skills development programs',
        'Women and youth empowerment',
        'Entrepreneurship training',
        'Economic opportunity creation'
      ],
      icon: <Users className="w-8 h-8" />,
      color: '#7df59f',
      gradientFrom: '#7df59f',
      gradientTo: '#a8fbc3',
      image: '/Research&Development.jpg',
      rotateImage: true,
      stats: {
        value: 1000,
        label: 'People Empowered',
        suffix: '+'
      }
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

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
        {/* Hero Header */}
        <div 
          className="bg-gradient-to-r from-[#028a04] to-[#03ac13] text-white py-20 md:py-24 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #028a04 0%, #03ac13 100%)'
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Services</h1>
            <p className="text-xl md:text-2xl text-[#e6f7e9] max-w-3xl leading-relaxed">
              Comprehensive solutions for sustainable development that transform waste into opportunity 
              and empower communities across Nigeria
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                ref={(el) => { serviceRefs.current[idx] = el; }}
                className="group opacity-0 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gray-50">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${service.rotateImage ? 'transform rotate-90 scale-[2.5] origin-center group-hover:scale-[2.7]' : 'group-hover:scale-105'}`}
                  />
                  <div className="absolute top-4 left-4 w-16 h-16 rounded-xl flex items-center justify-center text-white bg-[#028a04] shadow-xl transition-all group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#028a04] mb-3 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {service.desc}
                    </p>
                  </div>

                  {/* Statistics */}
                  <div 
                    className="mb-6 p-4 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${service.gradientFrom}15 0%, ${service.gradientTo}10 100%)`
                    }}
                  >
                    <Counter 
                      end={service.stats.value} 
                      suffix={service.stats.suffix}
                      label={service.stats.label}
                      duration={2000}
                    />
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h3 className="font-bold text-[#028a04] mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Key Benefits:
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li 
                          key={i} 
                          className="flex items-start text-gray-700 text-sm md:text-base"
                        >
                          <svg 
                            className="w-5 h-5 text-[#028a04] mr-3 mt-0.5 flex-shrink-0" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                          <span className="leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Call to Action */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-semibold text-white bg-[#028a04] hover:bg-[#03ac13] transition-all transform hover:scale-105 hover:shadow-lg"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div 
          className="bg-[#028a04] py-16 md:py-20 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl mb-8 text-[#e6f7e9] max-w-2xl mx-auto leading-relaxed">
              Join us in creating sustainable change. Contact us today to learn how our services 
              can benefit your community or organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white text-[#028a04] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e6f7e9] transition-all transform hover:scale-105 shadow-xl"
              >
                Contact Us
              </Link>
              <Link
                to="/process"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#028a04] transition-all transform hover:scale-105"
              >
                View Our Process
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
