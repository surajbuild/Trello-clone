import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const Card = ({ id, title, description, index, moveCardListItem }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: "card",
        hover(item, monitor) {
            if (!ref.current) return;

            const dragIndex = item.index;
            const hoverIndex = index;

            if(item.id === id) return;

            if (dragIndex === hoverIndex) return;

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

            moveCardListItem(item.id, id);

            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: "card",
        item: () => {
            return { id, title, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    return (
        <div 
            ref={ref} 
            className="bg-white border border-gray-200 rounded-xl p-5 m-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing"
            style={{ opacity: isDragging ? 0.3 : 1 }} 
        >
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <div className="h-px w-full bg-gray-200 my-3"></div>
            <div className="text-sm text-gray-600 leading-relaxed">
                {description}
            </div>
        </div>
    );
};

export default Card;