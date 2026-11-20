import { FaExclamationCircle } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { motion } from "framer-motion";

const MusicError = () => {
    return (
        <div className="flex min-h-100 w-full flex-col items-center justify-center gap-5 rounded-2xl border border-white/10 bg-[#141629] px-5 py-12 text-center">

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex size-16 items-center justify-center rounded-2xl border border-[#D8BC82]/20 bg-[#D8BC82]/10"
            >
                <FaExclamationCircle className="text-3xl text-[#D8BC82]" />
            </motion.div>

            <div className="space-y-2">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                    Something went wrong
                </h2>

                <p className="mx-auto max-w-sm text-sm leading-6 text-zinc-400">
                    We couldn't load your music. Please check your internet
                    connection and try again.
                </p>
            </div>

            <button
                onClick={() => window.location.reload()}
                className="mt-1 flex cursor-pointer items-center gap-2 rounded-xl border border-[#D8BC82]/30 bg-[#D8BC82] px-6 py-3 text-sm font-bold text-[#090B18] transition-all duration-200 hover:bg-[#E7D09F] active:scale-95"
            >
                <FiRefreshCw size={16} />
                Try Again
            </button>

            <p className="text-xs tracking-wider text-zinc-600">
                GAANAVERSE • YOUR UNIVERSE, YOUR MUSIC
            </p>
        </div>
    );
};

export default MusicError