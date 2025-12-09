'use client';

export default function AboutBlurb() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bad-script text-lavender mb-8">
          About the Photographer
        </h2>
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            I'm a self-taught photographer based in Bedminster, Bristol, specializing in landscape and nature photography.
          </p>
          <p>
            From the delicate patterns on an insect's wing to the powerful grace of wildlife in motion,
            I strive to reveal the extraordinary details that often go unnoticed in our natural world.
            Each photograph tells a story of patience, observation, and deep respect for the subjects I encounter.
          </p>
          <p className="text-grass-green font-medium">
            Exploring the beauty of our natural landscapes and the incredible creatures that call them home.
          </p>
        </div>
      </div>
    </section>
  );
}
