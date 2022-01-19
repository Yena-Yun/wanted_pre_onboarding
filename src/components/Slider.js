import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import slides from 'slide.json';
import { ReactComponent as LeftBtn } from 'assets/left_arrow.svg';
import { ReactComponent as RightBtn } from 'assets/right_arrow.svg';
import { ReactComponent as VisitBtn } from 'assets/visit_arrow.svg';

export const Slider = () => {
  const scrollRef = useRef(null);
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const MAIN = 1060;
  const SPACE = 24;
  const SIDE = 206;

  useEffect(() => {
    scrollRef.current.scrollLeft += SIDE - SPACE * 3;
  }, []);

  let slideArray = slides.slides;

  const slideImg = slideArray.map((slide) => {
    const { id, src, alt, title, desc } = slide;

    return (
      <>
        <SlideImage key={id} darken={id === index}>
          <img src={src} alt={alt} />
          <Information show={id === index}>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <Divider></Divider>
            <VisitBox>
              <div>바로가기</div>
              <VisitIcon>
                <VisitBtn />
              </VisitIcon>
            </VisitBox>
          </Information>
        </SlideImage>
      </>
    );
  });

  const MOVING = MAIN + SPACE;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === slideArray.length - 1 ? (prev = 0) : prev + 1));

      scrollRef.current.scrollLeft += MOVING;
    }, 3000);

    if (scrollRef.current.clientWidth < 1200) clearInterval(interval);

    return () => clearInterval(interval);
  }, [index, slideArray.length, MOVING]);

  const handleLeftClick = () => {
    scrollRef.current.scrollLeft -= MOVING;
    setIndex((prev) => prev - 1);
  };

  const handleRightClick = () => {
    scrollRef.current.scrollLeft += MOVING;
    setIndex((prev) => prev + 1);
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
      <ArrowBtn type='left' onClick={handleLeftClick}>
        <LeftBtn />
      </ArrowBtn>
      <ArrowBtn type='right' onClick={handleRightClick}>
        <RightBtn />
      </ArrowBtn>
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  position: relative;
`;

const SlideCellophane = styled.div`
  width: 100%;
  height: 600px;
  overflow: auto;
  scroll-behavior: smooth;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArrowBtn = styled.button`
  width: 30px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 120px;
  ${(props) => (props.type === 'left' ? 'left: calc((100% - 1210px) / 2);' : 'right: calc((100% - 1200px) / 2);')}
  z-index: 5;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;

  @media ${(props) => props.theme.extraLarge} {
    display: none;
  }
`;

const SlideList = styled.ul`
  width: 30000px;
  scroll-behavior: smooth;
  display: flex;
  justify-content: center;
`;

const SlideImage = styled.li`
  width: 1060px;
  height: 300px;
  border-radius: 3px 3px 0 0;
  margin-right: 20px;
  position: relative;
  ${(props) => (props.darken ? 'filter: brightness(100%);' : 'filter: brightness(50%);')};

  & img {
    border-radius: 4px;
    object-fit: cover;
  }

  @media ${(props) => props.theme.extraLarge} {
    width: 1067px;
    height: 183px;
    filter: brightness(100%);
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
  display: ${(props) => (props.show ? 'block' : 'none')};

  @media ${(props) => props.theme.extraLarge} {
    width: 100%;
    height: auto;
    top: 185px;
    left: 0;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } ;
`;

const Title = styled.h2`
  margin: 20px 20px 0;
  font-size: 20px;
  line-height: 1.5;

  @media ${(props) => props.theme.extraLarge} {
    margin: 16px 0 0;
    font-size: 18px;
    font-weight: 700;
  }
`;

const Desc = styled.h3`
  margin: 0 20px;
  height: 44px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.64;
  color: #333;

  @media ${(props) => props.theme.extraLarge} {
    font-size: 13px;
    font-weight: 500;
    color: #666;
    height: 34px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ececec;

  @media ${(props) => props.theme.extraLarge} {
    display: none;
  }
`;

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

  @media ${(props) => props.theme.extraLarge} {
    padding: 0;
    margin: 0;
    justify-content: center;
  }
`;

const VisitIcon = styled.div`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 12px;
  left: 67px;
  color: #36f;

  @media ${(props) => props.theme.extraLarge} {
    position: static;
    top: 0;
    left: 3px;
  }
`;
