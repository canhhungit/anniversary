export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 animate-ping rounded-full bg-sky-400/30" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-sky-400 border-t-transparent" />
        </div>
        <p className="text-sm text-slate-400">Đang tải nội dung...</p>
      </div>
    </div>
  );
}
