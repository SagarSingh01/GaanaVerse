import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {
    FiArrowUpRight,
    FiGlobe,
    FiHeart,
    FiMusic
} from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuth from "../../Context Api/AuthContext";
import logo from "../../assets/logo.png";

function Footer() {
    const { user } = useAuth();

    const isArtist = user?.role === "artist";
    const currentYear = new Date().getFullYear();

    const theme = isArtist
        ? {
            accent: "text-fuchsia-400",
            hover: "hover:text-fuchsia-300",
            border: "border-fuchsia-500/20",
            borderHover: "hover:border-fuchsia-500/40",
            soft: "bg-fuchsia-500/10",
            glow: "bg-fuchsia-500/10",
            gradient: "from-violet-500 via-fuchsia-400 to-pink-400",
            icon: "text-fuchsia-400",
        }
        : {
            accent: "text-cyan-400",
            hover: "hover:text-cyan-300",
            border: "border-cyan-500/20",
            borderHover: "hover:border-cyan-500/40",
            soft: "bg-cyan-500/10",
            glow: "bg-cyan-500/10",
            gradient: "from-cyan-400 via-blue-400 to-indigo-400",
            icon: "text-cyan-400",
        };

    const navigationLinks = isArtist
        ? [
            { label: "Dashboard", href: "/artist" },
            { label: "Upload Music", href: "/artist/upload" },
            { label: "Manage Tracks", href: "/artist/tracks" },
        ]
        : [
            { label: "Discover Music", href: "/" },
            { label: "Search Music", href: "/search" },
            { label: "Your Library", href: "/library" },
        ];

    const supportLinks = [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Contact", href: "mailto:sagar12378089@gmail.com" },
    ];

    const socialLinks = [
        {
            label: "LinkedIn",
            icon: FaLinkedinIn,
            href: "https://www.linkedin.com/in/sagar-singh001/",
        },
        {
            label: "GitHub",
            icon: FaGithub,
            href: "https://github.com/SagarSingh01",
        },
        {
            label: "Portfolio",
            icon: FiGlobe,
            href: "https://sagar-singh.vercel.app",
        },
    ];

    const renderLinks = (links) => (
        <div className="flex flex-col gap-4">
            {links.map(({ label, href }) => (
                <Link
                    key={label}
                    to={href}
                    className={`group flex w-fit items-center gap-2 text-sm text-zinc-500 transition-colors duration-200 ${theme.hover}`}
                >
                    {label}

                    <FiArrowUpRight
                        size={14}
                        className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                </Link>
            ))}
        </div>
    );

    return (
        <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-[#080B18] text-zinc-400">

            {/* Background Effects */}
            <div
                className={`pointer-events-none absolute -top-40 left-1/2 size-96 -translate-x-1/2 rounded-full ${theme.glow} blur-[120px]`}
            />

            <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">

                    {/* Brand Section */}
                    <div className="lg:col-span-5">

                        <Link
                            to="/"
                            className="group flex w-fit items-center gap-3"
                        >
                            <div
                                className={`flex size-12 items-center justify-center overflow-hidden rounded-xl border ${theme.border} bg-[#101629] transition-all duration-300 group-hover:scale-105 ${theme.borderHover}`}
                            >
                                <img
                                    src={logo}
                                    alt="GaanaVerse"
                                    className="size-full object-contain p-1.5"
                                />
                            </div>

                            <div>
                                <span
                                    className={`bg-linear-to-r ${theme.gradient} bg-clip-text text-2xl font-extrabold tracking-wide text-transparent`}
                                >
                                    GaanaVerse
                                </span>

                                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                    Your Universe. Your Music.
                                </p>
                            </div>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
                            {isArtist
                                ? "A creative space for independent artists to share their music, manage their tracks, and connect with listeners."
                                : "Discover new sounds, explore your favourite tracks, and enjoy a music experience built for everyone."
                            }
                        </p>

                        {/* Role Card */}
                        <div
                            className={`mt-7 flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-[#101629] px-4 py-3`}
                        >
                            <div
                                className={`flex size-10 items-center justify-center rounded-lg ${theme.soft}`}
                            >
                                <FiMusic size={20} className={theme.icon} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-white">
                                    {isArtist
                                        ? "Creator Space"
                                        : "Your Music Universe"
                                    }
                                </p>

                                <p className="mt-1 text-xs text-zinc-500">
                                    {isArtist
                                        ? "Made for music creators"
                                        : "Made for music lovers"
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-white">
                            {isArtist ? "Workspace" : "Explore"}
                        </h3>

                        {renderLinks(navigationLinks)}
                    </div>

                    {/* Support */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-white">
                            Support
                        </h3>

                        {renderLinks(supportLinks)}
                    </div>

                    {/* Social Links */}
                    <div className="lg:col-span-3">
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-white">
                            Connect With Me
                        </h3>

                        <p className="mb-5 max-w-xs text-sm leading-6 text-zinc-500">
                            Explore my work, projects, and professional journey.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map(({ label, icon: Icon, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    title={label}
                                    className={`flex size-11 items-center justify-center rounded-xl border border-white/10 bg-[#101629] text-zinc-400 transition-all duration-300 hover:-translate-y-1 ${theme.borderHover} ${theme.hover}`}
                                >
                                    <Icon size={19} />
                                </a>
                            ))}
                        </div>

                        <p className="mt-4 text-xs text-zinc-600">
                            LinkedIn <span className="mx-1">·</span>
                            GitHub <span className="mx-1">·</span>
                            Portfolio
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-14 border-t border-white/10 pt-8">

                    <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">

                        {/* Copyright */}
                        <div className="space-y-2">
                            <p className="text-xs font-medium text-zinc-400">
                                © {currentYear} GaanaVerse.
                                <span className="ml-1 text-zinc-500">
                                    All rights reserved.
                                </span>
                            </p>

                            <p className="text-xs text-zinc-600">
                                An independent music streaming project.
                            </p>
                        </div>

                        {/* Creator Credit */}
                        <div className="flex flex-col items-center gap-2 sm:items-end">
                            <p className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-zinc-500">
                                Crafted with
                                <FiHeart
                                    className="fill-rose-500 text-rose-500"
                                    size={13}
                                />
                                for music lovers.
                            </p>

                            <p className="text-xs text-zinc-600">
                                Designed & developed with passion.
                            </p>
                        </div>
                    </div>

                    {/* Brand Signature */}
                    <div className="mt-8 flex flex-col items-center justify-center gap-2 border-t border-white/5 pt-6">
                        <p
                            className={`text-[10px] font-bold uppercase tracking-[0.3em] ${theme.accent}`}
                        >
                            MUSIC. CREATIVITY. CONNECTION.
                        </p>

                        <p className="text-[10px] text-zinc-700">
                            Made for every sound, every artist, every listener.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer