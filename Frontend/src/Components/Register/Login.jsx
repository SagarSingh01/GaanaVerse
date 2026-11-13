
import React, { useState } from "react";
import { FaSpotify, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useAuth, { API } from "../../Context Api/AuthContext";
import toast from "react-hot-toast";

function Login() {
  const { checkAuth } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/api/auth/login", formData);
      await checkAuth();
      toast.success(res?.data?.message || "Login successful");
      navigate("/", { replace: true });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 px-4 py-10 text-white">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-green-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 size-96 rounded-full bg-emerald-500/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/10 bg-neutral-900/90 p-7 shadow-2xl shadow-green-500/5 backdrop-blur-xl sm:p-10">

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="flex size-16 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10">
              <FaSpotify className="text-4xl text-green-500" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Welcome back
          </h1>

          <p className="mt-3 text-center text-sm text-zinc-400">
            Log in to continue your music journey.
          </p>

          {/* Form */}
          <form className="mt-9 space-y-6" onSubmit={handleSubmit}>

            {/* Username */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-200">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="John_Doe"
                autoComplete="username"
                required
                className="w-full rounded-xl border border-white/10 bg-neutral-800/80 px-4 py-3.5 text-white outline-none transition-all duration-200 placeholder:text-zinc-500 hover:border-white/20 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-200">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="John@spotify"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-white/10 bg-neutral-800/80 px-4 py-3.5 pr-12 text-white outline-none transition-all duration-200 placeholder:text-zinc-500 hover:border-white/20 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-400 transition-colors hover:text-green-400"
                >
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-zinc-400 underline-offset-4 transition-colors hover:text-green-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full cursor-pointer items-center justify-center rounded-full bg-green-500 py-3.5 font-bold text-black shadow-lg shadow-green-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-green-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading ? (
                <div className="size-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
              ) : (
                "Log In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs font-medium tracking-widest text-zinc-500">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Signup */}
          <p className="text-center text-sm text-zinc-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-bold text-green-400 underline-offset-4 transition-colors hover:text-green-300 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">
          Your music. Your space. Your vibe.
        </p>
      </motion.div>
    </div>
  );
}

export default Login