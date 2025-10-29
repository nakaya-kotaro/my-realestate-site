// components/Hero.tsx
export const Hero = ({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) => (
  <div className="relative w-full h-[400px] overflow-hidden">
    <img
      src={imageSrc}
      alt={title}
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center drop-shadow-lg">
        {title}
      </h2>
    </div>
  </div>
);
