
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpotify, FaHome, FaSearch } from "react-icons/fa";
import {
    FiBell,
    FiDownload,
    FiGrid,
    FiDisc,
    FiBarChart2,
    FiUpload,
    FiList,
    FiMusic,
    FiHeadphones
} from "react-icons/fi";
import useAuth, { API } from "../../Context Api/AuthContext";
import toast from "react-hot-toast";
import Sidebar from "./Sidebar";

function Header() {
    const navigate = useNavigate();
    const { user, setUser } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const isArtist = user?.role === "artist";
    const username = user?.username || "User";
    const initial = username.charAt(0).toUpperCase();

    const menuItems = isArtist
        ? [
            { name: "Overview", icon: FiGrid, path: "/artist" },
            { name: "My Music", icon: FiDisc, path: "/artist/music" },
            { name: "Analytics", icon: FiBarChart2, path: "/artist/analytics" },
            { name: "Upload", icon: FiUpload, path: "/artist/upload" },
            { name: "Tracks", icon: FiList, path: "/artist/tracks" }
        ]
        : [
            { name: "Home", icon: FaHome, path: "/" },
            { name: "Search", icon: FaSearch, path: "/search" },
            { name: "Library", icon: FiHeadphones, path: "/library" }
        ];

    const theme = isArtist
        ? {
            accent: "text-violet-400",
            hover: "hover:bg-violet-500/10 hover:text-violet-300",
            avatar: "from-violet-500 to-fuchsia-700",
            iconBg: "bg-violet-500/10",
            focus: "focus-visible:ring-violet-400"
        }
        : {
            accent: "text-green-400",
            hover: "hover:bg-green-500/10 hover:text-green-300",
            avatar: "from-green-400 to-emerald-700",
            iconBg: "bg-green-500/10",
            focus: "focus-visible:ring-green-400"
        };

    const navigateTo = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    const handleLogout = async () => {
        try {
            const res = await API.post("/api/auth/logout");
            setUser(null);
            setMenuOpen(false);
            toast.success(res?.data?.message || "Logged out successfully");
            navigate("/login", { replace: true });
        } catch (err) {
            toast.error(err?.response?.data?.message || "Logout failed");
        }
    };

    const navButton = `group relative flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-transparent px-4 py-2.5 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 ${isArtist
            ? "text-violet-300 hover:border-violet-500/30 hover:bg-violet-500/15 hover:text-violet-200 hover:shadow-violet-500/10 focus-visible:ring-violet-400"
            : "text-green-300 hover:border-green-500/30 hover:bg-green-500/15 hover:text-green-200 hover:shadow-green-500/10 focus-visible:ring-green-400"
        }`;
        
    return (
        <>
            <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/95 text-white shadow-lg shadow-black/10 backdrop-blur-xl">

                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">

                    {/* Brand */}
                    <button
                        onClick={() => navigateTo("/")}
                        aria-label="Go to home"
                        className="group flex shrink-0 cursor-pointer items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        <div className={`flex size-11 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 ${theme.iconBg}`}>
                            {isArtist ? (
                                <FiMusic size={26} className={theme.accent} />
                            ) : (
                                <FaSpotify size={30} className="text-green-500" />
                            )}
                        </div>

                        <div className="text-left">
                            <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                                Spotify
                            </h1>

                            {isArtist && (
                                <p className="text-[10px] font-bold uppercase tracking-widest text-violet-400">
                                    For Artists
                                </p>
                            )}
                        </div>
                    </button>

                    {/* Desktop Artist Navigation */}
                    {isArtist && (
                        <nav className="hidden items-center gap-1 lg:flex">
                            {menuItems.map(({ name, icon: Icon, path }) => (
                                <button
                                    key={name}
                                    onClick={() => navigateTo(path)}
                                    className={`${navButton} ${theme.focus}`}
                                >
                                    <Icon
                                        size={18}
                                        className="transition-transform duration-200 group-hover:scale-110"
                                    />
                                    {name}
                                </button>
                            ))}
                        </nav>
                    )}

                    {/* Header Actions */}
                    <div className="flex shrink-0 items-center gap-2 sm:gap-3">

                        {!isArtist && (
                            <>
                                <button
                                    type="button"
                                    onClick={() => toast("Install app feature coming soon!")}
                                    className="hidden cursor-pointer items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-zinc-400 transition-colors duration-200 hover:bg-white/5 hover:text-white xl:flex"
                                >
                                    <FiDownload size={18} />
                                    Install App
                                </button>

                                <button
                                    type="button"
                                    onClick={() => navigateTo("/notifications")}
                                    aria-label="Notifications"
                                    title="Notifications"
                                    className={`hidden cursor-pointer rounded-full p-3 text-zinc-400 transition-colors duration-200 sm:flex ${theme.hover} ${theme.focus}`}
                                >
                                    <FiBell size={20} />
                                </button>
                            </>
                        )}

                        {/* Profile */}
                        <button
                            type="button"
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open profile menu"
                            aria-expanded={menuOpen}
                            title={username}
                            className={`flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-linear-to-br ${theme.avatar} text-lg font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 ${theme.focus}`}
                        >
                            {initial}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex items-center gap-2 overflow-x-auto border-t border-white/5 px-4 py-2.5 lg:hidden">
                    {menuItems.map(({ name, icon: Icon, path }) => (
                        <button
                            key={name}
                            onClick={() => navigateTo(path)}
                            className={`${navButton} ${theme.focus}`}
                        >
                            <Icon
                                size={16}
                                className="transition-transform duration-200 group-hover:scale-110"
                            />
                            {name}
                        </button>
                    ))}

                    {!isArtist && (
                        <button
                            type="button"
                            onClick={() => navigateTo("/notifications")}
                            className={`flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-zinc-400 transition-colors duration-200 sm:hidden ${theme.hover}`}
                        >
                            <FiBell size={16} />
                            Notifications
                        </button>
                    )}
                </nav>
            </header>

            {/* Sidebar */}
            <Sidebar
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
                user={user}
                onLogout={handleLogout}
            />
        </>
    );
}

export default Header