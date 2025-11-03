import Layout from '../components/Layout';
import PhotoGallery from '../components/PhotoGallery';

export default function Gallery() {
  return (
    <Layout>
      <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
        <div className="bg-gradient-to-r from-[#028a04] to-[#028a04] text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-xl text-[#e6f7e9]">Explore our programs, activities, and impact through images</p>
          </div>
        </div>

        <PhotoGallery />
      </div>
    </Layout>
  );
}

