import { useRef } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import {
    FiShield,
    FiArrowLeft,
    FiLock,
    FiKey,
    FiDatabase,
    FiMail,
    FiArrowUpRight,
    FiCheckCircle,
    FiMusic,
} from "react-icons/fi";
import logo from "../../assets/logo.png";

const LAST_UPDATED = "November 18, 2026";
const CONTACT_EMAIL = "sagar12378089@gmail.com";
const HEADER_OFFSET = -110;

const theme = {
    accent: "text-cyan-400",
    soft: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    borderHover: "hover:border-cyan-500/40",
    hover: "hover:text-cyan-300",
    glow: "bg-cyan-500/10",
    dot: "bg-cyan-400",
    gradient: "from-cyan-300 via-blue-400 to-indigo-400",
    button: "from-cyan-500 to-blue-600",
    tocHover: "hover:border-cyan-400",
    tocActive: "[&.active]:border-cyan-400",
};

const highlights = [
    {
        icon: FiLock,
        title: "Password Protection",
        text: "Passwords are hashed before being stored.",
    },
    {
        icon: FiKey,
        title: "Secure Verification",
        text: "Verification codes are hashed and deleted after use.",
    },
    {
        icon: FiDatabase,
        title: "Protected Sessions",
        text: "Authentication sessions use HTTP-only cookies.",
    },
];

const sections = [
    {
        id: "information",
        title: "Information We Collect",
        content: "We collect information you provide during registration, including your username, email address, and password. Passwords are hashed before storage. We may also store account and authentication information required to operate the application.",
    },
    {
        id: "verification",
        title: "Email Verification",
        content: "We use Nodemailer and Gmail with Google OAuth 2.0 to send six-digit OTP verification codes to registered email addresses. OTPs are stored in hashed form and used for email verification. They are deleted after successful verification.",
    },
    {
        id: "usage",
        title: "How We Use Your Information",
        content: "Your information is used to create and manage accounts, verify email addresses, authenticate users, provide application features, maintain security, and improve application functionality.",
    },
    {
        id: "cookies",
        title: "Cookies and Authentication",
        content: "We use HTTP-only authentication cookies to maintain login sessions and protect account-related features. Clearing these cookies may sign you out of the application.",
    },
    {
        id: "security",
        title: "Data Storage and Security",
        content: "We use reasonable security measures to protect user information. Passwords and OTPs are hashed before storage, authentication tokens are handled through secure cookies, and sensitive credentials are stored in environment variables. However, no online system can guarantee complete security.",
    },
    {
        id: "services",
        title: "Third-Party Services",
        content: "Our application uses MongoDB Atlas for database storage, Render for backend hosting, Vercel for frontend hosting, and Gmail with Google OAuth 2.0 for sending verification emails. These services may process information necessary to provide their functionality and are subject to their respective privacy policies.",
    },
    {
        id: "rights",
        title: "Data Retention and Your Rights",
        content: "We retain account information as necessary to provide our services. You may request access to, correction of, or deletion of your personal information by contacting us. Requests are handled subject to applicable legal and technical requirements.",
    },
    {
        id: "children",
        title: "Children's Privacy",
        content: "This application is not knowingly intended to collect personal information from children in violation of applicable laws. Please contact us if you believe a child has provided personal information.",
    },
    {
        id: "updates",
        title: "Changes to This Policy",
        content: "We may update this Privacy Policy when our application or data practices change. Updated versions will be published on this page with a revised date.",
    },
];

const pad = (index) => String(index + 1).padStart(2, "0");

const navLinks = [
    ...sections,
    { id: "contact", title: "Contact Us" },
];

// Animation settings
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

function Toc({ className = "", onNavigate }) {
    return (
        <nav aria-label="Table of contents" className={className}>
            {navLinks.map((section, index) => (
                <ScrollLink
                    key={section.id}
                    to={section.id}
                    href={`#${section.id}`}
                    spy
                    smooth
                    duration={400}
                    offset={HEADER_OFFSET}
                    activeClass="active"
                    onClick={onNavigate}
                    className={`block cursor-pointer border-l-2 border-transparent py-2 pl-4 text-sm text-zinc-500 transition-all duration-200 hover:text-white ${theme.tocHover} [&.active]:text-white ${theme.tocActive}`}
                >
                    <span className={`mr-2 font-mono text-[10px] ${theme.accent} opacity-70`}>
                        {index < sections.length ? pad(index) : "✦"}
                    </span>
                    {section.title}
                </ScrollLink>
            ))}
        </nav>
    );
}

function PrivacyPolicy() {
    const mobileMenu = useRef(null);
    const currentYear = new Date().getFullYear();

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#080B18] text-white">

            {/* Background Effects */}
            <div className={`pointer-events-none absolute -top-48 left-1/2 size-125 -translate-x-1/2 rounded-full ${theme.glow} blur-[150px]`} />

            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Header */}
                <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080B18]/90 backdrop-blur-xl">
                    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">

                        <Link to="/" className="group flex min-w-0 items-center gap-3">
                            <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-cyan-500/20 bg-[#101629] transition-transform duration-300 group-hover:scale-105">
                                <img
                                    src={logo}
                                    alt="GaanaVerse"
                                    className="size-full object-contain p-1"
                                />
                            </div>

                            <div className="min-w-0">
                                <span className={`block truncate bg-linear-to-r ${theme.gradient} bg-clip-text text-base font-extrabold tracking-wide text-transparent sm:text-xl`}>
                                    GaanaVerse
                                </span>

                                <p className="hidden text-[9px] font-semibold tracking-[0.18em] text-zinc-500 sm:block">
                                    YOUR UNIVERSE. YOUR MUSIC.
                                </p>
                            </div>
                        </Link>

                        <Link
                            to="/"
                            className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-[#101629] px-2.5 py-2 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:border-cyan-500/40 hover:text-cyan-300 sm:px-4 sm:py-2.5 sm:text-sm"
                        >
                            <FiArrowLeft
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-x-1"
                            />
                            <span className="hidden sm:inline">Back to Home</span>
                        </Link>
                    </div>
                </header>
            </motion.div>

            {/* Hero */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative border-b border-white/10"
            >
                <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">

                    <motion.div variants={fadeUp} className="max-w-3xl">

                        <div className={`mb-7 inline-flex items-center gap-2 rounded-full border ${theme.border} ${theme.soft} px-4 py-2`}>
                            <FiShield size={14} className={theme.accent} />
                            <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${theme.accent}`}>
                                Your Privacy Matters
                            </span>
                        </div>

                        <h1 className={`bg-linear-to-r ${theme.gradient} bg-clip-text text-4xl font-black leading-[1.2] tracking-tight text-transparent sm:text-5xl lg:text-6xl`}>
                            Privacy Policy
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">
                            Transparency matters. Learn how GaanaVerse collects,
                            uses, stores, and protects your information when
                            you use our music platform.
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#101629] px-3 py-2 text-xs text-zinc-400">
                                <FiCheckCircle className={theme.accent} size={14} />
                                Privacy & Security
                            </span>

                            <span className="rounded-lg border border-white/10 bg-[#101629] px-3 py-2 text-xs text-zinc-500">
                                Last updated: {LAST_UPDATED}
                            </span>
                        </div>
                    </motion.div>

                    {/* Security Highlights */}
                    <motion.div
                        variants={containerVariants}
                        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {highlights.map(({ icon: Icon, title, text }) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                whileHover={{ y: -5 }}
                                className={`group cursor-pointer rounded-2xl border border-white/10 bg-[#101629]/80 p-5 transition-colors duration-300 ${theme.borderHover}`}
                            >
                                <div className={`flex size-11 items-center justify-center rounded-xl ${theme.soft}`}>
                                    <Icon size={20} className={theme.accent} />
                                </div>

                                <h2 className="mt-4 text-sm font-bold text-white">
                                    {title}
                                </h2>

                                <p className="mt-2 text-xs leading-6 text-zinc-500">
                                    {text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Main Content */}
            <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 lg:py-16">

                {/* Desktop Table of Contents */}
                <aside className="hidden lg:block">
                    <div className="sticky top-28">
                        <div className="mb-5 flex items-center gap-2">
                            <div className={`size-1.5 rounded-full ${theme.dot}`} />
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                                On this page
                            </p>
                        </div>

                        <Toc className="border-l border-white/10" />

                        <div className="mt-8 rounded-xl border border-white/10 bg-[#101629] p-4">
                            <FiShield className={`mb-3 ${theme.accent}`} size={20} />

                            <p className="text-xs font-semibold text-white">
                                Your trust matters
                            </p>

                            <p className="mt-2 text-xs leading-5 text-zinc-500">
                                We aim to handle your information responsibly and transparently.
                            </p>
                        </div>
                    </div>
                </aside>

                {/* Policy Content */}
                <div className="min-w-0">

                    {/* Mobile Table of Contents */}
                    <motion.details
                        ref={mobileMenu}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 rounded-2xl border border-white/10 bg-[#101629] p-5 lg:hidden"
                    >
                        <summary className="flex cursor-pointer items-center justify-between text-sm font-bold text-white">
                            <span className="flex items-center gap-2">
                                <FiMusic className={theme.accent} />
                                On this page
                            </span>

                            <span className="text-xs font-medium text-zinc-500">
                                {navLinks.length} sections
                            </span>
                        </summary>

                        <Toc
                            className="mt-5 border-l border-white/10"
                            onNavigate={() => mobileMenu.current?.removeAttribute("open")}
                        />
                    </motion.details>

                    {/* Policy Sections */}
                    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#101629]/60 px-5 sm:px-8">

                        {sections.map((section, index) => (
                            <motion.section
                                key={section.id}
                                id={section.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.55, ease: "easeOut" }}
                                className="scroll-mt-32 py-8 first:pt-8"
                            >
                                <div className="flex items-start gap-4">
                                    <span className={`mt-0.5 shrink-0 font-mono text-xs font-bold ${theme.accent}`}>
                                        {pad(index)}
                                    </span>

                                    <div className="min-w-0">
                                        <h2 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                                            {section.title}
                                        </h2>

                                        <p className="mt-4 text-sm leading-8 text-zinc-400 sm:text-[15px]">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.section>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <motion.section
                        id="contact"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className={`relative mt-10 scroll-mt-32 overflow-hidden rounded-2xl border ${theme.border} bg-[#101629] p-6 sm:p-9`}
                    >
                        <div className={`pointer-events-none absolute -right-16 -top-16 size-52 rounded-full ${theme.glow} blur-3xl`} />

                        <div className="relative">
                            <div className={`mb-5 flex size-12 items-center justify-center rounded-xl ${theme.soft}`}>
                                <FiMail size={22} className={theme.accent} />
                            </div>

                            <h2 className="text-xl font-bold text-white sm:text-2xl">
                                Questions about your privacy?
                            </h2>

                            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400">
                                If you have questions about your personal information,
                                data handling, or this Privacy Policy, feel free to
                                contact us.
                            </p>

                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className={`group mt-7 inline-flex items-center gap-2 rounded-xl bg-linear-to-r ${theme.button} px-5 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                            >
                                Contact Support
                                <FiArrowUpRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>
                        </div>
                    </motion.section>
                </div>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative border-t border-white/10 bg-[#080B18]"
            >
                <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8">

                    <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

                        <Link to="/" className="group flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-500/20 bg-[#101629]">
                                <img
                                    src={logo}
                                    alt="GaanaVerse"
                                    className="size-full object-contain p-1"
                                />
                            </div>

                            <div>
                                <p className={`bg-linear-to-r ${theme.gradient} bg-clip-text text-sm font-extrabold text-transparent`}>
                                    GaanaVerse
                                </p>

                                <p className="mt-1 text-[9px] tracking-widest text-zinc-600">
                                    MUSIC. CREATIVITY. CONNECTION.
                                </p>
                            </div>
                        </Link>

                        <div className="text-center sm:text-right">
                            <p className="text-xs text-zinc-500">
                                © {currentYear} GaanaVerse. All rights reserved.
                            </p>

                            <p className="mt-2 text-[11px] text-zinc-600">
                                An independent music streaming project.
                            </p>
                        </div>
                    </div>

                    <div className="mt-7 border-t border-white/5 pt-5 text-center">
                        <p className="text-[10px] font-medium tracking-wider text-zinc-600">
                            YOUR UNIVERSE. YOUR MUSIC.
                        </p>
                    </div>
                </div>
            </motion.footer>
        </main>
    );
}

export default PrivacyPolicy