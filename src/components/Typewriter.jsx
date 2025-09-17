import { TypeAnimation } from 'react-type-animation';

export default function HeroTitle() {
  return (
    <h1 className="text-4xl md:text-5xl font-bold text-white pt-6">
      {' '}
      <TypeAnimation
        sequence={[
          'Developer', 2000, // 2s rukega
          'Thinker', 2000,
          'Writer', 2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="bg-gradient-to-r from-white to-white/20 bg-clip-text text-transparent"
      />
    </h1>
  );
}
