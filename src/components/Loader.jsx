const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-secondary z-50">
      <div className="animate-pulse flex space-x-4">
        <div className="h-12 w-12 rounded-full bg-accent opacity-75"></div>
      </div>
    </div>
  )
}

export default Loader