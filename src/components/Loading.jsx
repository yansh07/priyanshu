const Loading = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center z-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      <p className="text-white font-mono mt-4">Loading...</p>
    </div>
  </div>
);
export default Loading