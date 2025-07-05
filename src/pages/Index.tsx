
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to the portfolio HTML page
    window.location.href = '/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Loading Portfolio...</h1>
        <p className="text-xl opacity-70">Redirecting to portfolio page</p>
      </div>
    </div>
  );
};

export default Index;
