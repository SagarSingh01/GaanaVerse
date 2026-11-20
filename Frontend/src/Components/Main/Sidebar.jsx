import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import {
    FiX, FiUser, FiLogOut, FiHome, FiSearch,
    FiBell, FiGrid, FiMusic, FiBarChart2,
    FiUpload, FiList, FiHeadphones, FiChevronRight
} from "react-icons/fi";

function Sidebar({ isOpen, onClose, user, onLogout }) {

    const navigate = useNavigate();
    const isArtist = user?.role === "artist";
    const username = user?.username || "User";

    const theme = isArtist
        ? {
            accent: "text-fuchsia-400",
            active: "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-300 shadow-lg shadow-fuchsia-500/5",
            hover: "hover:border-fuchsia-500/10 hover:bg-fuchsia-500/5 hover:text-fuchsia-300",
            avatar: "from-violet-500 via-fuchsia-500 to-pink-500",
            iconBg: "bg-fuchsia-500/10 text-fuchsia-400",
            indicator: "bg-fuchsia-400 shadow-[0_0_10px_#E879F9]",
            glow: "shadow-fuchsia-500/10",
            icon: <FiMusic size={23} />,
            activeIcon: "text-fuchsia-300",
            activeBar: "bg-fuchsia-400 shadow-[0_0_12px_#E879F9]",
            activeGlow: "bg-fuchsia-400/5",
        }
        : {
            accent: "text-cyan-400",
            active: "border-cyan-500/20 bg-cyan-500/10 text-cyan-300 shadow-lg shadow-cyan-500/5",
            hover: "hover:border-cyan-500/10 hover:bg-cyan-500/5 hover:text-cyan-300",
            avatar: "from-cyan-400 via-blue-500 to-indigo-500",
            iconBg: "bg-cyan-500/10 text-cyan-400",
            indicator: "bg-cyan-400 shadow-[0_0_10px_#22D3EE]",
            glow: "shadow-cyan-500/10",
            icon: <FiHeadphones size={23} />,
            activeIcon: "text-cyan-300",
            activeBar: "bg-cyan-400 shadow-[0_0_12px_#22D3EE]",
            activeGlow: "bg-cyan-400/5",
        };

    const menuItems = isArtist
        ? [
            { label: "Overview", path: "/artist", icon: FiGrid, end: true },
            { label: "My Music", path: "/artist/music", icon: FiMusic },
            { label: "Analytics", path: "/artist/analytics", icon: FiBarChart2 },
            { label: "Upload Music", path: "/artist/upload", icon: FiUpload },
            { label: "Manage Tracks", path: "/artist/tracks", icon: FiList }
        ]
        : [
            { label: "Home", path: "/", icon: FiHome, end: true },
            { label: "Search", path: "/search", icon: FiSearch },
            { label: "Your Library", path: "/library", icon: FiMusic },
            { label: "Notifications", path: "/notifications", icon: FiBell }
        ];

    const handleProfile = () => {
        navigate(isArtist ? "/artist/profile" : "/profile");
        onClose();
    };

    const handleLogout = () => {
        onClose();
        onLogout();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={onClose}
                        className="fixed inset-0 z-60 bg-black/75 backdrop-blur-md"
                    />

                    {/* Sidebar */}
                    <motion.aside
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`fixed inset-y-0 left-0 z-70 flex w-80 max-w-[85vw] flex-col overflow-hidden border-r border-white/10 bg-[#080B18] shadow-2xl ${theme.glow}`}
                    >
                        {/* Neon Background Effects */}
                        <div className={`pointer-events-none absolute -left-24 top-24 size-64 rounded-full blur-[120px] ${isArtist ? "bg-fuchsia-600/10" : "bg-cyan-500/10"}`} />

                        <div className={`pointer-events-none absolute -bottom-24 -right-24 size-64 rounded-full blur-[120px] ${isArtist ? "bg-violet-600/10" : "bg-blue-600/10"}`} />

                        {/* Brand Header */}
                        <div className="relative flex items-center justify-between border-b border-white/5 px-5 py-5">
                            <div className="flex items-center gap-3">
                                <div className={`flex size-11 items-center justify-center rounded-xl border border-white/10 ${theme.iconBg}`}>
                                    {theme.icon}
                                </div>

                                <div>
                                    <h2 className="text-base font-bold tracking-tight text-white">
                                        Gaana<span className={theme.accent}>Verse</span>
                                    </h2>

                                    <p className="mt-0.5 text-xs text-zinc-500">
                                        {isArtist ? "Your Creative Space" : "Your Universe. Your Music."}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                aria-label="Close sidebar"
                                className="cursor-pointer rounded-lg p-2 text-zinc-500 transition hover:bg-white/5 hover:text-white"
                            >
                                <FiX size={20} />
                            </button>
                        </div>

                        {/* User Profile */}
                        <div className="relative border-b border-white/5 p-5">
                            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 p-3 transition hover:border-white/15 hover:bg-white/5">
                                <div className={`flex size-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${theme.avatar} text-lg font-bold text-white shadow-lg`}>
                                    {username.charAt(0).toUpperCase()}
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-semibold text-white">
                                        {username}
                                    </p>

                                    <p className={`mt-1 text-xs font-medium capitalize ${theme.accent}`}>
                                        {user?.role || "Listener"}
                                    </p>
                                </div>

                                <button
                                    onClick={handleProfile}
                                    aria-label="View profile"
                                    className={`cursor-pointer rounded-lg p-2 text-zinc-500 transition hover:bg-white/5 ${theme.accent}`}
                                >
                                    <FiChevronRight size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="relative flex-1 overflow-y-auto px-4 py-6">
                            <p className={`mb-4 px-3 text-[11px] font-bold tracking-[0.2em] ${theme.accent} opacity-80`}>
                                {isArtist ? "CREATOR STUDIO" : "EXPLORE"}
                            </p>

                            <div className="space-y-1.5">
                                {menuItems.map(({ label, path, icon: Icon, end }) => (
                                    <NavLink
                                        key={path}
                                        to={path}
                                        end={end}
                                        onClick={onClose}
                                        className={({ isActive }) => `
                                            group relative flex cursor-pointer items-center gap-3
                                            overflow-hidden rounded-xl border px-3.5 py-3
                                            text-sm font-medium transition-all duration-200
                                            ${isActive
                                                ? theme.active
                                                : `border-transparent text-zinc-400 ${theme.hover}`
                                            }
                                        `}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {/* Active background glow */}
                                                {isActive && (
                                                    <motion.span
                                                        layoutId="sidebar-active-glow"
                                                        className={`absolute inset-0 ${theme.activeGlow}`}
                                                        transition={{ duration: 0.25 }}
                                                    />
                                                )}

                                                {/* Active left indicator */}
                                                <motion.span
                                                    initial={false}
                                                    animate={{
                                                        opacity: isActive ? 1 : 0,
                                                        scaleY: isActive ? 1 : 0.4,
                                                    }}
                                                    className={`absolute left-0 top-2 bottom-2 w-1 rounded-r-full ${theme.activeBar}`}
                                                />

                                                <Icon
                                                    size={19}
                                                    className={`relative z-10 shrink-0 transition-transform duration-200 group-hover:scale-110 ${isActive ? theme.activeIcon : ""
                                                        }`}
                                                />

                                                <span className="relative z-10 flex-1">
                                                    {label}
                                                </span>

                                                {isActive && (
                                                    <motion.span
                                                        initial={{ scale: 0, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        className={`relative z-10 size-1.5 rounded-full ${theme.indicator}`}
                                                    />
                                                )}
                                            </>
                                        )}
                                    </NavLink>
                                ))}
                            </div>
                        </nav>

                        {/* Footer Actions */}
                        <div className="relative border-t border-white/5 p-4">
                            <button
                                onClick={handleProfile}
                                className={`group flex w-full cursor-pointer items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-zinc-400 transition ${theme.hover}`}
                            >
                                <FiUser size={19} className="transition group-hover:scale-110" />
                                Account Settings
                            </button>

                            <button
                                onClick={handleLogout}
                                className="group mt-1 flex w-full cursor-pointer items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
                            >
                                <FiLogOut size={19} className="transition-transform duration-200 group-hover:translate-x-1" />
                                Sign Out
                            </button>

                            <div className="mt-5 border-t border-white/5 pt-4">
                                <p className={`px-3 text-[10px] font-black tracking-[0.25em] ${theme.accent}`}>
                                    GAANAVERSE
                                </p>

                                <p className="mt-1 px-3 text-[10px] font-medium tracking-wider text-zinc-500">
                                    MUSIC. CREATIVITY. CONNECTION.
                                </p>
                            </div>
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}

export default Sidebar