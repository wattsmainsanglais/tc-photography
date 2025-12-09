import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutBlurb from './components/AboutBlurb';
import MasonryGallery from './components/MasonryGallery';

export default function Home() {
  // Wildlife images
  const wildlifeImages = [
    '/optimized/wildlife/0001.webp',
    '/optimized/wildlife/0002.webp',
    '/optimized/wildlife/0010.webp',
    '/optimized/wildlife/0033.webp',
    '/optimized/wildlife/0034.webp',
    '/optimized/wildlife/0046.webp',
    '/optimized/wildlife/WU8A3656.webp',
    '/optimized/wildlife/WU8A8326.webp',
  ];

  // Birds images - combining all subcategories
  const birdsImages = [
    // Ducks
    '/optimized/birds/ducks/1624.webp',
    '/optimized/birds/ducks/DSC00202.webp',
    '/optimized/birds/ducks/DSC00222.webp',
    '/optimized/birds/ducks/DSC00328.webp',
    '/optimized/birds/ducks/DSC00361.webp',
    '/optimized/birds/ducks/merganser 002.webp',
    // Flight
    '/optimized/birds/flight/0002.webp',
    '/optimized/birds/flight/0005.webp',
    '/optimized/birds/flight/0024.webp',
    '/optimized/birds/flight/1426.webp',
    '/optimized/birds/flight/DSC00384.webp',
    '/optimized/birds/flight/lapwing-927.webp',
    // Small
    '/optimized/birds/small/0008.webp',
    '/optimized/birds/small/1657.webp',
    '/optimized/birds/small/1671.webp',
    '/optimized/birds/small/1705.webp',
    '/optimized/birds/small/1804.webp',
    '/optimized/birds/small/1842.webp',
  ];

  // Insects images
  const insectsImages = [
    '/optimized/insects/0004.webp',
    '/optimized/insects/0005.webp',
    '/optimized/insects/0007.webp',
    '/optimized/insects/0008.webp',
    '/optimized/insects/0027.webp',
    '/optimized/insects/0061.webp',
    '/optimized/insects/DSC01421.webp',
    '/optimized/insects/DSC01431.webp',
    '/optimized/insects/_DSC1232.webp',
    '/optimized/insects/_DSC1547.webp',
    '/optimized/insects/_DSC3304.webp',
    '/optimized/insects/_DSC4082.webp',
  ];

  // Landscape images
  const landscapeImages = [
    '/optimized/landscape/0011.webp',
    '/optimized/landscape/0021.webp',
    '/optimized/landscape/0042.webp',
    '/optimized/landscape/DSC00032.webp',
    '/optimized/landscape/finweekend-142.webp',
    '/optimized/landscape/working-on.webp',
    '/optimized/landscape/WU8A1660.webp',
  ];

  // Coast images
  const coastImages = [
    '/optimized/coast/00050.webp',
    '/optimized/coast/009.webp',
    '/optimized/coast/017.webp',
    '/optimized/coast/A3-003 -impressive.webp',
    '/optimized/coast/A3-015.webp',
    '/optimized/coast/A3-024.webp',
    '/optimized/coast/WU8A0702.webp',
    '/optimized/coast/WU8A3414.webp',
  ];

  // River images
  const riverImages = [
    '/optimized/river/0003.webp',
    '/optimized/river/0008 (2).webp',
    '/optimized/river/0027.webp',
    '/optimized/river/0059.webp',
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <AboutBlurb />

      {/* Gallery Sections - alternating between white and subtle grey backgrounds */}
      <div className="bg-white">
        <MasonryGallery
          id="coast"
          title="Coast"
          images={coastImages}
          description="Where land meets sea in perfect harmony"
          accentColor="lavender"
        />
      </div>

      <div className="bg-gray-50">
        <MasonryGallery
          id="landscape"
          title="Landscape"
          images={landscapeImages}
          description="Breathtaking vistas and natural scenery"
          accentColor="green"
        />
      </div>

      <div className="bg-white">
        <MasonryGallery
          id="wildlife"
          title="Wildlife"
          images={wildlifeImages}
          description="Intimate moments with nature's magnificent creatures"
          accentColor="lavender"
        />
      </div>

      <div className="bg-gray-50">
        <MasonryGallery
          id="birds"
          title="Birds"
          images={birdsImages}
          description="From ducks to birds in flight, capturing avian beauty"
          accentColor="green"
        />
      </div>

      <div className="bg-white">
        <MasonryGallery
          id="insects"
          title="Insects"
          images={insectsImages}
          description="The intricate world of small wonders"
          accentColor="lavender"
        />
      </div>

      <div className="bg-gray-50">
        <MasonryGallery
          id="river"
          title="River"
          images={riverImages}
          description="Flowing waters and riverside tranquility"
          accentColor="green"
        />
      </div>

      {/* Footer */}
      <footer className="bg-white py-16 text-center border-t border-gray-200">
        <p className="text-gray-500 text-sm tracking-wide mb-2">
          © {new Date().getFullYear()} Terry Carroll Photography. All rights reserved.
        </p>
        <p className="text-gray-400 text-xs">
          Capturing nature's beauty, one frame at a time
        </p>
      </footer>
    </div>
  );
}
