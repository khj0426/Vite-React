import CommonCarousel from '../Common/Carousel';
import type { CarouselProps, responsiveOption } from '../Common/Carousel';
import styled from 'styled-components';

const DetailPageCarouselImage = styled.img`
  display: inline-flex;
  flex-wrap: wrap;
  @media ${(props) => props.theme.desktop} {
    width: 1100px;
    height: 300px;
  }
  @media ${(props) => props.theme.laptop} {
    width: 900px;
    height: 300px;
  }

  @media ${(props) => props.theme.tablet} {
    width: 750px;
    height: 300px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }
  object-fit: contain;
`;

const DetailPageCarousel = () => {
  //props주입
  const DetailPageCarouselProps: CarouselProps = {
    numScroll: 1,
    numVisible: 1,
    imgurls: [
      'https://cdn-mart.baemin.com/inventory-unit/4aa0e74b-1bb5-4b82-a63e-3db7cfe87910.jpg?w=1080',
      'https://cdn-mart.baemin.com/inventory-unit/f454861c-e2ae-4dcb-ac02-aea51493a696.jpg?w=1080',
    ],
    itemTemplate: (imgUrl: string) => (
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '25px auto',
        }}
      >
        <DetailPageCarouselImage src={imgUrl} alt="캐러셀 이미지" />
      </section>
    ),
    style: {},
  };
  return <CommonCarousel props={DetailPageCarouselProps} />;
};

export default DetailPageCarousel;