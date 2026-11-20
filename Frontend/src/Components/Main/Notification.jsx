import { motion } from "framer-motion";
import { FiBell, FiArrowLeft, FiMusic, FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Context Api/AuthContext";

function Notification() {

    const navigate = useNavigate();
    const { user } = useAuth();
    
    const isArtist = user?.role === "artist";

    const theme = isArtist
        ? {
            accent: "text-fuchsia-400",
            hover: "hover:text-fuchsia-300",
            border: "border-fuchsia-500/20",
            soft: "bg-fuchsia-500/10",
            glow: "bg-fuchsia-500/15",
            gradient: "from-violet-600 via-fuchsia-600 to-purple-700",
            button: "from-violet-600 to-fuchsia-600",
            shadow: "shadow-fuchsia-500/10",
        }
        : {
            accent: "text-cyan-400",
            hover: "hover:text-cyan-300",
            border: "border-cyan-500/20",
            soft: "bg-cyan-500/10",
            glow: "bg-cyan-500/15",
            gradient: "from-cyan-500 via-blue-500 to-indigo-500",
            button: "from-cyan-500 to-blue-600",
            shadow: "shadow-cyan-500/10",
        };

    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="min-h-screen bg-[#080B18] px-4 py-8 text-white sm:px-8 lg:px-12"
        >
            <div className="mx-auto max-w-5xl">

                {/* Page Header */}
                <div className="mb-10">

                    <button
                        onClick={() => navigate(-1)}
                        className={`group mb-7 inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#101629] px-4 py-2.5 text-sm font-medium text-zinc-300 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-x-1 ${theme.border} ${theme.hover}`}
                    >
                        <FiArrowLeft
                            size={17}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                        />
                        Go Back
                    </button>

                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h1 className={`bg-linear-to-r ${theme.gradient} bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl`}>
                                Notifications
                            </h1>

                            <p className="mt-2 text-sm text-zinc-500 sm:text-base">
                                Stay updated with your latest activity.
                            </p>
                        </div>

                        <div className={`hidden size-14 items-center justify-center rounded-2xl border ${theme.border} ${theme.soft} sm:flex`}>
                            <FiBell size={26} className={theme.accent} />
                        </div>
                    </div>
                </div>

                {/* Notifications Container */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101629]/90 shadow-2xl shadow-black/20">

                    <div className={`pointer-events-none absolute -right-20 -top-20 size-64 rounded-full ${theme.glow} blur-3xl`} />

                    {/* Section Header */}
                    <div className="relative flex items-center justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-8">
                        <div>
                            <h2 className="text-lg font-bold text-white">
                                All Notifications
                            </h2>

                            <p className="mt-1 text-xs text-zinc-500">
                                Your recent updates and activity
                            </p>
                        </div>

                        <span className={`rounded-full border ${theme.border} ${theme.soft} px-3 py-1 text-xs font-semibold ${theme.accent}`}>
                            0 New
                        </span>
                    </div>

                    {/* Empty State */}
                    <div className="relative flex min-h-96 flex-col items-center justify-center px-6 py-16 text-center">

                        <motion.div
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className={`mb-7 flex size-24 items-center justify-center rounded-3xl border ${theme.border} ${theme.soft} shadow-lg ${theme.shadow}`}
                        >
                            <FiBell size={42} className={theme.accent} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.25 }}
                        >
                            <h3 className="text-xl font-bold sm:text-2xl">
                                You're all caught up!
                            </h3>

                            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-zinc-500">
                                You don't have any notifications right now.
                                When something new happens with your music
                                or account, you'll find it here.
                            </p>

                            <button
                                onClick={() => navigate("/")}
                                className={`group mt-8 inline-flex items-center gap-2 rounded-xl bg-linear-to-r ${theme.button} px-6 py-3 text-sm font-bold text-white shadow-lg ${theme.shadow} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                            >
                                <FiMusic size={18} />
                                Explore Music
                                <FiArrowUpRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </button>
                        </motion.div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-white/10 px-5 py-4 text-center sm:px-8">
                        <p className="text-xs text-zinc-600">
                            You're seeing all your notifications.
                        </p>
                    </div>
                </div>
            </div>
        </motion.main>
    );
}

export default Notification