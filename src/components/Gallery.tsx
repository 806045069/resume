import { gallery } from "../content";
import { AccordionGallery } from "./AccordionGallery";
import { Section, SectionHead } from "./Section";

export function Gallery() {
  return (
    <Section id="gallery" className="py-28 md:py-36">
      <SectionHead
        index="05"
        kicker="Gallery"
        title="影像"
        intro="实验与生活的瞬间（占位图，可替换为你的真实照片）。"
      />
      <AccordionGallery
        items={gallery}
        defaultIndex={2}
        expandRatio={0.52}
        trigger="hover"
        accentColor="#ffffff"
        overlayColor="#060010"
        textColor="#ffffff"
        grayscale
        showLabels
        duration={0.6}
        ease="power3.out"
        parallax={0.5}
        tilt={8}
        stagger={0.06}
        height={460}
        gap={10}
        radius={16}
        orientation="horizontal"
      />
    </Section>
  );
}
