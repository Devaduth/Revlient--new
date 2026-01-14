import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import ErrorBoundary from '../ui/ErrorBoundary';

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
        <ErrorBoundary fallback={
            <div className="w-full h-full bg-black relative overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-indigo-900/20 rounded-full blur-[100px]" />
            </div>
        }>
            <Suspense fallback={null}>
                {/* 
                   NOTE: If you have a valid Spline URL, replace it here. 
                   The previous URL returned 403 Forbidden. 
                   Using a placeholder scene or a different known public URL 
                   is recommended if you have one.
                */}
                <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJJwn/scene.splinecode" />
            </Suspense>
        </ErrorBoundary>
        
        {/* Global overlay for contrast */}
        <div className="absolute inset-0 bg-black/60" />
    </div>
  );
};

export default Background3D;
