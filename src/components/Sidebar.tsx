import { 
  Calendar,
  Home,
  Briefcase,
  FileText,
  Users,
  LucideIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarItem {
  icon: LucideIcon;
  label: string;
  active: boolean;
  path?: string;
}

interface SidebarProps {
  activeItem?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem = 'Home' }) => {  const sidebarItems: SidebarItem[] = [
    { icon: Home, label: 'Home', active: activeItem === 'Home', path: '/dashboard' },
    { icon: Briefcase, label: 'Jobs', active: activeItem === 'Jobs', path: '/jobs' },
    { icon: Users, label: 'Candidates', active: activeItem === 'Candidates', path: '/candidates' },
    { icon: FileText, label: 'Reports', active: activeItem === 'Reports', path: '/reports' },
    { icon: Calendar, label: 'Calendar', active: activeItem === 'Calendar', path: '/calendar' },
  ];  return (
    <div className="w-24 text-white flex flex-col items-center py-8" style={{ backgroundColor: '#082777' }}>
      {/* Logo */}
      <div className="mb-12">
        <div className="w-10 h-10 flex items-center justify-center">
          {/* Location pin logo with blue and orange colors */}
          <svg width="28" height="36" viewBox="0 0 24 32" className="drop-shadow-sm">
            {/* Pin shape */}
            <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.344 6.314 3.515 8.485L12 32l8.485-11.515C22.656 18.314 24 15.314 24 12c0-6.627-5.373-12-12-12z" fill="#60A5FA"/>
            {/* Inner circle - orange */}
            <circle cx="12" cy="12" r="5" fill="#F97316"/>
            {/* Inner blue dot */}
            <circle cx="12" cy="10" r="2" fill="#3B82F6"/>
          </svg>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 flex flex-col space-y-8">
        {sidebarItems.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <Link
              to={item.path || '#'}
              className={`flex flex-col items-center p-2 transition-all duration-200 rounded-lg relative ${
                item.active 
                  ? 'text-white bg-white bg-opacity-10 scale-105' 
                  : 'text-blue-300 hover:text-white hover:bg-white hover:bg-opacity-5'
              }`}
            >
              <item.icon size={24} className="mb-2" />
              <span className={`text-xs font-medium text-center leading-tight ${
                item.active ? 'font-bold' : ''
              }`}>{item.label}</span>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
