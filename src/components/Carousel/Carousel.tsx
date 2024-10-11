import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

/*
 * Propriétées du composant Carousel
 */
interface CarouselProps {
  slides: React.ReactNode[]; 
  autoPlay?: boolean; 
  interval?: number; 
  showArrows?: boolean;
  showPagination?: boolean; 
  className?: string; 
  width?: string;  
  height?: string; 
}

/*
 * Composant Carousel
 */
const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlay = false,
  interval = 3000,
  showArrows = true,
  showPagination = true,
  className,
  width = '100%',
  height = '400px',
}) => {

    /*
    * Etat du composant
    */ 
    const [currentIndex, setCurrentIndex] = useState(0);

    /*
    * Gestion du défilement automatique
    */
    const slideInterval = useRef<NodeJS.Timeout | null>(null);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    /*
    * Fonction pour aller à un slide spécifique
    */
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    /*
    * useEffect pour gérer le défilement automatique
    */
    useEffect(() => {
        if (autoPlay) {
        slideInterval.current = setInterval(() => {
            nextSlide();
        }, interval);
        }
        return () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
        };
    }, [autoPlay, interval]);

    /*
    * Rendu du composant
    */
    return (
        <div className={`carousel ${className || ''}`.trim()} style={{ width, height }}>
        <div className="carousel-slides">
            {slides.map((slide, index) => (
            <div
                key={index}
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                style={{ height }} 
            >
                <div
                className="carousel-slide-content"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} 
                >
                {slide} 
                </div>
            </div>
            ))}
        </div>

        {showArrows && (
            <>
            <button className="carousel-prev" onClick={prevSlide}>
                &lt;
            </button>
            <button className="carousel-next" onClick={nextSlide}>
                &gt;
            </button>
            </>
        )}

        {showPagination && (
            <div className="carousel-pagination">
            {slides.map((_, index) => (
                <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                >
                {index + 1}
                </button>
            ))}
            </div>
        )}
        </div>
    );
};

export default Carousel;
