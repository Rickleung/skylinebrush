import { useRouter } from 'next/router';
// Import the descriptions array from description.js
import { descriptions } from './description.js';  

export default function Enquire() {
    const router = useRouter();
    const { painting } = router.query;

    if (!painting) {
        return null;
    }

    const paintingIndex = parseInt(painting, 10) - 1;  // Convert painting query parameter to zero-based index
    const fileName = `/Warren/${painting}.png`;
    const description = descriptions[paintingIndex];  // Get description for the selected painting

    return (
        <div className="flex flex-col items-center mt-16 mb-32">  {/* Increased margin-bottom here */}
        <div>
            <img src={fileName} alt={`Painting ${painting}`} />
            </div>
        <div className="description mt-16">  {/* Reduced margin-top here */}
            <p>{description}</p>  {/* Render the description */}
            <div className="flex space-x-8 mt-16 justify-center">
            <button className="btn btn-primary text-xl px-6 py-2">Buy</button>  {/* Increased text size and padding here */}
                <button className="btn btn-secondary text-xl px-5 py-2">Rent</button>  {/* Increased text size and padding here */}
            </div>
        </div>
        </div>
    );
}
