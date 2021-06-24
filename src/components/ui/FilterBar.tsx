import styled from 'styled-components';

import ButtonPrimary from './ButtonPrimary';

const FilterBar: React.FC = () => {
  return (
    <FilterContainer>
      <input type="text" placeholder="Filter by title..." />
      <div>
        <button>
          <img src="/assets/mobile/icon-filter.svg" alt="filter button" />
        </button>
        <ButtonPrimary px="0.875rem" py="0.875rem">
          <img
            src="/assets/desktop/icon-search-white.svg"
            alt="search button"
          />
        </ButtonPrimary>
      </div>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  background-color: ${props => props.theme.elements};
  height: 5rem;
  border-radius: 5px;
  position: absolute;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);
  width: 87.2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.5rem;
  padding-right: 1rem;
  max-width: 1110px;

  input {
    border: none;
    font-size: 1rem;
    width: 65%;
    color: ${props => props.theme.text};
    background-color: transparent;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-family: 'Kumbh Sans', sans-serif;
      color: ${props => props.theme.text};
    }
  }

  button:first-of-type {
    background-color: transparent;
    border: none;
  }

  div {
    width: 92px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    top: 7.5rem;
    width: 90%;
  }
`;

export default FilterBar;
