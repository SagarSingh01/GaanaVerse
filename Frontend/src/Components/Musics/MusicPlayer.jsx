import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../Custom Hooks/useFetch";
import { FiArrowLeft, FiDisc, FiHeadphones, FiMusic } from "react-icons/fi";
import { motion } from "framer-motion";
import MusicSkeleton from "./MusicSkeleton";
import MusicError from "./MusicError";
import musicIcon from "../../assets/icon.png";

const MusicPlayer = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [music, loading, error] = useFetch("/api/music");

    if (loading) return <MusicSkeleton />;
    if (error) return <MusicError />;

    const song = music?.find((item) => item._id === id);

    if (!song) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-5 text-center text-white"
            >
                <div className="mb-6 flex size-24 items-center justify-center rounded-3xl border border-white/10 bg-slate-900">
                    <FiMusic className="text-4xl text-cyan-400" />
                </div>

                <h2 className="text-2xl font-black">Song not found</h2>

                <p className="mt-2 max-w-sm text-sm text-zinc-500">
                    This track may have been removed or is unavailable.
                </p>

                <button
                    onClick={() => navigate("/")}
                    className="mt-7 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 active:scale-95"
                >
                    Back to music
                </button>
            </motion.div>
        );
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-8 text-white sm:px-6 sm:py-12 lg:px-8">

            {/* Background Effects */}
            <div className="pointer-events-none absolute -top-40 left-1/2 size-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl sm:size-96" />
            <div className="pointer-events-none absolute -bottom-40 -left-32 size-72 rounded-full bg-blue-500/10 blur-3xl sm:size-96" />

            <div className="relative mx-auto w-full max-w-5xl">

                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => navigate(-1)}
                    className="group mb-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-zinc-400 shadow-lg transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-800 hover:text-cyan-400 sm:mb-8 sm:px-5"
                >
                    <FiArrowLeft
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                    Back to music
                </motion.button>

                {/* Player Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/30 backdrop-blur-xl sm:rounded-3xl"
                >

                    <div className="grid grid-cols-1 gap-7 p-4 sm:gap-9 sm:p-7 md:grid-cols-2 md:items-center md:gap-10 md:p-9 lg:gap-14 lg:p-12">

                        {/* Artwork */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/30 sm:max-w-sm sm:rounded-3xl md:max-w-full"
                        >

                            {/* Artwork Background */}
                            <div className="absolute inset-0 bg-linear-to-br from-slate-800 via-slate-900 to-slate-950" />

                            <div className="absolute -right-12 -top-12 size-40 rounded-full bg-cyan-500/15 blur-3xl sm:size-48" />

                            <div className="absolute -bottom-12 -left-12 size-40 rounded-full bg-blue-500/10 blur-3xl sm:size-48" />

                            {/* Logo */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="flex size-28 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/50 p-5 shadow-2xl sm:size-36 sm:rounded-3xl sm:p-6 lg:size-40">
                                    <img
                                        src={musicIcon}
                                        alt="GaanaVerse Music Icon"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </motion.div>

                            {/* Branding */}
                            <div className="absolute bottom-4 left-4 flex items-center gap-2 sm:bottom-5 sm:left-5">
                                <FiDisc className="text-cyan-400" size={16} />
                                <span className="text-xs font-bold tracking-widest text-zinc-400">
                                    GAANAVERSE
                                </span>
                            </div>

                            {/* Playing Indicator */}
                            <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full border border-cyan-500/20 bg-slate-950/70 px-3 py-2 backdrop-blur-md sm:right-5 sm:top-5">
                                <span className="size-2 animate-pulse rounded-full bg-cyan-400" />
                                <span className="text-xs font-bold tracking-widest text-cyan-300">
                                    MUSIC PLAYER
                                </span>
                            </div>
                        </motion.div>

                        {/* Song Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="flex min-w-0 flex-col"
                        >

                            <div className="mb-4 flex items-center gap-2 sm:mb-5">
                                <FiHeadphones className="text-cyan-400" size={17} />
                                <p className="text-xs font-bold tracking-widest text-cyan-400 sm:tracking-[0.25em]">
                                    NOW PLAYING
                                </p>
                            </div>

                            <h1 className="wrap-break-word text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                                {song.title}
                            </h1>

                            {/* Artist Information */}
                            <div className="mt-5 flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-3 transition-colors hover:border-cyan-500/20 sm:mt-6 sm:p-4">

                                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 sm:size-12">
                                    <FiMusic size={21} className="text-cyan-400" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-bold tracking-widest text-zinc-500">
                                        CREATED BY
                                    </p>

                                    <p className="mt-1 truncate text-sm font-bold text-zinc-200 sm:text-base">
                                        {song.artist?.username || "Unknown Artist"}
                                    </p>
                                </div>

                                <span className="shrink-0 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-xs font-semibold text-cyan-300 sm:px-3">
                                    ARTIST
                                </span>
                            </div>

                            {/* Audio Player */}
                            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 p-3 sm:mt-8 sm:p-5">
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <p className="text-xs font-bold tracking-widest text-zinc-400">
                                        LISTEN NOW
                                    </p>

                                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-400">
                                        AUDIO
                                    </span>
                                </div>

                                <audio
                                    src={song.uri}
                                    controls
                                    autoPlay
                                    preload="metadata"
                                    className="w-full accent-cyan-400"
                                />
                            </div>

                            <p className="mt-5 text-center text-xs text-zinc-600 md:text-left">
                                Your music. Your world. Only on GaanaVerse.
                            </p>

                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom Branding */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-7 flex flex-wrap items-center justify-center gap-2 text-center text-xs font-semibold tracking-widest text-zinc-600 sm:mt-8"
                >
                    <FiDisc className="text-cyan-500/70" />
                    GAANAVERSE MUSIC EXPERIENCE
                </motion.div>

            </div>
        </div>
    );
};

export default MusicPlayer