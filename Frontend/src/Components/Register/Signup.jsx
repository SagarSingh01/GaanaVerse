import { useState } from 'react'
import { FaSpotify, FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { API } from "../../Context Api/AuthContext"
import toast from 'react-hot-toast'
import { FiHeadphones, FiMusic, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

function Signup() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user"
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!/^[a-zA-Z0-9_]{3,20}$/.test(formData.username)) {
      newErrors.username = "Username must be 3-20 characters and contain only letters, numbers or _"
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address"
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    try {
      setLoading(true)
      const response = await API.post("/api/auth/register", formData, { withCredentials: true })
      toast.success(response?.data.message || "User Registered Successfully")
      localStorage.setItem("verifyEmail", formData.email)
      navigate("/verify")
    }

    catch (err) {
      toast.error(err?.response.data.message || "User Already Exist")
    }

    finally {
      setLoading(false)
    }

  }


  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 px-4 py-10 text-white">
      {/* Background */}
      <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-green-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 size-96 rounded-full bg-violet-500/10 blur-[120px]" />

      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative mx-auto w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-neutral-900/90 p-7 shadow-2xl shadow-green-500/5 backdrop-blur-xl sm:p-10">

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="flex size-16 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10">
              <FaSpotify className="text-4xl text-green-500" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Create your account</h1>
          <p className="mt-3 text-center text-sm text-zinc-400">Join and start your music journey.</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-9 space-y-6">

            {/* Username */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-200">Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="John_Doe" required className={`w-full rounded-xl border ${errors.username ? "border-red-500" : "border-white/10"} bg-neutral-800/80 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20`} />
              {errors.username && <p className="mt-1.5 text-xs text-red-400">{errors.username}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-200">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john.doe@example.com" required className={`w-full rounded-xl border ${errors.email ? "border-red-500" : "border-white/10"} bg-neutral-800/80 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20`} />
              {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-200">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="John@spotify" required className={`w-full rounded-xl border ${errors.password ? "border-red-500" : "border-white/10"} bg-neutral-800/80 px-4 py-3.5 pr-12 text-white outline-none transition placeholder:text-zinc-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20`} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-400 transition hover:text-green-400">
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
              {errors.password && <p className="mt-1.5 text-xs text-red-400">{errors.password}</p>}
            </div>

            {/* Account Role */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-zinc-200">Choose your account type</label>
              <div className="grid grid-cols-2 gap-3">

                {/* Listener */}
                <label className={`relative flex cursor-pointer flex-col items-center gap-3 rounded-2xl border p-4 text-center transition-all duration-300 ${formData.role === "user" ? "border-green-500 bg-green-500/10 shadow-lg shadow-green-500/5" : "border-white/10 bg-neutral-800/80 hover:border-green-500/40"}`}>
                  <input type="radio" name="role" value="user" checked={formData.role === "user"} onChange={handleChange} className="sr-only" />
                  <motion.div animate={{ scale: formData.role === "user" ? 1.08 : 1 }} className={`flex size-14 items-center justify-center rounded-2xl ${formData.role === "user" ? "bg-green-500/20 text-green-400" : "bg-neutral-700 text-zinc-400"}`}>
                    <FiHeadphones size={28} />
                  </motion.div>
                  <div>
                    <p className={`font-bold ${formData.role === "user" ? "text-green-400" : "text-white"}`}>Listener</p>
                    <p className="mt-1 text-xs text-zinc-400">Discover and enjoy music</p>
                  </div>
                  {formData.role === "user" && <FiCheckCircle className="absolute right-3 top-3 text-green-400" size={18} />}
                </label>

                {/* Artist */}
                <label className={`relative flex cursor-pointer flex-col items-center gap-3 rounded-2xl border p-4 text-center transition-all duration-300 ${formData.role === "artist" ? "border-violet-500 bg-violet-500/10 shadow-lg shadow-violet-500/5" : "border-white/10 bg-neutral-800/80 hover:border-violet-500/40"}`}>
                  <input type="radio" name="role" value="artist" checked={formData.role === "artist"} onChange={handleChange} className="sr-only" />
                  <motion.div animate={{ scale: formData.role === "artist" ? 1.08 : 1 }} className={`flex size-14 items-center justify-center rounded-2xl ${formData.role === "artist" ? "bg-violet-500/20 text-violet-400" : "bg-neutral-700 text-zinc-400"}`}>
                    <FiMusic size={28} />
                  </motion.div>
                  <div>
                    <p className={`font-bold ${formData.role === "artist" ? "text-violet-400" : "text-white"}`}>Artist</p>
                    <p className="mt-1 text-xs text-zinc-400">Create and share music</p>
                  </div>
                  {formData.role === "artist" && <FiCheckCircle className="absolute right-3 top-3 text-violet-400" size={18} />}
                </label>
              </div>
              {errors.role && <p className="mt-1.5 text-xs text-red-400">{errors.role}</p>}
            </div>

            {/* Terms */}
            <p className="text-xs leading-6 text-zinc-500">By creating an account, you agree to our Terms of Service and Privacy Policy.</p>

            {/* Register */}
            <button type="submit" disabled={loading} className="flex w-full cursor-pointer items-center justify-center rounded-full bg-green-500 py-3.5 font-bold text-black shadow-lg shadow-green-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-green-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? <div className="size-5 animate-spin rounded-full border-2 border-black/30 border-t-black" /> : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs font-medium tracking-widest text-zinc-500">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Login */}
          <p className="text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-green-400 underline-offset-4 transition hover:text-green-300 hover:underline">Log in</Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">Your music. Your space. Your vibe.</p>
      </motion.div>
    </div>
  );

}

export default Signup