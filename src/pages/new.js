import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";

import { useRouter } from "next/router";
import { useTask } from "../context/TaskContext";
import { SIZES, COLORS } from "../constants/constants";

const ContainerForm = styled.div`
  display: flex;
  margin: ${SIZES.marginAreas}px 0;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const AlertForm = styled.p`
  display: none;
  color: ${COLORS.red};
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "50px",
}))`
  width: 380px;
  border: none;
  padding: 0 20px;
  color: ${COLORS.whiteSmoke};
  margin: ${SIZES.margin}px 0;
  height: ${SIZES.heightInput};
  background-color: ${COLORS.blackSmoke};
  height: ${(props) => props.size};
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: ${SIZES.margin}px;
  justify-content: center;

  button {
    cursor: pointer;
    background-color: ${COLORS.gray};
    border: none;
    border-radius: 20px;
    padding: ${SIZES.padding}px;
  }
`;

const NewLogin = () => {
  const { createTask } = useTask();
  const { push, query } = useRouter();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
/* 
    push("/");  */
    if (!query.id) {
      createTask(task.title, task.description);

    } else {
      console.log('Updating');
    }
  };

  useEffect(() => {
    if (query.id) {
    }
  }, []);

  return (
    <>
      <Layout>
        <ContainerForm>
          <Form onSubmit={handleSubmit}>
            <AlertForm>Pls complete the inputs</AlertForm>

            <span>{query.id ? "Edit this title" : "Give a title"}</span>
            <Input onChange={handleChange} id="email" name="title" />

            <span>
              {query.id ? "Edit this dscription" : "Here any dscription"}
            </span>
            <Input
              onChange={handleChange}
              size="150px"
              id="textarea"
              name="description"
            />

            <ButtonContainer>
              <button>Add Task</button>
            </ButtonContainer>
          </Form>
        </ContainerForm>
      </Layout>
    </>
  );
};

export default NewLogin;
