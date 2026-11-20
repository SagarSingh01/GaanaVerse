import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FiUser,
    FiMail,
    FiShield,
    FiMusic,
    FiHeadphones,
    FiCheckCircle,
    FiArrowLeft,
    FiArrowUpRight,
    FiLock,
    FiLogOut,
    FiAlertCircle
} from "react-icons/fi";
import useAuth, { API } from "../../Context Api/AuthContext";
import toast from "react-hot-toast";

const pageVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35 }
    }
};

function Profile() {
    const navigate = useNavigate();
    const { user, setUser } = useAuth();
    const [loggingOut, setLoggingOut] = useState(false);

    const isArtist = user?.role === "artist";
    const username = user?.username || "Music Lover";
    const initial = username.charAt(0).toUpperCase();
    const isVerified = Boolean(user?.verified);

    // GaanaVerse Neon Midnight Theme
    const theme = isArtist
        ? {
            accent: "text-fuchsia-400",
            soft: "bg-fuchsia-500/10",
            border: "border-fuchsia-500/20",
            gradient: "from-violet-600 via-fuchsia-700 to-purple-950",
            glow: "bg-fuchsia-500/20",
            label: "ARTIST",
            role: "Independent Artist",
            description:
                "Create your identity, share your creativity and build a community around your work.",
            banner: "Your creative journey starts here.",
            icon: FiMusic,
            cardHover: "hover:bg-[#171B32]",
            orb: "bg-violet-500/10",
            shadow: "shadow-fuchsia-500/10"
        }
        : {
            accent: "text-cyan-400",
            soft: "bg-cyan-500/10",
            border: "border-cyan-500/20",
            gradient: "from-cyan-600 via-blue-700 to-indigo-950",
            glow: "bg-cyan-500/20",
            label: "LISTENER",
            role: "Music Enthusiast",
            description:
                "Discover new sounds, explore different artists and make every listening moment yours.",
            banner: "Your music journey, your way.",
            icon: FiHeadphones,
            cardHover: "hover:bg-[#111D32]",
            orb: "bg-blue-500/10",
            shadow: "shadow-cyan-500/10"
        };

    const RoleIcon = theme.icon;

    const details = [
        {
            label: "Username",
            value: username,
            icon: FiUser
        },
        {
            label: "Email Address",
            value: user?.email || "Not available",
            icon: FiMail
        },
        {
            label: "Account Type",
            value: isArtist ? "Artist Account" : "Listener Account",
            icon: FiShield
        },
        {
            label: "Email Verification",
            value: isVerified ? "Verified" : "Not Verified",
            icon: isVerified ? FiCheckCircle : FiAlertCircle,
            verified: isVerified
        }
    ];

    const handleLogout = async () => {
        if (loggingOut) return;

        setLoggingOut(true);

        try {
            const res = await API.post("/api/auth/logout");

            setUser(null);
            toast.success(
                res?.data?.message || "Logged out successfully"
            );

            navigate("/login", { replace: true });
        } catch (err) {
            toast.error(
                err?.response?.data?.message || "Logout failed"
            );
        } finally {
            setLoggingOut(false);
        }
    };

    return (
        <motion.main
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            className="min-h-screen overflow-hidden bg-[#080B18] px-4 py-6 text-white sm:px-6 sm:py-10 lg:px-8"
        >
            {/* Background Glow */}
            <div className={`pointer-events-none fixed -left-40 top-20 size-96 rounded-full ${theme.orb} blur-[140px]`} />
            <div className={`pointer-events-none fixed -right-40 bottom-0 size-96 rounded-full ${theme.glow} blur-[140px]`} />

            <div className="relative mx-auto max-w-6xl">

                {/* PAGE HEADING */}
                <motion.div
                    variants={itemVariants}
                    className="mb-7 flex items-center justify-between gap-3 sm:mb-8"
                >
                    <div className="min-w-0">
                        <p className={`text-[10px] font-bold tracking-widest sm:text-xs ${theme.accent}`}>
                            ACCOUNT SETTINGS
                        </p>

                        <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl">
                            My Profile
                        </h1>

                        <p className="mt-2 text-xs text-zinc-400 sm:text-sm">
                            Manage your identity and account information.
                        </p>
                    </div>

                    <button
                        onClick={() => navigate(-1)}
                        className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-[#101629] px-3 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white sm:px-4"
                    >
                        <FiArrowLeft size={17} />
                        <span className="hidden sm:inline">Back</span>
                    </button>
                </motion.div>

                {/* PROFILE HERO */}
                <motion.section
                    variants={itemVariants}
                    className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#101629] shadow-2xl ${theme.shadow} sm:rounded-3xl`}
                >
                    <div className={`absolute -right-24 -top-32 size-80 rounded-full ${theme.glow} blur-3xl sm:size-96`} />
                    <div className={`absolute -bottom-40 left-1/3 size-72 rounded-full ${theme.orb} blur-3xl`} />

                    <div className="relative">

                        {/* COVER */}
                        <div className={`relative h-32 overflow-hidden bg-linear-to-br ${theme.gradient} sm:h-52`}>
                            <div className="absolute -right-12 -top-24 size-72 rounded-full border border-white/10" />
                            <div className="absolute right-16 top-12 size-40 rounded-full border border-white/10" />
                            <div className="absolute bottom-0 left-0 h-24 w-full bg-linear-to-t from-black/40 to-transparent" />

                            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 backdrop-blur-md sm:left-8 sm:top-8">
                                <RoleIcon size={15} />
                                <span className="text-[10px] font-bold tracking-widest">
                                    {isArtist ? "CREATOR SPACE" : "LISTENER SPACE"}
                                </span>
                            </div>
                        </div>

                        {/* IDENTITY */}
                        <div className="relative px-4 pb-6 sm:px-8 sm:pb-9">
                            <div className="-mt-12 flex flex-col gap-4 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">

                                <div className="flex min-w-0 items-end gap-3 sm:gap-5">

                                    {/* AVATAR */}
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 250
                                        }}
                                        title={username}
                                        className={`flex size-24 shrink-0 cursor-pointer items-center justify-center rounded-2xl border-4 border-[#101629] bg-linear-to-br ${theme.gradient} text-3xl font-extrabold shadow-2xl sm:size-36 sm:rounded-3xl sm:text-5xl`}
                                    >
                                        {initial}
                                    </motion.div>

                                    <div className="min-w-0 flex-1 pb-1 sm:pb-2">
                                        <p className={`mb-1 text-[10px] font-bold tracking-wider sm:mb-2 sm:text-xs ${theme.accent}`}>
                                            YOUR IDENTITY
                                        </p>

                                        <h2 className="wrap-break-word text-xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                                            {username}
                                        </h2>

                                        <p className="mt-1 text-xs text-zinc-400 sm:mt-2 sm:text-sm">
                                            {theme.role}
                                        </p>
                                    </div>
                                </div>

                                {/* ROLE BADGE */}
                                <div className={`flex w-fit shrink-0 items-center gap-2 self-start rounded-full border ${theme.border} ${theme.soft} px-3 py-2 text-[10px] font-bold tracking-wider ${theme.accent} sm:mb-2 sm:self-auto sm:px-4 sm:text-xs`}>
                                    <RoleIcon size={15} />
                                    {theme.label}
                                </div>
                            </div>

                            <div className="mt-6 border-t border-white/10 pt-4 sm:mt-7 sm:pt-5">
                                <p className="max-w-2xl text-xs leading-6 text-zinc-400 sm:text-sm">
                                    {theme.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ACCOUNT INFORMATION */}
                <motion.section
                    variants={itemVariants}
                    className="mt-8 sm:mt-10"
                >
                    <div className="mb-5">
                        <p className={`text-[10px] font-bold tracking-widest sm:text-xs ${theme.accent}`}>
                            PERSONAL INFORMATION
                        </p>

                        <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                            Account Details
                        </h3>

                        <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
                            Your registered account information.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                        {details.map(({ label, value, icon: Icon, verified }) => (
                            <motion.div
                                key={label}
                                variants={itemVariants}
                                whileHover={{ y: -3 }}
                                className={`group flex min-w-0 cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-[#101629] p-4 transition-all duration-200 hover:border-white/20 ${theme.cardHover} sm:gap-4 sm:p-5`}
                            >
                                <div
                                    className={`flex size-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110 sm:size-12 ${verified === undefined
                                            ? `${theme.soft} ${theme.accent}`
                                            : verified
                                                ? "bg-green-500/10 text-green-400"
                                                : "bg-amber-500/10 text-amber-400"
                                        }`}
                                >
                                    <Icon size={21} />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-medium text-zinc-500">
                                        {label}
                                    </p>

                                    <p
                                        className={`mt-1 wrap-break-word text-sm font-semibold ${verified === undefined
                                                ? "text-white"
                                                : verified
                                                    ? "text-green-400"
                                                    : "text-amber-400"
                                            }`}
                                    >
                                        {value}
                                    </p>
                                </div>

                                <FiArrowUpRight
                                    size={17}
                                    className={`shrink-0 text-zinc-700 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${theme.accent}`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* ACCOUNT BANNER */}
                <motion.section
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                    className={`relative mt-7 overflow-hidden rounded-2xl border ${theme.border} ${theme.soft} p-5 sm:mt-8 sm:p-7`}
                >
                    <div className={`absolute -right-10 -top-16 size-48 rounded-full ${theme.glow} blur-3xl`} />

                    <div className="relative flex min-w-0 items-center gap-3 sm:gap-4">
                        <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#080B18]/50 ${theme.accent} sm:size-14 sm:rounded-2xl`}>
                            <RoleIcon size={25} />
                        </div>

                        <div className="min-w-0">
                            <p className={`text-[10px] font-bold tracking-widest sm:text-xs ${theme.accent}`}>
                                YOUR SPACE
                            </p>

                            <h3 className="mt-1 text-base font-bold sm:text-xl">
                                {theme.banner}
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-zinc-400 sm:text-sm">
                                {isArtist
                                    ? "Keep creating, growing and building your identity."
                                    : "Keep discovering the music you love."
                                }
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* SIGN OUT */}
                <motion.section
                    variants={itemVariants}
                    className="mt-7 flex flex-col gap-4 rounded-2xl border border-red-500/15 bg-[#101629] p-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                >
                    <div className="flex min-w-0 items-center gap-3">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400 sm:size-12">
                            <FiLock size={21} />
                        </div>

                        <div className="min-w-0">
                            <h3 className="text-sm font-bold text-white sm:text-base">
                                Sign out of your account
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-zinc-500">
                                You will need to log in again to access your account.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handleLogout}
                        disabled={loggingOut}
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm font-bold text-red-400 transition-all duration-200 hover:border-red-500/40 hover:bg-red-500/20 hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                    >
                        <FiLogOut size={17} />
                        {loggingOut ? "Signing out..." : "Sign Out"}
                    </button>
                </motion.section>

                {/* FOOTER */}
                <div className="mt-7 flex items-center justify-center gap-2 pb-4 text-center text-[10px] text-zinc-600 sm:text-xs">
                    <FiLock size={13} className="shrink-0" />
                    Your account information is private and secure.
                </div>
            </div>
        </motion.main>
    );
}

export default Profile