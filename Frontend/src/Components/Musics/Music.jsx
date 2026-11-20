import useFetch from "../../Custom Hooks/useFetch";
import { FaPlay } from "react-icons/fa";
import { FiDisc } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MusicSkeleton from "./MusicSkeleton";
import MusicError from "./MusicError";
import musicIcon from "../../assets/icon.png"

const Music = () => {

    const [music, loading, error] = useFetch("/api/music");
    const navigate = useNavigate();

    if (loading) return <MusicSkeleton />;
    if (error) return <MusicError />;

    return (
        <div className="min-h-screen bg-slate-950 px-5 py-10 text-white sm:px-8 lg:px-12">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
            >
                <div className="mb-4 flex items-center gap-2">
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="size-2 rounded-full bg-cyan-400"
                    />
                    <p className="text-xs font-bold tracking-widest text-cyan-400">
                        YOUR SOUND. YOUR WORLD.
                    </p>
                </div>

                <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
                    Discover <span className="text-cyan-400">Music.</span>
                </h1>

                <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
                    Explore your collection and find the sounds that move you.
                </p>
            </motion.div>

            {/* Music Grid */}
            <div className="grid grid-cols-1 gap-x-7 gap-y-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {music?.map((song, index) => (
                    <motion.div
                        key={song._id}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.45,
                            delay: Math.min(index * 0.08, 0.4),
                            ease: "easeOut"
                        }}
                        className="group min-w-0"
                    >

                        {/* Music Cover */}
                        <motion.button
                            type="button"
                            onClick={() => navigate(`/music/${song._id}`)}
                            aria-label={`Play ${song.title}`}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative flex aspect-square w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg shadow-black/20 transition-colors duration-300 hover:border-cyan-500/40 hover:bg-slate-900"
                        >

                            {/* Background */}
                            <div className="absolute inset-0 bg-linear-to-br from-slate-800 via-slate-900 to-slate-950" />

                            <div className="absolute -right-12 -top-12 size-40 rounded-full bg-cyan-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="absolute -bottom-12 -left-12 size-40 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Inner Border */}
                            <div className="absolute inset-3 rounded-xl border border-white/5" />

                            {/* GaanaVerse Logo */}
                            <motion.div
                                whileHover={{ scale: 1.06 }}
                                transition={{ duration: 0.3 }}
                                className="relative flex size-32 items-center justify-center rounded-3xl border border-white/10 bg-slate-950/50 p-5 shadow-xl shadow-black/30"
                            >
                                <img
                                    src={musicIcon}
                                    alt="GaanaVerse"
                                    className="h-full w-full object-contain"
                                />
                            </motion.div>

                            {/* Branding */}
                            <div className="absolute bottom-5 left-5 flex items-center gap-2">
                                <FiDisc className="text-cyan-500" size={15} />
                                <span className="text-xs font-bold tracking-widest text-zinc-400">
                                    GAANAVERSE
                                </span>
                            </div>

                            {/* Play Button */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                                className="absolute bottom-4 right-4 flex size-11 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors duration-300 group-hover:bg-cyan-300"
                            >
                                <FaPlay size={14} />
                            </motion.div>

                        </motion.button>

                        {/* Song Details */}
                        <div className="mt-4 flex min-w-0 items-center justify-between gap-3">

                            <div className="min-w-0">
                                <h2
                                    title={song.title}
                                    className="truncate text-base font-bold text-zinc-200 transition-colors duration-300 group-hover:text-cyan-300 sm:text-lg"
                                >
                                    {song.title}
                                </h2>

                                <p className="mt-1 text-xs font-medium tracking-wider text-zinc-500">
                                    AUDIO TRACK
                                </p>
                            </div>

                            <span className="size-2 shrink-0 rounded-full bg-cyan-400/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Empty State */}
            {(!music || music.length === 0) && (
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex min-h-[45vh] flex-col items-center justify-center px-5 text-center"
                >

                    <div className="mb-6 flex size-24 items-center justify-center rounded-3xl border border-white/10 bg-slate-900 p-5 shadow-xl shadow-black/20">
                        <img
                            src={musicIcon}
                            alt="GaanaVerse"
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <h2 className="text-xl font-bold text-white">
                        No music available
                    </h2>

                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-400">
                        Your music collection is waiting to grow. Check back soon for new tracks.
                    </p>
                </motion.div>
            )}

        </div>
    );
};

export default Music