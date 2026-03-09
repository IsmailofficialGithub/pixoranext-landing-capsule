import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#181717] text-[#f4efe7] p-4 text-center">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-medium mb-8">Oops! Page Not Found</h2>
      <p className="text-[#b1a696] mb-12 max-w-md">
        It seems like the automation loop took a wrong turn. The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="px-8 py-3 bg-[#f4efe7] text-[#181717] rounded-full font-bold hover:bg-[#b1a696] transition-colors"
      >
        Back to Safety
      </Link>
    </div>
  );
};

export default ErrorPage;
