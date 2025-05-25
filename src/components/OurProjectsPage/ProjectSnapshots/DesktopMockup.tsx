import React from "react";

const DesktopMockup = () => {
  const targetUrl = "https://prtech-solutions.com/";
  const iframeWidth = 1920;
  const iframeHeight = 1080;

  const outerFrameMaxWidthMd = 900;
  const bezelWidth = 8;

  const innerContentWidth = outerFrameMaxWidthMd - bezelWidth * 2;
  const scaleFactor = innerContentWidth / iframeWidth;

  return (
    <div className="flex flex-col items-center">
      <div className="border border-neutral-70 rounded-xl w-full max-w-[320] md:max-w-[580px] lg:max-w-[900px] h-[200px] md:h-[340px] lg:h-[500px] z-10">
        <div className="relative border-neutral-800 bg-neutral-800 border-[8px] rounded-xl w-full h-full">
          <div className="rounded-sm overflow-hidden w-full h-full bg-white dark:bg-neutral-900">
            <iframe
              src={targetUrl}
              title={`Desktop view of ${targetUrl}`}
              width={iframeWidth}
              height={iframeHeight}
              style={{
                width: `${iframeWidth}px`,
                height: `${iframeHeight}px`,
                transform: `scale(${scaleFactor})`,
                transformOrigin: "top left",
                border: "0",
                backgroundColor: "#fff",
              }}
              className=""
              frameBorder="0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 md:w-24 h-12 md:h-20 bg-neutral-800 -mt-[1px]"></div>
        <div className="w-48 md:w-60 h-3 md:h-4 bg-neutral-70 rounded-b-md rounded-t-sm"></div>
      </div>
    </div>
  );
};

export default DesktopMockup;
