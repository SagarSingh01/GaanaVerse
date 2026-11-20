import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { API } from "../../Context Api/AuthContext";
import toast from "react-hot-toast";
import {
    FiUploadCloud,
    FiMusic,
    FiFile,
    FiCheckCircle,
    FiLoader,
    FiX,
    FiDisc,
    FiHeadphones
} from "react-icons/fi";

function Upload() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            return toast.error("Please select a music file");
        }

        const formData = new FormData(e.target);

        try {
            setLoading(true);
            const res = await API.post("/api/music/upload", formData);
            toast.success(res?.data?.message || "Music uploaded successfully!");
            navigate("/artist");
        }
        catch (err) {
            toast.error(err?.response?.data?.message || "Failed to upload music");
        }
        finally {
            setLoading(false);
        }
    };

    const removeFile = () => {
        setFile(null);
    };

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-10"
        >

            {/* Background Effects */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="pointer-events-none absolute -right-40 -top-40 size-96 rounded-full bg-fuchsia-600/10 blur-3xl"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="pointer-events-none absolute -bottom-40 -left-40 size-96 rounded-full bg-violet-600/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-5xl">

                {/* Page Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mb-12"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-2 text-xs font-bold tracking-widest text-fuchsia-300"
                    >
                        <FiDisc size={15} />
                        CREATOR STUDIO
                    </motion.div>

                    <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
                        Bring your music
                        <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                            to the world.
                        </span>
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                        Your next release starts here. Add your track details,
                        select your audio file, and share your creativity
                        with the GaanaVerse community.
                    </p>
                </motion.div>

                {/* Main Upload Card */}
                <motion.div
                    initial={{ opacity: 0, y: 45, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/30"
                >

                    {/* Card Header */}
                    <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                        <div>
                            <h2 className="text-xl font-bold">
                                Upload a new track
                            </h2>

                            <p className="mt-1.5 text-sm text-zinc-500">
                                Complete the details below to publish your music.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, rotate: -25, scale: 0.7 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex size-12 items-center justify-center rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10 text-2xl text-fuchsia-400"
                        >
                            <FiHeadphones />
                        </motion.div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-9 p-5 sm:p-8 lg:p-10"
                    >

                        {/* Track Title */}
                        <div>
                            <div className="mb-4 flex items-center justify-between">
                                <label
                                    htmlFor="title"
                                    className="text-sm font-semibold text-white"
                                >
                                    Track title
                                </label>

                                <span className="text-xs text-zinc-500">
                                    Required
                                </span>
                            </div>

                            <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950 p-4 transition duration-300 hover:border-fuchsia-500/30 focus-within:border-fuchsia-500/60 focus-within:ring-4 focus-within:ring-fuchsia-500/10 sm:p-5">

                                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/10 text-xl text-fuchsia-400 transition group-focus-within:bg-fuchsia-500/20 group-focus-within:text-fuchsia-300">
                                    <FiMusic />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="mb-1 text-xs font-medium text-zinc-500">
                                        NAME YOUR TRACK
                                    </p>

                                    <input
                                        id="title"
                                        type="text"
                                        name="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                        placeholder="Enter your track name..."
                                        className="w-full bg-transparent text-base font-medium text-white outline-none placeholder:text-zinc-600 sm:text-lg"
                                    />
                                </div>

                                {title.trim() && (
                                    <FiCheckCircle className="shrink-0 text-xl text-fuchsia-400" />
                                )}
                            </div>

                            <p className="mt-3 text-xs text-zinc-500">
                                Choose a memorable name that represents your music.
                            </p>
                        </div>

                        {/* Audio File */}
                        <div>
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <label className="text-sm font-semibold text-white">
                                    Audio file
                                </label>

                                <span className="text-xs text-zinc-500">
                                    Required
                                </span>
                            </div>

                            <label
                                htmlFor="music"
                                className="group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-white/15 bg-slate-950/70 px-5 py-12 text-center transition duration-300 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/5 sm:py-16"
                            >
                                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-fuchsia-500/5 via-transparent to-violet-500/5 opacity-0 transition group-hover:opacity-100" />

                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    whileHover={{ y: -5, scale: 1.08 }}
                                    className="relative mb-6 flex size-20 items-center justify-center rounded-3xl border border-fuchsia-500/20 bg-linear-to-br from-violet-500/20 to-fuchsia-500/10 text-4xl text-fuchsia-300 shadow-xl shadow-fuchsia-950/30"
                                >
                                    <FiUploadCloud />
                                </motion.div>

                                <h3 className="relative text-lg font-bold text-white sm:text-xl">
                                    Choose your music
                                </h3>

                                <p className="relative mt-2 text-sm text-zinc-500">
                                    Click below to browse your device
                                </p>

                                <span className="relative mt-6 inline-flex items-center gap-2 rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/10 px-5 py-3 text-sm font-semibold text-fuchsia-300 transition group-hover:bg-fuchsia-500/20 group-hover:text-white">
                                    <FiFile size={17} />
                                    Browse audio files
                                </span>

                                <p className="relative mt-5 text-xs text-zinc-600">
                                    Select an audio file from your device
                                </p>

                                <input
                                    id="music"
                                    type="file"
                                    name="music"
                                    accept="audio/*"
                                    required
                                    className="hidden"
                                    onChange={(e) =>
                                        setFile(e.target.files?.[0] || null)
                                    }
                                />
                            </label>

                            {/* Selected File */}
                            {file && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4 flex items-center gap-3 rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-4 sm:p-5"
                                >

                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/15 text-xl text-fuchsia-400">
                                        <FiMusic />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-semibold text-white">
                                            {file.name}
                                        </p>

                                        <p className="mt-1 text-xs text-zinc-500">
                                            {(file.size / (1024 * 1024)).toFixed(1)} MB
                                        </p>
                                    </div>

                                    <FiCheckCircle className="shrink-0 text-lg text-fuchsia-400" />

                                    <button
                                        type="button"
                                        onClick={removeFile}
                                        className="ml-1 flex size-9 shrink-0 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-red-500/10 hover:text-red-400"
                                        aria-label="Remove selected file"
                                    >
                                        <FiX size={18} />
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        {/* Upload Footer */}
                        <div className="flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

                            <div className="flex items-start gap-3">
                                <FiCheckCircle className="mt-0.5 shrink-0 text-fuchsia-400" />

                                <p className="max-w-sm text-xs leading-5 text-zinc-500">
                                    Only upload music that you own or have
                                    permission to distribute.
                                </p>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={loading}
                                whileHover={!loading ? { y: -3, scale: 1.02 } : {}}
                                whileTap={!loading ? { scale: 0.97 } : {}}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 via-fuchsia-600 to-pink-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-fuchsia-950/30 transition duration-300 hover:brightness-110 hover:shadow-fuchsia-900/40 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                            >
                                {loading ? (
                                    <>
                                        <FiLoader className="animate-spin text-lg" />
                                        Uploading your track...
                                    </>
                                ) : (
                                    <>
                                        <FiUploadCloud size={19} />
                                        Upload track
                                    </>
                                )}
                            </motion.button>
                        </div>

                    </form>
                </motion.div>

                {/* Bottom Branding */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-8 flex flex-col items-center justify-center gap-2 text-center"
                >
                    <div className="flex items-center gap-2 text-sm font-semibold text-zinc-400">
                        <FiMusic className="text-fuchsia-400" />
                        GaanaVerse Creator Studio
                    </div>

                    <p className="text-xs text-zinc-600">
                        Create. Upload. Inspire.
                    </p>
                </motion.div>

            </div>
        </motion.div>
    );
}

export default Upload