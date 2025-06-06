import React, { useRef, useEffect, useState } from "react";

const TabMockup = () => {
  const targetUrl = "https://prtech-solutions.com/";
  const iframeWidth = 768; // Width of the iframe in pixels
  const iframeHeight = 1024;
  const bezelWidth = 8;

  const containerRef = useRef(null);
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
    <div className="relative z-10 flex justify-center mt-20 px-4">
      <div className="flex flex-col items-center w-full max-w-[40vw] sm:max-w-[300px] lg:max-w-[500px] ">
        <div className="border border-neutral-70 rounded-xl w-full" ref={containerRef}>
          <div
            className="relative bg-black dark:bg-gray-800"
            style={{
              border: `${bezelWidth}px solid black`,
              borderRadius: "0.75rem 0.75rem 0.75rem 0.75rem",
              overflow: "hidden",
              height: `${iframeHeight * scaleFactor}px`,
            }}
          >
            {/* Camera Notch */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg w-5 h-[8px] bg-gray-800 z-20"></div>

            {/* Iframe */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <iframe
                src={targetUrl}
                title={`Laptop view of ${targetUrl}`}
                width={iframeWidth}
                height={iframeHeight}
                style={{
                  border: "0",
                  transform: `scale(${scaleFactor})`,
                  transformOrigin: "top left",
                  backgroundColor: "#fff",
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bezel (Keyboard Base) */}
        
      </div>
    </div>
  );
};

export default TabMockup;
