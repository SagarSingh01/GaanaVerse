import { FaSpotify, FaLinkedinIn, FaGithub } from "react-icons/fa";
import {
    FiArrowUpRight,
    FiMusic,
    FiHeadphones,
    FiHeart,
    FiGlobe
} from "react-icons/fi";

import { Link } from "react-router-dom";
import useAuth from "../../Context Api/AuthContext";

function Footer() {
    const { user } = useAuth();
    const isArtist = user?.role === "artist";
    const currentYear = new Date().getFullYear();

    const theme = isArtist
        ? {
            accent: "text-violet-400",
            hover: "hover:text-violet-400",
            glow: "from-violet-500/10 to-fuchsia-500/5",
            icon: FiMusic
        }
        : {
            accent: "text-green-400",
            hover: "hover:text-green-400",
            glow: "from-green-500/10 to-emerald-500/5",
            icon: FiHeadphones
        };

    const BrandIcon = theme.icon;

    const navigationLinks = isArtist
        ? [
            { label: "Dashboard", href: "/artist" },
            { label: "Upload Music", href: "/artist/upload" },
            { label: "Manage Tracks", href: "/artist/tracks" }
        ]
        : [
            { label: "Discover Music", href: "/" },
            { label: "Search Music", href: "/search" },
            { label: "Your Library", href: "/library" }
        ];

    const supportLinks = [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Contact", href: "mailto:sagar12378089@gmail.com" }
    ];

    const socialLinks = [
        {
            label: "LinkedIn",
            icon: FaLinkedinIn,
            href: "https://www.linkedin.com/in/sagar-singh001/"
        },
        {
            label: "GitHub",
            icon: FaGithub,
            href: "https://github.com/SagarSingh01"
        },
        {
            label: "Portfolio",
            icon: FiGlobe,
            href: "https://sagar-singh.vercel.app"
        }
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
                    <FiArrowUpRight className="opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </Link>
            ))}
        </div>
    );

    return (
        <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-neutral-950 text-zinc-400">

            {/* Background Glow */}
            <div className={`pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-linear-to-br ${theme.glow} blur-3xl`} />

            <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-8">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">

                    {/* Brand Section */}
                    <div className="lg:col-span-5">

                        <Link to="/" className="group flex w-fit items-center gap-3">
                            <FaSpotify className="text-4xl text-green-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />

                            <span className="text-2xl font-extrabold tracking-tight text-white">
                                Spotify
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
                            {isArtist
                                ? "A space where artists can share their creativity, manage their music, and connect with listeners."
                                : "Discover new sounds, explore your favourite tracks, and enjoy a music experience built for everyone."
                            }
                        </p>

                        <div className={`mt-7 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 ${theme.accent}`}>
                            <div className="flex size-10 items-center justify-center rounded-lg bg-white/5">
                                <BrandIcon size={20} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-white">
                                    {isArtist ? "Creator Space" : "Your Music Universe"}
                                </p>

                                <p className="mt-1 text-xs text-zinc-500">
                                    {isArtist ? "Made for music creators" : "Made for music lovers"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
                            {isArtist ? "Workspace" : "Explore"}
                        </h3>

                        {renderLinks(navigationLinks)}
                    </div>

                    {/* Support */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
                            Support
                        </h3>

                        {renderLinks(supportLinks)}
                    </div>

                    {/* Social Links */}
                    <div className="lg:col-span-3">
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
                            Connect With Me
                        </h3>

                        <p className="mb-5 text-sm leading-6 text-zinc-500">
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
                                    className={`flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 ${theme.hover}`}
                                >
                                    <Icon size={19} />
                                </a>
                            ))}
                        </div>

                        <p className="mt-4 text-xs text-zinc-600">
                            LinkedIn · GitHub · Portfolio
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">

                    <div>
                        <p className="text-xs text-zinc-500">
                            © {currentYear} Spotify. All rights reserved.
                        </p>

                        <p className="mt-2 text-xs text-zinc-600">
                            An independent music streaming project.
                        </p>
                    </div>

                    <p className="flex items-center gap-2 text-xs text-zinc-500">
                        Built with
                        <FiHeart className="fill-red-500 text-red-500" size={13} />
                        and passion for music.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer