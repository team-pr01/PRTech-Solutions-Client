import { GRADIENT_BG } from '@/assets'
import Heading from '@/components/Reusable/Heading/Heading'
import Image from 'next/image'
import React from 'react'
import ServiceAccordion from '../OurServices/ServicesAccordion'
import Container from '@/components/Reusable/Container/Container'

const OurTechStack = () => {
  return (
    <div className="relative w-full  h-full flex flex-col justify-center items-center py-20 dark:bg-secondary-50 overflow-hidden">
          {/* Gradient Backgrounds dark mode */}
          <Image
            src={GRADIENT_BG.gradientServiceLeft}
            alt="PRTech Solutions Gradient Left"
            className="hidden dark:block absolute top-1/2 -translate-y-1/2 left-0  h-[380px] w-[200px] pointer-events-none select-none z-0"
          />
          <Image
            src={GRADIENT_BG.gradientServiceRight}
            alt="PRTech Solutions Gradient Right"
            className="hidden dark:block absolute top-1/2 -translate-y-1/2 right-0 h-[460px] w-[250px] pointer-events-none select-none z-0"
          />
    
        <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[44%_35%] gap-5 md:gap-[266px] 3xl:gap-14">
              {/* Left Column */}
              <div>
              <Heading heading="Our Tech Stack" subHeading="our tech stack " align='left' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi minus voluptates excepturi ullam accusantium totam dolores ratione, corporis consequatur deserunt. Mollitia placeat nulla cupiditate debitis exercitationem itaque consequuntur? Dolorem, ex.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate quo assumenda explicabo voluptatem dolores accusantium minima nostrum, minus dicta sapiente culpa incidunt, consectetur ab animi? Animi nulla minus porro eligendi?</p>
              </div>

              {/* Right Column */}
              <ServiceAccordion />
            </div>
            
            <div>cv </div>
        </Container>
      
    </div>
  )
}

export default OurTechStack
