import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "./Carousel";

describe("Carousel Component", () => {
  const slides = ['Slide 1', 'Slide 2', 'Slide 3'];

  test("renders the correct number of slides", () => {
    render(<Carousel slides={slides} />);
    const slideElements = screen.getAllByText(/Slide/);
    expect(slideElements).toHaveLength(slides.length);
  });

  test("renders the first slide as active by default", () => {
    render(<Carousel slides={slides} />);
    const activeSlide = screen.getByText("Slide 1").closest('.carousel-slide');
    expect(activeSlide).toHaveClass("active");
  });

  test("navigates to the next slide on next button click", () => {
    render(<Carousel slides={slides} showArrows={true} />);
    const nextButton = screen.getByText(">");
    
    act(() => {
      fireEvent.click(nextButton);
    });
    
    const activeSlide = screen.getByText("Slide 2").closest('.carousel-slide');
    expect(activeSlide).toHaveClass("active");
  });

  test("navigates to the previous slide on previous button click", () => {
    render(<Carousel slides={slides} showArrows={true} />);
    const nextButton = screen.getByText(">");
    const prevButton = screen.getByText("<");
    
    act(() => {
      fireEvent.click(nextButton);
      fireEvent.click(prevButton);
    });
    
    const activeSlide = screen.getByText("Slide 1").closest('.carousel-slide');
    expect(activeSlide).toHaveClass("active");
  });

  test("navigates to a specific slide on pagination dot click", () => {
    render(<Carousel slides={slides} showPagination={true} />);
    
    const paginationButton = screen.getByText("2"); 
    act(() => {
      fireEvent.click(paginationButton);
    });
    
    const activeSlide = screen.getByText("Slide 2").closest('.carousel-slide');
    expect(activeSlide).toHaveClass("active");
  });

  test("autoplay changes slides automatically", () => {
    jest.useFakeTimers();
    render(<Carousel slides={slides} autoPlay={true} interval={1000} />);
    
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    
    const activeSlide = screen.getByText("Slide 2").closest('.carousel-slide');
    expect(activeSlide).toHaveClass("active");

    // Advance timers by another second
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    
    const nextActiveSlide = screen.getByText("Slide 3").closest('.carousel-slide');
    expect(nextActiveSlide).toHaveClass("active");

    jest.useRealTimers();
  });

  test("hides arrows if showArrows is false", () => {
    render(<Carousel slides={slides} showArrows={false} />);
    
    const nextButton = screen.queryByText(">");
    const prevButton = screen.queryByText("<");
    
    expect(nextButton).toBeNull();
    expect(prevButton).toBeNull(); 
  });

  test("hides pagination if showPagination is false", () => {
    render(<Carousel slides={slides} showPagination={false} />);
    
    const paginationDots = screen.queryAllByRole("button", { name: /carousel-dot/i });
    
    expect(paginationDots).toHaveLength(0);
  });
});
