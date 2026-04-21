import React from 'react';
import { useState, useEffect } from 'react';
import { Album } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ProfileDropdown from './ProfileDropdown';
import { BASE_URL } from '../../utils/apiPaths';

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const [profileDropDownOpen, setProfileDropDownOpen] = useState(false);

  const avatarUrl = user?.avatar
    ? user.avatar.startsWith('http')
      ? user.avatar
      : `${BASE_URL}/${user.avatar}`.replace(/\\/g, '/')
    : '';

  // Close Dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (profileDropDownOpen) {
        setProfileDropDownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  },[profileDropDownOpen])

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex flex-1 flex-col">
        <header className="bg-white/80 backdrop:blur-sm border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-3"
            >
              <div className="h-8 w-8 bg-linear-to-br from-violet-400 to-violet-500 rounded-lg flex items-center justify-center">
                <Album className="w-5 h-5 text-white" />
              </div>
              <span className="text-black font-bold text-xl">
                AI eBook Creator
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-3 cursor-pointer">
            <ProfileDropdown
              isOpen={profileDropDownOpen}
              onToggle={(e) => {
                e.stopPropagation();
                setProfileDropDownOpen(!profileDropDownOpen);
              }}
              avatar={avatarUrl}
              companyName={user?.name || ''}
              email={user?.email || ''}
              onLogout={logout}
            />
          </div>
        </header>

        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
