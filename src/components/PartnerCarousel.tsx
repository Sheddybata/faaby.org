export default function PartnerCarousel() {
  const partners = [
    { image: '/partners/AfricanAiDTGLogo.png', name: 'African AiDTG' },
    { image: '/partners/batalearner.jpg', name: 'Bata Learner' },
    { image: '/partners/bornostateagencyforgreatgreenwall.jpg', name: 'Borno State Agency for Great Green Wall' },
    { image: '/partners/Bornostategovernment.png', name: 'Borno State Government' },
    { image: '/partners/bornostateministryofwomenaffairsandsocialdevelopment.png', name: 'Borno State Ministry of Women Affairs and Social Development' },
    { image: '/partners/BOSEPA.jpg', name: 'BOSEPA' },
    { image: '/partners/centerforaridzonestudies.png', name: 'Center for Arid Zone Studies' },
    { image: '/partners/FAO.png', name: 'Food and Agriculture Organization' },
    { image: '/partners/federalministryofenvironment.jpg', name: 'Federal Ministry of Environment' },
    { image: '/partners/genderequalitypeaceanddevelopmentcentre.jpg', name: 'Gender Equality Peace and Development Centre' },
    { image: '/partners/mercycorp.png', name: 'Mercy Corps' },
    { image: '/partners/Norwegianchurchaidactalliance.png', name: 'Norwegian Church Aid ACT Alliance' },
  ];

  return (
    <div className="bg-[#e6f7e9] py-10 sm:py-12 md:py-16 overflow-x-hidden w-full" style={{ position: 'relative', isolation: 'isolate' }}>
      <div className="max-w-7xl mx-auto px-4 overflow-x-hidden w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#028a04] mb-8 sm:mb-10 md:mb-12">Our Trusted Partners</h2>
        <div 
          className="relative overflow-hidden w-full max-w-full" 
          style={{ 
            contain: 'layout style paint',
            isolation: 'isolate',
            clipPath: 'inset(0)',
            maxWidth: '100%'
          }}
        >
          <div className="flex animate-scroll will-change-transform" style={{ willChange: 'transform' }}>
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 sm:w-44 md:w-48 h-24 sm:h-28 md:h-32 mx-4 sm:mx-5 md:mx-6 bg-white rounded-lg shadow-md flex items-center justify-center p-3 sm:p-4 group hover:shadow-xl transition-shadow"
                title={partner.name}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
