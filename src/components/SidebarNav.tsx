"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface NavItem {
  id: string;
  title: string;
  href?: string;
  icon?: React.ElementType;
  children?: NavItem[];
}

interface SidebarNavProps {
  navItems: NavItem[];
  sidebarTitle: string;
  activeSection: string; // Adicionando a propriedade activeSection aqui
}

const SidebarNav: React.FC<SidebarNavProps> = ({ navItems, sidebarTitle, activeSection }) => {
  const location = useLocation();
  const [openSubMenus, setOpenSubMenus] = React.useState<{ [key: string]: boolean }>({});

  const toggleSubMenu = (id: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => (
      <div key={item.id}>
        {item.children ? (
          <>
            <button
              onClick={() => toggleSubMenu(item.id)}
              className={cn(
                'flex items-center w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors',
                location.pathname.startsWith(item.href || '') && 'bg-gray-100 text-gray-900'
              )}
            >
              {item.icon && <item.icon className="mr-3 h-5 w-5" />}
              {item.title}
              {openSubMenus[item.id] ? (
                <ChevronUp className="ml-auto h-4 w-4" />
              ) : (
                <ChevronDown className="ml-auto h-4 w-4" />
              )}
            </button>
            {openSubMenus[item.id] && (
              <div className="ml-6 mt-1 space-y-1">
                {renderNavItems(item.children)}
              </div>
            )}
          </>
        ) : (
          <Link
            to={item.href || '#'}
            className={cn(
              'flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors',
              location.pathname === item.href && 'bg-gray-100 text-gray-900'
            )}
          >
            {item.icon && <item.icon className="mr-3 h-5 w-5" />}
            {item.title}
          </Link>
        )}
      </div>
    ));
  };

  return (
    <nav className="space-y-1">
      <h3 className="text-base font-semibold text-gray-900 mb-4 px-3">Guia do Franqueado</h3>

      {renderNavItems(navItems)}
    </nav>
  );
};

export default SidebarNav;