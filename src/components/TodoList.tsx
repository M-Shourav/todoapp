import { useSelector } from "react-redux";
import { TodoSate } from "../../type";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList } = useSelector((state: TodoSate) => state?.todo);
  return (
    <div className="flex flex-col gap-4 p-4 mt-2 rounded-md border border-gray-600">
      {todoList?.length > 0 && (
        <ul className="max-h-[300px] border border-slate-600 shadow-lg shadow-slate-800 p-2">
          {todoList?.map((item) => (
            <TodoItem key={item?._id} item={item} />
          ))}
        </ul>
      )}
      {todoList?.length === 0 && (
        <p className="text-yellow-500 text-base font-medium text-center tracking-wide">
          Your Todo is Empty!
        </p>
      )}
    </div>
  );
};

export default TodoList;
