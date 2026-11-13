import { motion } from "framer-motion";
import { FiBell, FiArrowLeft, FiMusic } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Notification() {
    const navigate = useNavigate();

    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="min-h-screen bg-neutral-950 px-4 py-8 text-white sm:px-8 lg:px-12"
        >
            <div className="mx-auto max-w-5xl">

                {/* Page Header */}
                <div className="mb-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="mb-5 flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-green-400"
                    >
                        <FiArrowLeft size={18} />
                        Go Back
                    </button>

                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                Notifications
                            </h1>
                            <p className="mt-2 text-sm text-zinc-500 sm:text-base">
                                Stay updated with your latest activity.
                            </p>
                        </div>

                        <div className="hidden size-14 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 sm:flex">
                            <FiBell size={26} className="text-green-400" />
                        </div>
                    </div>
                </div>

                {/* Notifications Container */}
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/70 shadow-2xl shadow-green-500/5">

                    {/* Section Header */}
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-8">
                        <div>
                            <h2 className="text-lg font-bold">
                                All Notifications
                            </h2>
                            <p className="mt-1 text-xs text-zinc-500">
                                Your recent updates and activity
                            </p>
                        </div>

                        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                            0 New
                        </span>
                    </div>

                    {/* Empty State */}
                    <div className="flex min-h-96 flex-col items-center justify-center px-6 py-16 text-center">

                        <motion.div
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="mb-7 flex size-24 items-center justify-center rounded-3xl border border-green-500/20 bg-green-500/10"
                        >
                            <FiBell size={42} className="text-green-400" />
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
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20"
                            >
                                <FiMusic size={18} />
                                Explore Music
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