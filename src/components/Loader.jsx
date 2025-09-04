const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[var(--bg)] z-50">
      <h1 className="font-bold">Evnx</h1>
      <div className="w-6 h-6 border-2 border-[var(--border)] border-t-[var(--text)] rounded-full animate-spin"></div>
    </div>
  )
}

export default Loader