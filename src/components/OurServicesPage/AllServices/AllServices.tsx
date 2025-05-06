import Container from "@/components/Reusable/Container/Container";
import ServiceCard from "./ServiceCard";
import { allServices } from "./services.data";

const AllServices = () => {
  
  return (
    <Container>
      <div className="font-Inter py-20 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {allServices.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </Container>
  );
};

export default AllServices;
