import React from 'react';

export default function DashboardPanel({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-6">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6">{children}</div>
      </div>
    </main>
  );
}
