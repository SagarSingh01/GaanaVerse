import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    FiHome,
    FiArrowLeft,
    FiMusic,
    FiCompass
} from "react-icons/fi";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090B18] px-6 text-white">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8BC82]/10 blur-[120px]" />
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-violet-500/10 blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex max-w-lg flex-col items-center text-center"
            >

                {/* Brand */}
                <div className="mb-9 flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-[#D8BC82]/20 bg-[#D8BC82]/10 text-[#D8BC82]">
                        <FiMusic size={23} />
                    </div>

                    <div className="text-left">
                        <h2 className="text-xl font-extrabold tracking-tight text-white">
                            GaanaVerse
                        </h2>
                        <p className="text-[10px] tracking-widest text-zinc-500">
                            YOUR UNIVERSE. YOUR MUSIC.
                        </p>
                    </div>
                </div>

                {/* 404 */}
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-linear-to-b from-white via-[#D8BC82] to-[#8E754A] bg-clip-text text-[120px] font-black leading-none tracking-tighter text-transparent sm:text-[160px]"
                >
                    404
                </motion.h1>

                {/* Message */}
                <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                    Lost in the universe?
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400 sm:text-base">
                    Looks like this page has gone off track. The destination
                    you're looking for doesn't exist or may have been moved.
                </p>

                {/* Buttons */}
                <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">

                    <button
                        onClick={() => navigate("/", { replace: true })}
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#D8BC82] px-7 py-3 font-bold text-[#090B18] transition-all duration-200 hover:bg-[#E7D09F] active:scale-95"
                    >
                        <FiHome size={18} />
                        Go Home
                    </button>

                    <button
                        onClick={() => navigate(-1)}
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#141629] px-7 py-3 font-semibold text-zinc-300 transition-all duration-200 hover:border-[#D8BC82]/30 hover:bg-[#1C2036] hover:text-white active:scale-95"
                    >
                        <FiArrowLeft size={18} />
                        Go Back
                    </button>

                </div>

                {/* Bottom Text */}
                <div className="mt-12 flex items-center gap-2 text-xs tracking-wider text-zinc-600">
                    <FiCompass size={14} />
                    ERROR 404 • NOTHING TO PLAY HERE
                </div>

            </motion.div>
        </div>
    );
}

export default NotFound