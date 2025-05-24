import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        const response = await fetch("/api/visitors");
        const data = await response.json();
        if (data.count) {
          setCount(data.count);
        }
      } catch (error) {
        console.error("Error updating visitor count:", error);
      } finally {
        setLoading(false);
      }
    };

    updateVisitorCount();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-neutral-200" />
      </div>
    );
  }

  return (
    <div className="w-full py-20 flex flex-col items-center justify-center bg-neutral-900/30">
      <h2 className="text-3xl font-bold mb-4 text-neutral-200">
        Visitor Count
      </h2>
      <div className="text-5xl font-bold text-neutral-300">{count}</div>
      <p className="mt-2 text-neutral-400">People have visited this website</p>
    </div>
  );
};

export default VisitorCounter;
