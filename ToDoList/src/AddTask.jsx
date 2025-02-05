import { useState } from "react";

/**
 * Task를 추가하는 역할 담당 함수
 * onAddTask: 부모로부터 전달된 콜백 함수
 * @param {function} onAddTask
 */
export default function AddTask({ onAddTask }) {
  // add 버튼을 클릭했을 때 빈 문자열로 reset 하기 위해 text 상태 저장
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          // 빈 문자열일 경우 task를 추가하지 않는다.
          if (text.trim()) {
            onAddTask(text);
            setText("");
          }
        }}
      >
        Add
      </button>
    </>
  );
}
