import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import slides from 'slide.json';
import { ArrowBtn } from 'components/ArrowBtn';

export const Slider = () => {
  const scrollRef = useRef(null);
  const sliderRef = useRef(null);
  const interval = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollLeft = window.screen.width / 2;
  }, []);

  let imageArray = [];

  const slideImg = slides.slides.map((slide) => {
    const { id, src, alt } = slide;

    imageArray.push(slide);

    return (
      <SlideImage key={id}>
        <img src={src} alt={alt} />
      </SlideImage>
    );
  });

  const VISIBLE = 'visible';
  const MOVING = 1080;

  let index = 1;

  const AutoSlide = () => {
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);

    const callback = useCallback(() => {
      imageArray[index === 0 ? imageArray.length - 1 : setIndex(index - 1)].classList.remove(VISIBLE);

      imageArray[index].classList.add(VISIBLE);
      setIndex(index + 1);

      if (index === imageArray.length) setIndex(0);
    });

    useEffect(() => {});

    useEffect(() => {
      const timer = setInterval(callback, 1000);
      return () => clearInterval(timer);
    }, [callback]);
  };

  const handleLeftClick = () => {
    scrollRef.current.scrollLeft -= 1080;
  };

  const handleRightClick = () => {
    scrollRef.current.scrollLeft += 1080;
  };

  return (
    <SlideContainer>
      <SlideCellophane ref={scrollRef}>
        <SlideList ref={sliderRef}>
          {slideImg}
          {slideImg}
          {slideImg}
        </SlideList>
      </SlideCellophane>
      <ArrowBtn type='left' _onClick={handleLeftClick}>
        <svg viewBox='0 0 18 18'>
          <path d='m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z'></path>
        </svg>
      </ArrowBtn>
      <ArrowBtn type='right' _onClick={handleRightClick}>
        <svg viewBox='0 0 18 18'>
          <path d='m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z'></path>
        </svg>
      </ArrowBtn>
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const SlideCellophane = styled.div`
  width: 100%;
  overflow: hidden;
  border: 1px solid #dbdbdb;
  background: lightblue;
  scroll-behavior: smooth;
  align-items: center;
  position: relative;
`;

const SlideList = styled.ul`
  width: 30000px;
  background: lightpink;
  overflow: hidden;
  scroll-behavior: smooth;
  display: flex;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SlideImage = styled.li`
  width: 1060px;
  height: 300px;
  border-radius: 3px 3px 0 0;
  margin-right: 20px;

  & img {
    border-radius: 4px;
    object-fit: cover;
  }
`;
