import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

function Loading() {
    const highlights = [
        { text: "Music", color: "from-cyan-300 to-blue-400" },
        { text: "Creativity", color: "from-fuchsia-300 to-pink-400" },
        { text: "Connection", color: "from-violet-300 to-cyan-300" },
    ];

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 text-white">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute left-1/4 top-1/4 size-40 rounded-full bg-fuchsia-500/10 blur-3xl" />

            {/* Main Content */}
            <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="relative mb-6 flex size-24 items-center justify-center"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border-2 border-cyan-400/20 border-t-fuchsia-400 border-r-cyan-400"
                    />

                    <div className="absolute inset-3 rounded-full bg-linear-to-br from-cyan-400/20 to-fuchsia-500/20 blur-xl" />

                    <div className="relative flex size-17 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg shadow-cyan-500/10">
                        <motion.img
                            src={logo}
                            alt="GaanaVerse"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="size-full object-contain p-2"
                        />
                    </div>
                </motion.div>

                {/* Brand */}
                <motion.h1
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-linear-to-r from-white via-cyan-200 to-fuchsia-400 bg-clip-text py-1 text-3xl font-black tracking-wide text-transparent sm:text-4xl"
                >
                    GaanaVerse
                </motion.h1>

                {/* Tagline */}
                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 text-sm font-semibold">
                    {highlights.map((item, index) => (
                        <motion.span
                            key={item.text}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.25,
                                delay: index * 0.07,
                            }}
                            className={`bg-linear-to-r ${item.color} bg-clip-text text-transparent`}
                        >
                            {item.text}
                            {index < highlights.length - 1 && (
                                <span className="ml-2 text-zinc-600">·</span>
                            )}
                        </motion.span>
                    ))}
                </div>

                {/* Loading Status */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-9 text-sm font-medium text-zinc-300"
                >
                    Preparing your experience...
                </motion.p>

                {/* Progress Animation */}
                <div className="mt-5 h-1 w-44 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                        animate={{ x: ["-100%", "300%"] }}
                        transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="h-full w-1/2 rounded-full bg-linear-to-r from-transparent via-cyan-300 to-fuchsia-400"
                    />
                </div>

                {/* Initialization Status */}
                <div className="mt-5 flex items-center gap-2">
                    <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                        }}
                        className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]"
                    />

                    <p className="text-[10px] font-semibold tracking-[0.18em] text-zinc-500">
                        INITIALIZING GAANAVERSE
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Loading