import React from 'react';
import { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { User, Mail, Upload, LogOut } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS, BASE_URL } from '../utils/apiPaths';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user, updateUser, logout, loading: authLoading } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
      });
    }
  }, [user]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarUpload = async e => {
    const file = e.target.files[0];
    if (!file) return;

    const uploadFormData = new FormData();
    uploadFormData.append('coverImage', file); // uploadMiddleware expects 'coverImage' field name

    setIsUploading(true);
    try {
      const response = await axiosInstance.put(
        `${API_PATHS.AUTH.UPDATE_PROFILE}/avatar`,
        uploadFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      updateUser(response.data);
      toast.success('Profile picture updated!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to upload image.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.put(API_PATHS.AUTH.UPDATE_PROFILE, {
        name: formData.name,
      });
      updateUser(response.data);
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update profile.');
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading) {
    return <div className="flex h-screen items-center justify-center">Loading profile...</div>;
  }

  const avatarUrl = user?.avatar
    ? user.avatar.startsWith('http')
      ? user.avatar
      : `${BASE_URL}/${user.avatar}`.replace(/\\/g, '/')
    : '';

  return (
    <DashboardLayout activeMenu="profile">
      <div className="max-w-2xl mx-auto px-5 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Profile Settings</h1>
            <p className="text-sm text-slate-600 mt-1">Manage your account details and preferences.</p>
          </div>
          <Button variant="danger" icon={LogOut} onClick={logout}>
            Logout
          </Button>
        </div>

        <div className="space-y-8">
          {/* Avatar Section */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Profile Picture</h3>
            <div className="flex items-center gap-8">
              <div className="relative group">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="Profile"
                    className="w-24 h-24 rounded-2xl object-cover border-2 border-slate-100"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-violet-400 to-violet-500 flex items-center justify-center text-white text-3xl font-bold">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                )}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 text-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  disabled={isUploading}
                >
                  <Upload className="w-6 h-6" />
                </button>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Change Profile Photo</p>
                <p className="text-xs text-slate-500 mt-1 mb-4">Recommended: Square image, max 2MB.</p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleAvatarUpload}
                  className="hidden"
                  accept="image/*"
                />
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  isLoading={isUploading}
                >
                  Upload New Photo
                </Button>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Account Details</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Full Name"
                name="name"
                type="text"
                icon={User}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <InputField
                label="Email Address"
                name="email"
                type="email"
                icon={Mail}
                value={formData.email}
                disabled
              />
              <div className="flex justify-end pt-4">
                <Button type="submit" isLoading={isLoading} className="w-full sm:w-auto">
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
