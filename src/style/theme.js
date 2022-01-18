const size = {
  extraLarge: '1200px', // 슬라이드 이미지 작아짐 + 슬라이드 텍스트 내려감
  large: '1100px', // navbar 폰트 변화 (14px 600 => 13px 400)
  medium: '992px', // navbar 높이 커짐 + 위아래로 배치
  small: '768px', // navbar 갯수 감소 // 폰트 다시 커짐 (14px 600으로)
};

const theme = {
  extraLarge: `(max-width: ${size.extraLarge})`, // 슬라이드 변화
  large: `(max-width: ${size.large}) and (min-width: ${size.small})`, // 폰트 변화 (이 구간 동안은 작게)
  medium: `(max-width: ${size.medium})`, // navbar 변화
  small: `(max-width: ${size.small})`, // navbar 갯수 감소
};

export default theme;
