import BookConsultationBanner from "@/components/BookConsultationPage/BookConsultationBanner/BookConsultationBanner";
import BookConsultationForm from "@/components/BookConsultationPage/BookConsultationForm/BookConsultationForm";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";

const BookConsultation = () => {
  return (
    <Container>
      <div className="text-white pt-40 pb-10 font-Inter">
        <Heading
          heading="Book a Consultation"
          subHeading="Schedule a free consultation with our experts to discuss your project needs and requirements. Schedule a free consultation with our experts."
        />

        <div className="flex flex-col-reverse lg:flex-row gap-10 mt-16">
          <BookConsultationBanner />
          <BookConsultationForm />
        </div>
      </div>
    </Container>
  );
};

export default BookConsultation;
