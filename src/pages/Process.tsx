import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { 
  Package, 
  Factory, 
  ShoppingCart, 
  Truck,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  ArrowDown
} from 'lucide-react';
import Counter from '../components/Counter';

interface Step {
  number: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  details: string[];
  icon: React.ReactNode;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  stats: {
    value: number;
    label: string;
    suffix?: string;
  };
}

export default function Process() {
  const [selectedImages, setSelectedImages] = useState<Record<number, number>>({});
  const [autoPlay, setAutoPlay] = useState<Record<number, boolean>>({});
  const [activeStep, setActiveStep] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const stepRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const steps: Step[] = [
    {
      number: 1,
      title: 'Waste Collection',
      description: 'We collect agricultural waste materials such as rice chaffs, sawdust, and other biomass residues from local farmers and processing centers. Our partnerships ensure a steady supply of quality raw materials while supporting local agricultural communities.',
      image: '/Our process/Phase 1/Chaff.jpg',
      images: [
        '/Our process/Phase 1/Chaff.jpg',
        '/Our process/Phase 1/Chaff1.jpg',
        '/Our process/Phase 1/chaffsorting.jpg',
        '/Our process/Phase 1/Chaffsorting1.jpg',
        '/Our process/Phase 1/processedchaff.jpg'
      ],
      details: [
        'Partnership with local farmers and agricultural processors',
        'Collection of rice chaffs and other biomass materials',
        'Quality assessment and sorting of raw materials',
        'Sustainable sourcing practices that support local economies'
      ],
      icon: <Package className="w-6 h-6" />,
      color: '#028a04',
      gradientFrom: '#028a04',
      gradientTo: '#03ac13',
      stats: {
        value: 50,
        label: 'Tons Collected Monthly',
        suffix: '+'
      }
    },
    {
      number: 2,
      title: 'Processing',
      description: 'Our trained team mixes the collected biomass with binding agents and processes the materials to prepare them for briquette formation. This crucial step ensures consistency and quality in every briquette we produce.',
      image: '/Our process/Phase 2/grindedprocessedwaste.jpg',
      images: [
        '/Our process/Phase 2/grindedprocessedwaste.jpg',
        '/Our process/Phase 2/processedwatsesorting.jpg',
        '/Our process/Phase 2/processedwatsesorting1.jpg',
        '/Our process/Phase 2/wasteburner.jpg',
        '/Our process/Phase 2/wasteburner1.jpg'
      ],
      details: [
        'Mixing biomass materials with eco-friendly binders',
        'Moisture content adjustment for optimal consistency',
        'Thorough mixing to ensure uniform composition',
        'Quality control at every stage of processing'
      ],
      icon: <Factory className="w-6 h-6" />,
      color: '#028a04',
      gradientFrom: '#028a04',
      gradientTo: '#03ac13',
      stats: {
        value: 100,
        label: 'Kilograms Processed Per Hour',
        suffix: '+'
      }
    },
    {
      number: 3,
      title: 'Production',
      description: 'The processed mixture is pressed into briquettes using our specialized equipment, then carefully laid out to dry in controlled conditions. Our production process ensures uniform shape and optimal burning efficiency.',
      image: '/Our process/Phase 3/coalmolding.jpg',
      images: [
        '/Our process/Phase 3/coalmolding.jpg',
        '/Our process/Phase 3/coalmolding1.jpg',
        '/Our process/Phase 3/sunlightdrying.jpg',
        '/Our process/Phase 3/sunlightdrying1.jpg',
        '/Our process/Phase 3/coal sorting.jpg',
        '/Our process/Phase 3/processedwatsesolidification.jpg'
      ],
      details: [
        'Molding biomass into uniform briquette shapes',
        'Air drying in designated areas',
        'Quality control checks during the drying process',
        'Standardized production for consistent results'
      ],
      icon: <ShoppingCart className="w-6 h-6" />,
      color: '#028a04',
      gradientFrom: '#028a04',
      gradientTo: '#03ac13',
      stats: {
        value: 5000,
        label: 'Briquettes Produced Daily',
        suffix: '+'
      }
    },
    {
      number: 4,
      title: 'Packaging & Distribution',
      description: 'Finished briquettes are packaged into bags, stored in our warehouse, and distributed via our logistics network to households and businesses across Nigeria. Our efficient distribution ensures timely delivery to communities.',
      image: '/Our process/Phase 3/sunlightdrying.jpg',
      images: [
        '/Our process/Phase 3/sunlightdrying.jpg',
        '/Our process/Phase 3/sunlightdrying1.jpg',
        '/Our process/Phase 3/coal sorting.jpg'
      ],
      details: [
        'Packaging into durable bags for transport',
        'Warehouse storage and inventory management',
        'Distribution via trucks to communities nationwide',
        'Reaching thousands of households monthly'
      ],
      icon: <Truck className="w-6 h-6" />,
      color: '#028a04',
      gradientFrom: '#028a04',
      gradientTo: '#03ac13',
      stats: {
        value: 10000,
        label: 'Households Served Monthly',
        suffix: '+'
      }
    }
  ];

  const handleImageSelect = (stepNumber: number, imageIndex: number) => {
    setSelectedImages(prev => ({ ...prev, [stepNumber]: imageIndex }));
    // Reset autoplay when manually selecting
    setAutoPlay(prev => ({ ...prev, [stepNumber]: false }));
  };

  const handlePrevImage = (stepNumber: number) => {
    const step = steps.find(s => s.number === stepNumber);
    if (!step) return;
    const currentIndex = selectedImages[stepNumber] ?? 0;
    const prevIndex = currentIndex === 0 ? step.images.length - 1 : currentIndex - 1;
    handleImageSelect(stepNumber, prevIndex);
  };

  const handleNextImage = (stepNumber: number) => {
    const step = steps.find(s => s.number === stepNumber);
    if (!step) return;
    const currentIndex = selectedImages[stepNumber] ?? 0;
    const nextIndex = (currentIndex + 1) % step.images.length;
    handleImageSelect(stepNumber, nextIndex);
  };

  const toggleAutoPlay = (stepNumber: number) => {
    setAutoPlay(prev => ({ ...prev, [stepNumber]: !prev[stepNumber] }));
  };

  // Auto-rotate images
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    steps.forEach(step => {
      if (autoPlay[step.number] && step.images.length > 1) {
        const interval = setInterval(() => {
          handleNextImage(step.number);
        }, 4000); // 4 seconds
        intervals.push(interval);
      }
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [autoPlay, selectedImages]);

  // Scroll spy for active step
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-100px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepNumber = parseInt(entry.target.getAttribute('data-step') || '1');
          setActiveStep(stepNumber);
        }
      });
    }, observerOptions);

    Object.values(stepRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent, stepNumber: number) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (stepNumber: number) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNextImage(stepNumber);
    }
    if (isRightSwipe) {
      handlePrevImage(stepNumber);
    }
  };

  const scrollToStep = (stepNumber: number) => {
    const element = stepRefs.current[stepNumber];
    if (element) {
      // Account for sticky navigation height on mobile
      const navHeight = 80; // Navigation height
      const progressHeight = 80; // Progress indicator approximate height
      const offset = navHeight + progressHeight;
      
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getCurrentImageIndex = (stepNumber: number) => {
    return selectedImages[stepNumber] ?? 0;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-[#028a04] to-[#028a04] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">Our Process</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#e6f7e9] max-w-3xl leading-relaxed">
              From waste to clean energy: Discover our step-by-step journey transforming agricultural 
              waste into sustainable fuel for communities across Nigeria
            </p>
          </div>
        </div>

        {/* Sticky Progress Indicator */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
            <div className="flex items-center justify-start overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-2 md:pb-0" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {steps.map((step, idx) => (
                <div key={step.number} className="flex items-center flex-shrink-0 snap-start">
                  <button
                    onClick={() => scrollToStep(step.number)}
                    type="button"
                    className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-lg transition-all touch-manipulation ${
                      activeStep === step.number
                        ? 'bg-[#028a04] text-white shadow-md scale-105'
                        : 'text-gray-600 active:text-[#028a04] active:bg-gray-100'
                    }`}
                  >
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold transition-all flex-shrink-0 ${
                      activeStep === step.number
                        ? 'bg-white text-[#028a04]'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step.icon}
                    </div>
                    <span className="font-semibold whitespace-nowrap text-xs sm:text-sm md:text-base hidden sm:block">{step.title}</span>
                  </button>
                  {idx < steps.length - 1 && (
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400 mx-1 md:mx-2 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="space-y-32 md:space-y-40">
            {steps.map((step, idx) => (
              <div 
                key={step.number}
                ref={(el) => { stepRefs.current[step.number] = el; }}
                data-step={step.number}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Vertical Timeline */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#028a04] via-[#028a04] to-transparent transform -translate-x-1/2"
                    style={{ 
                      top: '50%',
                      bottom: '-12rem',
                      background: `linear-gradient(to bottom, ${step.color} 0%, transparent 100%)`
                    }}
                  ></div>
                )}

                <div className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-start`}>
                  {/* Image Section */}
                  <div className="md:w-1/2 w-full">
                    <div 
                      className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] group"
                      style={{
                        background: `linear-gradient(135deg, ${step.gradientFrom}15 0%, ${step.gradientTo}05 100%)`
                      }}
                    >
                      {/* Main Image */}
                      <div 
                        className="w-full h-full flex items-center justify-center bg-gray-50 relative overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchMove={(e) => handleTouchMove(e, step.number)}
                        onTouchEnd={() => handleTouchEnd(step.number)}
                      >
                        <img 
                          key={getCurrentImageIndex(step.number)}
                          src={step.images[getCurrentImageIndex(step.number)]} 
                          alt={step.title}
                          className="w-full h-full object-cover transform rotate-90 origin-center transition-all duration-500 hover:scale-110"
                        />
                        
                        {/* Navigation Arrows */}
                        {step.images.length > 1 && (
                          <>
                            <button
                              onClick={() => handlePrevImage(step.number)}
                              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 active:bg-white text-[#028a04] p-2 sm:p-3 rounded-full shadow-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity z-20 touch-manipulation"
                              aria-label="Previous image"
                              type="button"
                            >
                              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                            <button
                              onClick={() => handleNextImage(step.number)}
                              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 active:bg-white text-[#028a04] p-2 sm:p-3 rounded-full shadow-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity z-20 touch-manipulation"
                              aria-label="Next image"
                              type="button"
                            >
                              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                          </>
                        )}
                      </div>

                      {/* Step Number Badge */}
                      <div 
                        className="absolute top-4 left-4 text-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-2xl md:text-3xl font-bold shadow-xl animate-pulse-slow z-10"
                        style={{ 
                          background: `linear-gradient(135deg, ${step.gradientFrom} 0%, ${step.gradientTo} 100%)`
                        }}
                      >
                        <div className="flex flex-col items-center">
                          {step.icon}
                          <span className="text-sm mt-1">{step.number}</span>
                        </div>
                      </div>

                      {/* Auto-play Controls */}
                      {step.images.length > 1 && (
                        <button
                          onClick={() => toggleAutoPlay(step.number)}
                          className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/90 active:bg-white text-[#028a04] p-2 sm:p-3 rounded-full shadow-lg z-20 transition-all active:scale-110 touch-manipulation"
                          aria-label={autoPlay[step.number] ? 'Pause slideshow' : 'Play slideshow'}
                          type="button"
                        >
                          {autoPlay[step.number] ? (
                            <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                          ) : (
                            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                          )}
                        </button>
                      )}
                    </div>
                    
                    {/* Thumbnail Grid */}
                    {step.images.length > 1 && (
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                        {step.images.map((img, imgIdx) => (
                          <button
                            key={imgIdx}
                            onClick={() => handleImageSelect(step.number, imgIdx)}
                            type="button"
                            className={`relative overflow-hidden rounded-lg border-2 transition-all transform active:scale-105 touch-manipulation ${
                              getCurrentImageIndex(step.number) === imgIdx
                                ? 'border-[#028a04] shadow-md ring-2 ring-[#028a04]'
                                : 'border-gray-200 active:border-[#028a04]'
                            }`}
                          >
                            <div className="w-full h-24 md:h-28 flex items-center justify-center bg-gray-50 overflow-hidden">
                              <img
                                src={img}
                                alt={`${step.title} ${imgIdx + 1}`}
                                className="w-full h-full object-cover transform rotate-90 origin-center"
                              />
                            </div>
                            {getCurrentImageIndex(step.number) === imgIdx && (
                              <div className="absolute inset-0 bg-[#028a04]/20 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-[#028a04]"></div>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="md:w-1/2 w-full space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div 
                          className="p-3 rounded-lg text-white"
                          style={{ 
                            background: `linear-gradient(135deg, ${step.gradientFrom} 0%, ${step.gradientTo} 100%)`
                          }}
                        >
                          {step.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#028a04] uppercase tracking-wide">
                            Step {step.number}
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold text-[#028a04] leading-tight">
                            {step.title}
                          </h2>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="bg-gradient-to-br from-[#e6f7e9] to-white p-6 rounded-xl border border-[#028a04]/20">
                      <Counter 
                        end={step.stats.value} 
                        suffix={step.stats.suffix}
                        label={step.stats.label}
                        duration={2000}
                      />
                    </div>

                    {/* Details List */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-[#028a04]">Key Activities:</h3>
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIdx) => (
                          <li 
                            key={detailIdx} 
                            className="flex items-start animate-fade-in-up"
                            style={{ animationDelay: `${(detailIdx * 0.1) + (idx * 0.2)}s` }}
                          >
                            <svg 
                              className="w-6 h-6 text-[#028a04] mr-3 mt-1 flex-shrink-0" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path 
                                fillRule="evenodd" 
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                                clipRule="evenodd" 
                              />
                            </svg>
                            <span className="text-gray-700 text-base md:text-lg leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-24 md:mt-32 bg-gradient-to-br from-[#e6f7e9] via-[#028a04] to-[#028a04] rounded-2xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Learn More?</h2>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
                Our process combines traditional knowledge with modern technology to create sustainable energy solutions. 
                Contact us to visit our facilities or learn how you can get involved in transforming waste into clean energy.
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-white text-[#028a04] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e6f7e9] transition-all transform hover:scale-105 shadow-xl"
              >
                Contact Us
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
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </Layout>
  );
}
