import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  icon: React.ReactNode;
  rotateImage?: boolean;
}

export default function ServiceCard({ title, description, image, link, icon, rotateImage = false }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="h-48 overflow-hidden bg-gray-50 relative">
        <img 
          src={image} 
          alt={title} 
          className={`absolute inset-0 w-full h-full object-cover ${rotateImage ? 'transform rotate-90 scale-[2.5] origin-center' : ''}`}
        />
      </div>
      <div className="p-6">
        <div className="w-12 h-12 bg-[#028a04] rounded-lg flex items-center justify-center mb-4 text-white">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#028a04] mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-[#028a04] font-semibold hover:text-[#26c742] transition-colors"
        >
          Learn More 
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
