"use client";
import React from 'react';

const DEFAULT_URL = "https://prtech-solutions.com/";

const MobileMockup = ({ url = DEFAULT_URL }) => {
  const targetUrl = url;
  const iframeWidth = 375;
  const iframeHeight = 667;

  const outerFrameMaxWidth = 170;
  const outerFrameHeight = 310;
  const bezelWidth = 8;

  const innerContentWidth = outerFrameMaxWidth - bezelWidth * 2;
  const scaleFactor = innerContentWidth / iframeWidth;
  const scaledHeight = iframeHeight * scaleFactor;

  return (
    <div
      className="border border-neutral-70 rounded-xl shadow-xl mt-10"
      style={{
        height: `${outerFrameHeight}px`,
        maxWidth: `${outerFrameMaxWidth}px`,
        width: '100%',
      }}
    >
      <div className="relative border-black dark:border-neutral-800 bg-black dark:bg-neutral-800 border-[8px] w-full h-full rounded-xl flex items-center justify-center">
        <div
          className="bg-white dark:bg-black"
          style={{
            width: `${innerContentWidth}px`,
            height: `${scaledHeight}px`,
            overflow: 'hidden',
          }}
        >
          <iframe
            src={targetUrl}
            title={`Mobile view of ${targetUrl}`}
            width={iframeWidth}
            height={iframeHeight}
            style={{
              width: `${iframeWidth}px`,
              height: `${iframeHeight}px`,
              transform: `scale(${scaleFactor})`,
              transformOrigin: 'top left',
              border: '0',
              backgroundColor: '#fff',
              display: 'block',
            }}
            frameBorder="0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Side buttons */}
        <div className="absolute left-[-9px] md:left-[-11px] top-[80px] md:top-[100px] h-10 md:h-12 w-1 md:w-[3px] bg-black dark:bg-neutral-800 rounded-l-lg"></div>
        <div className="absolute left-[-9px] md:left-[-11px] top-[135px] md:top-[160px] h-16 md:h-20 w-1 md:w-[3px] bg-black dark:bg-neutral-800 rounded-l-lg"></div>
        <div className="absolute right-[-9px] md:right-[-11px] top-[110px] md:top-[140px] h-16 md:h-20 w-1 md:w-[3px] bg-black dark:bg-neutral-800 rounded-r-lg"></div>
      </div>
    </div>
  );
};

export default MobileMockup;
