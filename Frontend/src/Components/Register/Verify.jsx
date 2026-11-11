import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaEnvelope, FaShieldAlt } from "react-icons/fa"
import { toast } from "react-hot-toast"
import useAuth, { API } from "../../Context Api/AuthContext"

function Verify() {
    const navigate = useNavigate()
    const { setUser } = useAuth()
    const [otp, setOtp] = useState("")
    const [loading, setLoading] = useState(false)

    const email = localStorage.getItem("verifyEmail")

    const handleVerify = async (e) => {
        e.preventDefault()

        if (!email) return toast.error("Verification email not found. Please sign up again.")
        if (otp.length !== 6) return toast.error("Enter a valid 6-digit OTP")

        try {
            setLoading(true)
            const response = await API.post("/api/auth/verify", { otp, email }, { withCredentials: true })
            setUser(response?.data.user)
            localStorage.removeItem("verifyEmail")
            toast.success(response?.data.message || "Email verified successfully")
            navigate("/", { replace: true })
        } catch (err) {
            toast.error(err?.response?.data?.message || "Verification failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080808] px-4 py-10 text-white">

            {/* Background */}
            <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#1ed760]/10 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />

            <div className="relative w-full max-w-md">

                {/* Card */}
                <div className="rounded-3xl border border-white/8 bg-[#121212]/95 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-9">

                    {/* Icon */}
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#1ed760]/20 bg-[#1ed760]/10">
                        <FaEnvelope className="text-2xl text-[#1ed760]" />
                    </div>

                    {/* Heading */}
                    <div className="mt-7 text-center">
                        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                            Verify your email
                        </h1>
                        <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-zinc-400">
                            We've sent a verification code to your email. Enter the code below to activate your account.
                        </p>
                    </div>

                    {/* Email */}
                    <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/3 px-4 py-3">
                        <FaEnvelope className="shrink-0 text-sm text-zinc-500" />
                        <p className="min-w-0 truncate text-sm font-medium text-zinc-300">
                            {email || "Email address unavailable"}
                        </p>
                    </div>

                    {/* OTP Form */}
                    <form onSubmit={handleVerify} className="mt-8">

                        <label className="mb-3 block text-sm font-semibold text-zinc-300">
                            Enter 6-digit code
                        </label>

                        <div className="group relative">
                            <div className="flex justify-center gap-2 sm:gap-3" aria-hidden="true">
                                {Array.from({ length: 6 }).map((_, i) => {
                                    const char = otp[i]
                                    const isActive = !loading && i === Math.min(otp.length, 5)

                                    return (
                                        <div
                                            key={i}
                                            className={`flex aspect-4/5 max-w-12 flex-1 items-center justify-center rounded-xl border bg-[#1b1b1b] text-2xl font-bold tabular-nums transition-all sm:text-3xl ${i === 2 ? "mr-1.5 sm:mr-2" : ""
                                                } ${char
                                                    ? "border-[#1ed760]/60 bg-[#1ed760]/6 text-white"
                                                    : "border-white/10 text-zinc-600"
                                                } ${isActive
                                                    ? "group-focus-within:border-[#1ed760] group-focus-within:ring-4 group-focus-within:ring-[#1ed760]/10"
                                                    : ""
                                                }`}
                                        >
                                            {char}
                                            {isActive && !char && (
                                                <span className="hidden h-7 w-0.5 animate-pulse rounded-full bg-[#1ed760] group-focus-within:block" />
                                            )}
                                        </div>
                                    )
                                })}
                            </div>

                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                autoComplete="one-time-code"
                                autoFocus
                                maxLength={6}
                                value={otp}
                                readOnly={loading}
                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                                required
                                aria-label="6-digit verification code"
                                className="absolute inset-0 h-full w-full cursor-text opacity-0"
                            />
                        </div>

                        {/* Progress */}
                        <div className="mt-5">
                            <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                                <div
                                    className="h-full rounded-full bg-[#1ed760] transition-all duration-300"
                                    style={{ width: `${(otp.length / 6) * 100}%` }}
                                />
                            </div>

                            <p aria-live="polite" className="mt-2 text-center text-xs text-zinc-500">
                                {otp.length === 0
                                    ? "Type or paste your verification code"
                                    : otp.length === 6
                                        ? "Your code is ready to verify"
                                        : `${6 - otp.length} digits remaining`}
                            </p>
                        </div>

                        {/* Verify Button */}
                        <button
                            type="submit"
                            disabled={loading || otp.length !== 6}
                            className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#1ed760] py-3.5 text-sm font-bold text-black shadow-lg shadow-[#1ed760]/10 transition-all duration-200 hover:scale-[1.02] hover:bg-[#3be477] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1ed760]/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
                        >
                            {loading && (
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                            )}
                            {loading ? "Verifying..." : "Verify email"}
                        </button>
                    </form>

                    {/* Security Note */}
                    <div className="mt-7 flex items-start gap-3 rounded-xl border border-white/6 bg-white/2 p-4">
                        <FaShieldAlt className="mt-0.5 shrink-0 text-sm text-[#1ed760]" />
                        <p className="text-xs leading-5 text-zinc-500">
                            Your account security matters. Never share your verification code with anyone.
                        </p>
                    </div>

                    <p className="mt-6 text-center text-xs text-zinc-500">
                        Didn't receive the code? Check your spam or junk folder.
                    </p>
                </div>

                {/* Bottom */}
                <p className="mt-7 text-center text-xs text-zinc-600">
                    © {new Date().getFullYear()} Music. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Verify