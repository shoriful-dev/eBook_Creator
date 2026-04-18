import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, BookOpen } from "lucide-react";
import toast from "react-hot-toast";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";


const SignupPage = () => {
  const [formData, setformData] = useState({ name: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axiosInstance.post(API_PATHS.AUTH.REGISTER, formData);
      toast.success("Account created successfully. Please login.");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-violet-400 to-violet-600 rounded-full mb-4 shadow-md">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Create an Account</h1>
          <p className="text-slate-600 mt-2">
            Start your journey of creating amazing eBooks today.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
            label={'Full Name'}
            name={'name'}
            type={'text'}
            placeholder={'John Doe'}
            icon={User}
            value={formData.name}
            onChange={handleChange}
            required  
            />
            <InputField
            label={'Email'}
            name={'email'}
            type={'email'}
            placeholder={'you@example.com'}
            icon={Mail}
            value={formData.email}
            onChange={handleChange}
            required  
            />
            <InputField
            label={'Password'}
            name={'password'}
            type={'password'}
            placeholder={'********'}
            icon={Lock}
            value={formData.password}
            onChange={handleChange}
            required  
            />
            <Button type={'submit'} isLoading={isLoading} className="w-full">
              Create Account
            </Button>
          </form>
            <p className="text-sm text-center text-slate-600 mt-8">
              Already have an account?{" "}
              <Link to="/login" className="text-violet-600 font-medium hover:text-violet-700">
                Sign in
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
