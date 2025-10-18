"use client";

import React, { useState } from 'react';
import SidebarNav from '@/components/SidebarNav'; // Importação corrigida para default export
import { Home, Users } from 'lucide-react';

// Definição da interface NavItem (pode ser importada de SidebarNav se for exportada)
interface NavItem {
  id: string;
  title: string;
  href?: string;
  icon?: React.ElementType;
  children?: NavItem[];
}

const FranqueadorPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home'); // Exemplo de estado para seção ativa

  // Itens de navegação específicos para o Franqueador
  const franqueadorNavItems: NavItem[] = [
    {
      id: 'home',
      title: 'Início',
      href: '/franqueador',
      icon: Home,
    },
    {
      id: 'franqueados',
      title: 'Gerenciar Franqueados',
      href: '/franqueador/franqueados',
      icon: Users,
    },
    // Adicione mais itens conforme necessário
  ];

  return (
    <div className="min-h-screen bg-gradient-fastdeal-bg font-verdana">
      <SidebarNav activeSection={activeSection} sidebarTitle="Guia Franqueador" navItems={franqueadorNavItems} />
      <main className="ml-64">
        {/* Conteúdo principal da página do Franqueador */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Bem-vindo, Franqueador!</h1>
          <p className="text-gray-700">Esta é a página inicial do seu painel de controle.</p>
          {/* Adicione mais conteúdo aqui */}
        </div>
      </main>
    </div>
  );
};

export default FranqueadorPage;