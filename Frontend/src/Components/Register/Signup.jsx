import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  FiHeadphones,
  FiMusic,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { API } from "../../Context Api/AuthContext";
import logo from "../../assets/logo.png";


function Signup() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const roles = [
    {
      value: "user",
      title: "Listener",
      description: "Discover and enjoy music",
      icon: FiHeadphones,
    },
    {
      value: "artist",
      title: "Artist",
      description: "Create and share music",
      icon: FiMusic,
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!/^[a-zA-Z0-9_]{3,20}$/.test(formData.username)) {
      newErrors.username = "Username must be 3-20 characters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Register user
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await API.post("/api/auth/register", formData, { withCredentials: true });
      toast.success(response?.data?.message || "Account created successfully!");
      localStorage.setItem("verifyEmail", formData.email);
      navigate("/verify");
    }
    catch (err) {
      toast.error(err?.response?.data?.message || "Unable to create your account.");
    }
    finally {
      setLoading(false);
    }
  };

  // Common input styles
  const inputClass = (error) =>
    `w-full rounded-xl border ${error ? "border-red-500" : "border-white/10"
    } bg-neutral-800/70 px-4 py-3.5 text-sm text-white outline-none
        placeholder:text-zinc-500 transition
        focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20`;

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 px-4 py-8 text-white sm:px-6">

      {/* Background */}
      <div className="pointer-events-none absolute -left-40 -top-40 size-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-teal-500/10 blur-3xl" />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
              Every sound.
              <br />
              Every mood.
              <br />
              <span className="bg-linear-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
                Your universe.
              </span>
            </h1>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
              Discover music, explore new sounds and share
              your creativity. Your journey starts here.
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

        {/* Signup Section */}
        <section className="p-6 sm:p-10 lg:p-12">

          {/* Mobile Logo */}
          <div className="mb-9 flex items-center justify-center gap-3 lg:hidden">
            <img
              src={logo}
              alt="GaanaVerse"
              className="size-11 rounded-xl object-cover"
            />

            <span className="text-xl font-bold">
              Gaana<span className="text-emerald-400">Verse</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Get started
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Create account
            </h2>

            <p className="mt-3 text-sm text-zinc-400">
              Join GaanaVerse and find your rhythm.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

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
                placeholder="Choose a username"
                autoComplete="username"
                required
                className={inputClass(errors.username)}
              />

              {errors.username && (
                <p className="mt-2 text-xs text-red-400">
                  {errors.username}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Email address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
                className={inputClass(errors.email)}
              />

              {errors.email && (
                <p className="mt-2 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  required
                  className={`${inputClass(errors.password)} pr-12`}
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

              {errors.password && (
                <p className="mt-2 text-xs text-red-400">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Account Type */}
            <div>
              <label className="mb-3 block text-sm font-medium text-zinc-300">
                Choose your account type
              </label>

              <div className="grid grid-cols-2 gap-3">
                {roles.map((role) => {
                  const Icon = role.icon;
                  const selected = formData.role === role.value;

                  return (
                    <label
                      key={role.value}
                      className={`relative flex cursor-pointer flex-col items-center gap-3 rounded-2xl border p-4 text-center transition ${selected
                        ? "border-emerald-400 bg-emerald-400/10"
                        : "border-white/10 bg-neutral-800/50 hover:border-white/20"
                        }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={role.value}
                        checked={selected}
                        onChange={handleChange}
                        className="sr-only"
                      />

                      <div className={`flex size-12 items-center justify-center rounded-xl ${selected
                        ? "bg-emerald-400/20 text-emerald-400"
                        : "bg-neutral-700 text-zinc-400"
                        }`}>
                        <Icon size={23} />
                      </div>

                      <div>
                        <p className={`text-sm font-semibold ${selected ? "text-emerald-400" : "text-white"
                          }`}>
                          {role.title}
                        </p>

                        <p className="mt-1 text-xs text-zinc-500">
                          {role.description}
                        </p>
                      </div>

                      {selected && (
                        <FiCheckCircle
                          className="absolute right-3 top-3 text-emerald-400"
                          size={17}
                        />
                      )}
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Terms */}
            <p className="text-xs leading-5 text-zinc-500">
              By creating an account, you agree to our Terms of
              Service and Privacy Policy.
            </p>

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
                  Create account
                  <FiArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>

          {/* Login */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <span className="text-xs font-medium tracking-widest text-zinc-500">
              OR
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <p className="text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-emerald-400 transition hover:text-teal-300"
            >
              Log in
            </Link>
          </p>

          <p className="mt-8 text-center text-xs text-zinc-600 lg:hidden">
            Your Universe. Your Music.
          </p>
        </section>
      </motion.main>
    </div>
  );
}

export default Signup