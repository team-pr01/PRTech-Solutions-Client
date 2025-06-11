import React, { useRef, useEffect, useState } from "react";

const DesktopMockup = () => {
  const targetUrl = "https://prtech-solutions.com/";
  const iframeWidth = 1920;
  const iframeHeight = 1080;
  const bezelWidth = 8;

  const containerRef = useRef<HTMLDivElement>(null);
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth - bezelWidth * 2;
        const newScale = containerWidth / iframeWidth;
        setScaleFactor(newScale);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="flex flex-col items-center px-4 mt-10">
      <div
        ref={containerRef}
        className="w-full max-w-[90vw] sm:max-w-[600px] lg:max-w-[900px] z-10"
      >
        {/* Desktop Frame */}
        <div
          className="relative border-[8px] border-neutral-800 bg-neutral-800 rounded-xl overflow-hidden"
          style={{
            height: `${iframeHeight * scaleFactor}px`,
          }}
        >
          <div className="w-full h-full rounded-sm bg-white dark:bg-neutral-900 overflow-hidden">
            <iframe
              src={targetUrl}
              title="Desktop Preview"
              width={iframeWidth}
              height={iframeHeight}
              style={{
                transform: `scale(${scaleFactor})`,
                transformOrigin: "top left",
                border: "0",
                backgroundColor: "#fff",
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Stand */}
      <div className="flex flex-col items-center">
        <div className="w-10 sm:w-16 h-12 sm:h-20 bg-neutral-800 -mt-[1px]" />
        <div className="w-36 sm:w-60 h-3 sm:h-4 bg-neutral-70 rounded-b-md rounded-t-sm" />
      </div>
    </div>
  );
};

export default DesktopMockup;
