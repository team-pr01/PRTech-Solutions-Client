"use client";
import React from "react";

const DEFAULT_URL = "https://prtech-solutions.com/";

const TabMockup = ({ url = DEFAULT_URL }) => {
  const targetUrl = url;
  const iframeWidth = 768;
  const iframeHeight = 1024;

  const outerFrameMaxWidth = 300;
  const outerFrameHeight = 400;
  const bezelWidth = 8;

  const innerContentWidth = outerFrameMaxWidth - bezelWidth * 2;
  const scaleFactor = innerContentWidth / iframeWidth;
  const scaledHeight = iframeHeight * scaleFactor;

  return (
    <div
      className="border border-neutral-70 rounded-xl shadow-xl"
      style={{
        height: `${outerFrameHeight}px`,
        maxWidth: `${outerFrameMaxWidth}px`,
        width: "100%",
      }}
    >
      <div className="relative border-black dark:border-neutral-700 bg-neutral-800 dark:bg-neutral-700 border-[8px] w-full h-full rounded-xl flex items-center justify-center">
        <div className="w-2 h-2 md:w-3 md:h-3 absolute top-[10px] md:top-[14px] left-1/2 -translate-x-1/2 bg-neutral-40 dark:bg-neutral-500 rounded-full z-10"></div>

        <div
          className="bg-white dark:bg-black overflow-hidden"
          style={{
            width: `${innerContentWidth}px`,
            height: `${scaledHeight}px`,
          }}
        >
          <iframe
            src={targetUrl}
            title={`Tablet view of ${targetUrl}`}
            width={iframeWidth}
            height={iframeHeight}
            style={{
              width: `${iframeWidth}px`,
              height: `${iframeHeight}px`,
              transform: `scale(${scaleFactor})`,
              transformOrigin: "top left",
              border: "0",
              backgroundColor: "#fff",
              display: "block",
            }}
            frameBorder="0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TabMockup;
