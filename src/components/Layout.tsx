import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
      <Navigation />
      <main className="flex-1 overflow-x-hidden max-w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
