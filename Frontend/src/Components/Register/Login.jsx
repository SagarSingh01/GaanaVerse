import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useAuth, { API } from "../../Context Api/AuthContext";
import toast from "react-hot-toast";
import logo from "../../assets/logo.png";

function Login() {

  const { checkAuth } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Login user
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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 px-4 py-8 text-white sm:px-6">

      {/* Background */}
      <div className="pointer-events-none absolute -left-40 -top-40 size-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-teal-500/10 blur-3xl" />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/90 shadow-2xl lg:grid-cols-2"
      >

        {/* Branding Section */}
        <section className="relative hidden flex-col justify-between overflow-hidden border-r border-white/10 bg-linear-to-br from-emerald-950 via-neutral-900 to-neutral-950 p-12 lg:flex">

          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -right-20 top-20 size-80 rounded-full border border-emerald-400/10" />
          <div className="pointer-events-none absolute -right-8 top-32 size-56 rounded-full border border-emerald-400/10" />

          {/* Logo */}
          <div className="relative z-10 flex items-center gap-3">
            <img
              src={logo}
              alt="GaanaVerse"
              className="size-12 rounded-xl object-cover"
            />

            <span className="text-xl font-bold tracking-tight">
              Gaana<span className="text-emerald-400">Verse</span>
            </span>
          </div>

          {/* Main Content */}
          <div className="relative z-10 my-16">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              YOUR MUSIC UNIVERSE
            </span>

            <h1 className="text-5xl font-bold leading-tight tracking-tight">
              Your music.
              <br />
              Your moments.
              <br />
              <span className="bg-linear-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
                Your universe.
              </span>
            </h1>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
              Pick up where you left off. Explore your
              favourite sounds and discover something new.
            </p>

            {/* Music Visualizer */}
            <div className="mt-12 flex h-24 items-center gap-2">
              {[30, 55, 38, 78, 48, 95, 55, 75, 35, 65, 42, 85, 30, 55, 38].map(
                (height, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      height: [height, height * 0.5, height],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      delay: index * 0.08,
                    }}
                    className="w-1.5 rounded-full bg-linear-to-t from-emerald-500 to-teal-300"
                  />
                )
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex items-center gap-3 text-xs tracking-widest text-zinc-500">
            <span>LISTEN</span>
            <span className="text-emerald-400">•</span>
            <span>DISCOVER</span>
            <span className="text-emerald-400">•</span>
            <span>CREATE</span>
          </div>
        </section>

        {/* Login Section */}
        <section className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">

          {/* Mobile Logo */}
          <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">
            <img
              src={logo}
              alt="GaanaVerse"
              className="size-11 rounded-xl object-cover"
            />

            <span className="text-xl font-bold tracking-tight">
              Gaana<span className="text-emerald-400">Verse</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mb-9">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Welcome back
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Sign in
            </h2>

            <p className="mt-3 text-sm text-zinc-400">
              Your music universe is waiting for you.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Username */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                autoComplete="username"
                required
                className="w-full rounded-xl border border-white/10 bg-neutral-800/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-500 hover:border-white/20 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-zinc-300">
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-zinc-400 transition hover:text-emerald-400"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-white/10 bg-neutral-800/70 px-4 py-3.5 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-500 hover:border-white/20 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-emerald-400"
                >
                  {showPassword ? (
                    <FaEyeSlash size={17} />
                  ) : (
                    <FaEye size={17} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-400 to-teal-400 py-3.5 text-sm font-bold text-neutral-950 shadow-lg shadow-emerald-500/10 transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <span className="size-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
              ) : (
                <>
                  Log in
                  <FiArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs font-medium tracking-widest text-zinc-500">
              NEW HERE?
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Signup */}
          <p className="text-center text-sm text-zinc-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-emerald-400 transition hover:text-teal-300"
            >
              Create account
            </Link>
          </p>

          {/* Mobile Footer */}
          <p className="mt-8 text-center text-xs text-zinc-600 lg:hidden">
            Your Universe. Your Music.
          </p>
        </section>
      </motion.main>
    </div>
  );
}

export default Login