import React from "react";
import Layout from "../Layout/Layout";
import EmptyTasks from "../components/EmptyTasks";
import styled from "styled-components";

import { useRouter } from "next/router";
import { BsFillCircleFill } from "react-icons/bs";
import { SIZES, COLORS } from "../constants/constants";
import { useTask } from "../context/TaskContext";

const ContainerTasks = styled.section`
  margin: ${SIZES.marginAreas}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Task = styled.div`
  background: ${COLORS.blackSmoke};
  border-radius: ${SIZES.borderRadius}px;
  padding: ${SIZES.padding}px;
  margin: ${SIZES.marginAreas}px;
  width: 380px;
  transition: transform 250ms;

  &:hover {
    transform: translateY(-5px);
  }
`;

/* Delete and Edit */

const TaskControls = styled.div`
  margin-bottom: ${SIZES.margin}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
`;

/* Icons */
const Icon = styled(BsFillCircleFill)`
  margin-left: 10px;
  circle {
    cursor: pointer;
    color: ${(props) => (props.edit ? `${COLORS.green}` : `${COLORS.red}`)};
  }
`;
/* ------------------- */

/* Task Description */

const TaskDetails = styled.div`
  display: flex;
  align-items: center;
`;

const TaskId = styled.p`
  font-weight: 500;
  color: ${COLORS.gray};
  font-size: 50px;
`;

const TaskDescription = styled.div`
  margin: 0 35px;
  p {
    color: ${COLORS.whiteSmoke};
  }
`;
/* ----------------- */

const Home = () => {
  const { tasks, deleteTask } = useTask();
  const { push } = useRouter();

  return (
    <>
      <Layout>
        {tasks.length === 0 ? (
          <EmptyTasks />
        ) : (
          <ContainerTasks>
            {tasks.map((task, i) => (
              <Task key={task.id}>
                <TaskControls>
                  <Icon onClick={() => push(`/edit/${task.id}`)} edit="true" />
                  <Icon onClick={() => deleteTask(task.id)} />
                </TaskControls>
                <TaskDetails>
                  <TaskId>{i}</TaskId>
                  <TaskDescription>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                  </TaskDescription>
                </TaskDetails>
              </Task>
            ))}
          </ContainerTasks>
        )}
      </Layout>
    </>
  );
};

export default Home;
