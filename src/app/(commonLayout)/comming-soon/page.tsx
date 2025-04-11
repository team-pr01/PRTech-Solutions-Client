import { IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { socialLinks } from './socialLinks'

const CommingSoon
 = () => {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <div className="relative flex flex-col items-center justify-center pt-60">
        <Image
          src={IMAGES.prtechSolutionsLogo}
          alt="PRTech Solutions"
          className="w-60 z-50"
        />
        <Image
          src={IMAGES.comingSoonPage}
          alt="PRTech Solutions"
          className="absolute top-0 bottom-0 right-0 left-0 w-full h-screen z-0"
        />
        <div className="flex items-center justify-center flex-col gap-5 z-50 mt-10">
          <h1 className="text-3xl md:text-5xl text-gray-800 font-bold font-Inter text-center max-w-[550px] xl:max-w-[700px] mx-auto leading-normal md:leading-[56px]">
            We Are Coming Up With{" "}
            <span className="text-[#06A0ED]">Business Solutions</span>
          </h1>
          <p className="text-base lg:text-xl text-gray-700 font-Inter text-center">
            We will launch our website by 30th April, 2025.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col lg:flex-row items-center justify-between p-3 xl:p-6">
        <p className="text-xl text-gray-700 font-Inter text-center">
          Copyright © 2025. All the copyrights reserved by PRTech Solutions
        </p>

        <div className="flex items-center gap-6 mt-6">
          {socialLinks.map((link, index: number) =>
            link.href ? (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={`${link.width} cursor-pointer transition duration-300 transform hover:-translate-y-0.5`}
                  src={link.src}
                  alt={link.alt}
                />
              </a>
            ) : (
              <Image
                key={index}
                className={`${link.width} cursor-pointer transition duration-300 transform hover:-translate-y-0.5`}
                src={link.src}
                alt={link.alt}
              />
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default CommingSoon

