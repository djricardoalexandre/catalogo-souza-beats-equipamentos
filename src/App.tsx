import { useHashRoute, parseRoute } from '@/lib/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Home from '@/pages/Home';
import EquipmentPage from '@/pages/EquipmentPage';
import CategoryPage from '@/pages/CategoryPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import BrandsPage from '@/pages/BrandsPage';
import ContactPage from '@/pages/ContactPage';
import MonteSuaRadioPage from '@/pages/MonteSuaRadioPage';
import DiscontinuedPage from '@/pages/DiscontinuedPage';

function App() {
  const [route, navigate] = useHashRoute();
  const { segments, query } = parseRoute(route.path);

  let page: React.ReactNode;

  if (segments.length === 0) {
    page = <Home navigate={navigate} />;
  } else if (segments[0] === 'equipamentos') {
    page = <EquipmentPage navigate={navigate} query={query} />;
  } else if (segments[0] === 'categoria' && segments[1]) {
    page = <CategoryPage navigate={navigate} categoryId={segments[1]} />;
  } else if (segments[0] === 'produto' && segments[1]) {
    page = <ProductDetailPage navigate={navigate} productId={segments[1]} />;
  } else if (segments[0] === 'marcas') {
    page = <BrandsPage navigate={navigate} />;
  } else if (segments[0] === 'contato') {
    page = <ContactPage navigate={navigate} />;
  } else if (segments[0] === 'monte-sua-radio') {
    page = <MonteSuaRadioPage navigate={navigate} />;
  } else if (segments[0] === 'descontinuados') {
    page = <DiscontinuedPage navigate={navigate} />;
  } else {
    page = <Home navigate={navigate} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-ink-950">
      <Header navigate={navigate} />
      <main className="flex-1">{page}</main>
      <Footer navigate={navigate} />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
