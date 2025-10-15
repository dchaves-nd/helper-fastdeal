import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, LogIn, Settings, Wrench, LifeBuoy, ChevronDown } from 'lucide-react';

interface NavItem {
  id: string;
  title: string;
  icon?: React.ElementType;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  { id: 'bem-vindo', title: 'Bem-vindo à Fastdeal!', icon: Sparkles },
  { id: 'acesso-plataforma', title: 'Acesso à plataforma', icon: LogIn },
  { id: 'configuracoes-iniciais', title: 'Configurações iniciais', icon: Settings },
  {
    id: 'operacao-ferramenta',
    title: 'Operação da Ferramenta',
    icon: Wrench,
    subItems: [
      { id: 'geracao-midias', title: 'Geração de mídias' },
      { id: 'minhas-midias', title: 'Minhas mídias' },
      { id: 'agendador-post', title: 'Agendador de post' },
    ],
  },
  { id: 'suporte', title: 'Suporte', icon: LifeBuoy },
];

interface SidebarNavProps {
  activeSection: string | null;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ activeSection }) => {
  return (
    <nav className="fixed top-0 left-0 w-64 h-screen p-6 space-y-2 border-r border-gray-200 bg-white shadow-md overflow-y-auto">
      <div className="mb-6 pb-4 border-b border-gray-200">
        <img
          src="https://s3.amazonaws.com/producao.spayce.com.br/1757606840194_fastdeal_logo_iso.png"
          alt="Fastdeal Logo"
          className="h-10 mx-auto"
        />
      </div>

      {navItems.map((item) => (
        <div key={item.id}>
          <a
            href={`#${item.id}`}
            className={cn(
              "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
              activeSection === item.id
                ? "bg-purple-100 text-purple-800 border-l-4 border-purple-500"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            )}
          >
            {item.icon && <item.icon className="h-4 w-4 mr-2" />}
            {item.title}
            {item.subItems && (
              <ChevronDown className={cn("ml-auto h-4 w-4 transition-transform", {
                "rotate-180": activeSection === item.id || item.subItems.some(sub => sub.id === activeSection)
              })} />
            )}
          </a>
          {item.subItems && (activeSection === item.id || item.subItems.some(sub => sub.id === activeSection)) && (
            <div className="ml-6 mt-1 space-y-1">
              {item.subItems.map((subItem) => (
                <a
                  key={subItem.id}
                  href={`#${subItem.id}`}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm transition-colors",
                    activeSection === subItem.id
                      ? "bg-purple-100 text-purple-800 border-l-4 border-purple-500" // Alterado para o estilo roxo
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  )}
                >
                  {subItem.title}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default SidebarNav;