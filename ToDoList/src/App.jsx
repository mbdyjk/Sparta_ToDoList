import { useReducer } from "react";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
// import tasksReducer from "./tasksReducer.js";
import { TasksProvider } from "./TasksContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store";

// 1번 방식 - Reducer 사용

// export default function App() {
//   // Reducer를 사용하면 몇 가지 장점이 있다.
//   // 1) 상태 변화에 대한 로직을 reducer 쪽에 분리하여 코드가 깔끔해진다.
//   // 2) 복수의 상태 변화 함수를 찾아가야 하는 방식에서 reducer를 통한 상태 변경으로 흐름이 일관되게 관리된다.
//   // 이번 예제는 각기 다르게 들어온 type을 switch문을 통해 내부 로직에서 다르게 처리하게 된다.
//   // dispatch는 reducer 함수에 액션 객체를 넘겨, type을 통해 어떤 작업을 해야 하는지 전달하는 함수 역할을 수행
//   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

//   // 핸들러에서 dispatch 함수를 통해 로직에 필요한 정보들만 넘긴다.
//   function handleAddTask(text) {
//     dispatch({
//       type: "added",
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(task) {
//     dispatch({
//       type: "changed",
//       task: task,
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       type: "deleted",
//       id: taskId,
//     });
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: "Visit Kafka Museum", done: true },
//   { id: 1, text: "Watch a puppet show", done: false },
//   { id: 2, text: "Lennon Wall pic", done: false },
// ];

// 2번 방식 - Reducer + Context 사용

// 위의 방식은 좋지만, props drilling이 발생한다는 점이 아쉽다.
// Context API를 사용하여 모든 컴포넌트가 Context에 있는 state와 dispatch/set 함수를 읽을 수 있게 한다.
// export default function TaskApp() {
//   return (
//     <TasksProvider>
//       <h1>Day off in Kyoto</h1>
//       <AddTask />
//       <TaskList />
//     </TasksProvider>
//   );
// }

// 3번 방식 - redux 사용

export default function App() {
  return (
    <Provider store={store}>
      <AddTask />
      <TaskList />
    </Provider>
  );
}
