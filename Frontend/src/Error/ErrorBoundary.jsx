import React from "react";
import { motion } from "framer-motion";
import {
    FiAlertTriangle,
    FiHome,
    FiRefreshCw,
} from "react-icons/fi";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error Boundary caught an error:", error);
        console.error("Component Stack:", errorInfo.componentStack);
    }

    handleRetry = () => {
        window.location.reload();
    };

    handleHome = () => {
        window.location.href = "/";
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090B18] px-6 text-white">

                    {/* Background Glow */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8BC82]/5 blur-[120px]" />
                    <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-violet-500/10 blur-[100px]" />

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 w-full max-w-xl text-center"
                    >

                        {/* Error Icon */}
                        <div className="mx-auto mb-8 flex size-20 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
                            <FiAlertTriangle className="text-3xl text-red-400" />
                        </div>

                        {/* Label */}
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#D8BC82]">
                            Unexpected Error
                        </p>

                        {/* Heading */}
                        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                            Something went wrong
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
                            Something unexpected happened while loading this
                            page. Please try again or return to the home page.
                        </p>

                        {/* Buttons */}
                        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

                            <button
                                onClick={this.handleRetry}
                                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#D8BC82] px-7 py-3.5 font-semibold text-[#090B18] transition-all duration-200 hover:bg-[#E7D09F] active:scale-95 sm:w-auto"
                            >
                                <FiRefreshCw size={17} />
                                Try Again
                            </button>

                            <button
                                onClick={this.handleHome}
                                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#141629] px-7 py-3.5 font-semibold text-zinc-300 transition-all duration-200 hover:border-[#D8BC82]/30 hover:bg-[#1C2036] hover:text-white active:scale-95 sm:w-auto"
                            >
                                <FiHome size={17} />
                                Go Home
                            </button>

                        </div>

                        {/* Footer */}
                        <div className="mt-12 border-t border-white/5 pt-6">
                            <p className="text-xs leading-5 text-zinc-500">
                                If the problem continues, try refreshing the
                                page or come back again later.
                            </p>
                            <p className="mt-4 text-[10px] tracking-[0.2em] text-zinc-700">
                                GAANAVERSE • ERROR BOUNDARY
                            </p>
                        </div>

                    </motion.div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary