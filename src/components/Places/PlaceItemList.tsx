import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import DetailCard from '../Card';
import SelectCategory from '../Select';
import { searchState } from '../Atoms/Atoms';

const StyledListWrapper = styled.ul`
  display: flex;
  margin: 0 auto;
  gap: 15px;
  width: 80%;
  @media ${(props) => props.theme.desktop} {
    width: 1000px;
  }
  @media ${(props) => props.theme.laptop} {
    width: 800px;
  }

  @media ${(props) => props.theme.tablet} {
    width: 800px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
  margin: 0px auto;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: center;
`;

const PlaceItemList = () => {
  const SearchList = useRecoilValue(searchState);
  return (
    <div>
      <SelectCategory />
      <StyledListWrapper>
        {SearchList.map((eachList) => (
          <div key={eachList.id}>
            <li key={eachList.id} />
            <DetailCard list={eachList} />
          </div>
        ))}
      </StyledListWrapper>
    </div>
  );
};

export default PlaceItemList;
