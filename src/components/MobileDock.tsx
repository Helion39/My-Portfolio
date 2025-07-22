"use client";

import React from "react";

export type MobileDockItemData = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

export type MobileDockProps = {
  items: MobileDockItemData[];
  className?: string;
};

const MobileDock = ({ items, className = "" }: MobileDockProps) => {
  return (
    <div className="mx-2 flex max-w-full items-center justify-center">
      <div
        className={`flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-2 py-2 shadow-lg ${className}`}
        role="toolbar"
        aria-label="Mobile navigation dock"
      >
        {items.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="relative inline-flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg cursor-pointer outline-none transition-opacity duration-200 active:opacity-70"
            aria-label={item.label}
            type="button"
          >
            <div className="flex items-center justify-center">
              {item.icon}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileDock;