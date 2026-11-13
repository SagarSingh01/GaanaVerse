import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FiUser, FiMail, FiShield, FiMusic, FiHeadphones,
    FiCheckCircle, FiArrowUpRight, FiArrowLeft
} from "react-icons/fi";
import useAuth from "../../Context Api/AuthContext";

const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut", staggerChildren: 0.12 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

function Profile() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const isArtist = user?.role === "artist";
    const username = user?.username || "Music Lover";

    const theme = isArtist
        ? {
            accent: "text-violet-400",
            bg: "bg-violet-500/10",
            border: "border-violet-500/20",
            gradient: "from-violet-950 via-purple-900 to-black",
            avatar: "from-violet-500 to-fuchsia-700",
            glow: "hover:shadow-violet-500/10",
            description: "Your creative space to share music, build your audience and connect with listeners."
        }
        : {
            accent: "text-green-400",
            bg: "bg-green-500/10",
            border: "border-green-500/20",
            gradient: "from-green-950 via-emerald-900 to-black",
            avatar: "from-green-400 to-emerald-700",
            glow: "hover:shadow-green-500/10",
            description: "Your personal music space. Discover new sounds, explore artists and enjoy your favourite tracks."
        };

    const details = [
        { label: "Username", value: username, icon: FiUser },
        { label: "Email Address", value: user?.email || "Not available", icon: FiMail },
        { label: "Account Type", value: isArtist ? "Artist" : "Listener", icon: FiShield },
        { label: "Email Verification", value: user?.verified ? "Verified" : "Not Verified", icon: FiCheckCircle, verified: true }
    ];

    return (
        <motion.main
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            className="min-h-screen bg-neutral-950 px-4 py-8 text-white sm:px-8 lg:px-12"
        >
            <div className="mx-auto max-w-5xl">
                <motion.div variants={itemVariants} className="flex items-center justify-between">
                    <div className="mb-8">
                        <p className={`text-xs font-bold tracking-widest ${theme.accent}`}>YOUR ACCOUNT</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Profile</h1>
                        <p className="mt-2 text-sm text-gray-500">Your identity, your music, your space.</p>
                    </div>

                    <button onClick={() => navigate(-1)} className="group mb-8 flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-neutral-900 px-6 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-white/30 hover:bg-neutral-800 hover:text-white">
                        <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                        Back
                    </button>
                </motion.div>

                <motion.section variants={itemVariants} whileHover={{ y: -3 }} transition={{ duration: 0.25 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 transition-colors duration-300 hover:border-white/20">
                    <div className={`relative h-40 bg-linear-to-r ${theme.gradient} sm:h-52`}>
                        <div className="absolute -right-10 -top-20 size-64 rounded-full border border-white/10 transition duration-700 group-hover:scale-110" />
                        <div className="absolute right-12 top-8 size-36 rounded-full border border-white/10 transition duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-linear-to-t from-neutral-900 to-transparent" />
                        <span className="absolute right-6 top-6 text-xs font-semibold tracking-widest text-white/50">
                            {isArtist ? "ARTIST STUDIO" : "LISTENER SPACE"}
                        </span>
                    </div>

                    <div className="relative px-5 pb-8 sm:px-8">
                        <div className="-mt-14 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">
                            <div className="flex items-end gap-4">
                                <motion.div whileHover={{ scale: 1.06, rotate: 2 }} transition={{ type: "spring", stiffness: 300 }} className={`flex size-28 items-center justify-center rounded-2xl border-4 border-neutral-900 bg-linear-to-br ${theme.avatar} text-4xl font-bold shadow-xl sm:size-32`}>
                                    {username.charAt(0).toUpperCase()}
                                </motion.div>
                                <div className="min-w-0 pb-2">
                                    <h2 className="max-w-56 truncate text-2xl font-bold sm:text-3xl">{username}</h2>
                                    <p className="mt-1 text-sm text-gray-400">{isArtist ? "Independent Artist" : "Music Enthusiast"}</p>
                                </div>
                            </div>

                            <span className={`flex w-fit items-center gap-2 rounded-full border ${theme.border} ${theme.bg} px-4 py-2 text-xs font-bold tracking-wider ${theme.accent}`}>
                                {isArtist ? <FiMusic size={16} /> : <FiHeadphones size={16} />}
                                {isArtist ? "ARTIST" : "LISTENER"}
                            </span>
                        </div>
                        <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400">{theme.description}</p>
                    </div>
                </motion.section>

                <motion.section variants={itemVariants} className="mt-10">
                    <div className="mb-5">
                        <h3 className="text-xl font-bold">Account Details</h3>
                        <p className="mt-1 text-sm text-gray-500">Your personal account information.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {details.map(({ label, value, icon: Icon, verified }, index) => (
                            <motion.div
                                key={label}
                                variants={itemVariants}
                                whileHover={{ y: -4, scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                                className={`group flex items-center gap-4 rounded-2xl border border-white/10 bg-neutral-900 p-5 transition-all duration-300 hover:border-white/20 hover:bg-neutral-800 hover:shadow-xl ${theme.glow}`}
                            >
                                <div className={`rounded-xl ${theme.bg} p-3 ${theme.accent} transition duration-300 group-hover:scale-110`}>
                                    <Icon size={21} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs text-gray-500">{label}</p>
                                    <p className={`mt-1 truncate text-sm font-semibold ${verified ? (user?.verified ? "text-green-400" : "text-yellow-400") : "text-white"}`}>
                                        {value}
                                    </p>
                                </div>
                                <FiArrowUpRight className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-white" />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section variants={itemVariants} whileHover={{ y: -3 }} className={`group mt-8 overflow-hidden rounded-2xl border ${theme.border} ${theme.bg} p-6 transition duration-300 hover:brightness-110 sm:p-8`}>
                    <div className="flex items-center gap-4">
                        <div className={`rounded-2xl bg-black/20 p-4 ${theme.accent}`}>
                            {isArtist ? <FiMusic size={26} /> : <FiHeadphones size={26} />}
                        </div>
                        <div>
                            <p className={`text-xs font-bold tracking-widest ${theme.accent}`}>MADE FOR YOU</p>
                            <h3 className="mt-1 text-lg font-bold">{isArtist ? "Create. Share. Inspire." : "Discover. Listen. Repeat."}</h3>
                            <p className="mt-1 text-sm leading-6 text-gray-400">
                                {isArtist ? "Your music deserves to be heard. Make every track count." : "There is always something new waiting to be discovered."}
                            </p>
                        </div>
                    </div>
                </motion.section>
            </div>
        </motion.main>
    );
}

export default Profile