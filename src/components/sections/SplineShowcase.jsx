import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import ErrorBoundary from '../ui/ErrorBoundary';

const SplineShowcase = () => {
  return (
    <section className="w-full h-[80vh] bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full">
        <ErrorBoundary fallback={<div className="w-full h-full bg-neutral-900" />}>
            <Suspense fallback={<div className="w-full h-full bg-black animate-pulse" />}>
                <div className="w-full h-full opacity-100">
                    {/* Placeholder Spline Scene - Replace with specific URL */}
                    <Spline scene="https://prod.spline.design/RjyotA8lpQhYjRSv/scene.splinecode" />
                </div>
            </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default SplineShowcase;
