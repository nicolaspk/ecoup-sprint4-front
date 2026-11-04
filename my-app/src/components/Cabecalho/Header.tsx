import { useState } from 'react';
import { Link } from 'react-router-dom';

// Todas as páginas continuam acessíveis, sem sobrecarregar o menu principal.
const linksPrincipais = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/participar', label: 'Participar' },
  { to: '/simulador', label: 'Registrar ação' },
  { to: '/acoes', label: 'Ações' },
];

const outrosLinks = [
  { to: '/dashboard', label: 'Dados SoulUp' },
  { to: '/recompensas', label: 'Recompensas' },
  { to: '/faq', label: 'Perguntas frequentes' },
  { to: '/contato', label: 'Contato' },
  { to: '/integrantes', label: 'Integrantes' },
];

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [maisAberto, setMaisAberto] = useState(false);
  const [maisMobileAberto, setMaisMobileAberto] = useState(false);

  function fecharMenus() {
    setMenuAberto(false);
    setMaisAberto(false);
    setMaisMobileAberto(false);
  }

  const linkPrincipal = 'inline-flex items-center justify-center py-3 px-3 xl:px-4 rounded-lg text-white font-semibold text-[16px] hover:bg-[#00f5c8]/10 hover:text-[#00f5c8] focus-visible:outline-2 focus-visible:outline-[#00f5c8] transition-colors whitespace-nowrap';
  const linkSecundario = 'block w-full text-left py-3 px-4 rounded-lg text-white text-[15px] hover:bg-[#00f5c8]/10 hover:text-[#00f5c8] transition-colors';
  const linkCompacto = 'flex items-center rounded-xl px-4 py-3 text-white text-[16px] font-semibold hover:bg-[#00f5c8]/10 hover:text-[#00f5c8] focus-visible:outline-2 focus-visible:outline-[#00f5c8] transition-colors';

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] bg-[#10172a] border-b border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
      <div className="max-w-[1500px] mx-auto px-[5%] py-4 flex items-center justify-between gap-4">
        <Link to="/" className="text-[#00f5c8] text-[1.8rem] font-bold tracking-[1px] shrink-0" onClick={fecharMenus}>
          ECOUP
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {linksPrincipais.map((link) => (
            <Link key={link.to} to={link.to} className={linkPrincipal} onClick={fecharMenus}>
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              aria-expanded={maisAberto}
              aria-controls="menu-mais"
              onClick={() => setMaisAberto(!maisAberto)}
              className={`${linkPrincipal} cursor-pointer border border-white/10 ml-1`}
            >
              Mais <span aria-hidden="true" className="ml-2 text-[#00f5c8]">▾</span>
            </button>
            {maisAberto && (
              <div id="menu-mais" className="absolute right-0 top-full mt-2 w-[250px] bg-[#10172a] rounded-xl border border-white/15 shadow-[0_18px_36px_rgba(0,0,0,0.5)] p-2">
                {outrosLinks.map((link) => (
                  <Link key={link.to} to={link.to} className={linkSecundario} onClick={fecharMenus}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <button
          type="button"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          className="lg:hidden inline-flex items-center gap-2 border border-[#00f5c8]/70 text-[#00f5c8] font-semibold text-[16px] py-2.5 px-4 rounded-xl cursor-pointer hover:bg-[#00f5c8]/10"
          onClick={() => {
            setMenuAberto(!menuAberto);
            setMaisMobileAberto(false);
          }}
        >
          <span aria-hidden="true" className="text-xl leading-none">{menuAberto ? '×' : '☰'}</span>
          {menuAberto ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {menuAberto && (
        <nav
          id="menu-mobile"
          aria-label="Navegação em celular e tablet"
          className="lg:hidden absolute top-full right-[4%] sm:right-[5%] mt-2 w-[350px] max-w-[92vw] bg-[#10172a] border border-white/15 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] p-3 sm:p-4 max-h-[72vh] overflow-y-auto"
        >
          <p className="text-[#94a3b8] text-sm font-semibold px-3 pt-1 pb-2">Navegação</p>
          <div className="grid grid-cols-1 gap-1">
            {linksPrincipais.map((link) => (
              <Link key={link.to} to={link.to} className={linkCompacto} onClick={fecharMenus}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-2 pt-2 border-t border-white/10">
            <button
              type="button"
              aria-controls="menu-mobile-outras"
              aria-expanded={maisMobileAberto}
              className="w-full flex justify-between items-center rounded-xl px-4 py-3 text-[#00f5c8] text-[16px] font-semibold hover:bg-[#00f5c8]/10"
              onClick={() => setMaisMobileAberto(!maisMobileAberto)}
            >
              Outras páginas <span aria-hidden="true">{maisMobileAberto ? '▴' : '▾'}</span>
            </button>
            {maisMobileAberto && (
              <div id="menu-mobile-outras" className="grid grid-cols-1 gap-1 mt-1 pl-2">
                {outrosLinks.map((link) => (
                  <Link key={link.to} to={link.to} className={linkCompacto} onClick={fecharMenus}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
