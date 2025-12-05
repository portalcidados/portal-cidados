export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-[#C00026] rounded-full animate-spin mx-auto"></div>
        </div>
        <p className="text-gray-700 text-lg font-medium">Carregando história...</p>
      </div>
    </div>
  );
}
