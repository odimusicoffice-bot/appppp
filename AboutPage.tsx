import FadeInOnScroll from '@/components/FadeInOnScroll';

interface AboutPageProps {
  onBack: () => void;
}

const chapters = [
  {
    name: 'ODI BOBBY',
    place: 'Thailand',
    story:
      'It started in the warm nights of Bangkok, where ODI BOBBY first found his sound. Between the street markets and the late-night studios, he learned that a single song can carry an entire city inside it.',
  },
  {
    name: 'ODI KIR',
    place: 'Japan',
    story:
      'In Tokyo, ODI KIR built the rhythm. Precise, patient and obsessed with the space between the beats, he turned quiet rooms into the place where ODI LABS began to take shape.',
  },
  {
    name: 'ODI J',
    place: 'Russia',
    story:
      'From the cold streets of Russia, ODI J brought the vision: music made without borders belongs to everyone who listens to it.',
  },
];

export default function AboutPage({ onBack }: AboutPageProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black px-6 pb-40 pt-10 text-white sm:px-10">
      <div className="mx-auto max-w-3xl">
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-[#888888] transition-colors hover:text-white"
        >
          Back
        </button>

        <FadeInOnScroll className="mt-32">
          <h1 className="font-anton text-6xl uppercase leading-[1.2] text-white sm:text-8xl">About Us</h1>
        </FadeInOnScroll>

        {chapters.map((chapter) => (
          <section key={chapter.name} className="mt-48 sm:mt-64">
            <FadeInOnScroll>
              <p className="text-xs uppercase tracking-[0.4em] text-[#888888]">{chapter.place}</p>
              <h2 className="mt-6 font-anton text-5xl uppercase leading-[1.2] text-white sm:text-7xl">
                {chapter.name}
              </h2>
            </FadeInOnScroll>
            <FadeInOnScroll className="mt-12">
              <p className="max-w-xl text-lg leading-[1.5] text-[#D4D4D4] sm:text-xl">{chapter.story}</p>
            </FadeInOnScroll>
          </section>
        ))}

        <FadeInOnScroll className="mt-48 sm:mt-64">
          <p className="font-anton text-3xl uppercase leading-[1.2] text-white sm:text-5xl">
            Three cities. One sound.
          </p>
          <p className="mt-10 text-base italic text-[#888888]">ODI J, CEO of ODI LABS</p>
        </FadeInOnScroll>
      </div>
    </div>
  );
}
