import { Outlet } from 'react-router-dom';
import Header from './components/Cabecalho/Header';
import Footer from './components/Rodape/Footer';

export default function App() {
  return (
    <div className="bg-[#050816] text-[#ffffff] min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Header />
      <main className="mt-[100px] p-[40px_5%] max-w-[1400px] mx-auto w-full flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}