import React, { useRef } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useInViewPort from '../hook/useInViewPort';

const CardWrapper = styled.li`
  list-style-type: none;
  display: flex;
  width: 300px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  margin: 25px;
  opacity: 0;
  @media ${(props) => props.theme.desktop} {
    width: 350px;
    height: 350px;
  }
  @media ${(props) => props.theme.laptop} {
    width: 300px;
    height: 300px;
  }

  @media ${(props) => props.theme.tablet} {
    width: 300px;
    height: 300px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 250px;
    height: 300px;
  }
  &.animation {
    animation-name: opacity;
    animation-duration: 1500ms;
    animation-fill-mode: forwards;

    @keyframes opacity {
      from {
        opacity: 0;
        transform: translate3d(0, 100%, 50%);
      }
      to {
        opacity: 1;
        transform: translateX(0%, 0%, 0%);
      }
    }
  }
`;

function DetailCard({
  list,
}: {
  list: kakao.maps.services.PlacesSearchResultItem;
}) {
  const cardRef = useRef<HTMLParagraphElement | null>(null);
  const InViewPort = useInViewPort(cardRef, {
    threshold: 1,
  });
  const navigate = useNavigate();
  const handleItemClick = (
    eachList: kakao.maps.services.PlacesSearchResultItem
  ) => {
    navigate('/item', {
      state: {
        eachList,
      },
    });
  };

  return (
    <CardWrapper className={InViewPort ? 'animation' : ''}>
      <Card title={list.place_name} subTitle={list.address_name}>
        <p ref={cardRef}>현재 위치로부터 {list.distance}m만큼 떨어져 있어요!</p>
        <div>
          <Button
            label="더 알아보기"
            icon="pi pi-check"
            onClick={() => handleItemClick(list)}
          />
          <Button
            label="Cancel"
            icon="pi pi-times"
            className="p-button-outlined p-button-secondary"
          />
        </div>
      </Card>
    </CardWrapper>
  );
}

export default DetailCard;
