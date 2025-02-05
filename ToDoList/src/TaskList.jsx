import { useState } from "react";
import { useTasks, useTasksDispatch } from "./TasksContext.jsx";

// export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
//   return (
//     // 순서가 없는 목록, bullet point 스타일
//     <ul>
//       {tasks.map((task) => (
//         <li key={task.id}>
//           <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// function Task({ task, onChange, onDelete }) {
//   // Save/Edit 버튼을 클릭했을 때 jsx 블록 형태를 변경시키기 위해 편집 상태 저장
//   const [isEditing, setIsEditing] = useState(false);
//   let taskContent;
//   if (isEditing) {
//     taskContent = (
//       <>
//         {/* 변경된 text 속성을 덮어씌워 task 객체를 전달 */}
//         <input
//           value={task.text}
//           onChange={(e) => {
//             onChange({
//               ...task,
//               text: e.target.value,
//             });
//           }}
//         />
//         <button onClick={() => setIsEditing(false)}>Save</button>
//       </>
//     );
//   } else {
//     taskContent = (
//       <>
//         {task.text}
//         <button onClick={() => setIsEditing(true)}>Edit</button>
//       </>
//     );
//   }
//   return (
//     <label>
//       {/* 변경된 done 속성을 덮어씌워 task 객체를 전달 */}
//       <input
//         type="checkbox"
//         checked={task.done}
//         onChange={(e) => {
//           onChange({
//             ...task,
//             done: e.target.checked,
//           });
//         }}
//       />
//       {taskContent}
//       {/* id 속성을 통해 onDelete 콜백 수행 */}
//       <button onClick={() => onDelete(task.id)}>Delete</button>
//     </label>
//   );
// }
export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
