import React from 'react';

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-md shadow-xl w-full max-w-lg relative">
        <button onClick={() => onOpenChange(false)} className="absolute top-2 right-2 text-xl">&times;</button>
        {children}
      </div>
    </div>
  );
}

export const DialogContent = ({ children }) => <div>{children}</div>;
export const DialogHeader = ({ children }) => <div className="mb-4">{children}</div>;
export const DialogTitle = ({ children }) => <h2 className="text-lg font-semibold">{children}</h2>;