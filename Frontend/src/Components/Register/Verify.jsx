import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaShieldAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import useAuth, { API } from "../../Context Api/AuthContext";
import logo from "../../assets/logo.png";

function Verify() {

    const navigate = useNavigate();
    const { setUser } = useAuth();
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const email = localStorage.getItem("verifyEmail");

    const handleVerify = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Verification email not found. Please sign up again.");
            return;
        }

        if (otp.length !== 6) {
            toast.error("Enter a valid 6-digit OTP");
            return;
        }

        setLoading(true);

        try {
            const response = await API.post("/api/auth/verify", { otp, email }, { withCredentials: true });
            setUser(response?.data?.user);
            localStorage.removeItem("verifyEmail");
            toast.success(response?.data?.message || "Email verified successfully");
            navigate("/", { replace: true });
        }
        catch (err) {
            toast.error(err?.response?.data?.message || "Verification failed");
        }
        finally {
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
                className="relative w-full max-w-lg"
            >
                {/* Card */}
                <div className="rounded-3xl border border-white/10 bg-neutral-900/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-10">

                    {/* Logo */}
                    <div className="mb-8 flex justify-center">
                        <img
                            src={logo}
                            alt="GaanaVerse"
                            className="size-16 rounded-2xl object-cover shadow-lg shadow-emerald-500/10"
                        />
                    </div>

                    {/* Icon */}
                    <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                        <FaEnvelope className="text-2xl text-emerald-400" />
                    </div>

                    {/* Heading */}
                    <div className="mt-7 text-center">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                            One last step
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight">
                            Verify your email
                        </h1>

                        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-400">
                            We've sent a verification code to your email.
                            Enter the code below to activate your account.
                        </p>
                    </div>

                    {/* Email */}
                    <div className="mt-7 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5">
                        <FaEnvelope className="shrink-0 text-sm text-emerald-400" />

                        <p className="min-w-0 truncate text-sm font-medium text-zinc-300">
                            {email || "Email address unavailable"}
                        </p>
                    </div>

                    {/* OTP Form */}
                    <form onSubmit={handleVerify} className="mt-8">

                        <label className="mb-3 block text-sm font-semibold text-zinc-300">
                            Enter 6-digit verification code
                        </label>

                        <div className="group relative">
                            {/* OTP Display */}
                            <div
                                className="flex justify-center gap-2 sm:gap-3"
                                aria-hidden="true"
                            >
                                {Array.from({ length: 6 }).map((_, i) => {
                                    const char = otp[i];
                                    const isActive =
                                        !loading && i === Math.min(otp.length, 5);

                                    return (
                                        <div
                                            key={i}
                                            className={`flex aspect-4/5 max-w-12 flex-1 items-center justify-center rounded-xl border bg-neutral-800 text-2xl font-bold tabular-nums transition sm:text-3xl ${i === 2 ? "mr-1 sm:mr-2" : ""
                                                } ${char
                                                    ? "border-emerald-400/60 bg-emerald-400/10 text-white"
                                                    : "border-white/10 text-zinc-600"
                                                } ${isActive
                                                    ? "group-focus-within:border-emerald-400 group-focus-within:ring-4 group-focus-within:ring-emerald-400/10"
                                                    : ""
                                                }`}
                                        >
                                            {char}

                                            {isActive && !char && (
                                                <span className="hidden h-7 w-0.5 animate-pulse rounded-full bg-emerald-400 group-focus-within:block" />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Actual Input */}
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                autoComplete="one-time-code"
                                autoFocus
                                maxLength={6}
                                value={otp}
                                readOnly={loading}
                                onChange={(e) =>
                                    setOtp(e.target.value.replace(/\D/g, ""))
                                }
                                required
                                aria-label="6-digit verification code"
                                className="absolute inset-0 h-full w-full cursor-text opacity-0"
                            />
                        </div>

                        {/* Progress */}
                        <div className="mt-5">
                            <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                                <div
                                    className="h-full rounded-full bg-linear-to-r from-emerald-400 to-teal-400 transition-all duration-300"
                                    style={{
                                        width: `${(otp.length / 6) * 100}%`,
                                    }}
                                />
                            </div>

                            <p
                                aria-live="polite"
                                className="mt-2 text-center text-xs text-zinc-500"
                            >
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
                            className="group mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-400 to-teal-400 py-3.5 text-sm font-bold text-neutral-950 shadow-lg shadow-emerald-500/10 transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                        >
                            {loading ? (
                                <span className="size-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                            ) : (
                                <>
                                    Verify email
                                    <FiArrowRight
                                        size={17}
                                        className="transition group-hover:translate-x-1"
                                    />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Security Note */}
                    <div className="mt-7 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                        <FaShieldAlt className="mt-0.5 shrink-0 text-sm text-emerald-400" />

                        <p className="text-xs leading-5 text-zinc-400">
                            Your account security matters. Never share your
                            verification code with anyone.
                        </p>
                    </div>

                    <p className="mt-6 text-center text-xs leading-5 text-zinc-500">
                        Didn't receive the code? Check your spam or junk folder.
                    </p>
                </div>

                {/* Footer */}
                <p className="mt-7 text-center text-xs tracking-wide text-zinc-600">
                    Your Universe. Your Music.
                </p>
            </motion.main>
        </div>
    );
}

export default Verify