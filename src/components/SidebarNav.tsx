import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarNavProps {
  sections: { id: string; title: string }[];
  activeSection: string | null;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ sections, activeSection }) => {
  return (
    <nav className="w-64 p-6 space-y-2 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto border-r border-gray-200 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Guia de Início Rápido</h2>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={cn(
            "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100",
            activeSection === section.id
              ? "bg-gradient-fastdeal text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          )}
        >
          {section.title}
        </a>
      ))}
    </nav>
  );
};

export default SidebarNav;