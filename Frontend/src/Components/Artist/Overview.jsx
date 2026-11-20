import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    FiArrowDown,
    FiArrowUpRight,
    FiCheckCircle,
    FiDisc,
    FiEdit3,
    FiFolder,
    FiHeadphones,
    FiHeart,
    FiLayers,
    FiMusic,
    FiStar,
    FiUpload,
    FiZap
} from "react-icons/fi";
import useAuth from "../../Context Api/AuthContext";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }
    }
};

function Overview() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const reduceMotion = useReducedMotion();

    const username = user?.username || "Creator";

    const workspace = [
        {
            title: "Upload Music",
            description: "Share your latest creation with the world.",
            icon: FiUpload,
            path: "/artist/upload",
            label: "START CREATING",
            accent: "amber"
        },
        {
            title: "Your Music",
            description: "Manage, organize and update your releases.",
            icon: FiFolder,
            path: "/artist/tracks",
            label: "YOUR LIBRARY",
            accent: "violet"
        }
    ];

    const journey = [
        {
            number: "01",
            title: "Create",
            description: "Turn your ideas and inspiration into something original.",
            icon: FiEdit3
        },
        {
            number: "02",
            title: "Publish",
            description: "Give your music a home and make it ready to discover.",
            icon: FiDisc
        },
        {
            number: "03",
            title: "Connect",
            description: "Reach listeners and let your sound find its audience.",
            icon: FiHeart
        }
    ];

    const checklist = [
        "Choose a clear and memorable title.",
        "Add artwork that represents your music.",
        "Review your track details before publishing.",
        "Make sure your audio is ready to share."
    ];

    const tips = [
        {
            title: "Build Your Identity",
            description: "Create an artist profile that reflects your sound and personality.",
            icon: FiHeadphones
        },
        {
            title: "Stay Organized",
            description: "Keep your releases and creative work easy to manage.",
            icon: FiLayers
        },
        {
            title: "Keep Creating",
            description: "Consistency helps you develop your style and creative voice.",
            icon: FiStar
        }
    ];

    const animationProps = reduceMotion
        ? {}
        : {
            whileHover: { y: -5 },
            whileTap: { scale: 0.98 }
        };

    return (
        <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

            {/* HERO */}
            <section className="relative isolate overflow-hidden border-b border-white/5">

                <div className="absolute inset-0 -z-10 bg-linear-to-br from-slate-900 via-slate-950 to-slate-950" />

                <div className="pointer-events-none absolute -right-32 -top-32 -z-10 size-80 rounded-full bg-amber-500/10 blur-3xl sm:size-96" />

                <div className="pointer-events-none absolute -bottom-40 left-1/4 -z-10 size-80 rounded-full bg-violet-600/10 blur-3xl sm:size-96" />

                {!reduceMotion && (
                    <>
                        <motion.div
                            animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="pointer-events-none absolute right-1/5 top-24 hidden size-24 items-center justify-center rounded-3xl border border-amber-400/20 bg-slate-900/60 shadow-2xl backdrop-blur-xl lg:flex"
                        >
                            <FiMusic className="text-4xl text-amber-300" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="pointer-events-none absolute bottom-20 right-1/3 hidden size-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-slate-900/60 backdrop-blur-xl lg:flex"
                        >
                            <FiDisc className="text-2xl text-violet-300" />
                        </motion.div>
                    </>
                )}

                <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-between px-5 pb-10 pt-16 sm:min-h-[80svh] sm:justify-center sm:px-6 sm:py-20 lg:min-h-162.5 lg:flex-row lg:items-center lg:justify-start lg:px-12 lg:py-20">

                    <motion.div
                        initial={reduceMotion ? false : "hidden"}
                        animate="visible"
                        variants={stagger}
                        className="flex w-full max-w-3xl flex-1 flex-col justify-center lg:flex-none lg:max-w-2xl xl:max-w-3xl"
                    >

                        <motion.div variants={fadeUp}>
                            <span className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-[10px] font-bold tracking-widest text-amber-200 sm:px-4 sm:text-xs">
                                <FiZap className="shrink-0" />
                                GAANAVERSE · ARTIST STUDIO
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                        >
                            Every beat
                            <br />
                            begins with{" "}
                            <span className="bg-linear-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                                you.
                            </span>
                        </motion.h1>

                        <motion.h2
                            variants={fadeUp}
                            className="mt-6 wrap-break-word text-2xl font-semibold leading-tight text-white sm:mt-7 sm:text-3xl lg:text-4xl"
                        >
                            Hey,{" "}
                            <span className="wrap-break-word bg-linear-to-r from-amber-200 to-amber-400 bg-clip-text font-bold text-transparent">
                                {username}
                            </span>
                            <span className="ml-2 inline-block">👋</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base"
                        >
                            Your creative space starts here. Bring your ideas
                            to life, share your music, and bring your sound
                            closer to the people who love it.
                        </motion.p>

                    </motion.div>

                    {/* Realistic Animated Music Artwork */}
                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: reduceMotion ? 0 : 0.3 }}
                        className="relative mx-auto mt-10 flex size-52 shrink-0 items-center justify-center sm:mt-12 sm:size-60 lg:absolute lg:bottom-12 lg:right-12 lg:mt-0 lg:size-72"
                    >

                        {/* Ambient lighting */}
                        <div className="absolute inset-4 rounded-full bg-amber-500/15 blur-3xl" />
                        <div className="absolute inset-10 rounded-full bg-violet-500/15 blur-3xl" />

                        {/* Outer rotating ring */}
                        <motion.div
                            animate={reduceMotion ? {} : { rotate: 360 }}
                            transition={{
                                duration: 35,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute inset-0 rounded-full border border-dashed border-amber-400/25"
                        />

                        {/* Pulsing inner ring */}
                        <motion.div
                            animate={reduceMotion ? {} : {
                                scale: [1, 1.08, 1],
                                opacity: [0.3, 0.7, 0.3]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-5 rounded-full border border-violet-400/30"
                        />

                        {/* Rotating vinyl record */}
                        <motion.div
                            animate={reduceMotion ? {} : { rotate: 360 }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute flex size-36 items-center justify-center rounded-full border border-white/10 bg-linear-to-br from-slate-700 via-slate-950 to-black shadow-[0_0_35px_rgba(245,158,11,0.15)] sm:size-44"
                        >
                            <div className="absolute inset-2 rounded-full border border-white/10" />
                            <div className="absolute inset-5 rounded-full border border-white/10" />
                            <div className="absolute inset-8 rounded-full border border-white/10" />
                            <div className="absolute inset-11 rounded-full border border-white/10" />

                            <div className="flex size-12 items-center justify-center rounded-full border border-amber-400/30 bg-linear-to-br from-amber-300 to-amber-600 shadow-[0_0_20px_rgba(251,191,36,0.4)] sm:size-14">
                                <FiMusic className="text-xl text-slate-950 sm:text-2xl" />
                            </div>
                        </motion.div>

                        {/* Floating headphone centerpiece */}
                        <motion.div
                            animate={reduceMotion ? {} : { y: [0, -7, 0] }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10 flex size-20 items-center justify-center rounded-3xl border border-amber-300/30 bg-slate-900/95 shadow-[0_0_35px_rgba(245,158,11,0.3)] backdrop-blur-xl sm:size-24"
                        >
                            <FiHeadphones className="text-4xl text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.7)] sm:text-5xl" />
                        </motion.div>

                        {/* Floating music note */}
                        <motion.div
                            animate={reduceMotion ? {} : {
                                y: [0, -12, 0],
                                rotate: [0, 12, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute right-1 top-5 z-20 flex size-11 items-center justify-center rounded-2xl border border-amber-300/30 bg-slate-900/95 shadow-[0_0_20px_rgba(245,158,11,0.3)] backdrop-blur-xl sm:right-2 sm:size-14"
                        >
                            <FiMusic className="text-xl text-amber-300 sm:text-2xl" />
                        </motion.div>

                        {/* Floating disc */}
                        <motion.div
                            animate={reduceMotion ? {} : {
                                y: [0, 10, 0],
                                rotate: [0, -15, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute bottom-5 left-0 z-20 flex size-11 items-center justify-center rounded-2xl border border-violet-400/30 bg-slate-900/95 shadow-[0_0_20px_rgba(139,92,246,0.3)] backdrop-blur-xl sm:bottom-7 sm:left-1 sm:size-14"
                        >
                            <FiDisc className="text-xl text-violet-300 sm:text-2xl" />
                        </motion.div>

                        {/* Animated audio visualizer */}
                        <div className="absolute -bottom-3 flex h-8 items-center justify-center gap-1.5">
                            {[12, 22, 30, 18, 26, 12, 20].map((height, index) => (
                                <motion.div
                                    key={index}
                                    animate={reduceMotion ? {} : {
                                        scaleY: [0.5, 1.3, 0.5]
                                    }}
                                    transition={{
                                        duration: 0.8 + index * 0.12,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.08
                                    }}
                                    style={{ height }}
                                    className={`w-1 origin-center rounded-full ${index % 2 === 0
                                            ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                                            : "bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.6)]"
                                        }`}
                                />
                            ))}
                        </div>

                    </motion.div>

                </div>

            </section>

            {/* MAIN CONTENT */}
            <div className="mx-auto max-w-7xl space-y-20 px-4 py-14 sm:space-y-20 sm:px-6 sm:py-14 lg:space-y-24 lg:px-12 lg:py-20">

                {/* YOUR CREATIVE SPACE */}
                <motion.section
                    initial={reduceMotion ? false : "hidden"}
                    whileInView="visible"
                    variants={stagger}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div variants={fadeUp} className="mb-8 sm:mb-9">

                        <p className="text-[10px] font-bold tracking-widest text-amber-400 sm:text-xs">
                            YOUR CREATIVE SPACE
                        </p>

                        <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                            Make something extraordinary.
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                            Your essential tools, right where you need them.
                        </p>

                    </motion.div>

                    <div className="grid grid-cols-1 gap-5 sm:gap-5 md:grid-cols-2">

                        {workspace.map((item) => {
                            const Icon = item.icon;
                            const isGold = item.accent === "amber";

                            return (
                                <motion.button
                                    key={item.title}
                                    variants={fadeUp}
                                    {...animationProps}
                                    onClick={() => navigate(item.path)}
                                    className="group relative flex min-h-44 min-w-0 items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-6 text-left transition hover:border-amber-400/30 hover:bg-slate-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:min-h-48 sm:gap-5 sm:p-7"
                                >

                                    <div
                                        className={`absolute -right-12 -top-12 size-40 rounded-full blur-3xl transition-opacity group-hover:opacity-100 ${isGold
                                            ? "bg-amber-500/10"
                                            : "bg-violet-500/10"
                                            }`}
                                    />

                                    <div
                                        className={`relative flex size-14 shrink-0 items-center justify-center rounded-xl border sm:size-16 sm:rounded-2xl ${isGold
                                            ? "border-amber-400/20 bg-amber-400/10"
                                            : "border-violet-400/20 bg-violet-400/10"
                                            }`}
                                    >
                                        <Icon
                                            className={`text-2xl sm:text-3xl ${isGold
                                                ? "text-amber-300"
                                                : "text-violet-300"
                                                }`}
                                        />
                                    </div>

                                    <div className="relative min-w-0 flex-1">

                                        <p
                                            className={`text-[10px] font-bold tracking-widest sm:text-xs ${isGold
                                                ? "text-amber-400"
                                                : "text-violet-300"
                                                }`}
                                        >
                                            {item.label}
                                        </p>

                                        <h3 className="mt-2 wrap-break-word text-base font-bold sm:text-xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm sm:leading-6">
                                            {item.description}
                                        </p>

                                    </div>

                                    <FiArrowUpRight className="relative shrink-0 text-lg text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-300 sm:text-xl" />

                                </motion.button>
                            );
                        })}

                    </div>
                </motion.section>

                {/* CREATIVE JOURNEY */}
                <motion.section
                    initial={reduceMotion ? false : "hidden"}
                    whileInView="visible"
                    variants={stagger}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div variants={fadeUp} className="mb-8 sm:mb-9">

                        <p className="text-[10px] font-bold tracking-widest text-violet-300 sm:text-xs">
                            THE CREATIVE PROCESS
                        </p>

                        <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                            From inspiration to discovery.
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                            Every great release begins with an idea. Make each
                            step count.
                        </p>

                    </motion.div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {journey.map((step) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.number}
                                    variants={fadeUp}
                                    {...animationProps}
                                    className="group relative min-h-52 min-w-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-amber-400/20 sm:min-h-0 sm:p-7"
                                >

                                    <div className="flex items-center justify-between">

                                        <span className="text-xs font-bold tracking-widest text-amber-400">
                                            {step.number}
                                        </span>

                                        <Icon className="text-xl text-slate-600 transition group-hover:text-amber-300" />

                                    </div>

                                    <div className="my-6 flex size-12 items-center justify-center rounded-xl bg-slate-800 sm:my-8">
                                        <Icon className="text-xl text-amber-300" />
                                    </div>

                                    <h3 className="text-lg font-bold sm:text-xl">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-400">
                                        {step.description}
                                    </p>

                                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-amber-400 to-violet-400 transition-all duration-500 group-hover:w-full" />

                                </motion.div>
                            );
                        })}

                    </div>
                </motion.section>

                {/* PUBLISHING CHECKLIST */}
                <motion.section
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-6 sm:rounded-3xl sm:p-8 lg:p-12"
                >

                    <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-amber-500/5 blur-3xl" />

                    <div className="relative grid min-w-0 gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">

                        <div className="min-w-0">

                            <div className="flex size-12 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 sm:size-12 sm:rounded-2xl">
                                <FiCheckCircle className="text-xl text-amber-300 sm:text-2xl" />
                            </div>

                            <p className="mt-6 text-[10px] font-bold tracking-widest text-amber-400 sm:mt-7 sm:text-xs">
                                BEFORE YOU PUBLISH
                            </p>

                            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                                Make every release count.
                            </h2>

                            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                                A little preparation goes a long way. Keep
                                these details in mind when sharing your next
                                creation with the GaanaVerse community.
                            </p>

                        </div>

                        <div className="min-w-0 space-y-4">

                            {checklist.map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={
                                        reduceMotion
                                            ? false
                                            : { opacity: 0, x: 20 }
                                    }
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: reduceMotion ? 0 : index * 0.1
                                    }}
                                    className="flex min-w-0 cursor-pointer items-start gap-3 rounded-xl border border-white/5 bg-slate-800/50 p-4 transition hover:border-amber-400/20 sm:items-center sm:gap-4"
                                >

                                    <FiCheckCircle className="mt-0.5 shrink-0 text-lg text-amber-300 sm:mt-0" />

                                    <p className="min-w-0 text-xs leading-6 text-slate-300 sm:text-sm sm:leading-6">
                                        {item}
                                    </p>

                                </motion.div>
                            ))}

                        </div>

                    </div>
                </motion.section>

                {/* CREATOR TIPS */}
                <motion.section
                    initial={reduceMotion ? false : "hidden"}
                    whileInView="visible"
                    variants={stagger}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div variants={fadeUp} className="mb-8 sm:mb-9">

                        <p className="text-[10px] font-bold tracking-widest text-violet-300 sm:text-xs">
                            A LITTLE INSPIRATION
                        </p>

                        <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                            Grow beyond the music.
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            Build your identity and keep moving forward.
                        </p>

                    </motion.div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {tips.map((tip) => {
                            const Icon = tip.icon;

                            return (
                                <motion.div
                                    key={tip.title}
                                    variants={fadeUp}
                                    {...animationProps}
                                    className="min-h-44 min-w-0 cursor-pointer rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-violet-400/20 sm:min-h-0 sm:p-7"
                                >

                                    <div className="flex size-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10">
                                        <Icon className="text-xl text-violet-300" />
                                    </div>

                                    <h3 className="mt-5 wrap-break-word font-bold sm:mt-6">
                                        {tip.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-400">
                                        {tip.description}
                                    </p>

                                </motion.div>
                            );
                        })}

                    </div>
                </motion.section>

                {/* CLOSING */}
                <motion.section
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    className="relative isolate overflow-hidden rounded-2xl border border-amber-400/20 bg-linear-to-br from-slate-900 via-slate-950 to-slate-950 px-6 py-14 text-center sm:rounded-3xl sm:px-10 sm:py-14 lg:px-12 lg:py-20"
                >

                    <div className="pointer-events-none absolute -left-24 -top-24 -z-10 size-72 rounded-full bg-amber-500/10 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-28 -right-20 -z-10 size-72 rounded-full bg-violet-500/10 blur-3xl" />

                    <div className="mx-auto flex size-14 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 sm:size-16 sm:rounded-2xl">
                        <FiHeadphones className="text-2xl text-amber-300 sm:text-3xl" />
                    </div>

                    <h2 className="mt-6 text-2xl font-bold leading-tight sm:mt-7 sm:text-4xl lg:text-5xl">
                        The world is ready
                        <br />
                        <span className="bg-linear-to-r from-amber-200 to-violet-300 bg-clip-text text-transparent">
                            for your sound.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
                        Keep creating, keep experimenting, and keep sharing.
                        Your next creation could be someone's new favorite.
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-bold tracking-widest text-slate-500 sm:mt-10 sm:text-xs">
                        <FiHeart className="text-amber-400" />
                        MADE FOR CREATORS
                    </div>

                </motion.section>

            </div>
        </main>
    );
}

export default Overview