import styled from "styled-components";
import { COLORS } from "../constants/constants";

const EmptyContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: normal;
  }
  p {
    color: ${COLORS.whiteSmoke};
  }
`;

const EmptyTasks = () => {
  return (
    <EmptyContainer>
      <h2>Its time to add new task</h2>
      <p>Go dude</p>
    </EmptyContainer>
  );
};

export default EmptyTasks;
