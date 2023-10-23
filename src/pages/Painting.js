import InnerPageContainer from "@/components/common/InnerPageContainer";
import { useRouter } from 'next/router';
import {useEffect, useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Page() {
    // Generate an array of image file names based on a naming convention
    const imageFileNames = Array.from({ length: 58 }, (_, index) => `/Warren/${index + 1}.png`);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const router = useRouter();  

    useEffect(() => {
      console.log('Currently showing image:', selectedIndex + 1);
    }, [selectedIndex]);  

    const handleEnquire = (index) => {
      console.log('Enquiring about painting:', index + 1); 
      router.push(`/enquire?painting=${index + 1}`);
  };
  

  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;

    // If swipe distance is greater than a threshold (e.g., 50 pixels), update the selected index
    if (Math.abs(swipeDistance) > 50) {
      const newIndex = swipeDistance > 0
        ? Math.min(selectedIndex + 1, imageFileNames.length - 1)
        : Math.max(selectedIndex - 1, 0);
      setSelectedIndex(newIndex);
    }
  };

  const renderCarouselItems = () => {
    return imageFileNames.map((fileName, index) => (
        <div 
            className={`carousel-item w-full relative ${index === selectedIndex ? 'block' : 'none'}`} 
            key={index} 
            onClick={() => setSelectedIndex(index)}
        >
            <img src={fileName} className="w-full object-cover" alt={`Painting ${index + 1}`} />
            <button 
                className="btn btn-primary opacity-50 absolute bottom-4 right-4"  // Adjusted classes for styling
                onClick={(e) => {
                    e.stopPropagation();  // Prevents triggering setSelectedIndex when button is clicked
                    handleEnquire(index);
                }}
            >
                Enquire
            </button>
        </div>
    ));
};

   return (
      <InnerPageContainer title="Painting by Warren C">
             <div className="flex flex-col items-center">
                <div 
                    className="w-96 h-128 carousel rounded-box mb-20"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {renderCarouselItems()}
                </div>
            </div> 

        </InnerPageContainer>
    );
}
