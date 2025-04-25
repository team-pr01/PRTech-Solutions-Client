import { ReactNode } from "react";

interface MarqueeColumnProps {
  children: ReactNode;
  direction?: "up" | "down";
  height? : string;
  duration?: number; // Optional for speed control
}

const MarqueeColumn = ({ children, height="h-[550px]", direction = "up", duration = 20 }: MarqueeColumnProps) => {
  const animationDirection = direction === "up" ? "animate-scroll-up" : "animate-scroll-down";

  return (
    <div className={`overflow-hidden relative ${height}`}>
      
      <div className={`flex flex-col gap-10 ${animationDirection}`} style={{ animationDuration: `${duration}s` }}>
        {children}
        {children /* duplicate for smooth loop */}
      </div>
    </div>
  );
};

export default MarqueeColumn;
