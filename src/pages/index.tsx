import { FC, useEffect } from "react";
import Todos from "@components/Todos";
import Content from "@components/Layouts/Content";
import TodoHeader from "@components/Todos/TodoHeader";
import Title from "@components/ui/Title";
import TodoBody from "@components/Todos/TodoBody";
import { fetchLists } from "@store/todos/slice";
import { useAppDispatch } from "@src/hooks/redux";


const Home: FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchLists())
  }, [dispatch])

  
  return (
    <>
      <Content>
        <Todos>
          <TodoHeader>
            <Title title='Todos' type='h1' />
          </TodoHeader>
          <TodoBody />
        </Todos>
      </Content>
    </>
  );
}



export default Home