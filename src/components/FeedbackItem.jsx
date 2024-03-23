import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating} </div>
      <button className="close">
        <FaTimes onClick={() => handleDelete(item.id)} color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
