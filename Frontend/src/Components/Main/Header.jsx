
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaSpotify, FaHome, FaSearch } from "react-icons/fa";
import {
    FiBell, FiDownload, FiLogOut, FiUser, FiX,
    FiGrid, FiDisc, FiBarChart2, FiUpload, FiList,
    FiMusic, FiHeadphones
} from "react-icons/fi";
import useAuth, { API } from "../../Context Api/AuthContext";
import toast from "react-hot-toast";

function Header() {
    const navigate = useNavigate();
    const { user, setUser } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const isArtist = user?.role === "artist";
    const username = user?.username || "User";
    const accent = isArtist ? "violet" : "green";

    const menuItems = isArtist
        ? [
            { name: "Overview", icon: FiGrid, path: "/artist" },
            { name: "My Music", icon: FiDisc, path: "/artist/music" },
            { name: "Analytics", icon: FiBarChart2, path: "/artist/analytics" },
            { name: "Upload Music", icon: FiUpload, path: "/artist/upload" },
            { name: "Manage Tracks", icon: FiList, path: "/artist/tracks" }
        ]
        : [
            { name: "Home", icon: FaHome, path: "/" },
            { name: "Search", icon: FaSearch, path: "/search" },
            { name: "Your Library", icon: FiHeadphones, path: "/library" },
            { name: "Notifications", icon: FiBell, path: "/notifications" }
        ];

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
            navigate("/login");
        } catch (err) {
            toast.error(err?.response?.data?.message || "Logout failed");
        }
    };

    const accentStyles = isArtist
        ? "text-violet-400 hover:bg-violet-500/10 hover:text-violet-300"
        : "text-green-400 hover:bg-green-500/10 hover:text-green-300";

    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/95 px-4 py-3 text-white backdrop-blur-2xl sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-5">

                    {/* Brand */}
                    <div
                        onClick={() => navigateTo(isArtist ? "/artist" : "/")}
                        className="flex shrink-0 cursor-pointer items-center gap-3"
                    >
                        {isArtist ? (
                            <FiMusic size={38} className="text-violet-400" />
                        ) : (
                            <FaSpotify size={42} className="text-[#1ed760]" />
                        )}

                        <div>
                            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                                Spotify
                            </h1>
                            {isArtist && (
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400">
                                    For Artists
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Listener Search */}
                    {!isArtist && (
                        <div className="hidden h-12 max-w-xl flex-1 items-center rounded-full border border-white/5 bg-[#1b1b1b] px-4 transition hover:bg-[#252525] focus-within:border-white/20 focus-within:bg-[#252525] md:flex">
                            <FaSearch size={19} className="shrink-0 text-gray-400" />
                            <input
                                type="text"
                                placeholder="What do you want to play?"
                                className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                            />
                        </div>
                    )}

                    {/* Artist Navigation */}
                    {isArtist && (
                        <nav className="hidden items-center gap-1 lg:flex">
                            {menuItems.map(({ name, icon: Icon, path }) => (
                                <button
                                    key={name}
                                    onClick={() => navigateTo(path)}
                                    className={`flex cursor-pointer items-center gap-2 rounded-xl px-3 py-3 text-sm font-medium text-gray-400 transition ${accentStyles}`}
                                >
                                    <Icon size={20} />
                                    {name}
                                </button>
                            ))}
                        </nav>
                    )}

                    {/* Header Actions */}
                    <div className="flex shrink-0 items-center gap-3 sm:gap-4">
                        {!isArtist && (
                            <>
                                <button className="hidden cursor-pointer items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-white lg:flex">
                                    <FiDownload size={20} />
                                    Install App
                                </button>

                                <button
                                    aria-label="Notifications"
                                    className="hidden cursor-pointer rounded-full p-2.5 text-gray-400 transition hover:bg-white/10 hover:text-white sm:flex"
                                >
                                    <FiBell size={21} />
                                </button>
                            </>
                        )}

                        <button
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open profile menu"
                            className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-lg font-bold text-white shadow-lg transition duration-300 hover:scale-110 ${isArtist
                                    ? "bg-violet-600 hover:bg-violet-500"
                                    : "bg-green-600 hover:bg-green-500"
                                }`}
                        >
                            {username[0].toUpperCase()}
                        </button>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                            className="fixed inset-0 z-60 bg-black/70 backdrop-blur-sm"
                        />

                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed right-0 top-0 z-70 flex h-dvh w-80 max-w-[85vw] flex-col overflow-y-auto border-l border-white/10 bg-[#121212] shadow-2xl"
                        >
                            {/* User Information */}
                            <div className="flex items-center justify-between border-b border-white/10 p-5">
                                <div className="flex items-center gap-3">
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white ${isArtist ? "bg-violet-600" : "bg-green-600"
                                        }`}>
                                        {username[0].toUpperCase()}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-white">{username}</h3>
                                        <p className={`mt-1 text-xs font-semibold ${isArtist ? "text-violet-400" : "text-green-400"}`}>
                                            {isArtist ? "ARTIST ACCOUNT" : "LISTENER ACCOUNT"}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setMenuOpen(false)}
                                    aria-label="Close menu"
                                    className="cursor-pointer rounded-full p-2.5 text-gray-400 transition hover:bg-white/10 hover:text-white"
                                >
                                    <FiX size={22} />
                                </button>
                            </div>

                            {/* Navigation */}
                            <nav className="flex-1 space-y-1 p-4">
                                <p className="mb-4 px-3 text-xs font-bold uppercase tracking-widest text-gray-500">
                                    {isArtist ? "Creator Studio" : "Your Music"}
                                </p>

                                {menuItems.map(({ name, icon: Icon, path }) => (
                                    <button
                                        key={name}
                                        onClick={() => navigateTo(path)}
                                        className={`flex w-full cursor-pointer items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-300 transition ${accentStyles}`}
                                    >
                                        <Icon size={21} />
                                        {name}
                                    </button>
                                ))}

                                <div className="my-5 border-t border-white/10" />

                                <button
                                    onClick={() => navigateTo("/profile")}
                                    className="flex w-full cursor-pointer items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
                                >
                                    <FiUser size={21} />
                                    Profile
                                </button>
                            </nav>

                            {/* Logout */}
                            <div className="border-t border-white/10 p-4">
                                <button
                                    onClick={handleLogout}
                                    className="flex w-full cursor-pointer items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
                                >
                                    <FiLogOut size={21} />
                                    Log out
                                </button>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Header