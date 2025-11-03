import { useState } from 'react';
import { X, Play } from 'lucide-react';

interface GalleryItem {
  image: string;
  title: string;
  type?: 'image' | 'video';
  videoId?: string;
}

// Function to format filename to readable title
const formatTitle = (filename: string): string => {
  // Remove file extension
  const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png|gif|webp|mp4|mov)$/i, '');
  
  // Handle common patterns
  let formatted = nameWithoutExt
    // Add space before capital letters (camelCase)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // Add space before numbers
    .replace(/([a-zA-Z])([0-9])/g, '$1 $2')
    // Add space after numbers followed by letters
    .replace(/([0-9])([a-zA-Z])/g, '$1 $2')
    // Replace common abbreviations
    .replace(/\bED\b/g, 'ED')
    .replace(/\bUNDP\b/g, 'UNDP')
    .replace(/\bFOA\b/g, 'FOA')
    .replace(/\bEU\b/g, 'EU')
    // Capitalize first letter of each word
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  
  return formatted;
};

const galleryImages: GalleryItem[] = [
  { image: '/photo gallery/briquettedryingtour.jpg', title: 'Briquette Drying Tour', type: 'image' },
  { image: '/photo gallery/Briquettesgrinderinspection.jpg', title: 'Briquettes Grinder Inspection', type: 'image' },
  { image: '/photo gallery/Briquettesinalocalstove.jpg', title: 'Briquettes in a Local Stove', type: 'image' },
  { image: '/photo gallery/Briquettesmassdrying.jpg', title: 'Briquettes Mass Drying', type: 'image' },
  { image: '/photo gallery/Briquettesmassdryingwithwomen.jpg', title: 'Briquettes Mass Drying with Women', type: 'image' },
  { image: '/photo gallery/Briquettesusedinlocalgrilling.jpg', title: 'Briquettes Used in Local Grilling', type: 'image' },
  { image: '/photo gallery/briquiettedrying.jpg', title: 'Briquette Drying', type: 'image' },
  { image: '/photo gallery/bulkdrying.jpg', title: 'Bulk Drying', type: 'image' },
  { image: '/photo gallery/burnchaffprocessing.jpg', title: 'Burn Chaff Processing', type: 'image' },
  { image: '/photo gallery/burnedchaff.jpg', title: 'Burned Chaff', type: 'image' },
  { image: '/photo gallery/burnedchaffsorting.jpg', title: 'Burned Chaff Sorting', type: 'image' },
  { image: '/photo gallery/burnerillustrationwiththeed.jpg', title: 'Burner Illustration with the ED', type: 'image' },
  { image: '/photo gallery/burningprocess.jpg', title: 'Burning Process', type: 'image' },
  { image: '/photo gallery/capacitybuildingforbeneficiariesandfacilitators.jpg', title: 'Capacity Building for Beneficiaries and Facilitators', type: 'image' },
  { image: '/photo gallery/drying.jpg', title: 'Drying', type: 'image' },
  { image: '/photo gallery/dryingprocess.jpg', title: 'Drying Process', type: 'image' },
  { image: '/photo gallery/excursionwithmedicalstudent.jpg', title: 'Excursion with Medical Student', type: 'image' },
  { image: '/photo gallery/foaeugrouppictures.jpg', title: 'FOA EU Group Pictures', type: 'image' },
  { image: '/photo gallery/grindedrawmaterial.jpg', title: 'Grinded Raw Material', type: 'image' },
  { image: '/photo gallery/grinder.jpg', title: 'Grinder', type: 'image' },
  { image: '/photo gallery/grounedburnedchaff.jpg', title: 'Grounded Burned Chaff', type: 'image' },
  { image: '/photo gallery/grouppictureswithbeneficiariesandfacilitators.jpg', title: 'Group Pictures with Beneficiaries and Facilitators', type: 'image' },
  { image: '/photo gallery/grouppictureswithbeneficiariesandfacilitatorsUNDP.jpg', title: 'Group Pictures with Beneficiaries and Facilitators UNDP', type: 'image' },
  { image: '/photo gallery/grouppictureswithfacilitators.jpg', title: 'Group Pictures with Facilitators', type: 'image' },
  { image: '/photo gallery/grouppictureswithfacilitatorsfoa.jpg', title: 'Group Pictures with Facilitators FOA', type: 'image' },
  { image: '/photo gallery/grouppictureswithmedicalstudents.jpg', title: 'Group Pictures with Medical Students', type: 'image' },
  { image: '/photo gallery/grouppictureswithstaff.jpg', title: 'Group Pictures with Staff', type: 'image' },
  { image: '/photo gallery/localwatsesitecollection.jpg', title: 'Local Waste Site Collection', type: 'image' },
  { image: '/photo gallery/materialsneededforBriquettesmaking.jpg', title: 'Materials Needed for Briquettes Making', type: 'image' },
  { image: '/photo gallery/mealscookedbyproducedBriquettes.jpg', title: 'Meals Cooked by Produced Briquettes', type: 'image' },
  { image: '/photo gallery/moldingprocesss.jpg', title: 'Molding Process', type: 'image' },
  { image: '/photo gallery/moldingprocesswithed.jpg', title: 'Molding Process with ED', type: 'image' },
  { image: '/photo gallery/moldprocess.jpg', title: 'Mold Process', type: 'image' },
  { image: '/photo gallery/packagedBriquettes.jpg', title: 'Packaged Briquettes', type: 'image' },
  { image: '/photo gallery/programmealscookedbyproducedBriquettes.jpg', title: 'Program Meals Cooked by Produced Briquettes', type: 'image' },
  { image: '/photo gallery/qualityassuranceandaccountability.jpg', title: 'Quality Assurance and Accountability', type: 'image' },
  { image: '/photo gallery/sunlightdrying.jpg', title: 'Sunlight Drying', type: 'image' },
  { image: '/photo gallery/tourexcursionwithmedicalstudents.jpg', title: 'Tour Excursion with Medical Students', type: 'image' },
  { image: '/photo gallery/womenempowermentsession.jpg', title: 'Women Empowerment Session', type: 'image' },
  { image: '/photo gallery/womenempowermentsessionsorting.jpg', title: 'Women Empowerment Session Sorting', type: 'image' },
  { image: '/photo gallery/womenempowermentsessionwiththeed.jpg', title: 'Women Empowerment Session with the ED', type: 'image' },
  { image: 'https://img.youtube.com/vi/YM6kV9RuTqc/maxresdefault.jpg', title: 'Program Video', type: 'video', videoId: 'YM6kV9RuTqc' },
  { image: 'https://img.youtube.com/vi/4D27y1zZFi0/maxresdefault.jpg', title: 'Program Video (Short)', type: 'video', videoId: '4D27y1zZFi0' },
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#028a04] mb-3 sm:mb-4">Photo Gallery</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">Capturing our programs, impact, and moments of transformation</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                onClick={() => openLightbox(item)}
                className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden active:shadow-xl transition-all duration-300 active:-translate-y-1 touch-manipulation"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#028a04] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-semibold line-clamp-2">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full w-full">
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white active:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2 sm:p-3 touch-manipulation"
              aria-label="Close"
              type="button"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedImage.type === 'video' && selectedImage.videoId ? (
              <div className="w-full" onClick={(e) => e.stopPropagation()}>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedImage.videoId}?autoplay=1`}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={selectedImage.title}
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-lg inline-block">
                    {selectedImage.title}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-lg inline-block">
                    {selectedImage.title}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

