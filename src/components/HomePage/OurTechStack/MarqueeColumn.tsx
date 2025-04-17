import { ReactNode } from "react";

interface MarqueeColumnProps {
  children: ReactNode;
  direction?: "up" | "down";
  duration?: number; // Optional for speed control
}

const MarqueeColumn = ({ children, direction = "up", duration = 20 }: MarqueeColumnProps) => {
  const animationDirection = direction === "up" ? "animate-scroll-up" : "animate-scroll-down";

  return (
    <div className="h-[500px] overflow-hidden relative">
      <div className={`flex flex-col gap-10 ${animationDirection}`} style={{ animationDuration: `${duration}s` }}>
        {children}
        {children /* duplicate for smooth loop */}
      </div>
    </div>
  );
};

export default MarqueeColumn;
