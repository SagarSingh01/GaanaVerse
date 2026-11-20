import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import {
    FiBell,
    FiDownload,
    FiGrid,
    FiDisc,
    FiBarChart2,
    FiUpload,
    FiList,
    FiHeadphones
} from "react-icons/fi";
import useAuth, { API } from "../../Context Api/AuthContext";
import toast from "react-hot-toast";
import Sidebar from "./Sidebar";
import logo from "../../assets/logo.png";

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
            accent: "text-fuchsia-400",
            accentHover: "hover:text-fuchsia-300",
            active: "bg-fuchsia-500/10 text-fuchsia-300",
            soft: "bg-fuchsia-500/10",
            border: "border-fuchsia-500/20",
            hover: "hover:bg-fuchsia-500/10",
            icon: "text-fuchsia-400",
            avatar: "from-violet-500 via-fuchsia-500 to-pink-500",
            glow: "shadow-fuchsia-500/10",
            focus: "focus-visible:ring-fuchsia-400",
            gradient: "from-violet-600 via-fuchsia-600 to-purple-700"
        }
        : {
            accent: "text-cyan-400",
            accentHover: "hover:text-cyan-300",
            active: "bg-cyan-500/10 text-cyan-300",
            soft: "bg-cyan-500/10",
            border: "border-cyan-500/20",
            hover: "hover:bg-cyan-500/10",
            icon: "text-cyan-400",
            avatar: "from-cyan-400 via-blue-500 to-indigo-500",
            glow: "shadow-cyan-500/10",
            focus: "focus-visible:ring-cyan-400",
            gradient: "from-cyan-500 via-blue-600 to-indigo-700"
        };

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

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

    const navButton = `group relative flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-transparent px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090B18] ${isArtist
        ? "text-violet-300 hover:border-violet-400/20 hover:bg-violet-400/10 hover:text-violet-200 focus-visible:ring-violet-400"
        : "text-[#C9C4D8] hover:border-[#D8BC82]/20 hover:bg-[#D8BC82]/10 hover:text-[#EBD6A8] focus-visible:ring-[#D8BC82]"
        }`;

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090B18]/95 text-white shadow-lg shadow-black/20 backdrop-blur-xl">

                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">

                    {/* Brand */}
                    <button
                        onClick={() => navigateTo("/")}
                        aria-label="Go to home"
                        className="group flex shrink-0 cursor-pointer items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8BC82]"
                    >
                        <div className="group flex size-11 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/30 bg-[#101629] shadow-[0_0_12px_rgba(34,211,238,0.12)] transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_18px_rgba(34,211,238,0.3)]">
                            <img
                                src={logo}
                                alt="GaanaVerse"
                                className="size-full object-contain p-1.5"
                            />
                        </div>

                        <div className="text-left">
                            <h1 className="bg-linear-to-r from-[#F5E6C5] via-[#D8BC82] to-[#B9A7F5] bg-clip-text text-xl font-extrabold tracking-wide text-transparent sm:text-2xl">
                                GaanaVerse
                            </h1>

                            {isArtist ? (
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400">
                                    For Artists
                                </p>
                            ) : (
                                ""
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
                                    className="hidden cursor-pointer items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-zinc-400 transition-colors duration-200 hover:bg-white/5 hover:text-[#D8BC82] xl:flex"
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
                            className={`flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-linear-to-br ${theme.avatar} text-lg font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090B18] ${theme.focus}`}
                        >
                            {initial}
                        </button>
                    </div>
                </div>
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