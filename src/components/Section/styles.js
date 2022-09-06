import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  //height: 100%;
  width: 100%;
  flex: 1;

  max-height: 500px;
  overflow-y: scroll;
  overflow: auto;

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }

  .sectionPosition {
    display: flex;
    justify-content: space-between;

    margin: 20px 20px 0px 20px;

    @media (max-width: 420px) {
      height: 450px;
  }
  }
`

export const SectionInfo = styled.div`
  display: flex;
  justify-content: flex-start;

  //margin: 20px 20px 0px 20px;
  gap: 15px;

  @media (max-width: 420px) {
      font-size: 0.9rem;
  }

  img {
    border: 1px solid var(--text-title);
    width: 100px;
    object-fit: contain;
  }
`

export const SectionCartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 420px) {
    min-height: 450px;
    margin-bottom: 10px;
  }
`;

export const SectionTrash = styled.div`
  cursor: pointer;
  transition: 0.7s;

  &:hover{
    color: var(--red);
    opacity: 0.7;
  }
`;

export const SectionTitle = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`

export const SectionPrice = styled.p`
  font-size: 0.875rem;
  color: var(--text-title);

  @media (max-width: 420px) {
      font-size: 0.8rem;
  }
`

export const SectionSubPrice = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`
