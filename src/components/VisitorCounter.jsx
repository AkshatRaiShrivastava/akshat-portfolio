import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  increment,
  update,
} from "firebase/database";

const firebaseConfig = {
  // Get these values from your Firebase console
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const visitorCountRef = ref(database, "visitorCount");

    // Get initial value and increment once
    onValue(
      visitorCountRef,
      (snapshot) => {
        const data = snapshot.val();
        const currentCount = data?.count || 0;

        if (!data) {
          // If no count exists, initialize with 1
          update(visitorCountRef, { count: 1 });
        } else {
          // Increment only on first load
          update(visitorCountRef, { count: currentCount + 1 });
        }

        setCount(currentCount);
        setLoading(false);
      },
      { onlyOnce: true } // Add this option to trigger only once
    );
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
