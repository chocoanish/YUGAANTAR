import { useEffect, useState, useRef } from "react";
import styles from "./MovingCarousel.module.css";

interface CardImage {
  url: string;
  alt: string;
}

interface MovingCarouselProps {
  direction?: "left" | "right";
  speed?: number;
}

const cardImages: CardImage[] = [
  { url: "https://placehold.co/600x400", alt: "Event 1" },
  { url: "https://placehold.co/600x400", alt: "Event 2" },
  { url: "https://placehold.co/600x400", alt: "Event 3" },
  { url: "https://placehold.co/600x400", alt: "Event 4" },
  { url: "https://placehold.co/600x400", alt: "Event 5" },
  { url: "https://placehold.co/600x400", alt: "Event 6" },
  { url: "https://placehold.co/600x400", alt: "Event 7" },
  { url: "https://placehold.co/600x400", alt: "Event 8" },
];

const MovingCarousel: React.FC<MovingCarouselProps> = ({
  direction = "left",
  speed = 1,
}) => {
  const [cards, setCards] = useState<CardImage[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardSetWidth = useRef(0);
  const [translateX, setTranslateX] = useState(0);

  const shuffleArray = (array: CardImage[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Set up initial cards
  useEffect(() => {
    const shuffledSet1 = shuffleArray(cardImages);
    const shuffledSet2 = shuffleArray(cardImages);
    const shuffledSet3 = shuffleArray(cardImages);
    // Using three sets for smoother transition
    setCards([...shuffledSet1, ...shuffledSet2, ...shuffledSet3]);
  }, []);

  // Calculate card set width
  useEffect(() => {
    const calculateCardSetWidth = () => {
      if (containerRef.current) {
        const cardElements = Array.from(
          containerRef.current.children
        ) as HTMLDivElement[];
        let totalWidth = 0;
        // Calculate width for one set only
        for (let i = 0; i < cardImages.length; i++) {
          const cardStyle =
            cardElements[i] instanceof HTMLElement
              ? window.getComputedStyle(cardElements[i])
              : null;

          if (cardStyle) {
            const cardWidth =
              cardElements[i].offsetWidth +
              parseFloat(cardStyle.marginLeft) +
              parseFloat(cardStyle.marginRight);
            totalWidth += cardWidth;
          }
        }
        cardSetWidth.current = totalWidth;
      }
    };

    calculateCardSetWidth();
    window.addEventListener("resize", calculateCardSetWidth);
    return () => window.removeEventListener("resize", calculateCardSetWidth);
  }, [cards]);

  // Animation
  useEffect(() => {
    let animationFrameId: number;
    const moveSpeed = direction === "left" ? -speed : speed;

    const animate = () => {
      setTranslateX((prev) => {
        let newTranslateX = prev + moveSpeed;

        if (direction === "left") {
          // Reset when scrolled one set width to the left
          if (Math.abs(newTranslateX) >= cardSetWidth.current) {
            newTranslateX = 0;
          }
        } else {
          // For right movement, start from negative position and reset
          if (newTranslateX > 0) {
            newTranslateX = -cardSetWidth.current;
          }
        }
        return newTranslateX;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [direction, speed]);

  return (
    <div className={styles.container}>
      <div
        ref={containerRef}
        className={styles.cardStrip}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {cards.map((image, index) => (
          <div key={`${index}-${image.url}`} className={styles.cardWrapper}>
            <div className={styles.card}>
              <img
                src={image.url}
                alt={image.alt}
                className={styles.cardImage}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingCarousel;
