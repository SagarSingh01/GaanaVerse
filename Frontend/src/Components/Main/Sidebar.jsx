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
            accent: "text-violet-400",
            active: "bg-violet-500/10 text-violet-300",
            hover: "hover:text-violet-300",
            avatar: "from-violet-500 to-fuchsia-700",
            icon: <FiMusic size={23} />
        }
        : {
            accent: "text-green-400",
            active: "bg-green-500/10 text-green-300",
            hover: "hover:text-green-300",
            avatar: "from-green-400 to-emerald-700",
            icon: <FiHeadphones size={23} />
        };

    const menuItems = isArtist
        ? [
            { label: "Overview", path: "/artist", icon: FiGrid },
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
                        className="fixed inset-0 z-60 bg-black/70 backdrop-blur-sm"
                    />

                    {/* Sidebar */}
                    <motion.aside
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-y-0 left-0 z-70 flex w-80 max-w-[85vw] flex-col border-r border-white/10 bg-neutral-950 shadow-2xl"
                    >
                        {/* Brand Header */}
                        <div className="flex items-center justify-between border-b border-white/5 px-5 py-5">
                            <div className="flex items-center gap-3">
                                <div className={`flex size-11 items-center justify-center rounded-xl ${isArtist ? "bg-violet-500/10 text-violet-400" : "bg-green-500/10 text-green-400"}`}>
                                    {theme.icon}
                                </div>
                                <div>
                                    <h2 className="text-base font-bold tracking-tight text-white">
                                        {isArtist ? "Spotify for Artists" : "Spotify"}
                                    </h2>
                                    <p className="mt-0.5 text-xs text-gray-500">
                                        {isArtist ? "Creator Studio" : "Your music space"}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                aria-label="Close sidebar"
                                className="rounded-lg p-2 text-gray-500 transition hover:bg-white/5 hover:text-white"
                            >
                                <FiX size={20} />
                            </button>
                        </div>

                        {/* User Profile */}
                        <div className="border-b border-white/5 p-5">
                            <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/3 p-3">
                                <div className={`flex size-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${theme.avatar} text-lg font-bold text-white`}>
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
                                    onClick={() => {
                                        navigate("/profile");
                                        onClose();
                                    }}
                                    aria-label="View profile"
                                    className="rounded-lg p-2 text-gray-500 transition hover:bg-white/5 hover:text-white"
                                >
                                    <FiChevronRight size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="flex-1 overflow-y-auto px-4 py-6">
                            <p className="mb-4 px-3 text-[11px] font-bold tracking-[0.2em] text-gray-600">
                                {isArtist ? "WORKSPACE" : "LIBRARY"}
                            </p>

                            <div className="space-y-1.5">
                                {menuItems.map(({ label, path, icon: Icon, end }) => (
                                    <NavLink
                                        key={path}
                                        to={path}
                                        end={end}
                                        onClick={onClose}
                                        className={({ isActive }) => `
                                            group flex items-center gap-3 rounded-xl px-3.5 py-3
                                            text-sm font-medium transition-all duration-200
                                            ${isActive
                                                ? `${theme.active} border border-white/5`
                                                : `text-gray-400 hover:bg-white/4 ${theme.hover}`
                                            }
                                        `}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                <Icon
                                                    size={19}
                                                    className={`shrink-0 transition-transform duration-200 group-hover:scale-110 ${isActive ? theme.accent : ""}`}
                                                />
                                                <span className="flex-1">{label}</span>
                                                {isActive && (
                                                    <span className={`h-1.5 w-1.5 rounded-full ${isArtist ? "bg-violet-400" : "bg-green-400"}`} />
                                                )}
                                            </>
                                        )}
                                    </NavLink>
                                ))}
                            </div>
                        </nav>

                        {/* Footer Actions */}
                        <div className="border-t border-white/5 p-4">
                            <button
                                onClick={() => {
                                    navigate("/profile");
                                    onClose();
                                }}
                                className="group flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/4 hover:text-white"
                            >
                                <FiUser size={19} className="transition group-hover:scale-110" />
                                Account Settings
                            </button>

                            <button
                                onClick={handleLogout}
                                className="group mt-1 flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
                            >
                                <FiLogOut size={19} className="transition-transform duration-200 group-hover:translate-x-1" />
                                Sign Out
                            </button>

                            <p className="mt-5 px-3 text-[10px] tracking-wider text-gray-600">
                                MUSIC PLAYER • YOUR WORLD
                            </p>
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}

export default Sidebar