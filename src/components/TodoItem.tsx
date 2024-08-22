import { deleteTodo } from "@/redux/TodoSlice";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

interface Item {
  item: {
    todo: string;
    _id: string;
  };
}
const TodoItem = ({ item }: Item) => {
  const dispatch = useDispatch();
  return (
    <motion.li
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ y: { type: "spring", stiffness: 120 } }}
      className="w-full border-l-green-500 border-green-900 border-[1px]
     border-l-[6px] px-2 py-2 mt-1 cursor-pointer font-medium text-sm flex
      items-center justify-between"
    >
      {item?.todo}
      <MdDelete
        onClick={() =>
          dispatch(
            deleteTodo(item?._id),
            toast.success("Todo delete successfully")
          )
        }
        className="text-lg hover:text-red-600 duration-200"
      />
    </motion.li>
  );
};

export default TodoItem;
