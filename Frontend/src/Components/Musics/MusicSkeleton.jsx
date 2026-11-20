const MusicSkeleton = () => {
    return (
        <section className="w-full animate-pulse space-y-6 p-4">
            {/* Music Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="space-y-3 rounded-2xl border border-white/5 bg-[#141629] p-3"
                    >
                        {/* Album Cover */}
                        <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/5 bg-linear-to-br from-[#27213D] via-[#19182E] to-[#0D1020]">
                            <div className="absolute inset-0 bg-linear-to-tr from-[#D8BC82]/5 to-transparent" />
                            <div className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/5" />
                        </div>

                        {/* Song Title */}
                        <div className="h-4 w-3/4 rounded-md bg-white/10" />

                        {/* Artist Name */}
                        <div className="h-3 w-1/2 rounded-md bg-white/5" />

                        {/* Audio Placeholder */}
                        <div className="mt-4 h-9 w-full rounded-lg bg-white/5" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MusicSkeleton