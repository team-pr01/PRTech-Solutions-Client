import { ICONS } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Card from "./Card";
import { services } from "./MegaMenu.data";

const MegaMenu = () => {
 
  return (
    <Container>
      <div className="bg-secondary-60 p-8 rounded-2xl flex gap-10 w-full">
       <div className="grid grid-cols-2 gap-10 w-[75%] border-r pr-5 border-primary-20">
            {
                services?.map(service => 
                     <div key={service.label} className="flex gap-4">
          <div className="relative size-12">
            <Image src={ICONS.boxShape} alt="" className="size-12" />
            <Image
              src={service.icon}
              alt=""
              className="size-6 absolute top-3 right-3"
            />
          </div>

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white">
              {service.label}
            </h1>
            <p className="text-sm md:text-base leading-6 font-medium text-primary-50 mt-2 max-w-[350px]">
              {service.description}
            </p>
          </div>
        </div>
                )
            }
       </div>
       <Card/>
      </div>
    </Container>
  );
};

export default MegaMenu;
