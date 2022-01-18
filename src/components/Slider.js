import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import slides from 'slide.json';
import { ArrowBtn } from 'components/ArrowBtn';
import { ReactComponent as LeftBtn } from 'assets/left_arrow.svg';
import { ReactComponent as RightBtn } from 'assets/right_arrow.svg';
import { ReactComponent as VisitBtn } from 'assets/visit_arrow.svg';

export const Slider = () => {
  const scrollRef = useRef(null);
  const sliderRef = useRef(null);
  const interval = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollLeft = window.screen.width / 2;
  }, []);

  let imageArray = [];

  const slideImg = slides.slides.map((slide) => {
    const { id, src, alt, title, desc } = slide;

    imageArray.push(slide);

    return (
      <>
        <SlideImage key={id}>
          <img src={src} alt={alt} />
          <Information>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <Divider></Divider>
            <VisitBox>
              바로가기
              <VisitIcon>
                <VisitBtn />
              </VisitIcon>
            </VisitBox>
          </Information>
        </SlideImage>
      </>
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

const VisitBox = styled.p`
  width: 100%;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #36f;
  margin: 6px 0 0 13px;
  padding: 12px 8px;
  position: relative;
`;

const VisitIcon = styled.p`
  width: 14px;
  height: 14px;
  position: absolute;
  top: -2px;
  left: 65px;
  color: #36f;
`;

const SlideContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const SlideCellophane = styled.div`
  width: 100%;
  overflow: hidden;
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

const SlideBox = styled.div`
  position: relative;
`;

const SlideImage = styled.li`
  width: 1060px;
  height: 300px;
  border-radius: 3px 3px 0 0;
  margin-right: 20px;
  position: relative;

  & img {
    border-radius: 4px;
    object-fit: cover;
  }
`;

const Information = styled.div`
  width: 330px;
  height: 146px;
  border-radius: 4px;
  background-color: #fff;
  position: absolute;
  top: 126px;
  left: 21px;
`;

const Title = styled.h2`
  margin: 20px 20px 0;
  font-size: 20px;
  line-height: 1.5;
`;

const Desc = styled.h3`
  margin: 0 20px;
  height: 44px;
  font-size: 14px;
  line-height: 1.64;
  color: #333;
`;

const Divider = styled.div`
  height: 1px;
  margin: 0;
  border: none;
  flex-shrink: 0;
  background-color: #ececec;

  @media ${(props) => props.theme.extraLarge} {
    display: none;
  }
`;
