import React from "react";

const LaptopMockup = () => {
  const targetUrl = "https://prtech-solutions.com/";
  const iframeWidth = 1024;
  const iframeHeight = 640;
  const outerFrameWidth = 512;
  const outerFrameHeight = 320;
  const bezelWidth = 8;
  const innerContentWidth = outerFrameWidth - bezelWidth * 2;
  const scaleFactor = innerContentWidth / iframeWidth;

  return (
    <div className="absolute top-80 -right-0 z-10 flex justify-center">
      <div className="flex flex-col items-center">
        <div
          className="border border-neutral-70 rounded-t-xl"
          style={{ width: `${outerFrameWidth}px` }}
        >
          <div
            className="relative bg-black dark:bg-gray-800"
            style={{
              border: `${bezelWidth}px solid black`,
              borderColor: "#000",
              height: `${outerFrameHeight}px`,
              borderRadius: "0.75rem 0.75rem 0 0",
              overflow: "hidden",
            }}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg w-5 h-[8px] bg-gray-800 z-20"></div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <iframe
                src={targetUrl}
                title={`Laptop view of ${targetUrl}`}
                width={iframeWidth}
                height={iframeHeight}
                style={{
                  border: "0",
                  width: `${iframeWidth}px`,
                  height: `${iframeHeight}px`,
                  transform: `scale(${scaleFactor})`,
                  transformOrigin: "top left",
                  backgroundColor: "#fff",
                }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div
          className="relative bg-neutral-70 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[21px]"
          style={{ width: `${outerFrameWidth + 48}px` }}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[96px] h-[8px] bg-gray-300 dark:bg-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default LaptopMockup;
