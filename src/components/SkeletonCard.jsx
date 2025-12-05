export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-soft animate-pulse">
      <div className="h-40 bg-gray-200" />
      <div className="p-4">
        <div className="h-5 bg-gray-200 mb-2 rounded w-3/4" />
        <div className="h-3 bg-gray-200 mb-3 rounded w-1/2" />
        <div className="h-8 bg-gray-200 rounded w-1/3 mt-6" />
      </div>
    </div>
  );
}
