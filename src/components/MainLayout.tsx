import React, { useState, useEffect } from 'react';
import SidebarNav from './SidebarNav';
import WelcomeSection from './WelcomeSection';
import AccessPlatformSection from './AccessPlatformSection';
import InitialSettingsSection from './InitialSettingsSection';
import ToolOperationSection from './ToolOperationSection';
import SupportSection from './SupportSection';

const MainLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove o '#'
      setActiveSection(hash || 'bem-vindo'); // Define 'bem-vindo' como padrão se não houver hash
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Define a seção ativa inicial

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'bem-vindo':
        return <WelcomeSection />;
      case 'acesso-plataforma':
        return <AccessPlatformSection />;
      case 'configuracoes-iniciais':
        return <InitialSettingsSection />;
      case 'operacao-ferramenta':
      case 'geracao-midias':
      case 'minhas-midias':
      case 'agendador-post':
        return <ToolOperationSection />;
      case 'suporte':
        return <SupportSection />;
      default:
        return <WelcomeSection />; // Fallback
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarNav activeSection={activeSection} />
      <main className="flex-1 ml-64 p-8"> {/* Ajusta a margem para o conteúdo não ficar por baixo da sidebar */}
        {renderContent()}
      </main>
    </div>
  );
};

export default MainLayout;