import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import slides from 'slide.json';
import { ArrowBtn } from 'components/ArrowBtn';
import { ReactComponent as LeftBtn } from 'assets/left_arrow.svg';
import { ReactComponent as RightBtn } from 'assets/right_arrow.svg';

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
    scrollRef.current.scrollLeft -= MOVING;
  };

  const handleRightClick = () => {
    scrollRef.current.scrollLeft += MOVING;
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
        <LeftBtn />
      </ArrowBtn>
      <ArrowBtn type='right' _onClick={handleRightClick}>
        <RightBtn />
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
  scroll-behavior: smooth;
  align-items: center;
  position: relative;
`;

const SlideList = styled.ul`
  width: 30000px;
  overflow: hidden;
  scroll-behavior: smooth;
  display: flex;
  justify-content: center;
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
