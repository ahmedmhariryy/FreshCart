import { LoadingIndicator } from '@/components/application/loading-indicator/loading-indicator';
import React from 'react';
export default function loading() {
  return (
    <>
      <section className="py-6 animate-pulse">
        <div className="container mx-auto px-4">
          <div className="flex flex-col itms-center justify-center gap-4 min-h-screen">
            <LoadingIndicator type="dot-circle" size="md" label="Loading Brands..." />
          </div>
        </div>
      </section>
    </>
  );
}
