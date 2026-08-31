import { useState } from "react";
import { motion } from "framer-motion";

export type AccordionItem = {
  image: string;
  label: string;
  link: string;
};

type AccordionGalleryProps = {
  items: AccordionItem[];
  defaultIndex?: number;
  expandRatio?: number;
  trigger?: "hover" | "click";
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  grayscale?: boolean;
  showLabels?: boolean;
  duration?: number;
  ease?: string;
  parallax?: number;
  tilt?: number;
  stagger?: number;
  height?: number;
  gap?: number;
  radius?: number;
  orientation?: "horizontal" | "vertical";
};

// GSAP 风格的缓动名 → framer-motion 贝塞尔（保持传入 API 一致）
const EASING_MAP: Record<string, [number, number, number, number]> = {
  "power2.out": [0.215, 0.61, 0.355, 1],
  "power3.out": [0.215, 0.61, 0.355, 1],
  "power4.out": [0.165, 0.84, 0.44, 1],
  "expo.out": [0.19, 1, 0.22, 1],
  "circ.out": [0.075, 0.82, 0.165, 1],
};

export function AccordionGallery({
  items,
  defaultIndex = 0,
  expandRatio = 0.52,
  trigger = "hover",
  accentColor = "#ffffff",
  overlayColor = "#060010",
  textColor = "#ffffff",
  grayscale = false,
  showLabels = true,
  duration = 0.6,
  ease = "power3.out",
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  height = 460,
  gap = 10,
  radius = 16,
  orientation = "horizontal",
}: AccordionGalleryProps) {
  const [active, setActive] = useState(defaultIndex);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const n = items.length;
  const collapsed = n > 1 ? (1 - expandRatio) / ((n - 1) * expandRatio) : 1;
  const isHorizontal = orientation !== "vertical";
  const resolvedEase = EASING_MAP[ease] ?? ease;

  return (
    <div
      className="flex w-full"
      style={{
        flexDirection: isHorizontal ? "row" : "column",
        height,
        gap,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }}
      onMouseLeave={() => {
        setMouse({ x: 0.5, y: 0.5 });
        if (trigger === "hover") setActive(defaultIndex);
      }}
    >
      {items.map((item, i) => {
        const isActive = i === active;
        return (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="relative block overflow-hidden"
            style={{ borderRadius: radius, flexBasis: 0, flexShrink: 1 }}
            initial={{ flexGrow: collapsed, opacity: 0, y: 24 }}
            animate={{ flexGrow: isActive ? 1 : collapsed, opacity: 1, y: 0 }}
            transition={{ duration, ease: resolvedEase, delay: i * stagger }}
            onMouseEnter={trigger === "hover" ? () => setActive(i) : undefined}
            onClick={trigger === "click" ? () => setActive(i) : undefined}
          >
            <motion.img
              src={item.image}
              alt={item.label}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ filter: grayscale ? "grayscale(100%)" : "none" }}
              animate={{
                scale: isActive ? 1.15 : 1.08,
                x: isActive ? (mouse.x - 0.5) * parallax * -30 : 0,
                y: isActive ? (mouse.y - 0.5) * parallax * -30 : 0,
                rotateY: isActive ? (mouse.x - 0.5) * tilt : 0,
                rotateX: isActive ? -(mouse.y - 0.5) * tilt : 0,
                transformPerspective: 1200,
              }}
              transition={{ duration, ease: resolvedEase }}
            />

            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{ backgroundColor: overlayColor }}
              animate={{ opacity: isActive ? 0.18 : 0.6 }}
              transition={{ duration, ease: resolvedEase }}
            />

            {showLabels && (
              <div className="absolute inset-x-0 bottom-0 p-5">
                <motion.div
                  className="flex items-center gap-2"
                  animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 6 }}
                  transition={{ duration, ease: resolvedEase }}
                >
                  <span className="h-px w-6" style={{ backgroundColor: accentColor }} />
                  <span className="text-sm font-medium" style={{ color: textColor }}>
                    {item.label}
                  </span>
                </motion.div>
              </div>
            )}
          </motion.a>
        );
      })}
    </div>
  );
}
