import SectionHeading from '../components/ui/SectionHeading.jsx';
import VenueInfo from '../components/book/VenueInfo.jsx';
import ReservationForm from '../components/book/ReservationForm.jsx';
import { useToast } from '../context/ToastContext.jsx';

export default function BookPage() {
  const { showToast } = useToast();

  return (
    <main className="w-full flex-grow py-6 sm:py-8 lg:py-14 bg-[#140e0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="RESERVE YOUR SPOT"
          title="Book a Table With Us"
          description="We'll make sure your dining experience in Coimbatore is memorable and seamless."
          className="max-w-lg pb-6 sm:pb-8"
          titleClassName="text-2xl sm:text-4xl lg:text-5xl"
          descriptionClassName="text-xs sm:text-sm"
        />
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
          <VenueInfo />
          <ReservationForm onSubmitted={(d) => showToast(`Reservation booked for ${d.fullName || 'you'}!`)} />
        </div>
      </div>
    </main>
  );
}
