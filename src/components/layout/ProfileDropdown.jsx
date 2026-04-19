import React from 'react';
import {ChevronDown} from 'lucide-react';
import {useNavigate} from 'react-router-dom';

const ProfileDropdown = ({isOpen, onToggle, avatar, companyName, email, onLogout}) => {
  const navigate = useNavigate();
  return (
    <div className='relative'>
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-lg border border-gray-200/80 hover:border-violet-200 hover:bg-violet-50/50 transition-colors duration-200"
      >
        {avatar ? (
          <img
            src={avatar}
            alt=""
            className="w-8 h-8 object-cover rounded-md"
          />
        ) : (
          <div className="w-8 h-8 bg-linear-to-br from-violet-400 to-violet-500 rounded-md flex items-center justify-center shrink-0">
            <span className="text-white font-semibold text-xs">{companyName.charAt(0).toUpperCase()}</span>
          </div>
        )}
        <div className="hidden sm:block text-left max-w-[140px]">
          <p className="text-xs font-semibold text-gray-900 truncate">{companyName}</p>
          <p className="text-[11px] text-gray-500 truncate">{email}</p>
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0" aria-hidden />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className='text-sm font-medium text-gray-900'>{companyName}</p>
            <p className='text-xs text-gray-500'>{email}</p>
          </div>
          <a onClick={() => navigate('/profile')} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer'>
            View Profile
          </a>
          <div className="border-t border-gray-100 mt-2 pt-2">
            <a href="#" onClick={onLogout} className='block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer'>
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
