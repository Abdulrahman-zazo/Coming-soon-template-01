// import ComingSoonTemplate2 from "./Templates/Template02"

import ComingSoon from "./Templates/Template01";
import ComingSoonTemplate2 from "./Templates/Template02";
import HeroSection from "./Templates/Template03";

const App = () => {
  return (
    <article>
      <title>Coming Soon Templets</title>
      <meta
        name="description"
        content="في عالم يتغير بسرعة، لم يعد التعلم وحده كافيًا بل يجب أن تتميّز. منصة H-Platform ليست مجرد أداة تعليمية؛ إنها الجسر الذي يربط بين أحلامك والواقع."
      />
      {/* <ComingSoonTemplate2 /> */}
      <HeroSection />
      {/* <ComingSoon /> */}
    </article>
  );
};

export default App;
