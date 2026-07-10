import React, { useState, useCallback } from "react";
import Appbar from "../components/Appbar";
import Card from "../components/Card";
import { useDrop } from "react-dnd";

import update from 'immutability-helper';

const Column = ({ status, cards, onDropCard, moveCardListItem }) => {
    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: "card",
        drop: (item) => onDropCard(item.id, status),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }));

    return (
        <div ref={dropRef} className={`flex-1 border-r p-2 ${isOver ? 'bg-gray-50' : ''}`}>
            <h2 className="text-center font-bold mb-4 uppercase">{status}</h2>
            {cards.map((card, index) => (
                <Card
                    key={card.id}
                    id={card.id}
                    index={index}
                    title={card.title}
                    description={card.description}
                    moveCardListItem={moveCardListItem}
                />
            ))}
        </div>
    );
};

const Board = () => {
    const [cards, setCards] = useState([
        { id: 1, title: "first", description: "this is my first card", status: "todo" },
        { id: 2, title: "second", description: "this is my second card", status: "in-progress" },
        { id: 3, title: "third", description: "this is my third card", status: "done" }
    ]);


    const moveCardListItem = useCallback((draggedId, hoveredId) => {
        setCards((prevCards) => {
            const dragIndex = prevCards.findIndex(c => c.id === draggedId);
            const hoverIndex = prevCards.findIndex(c => c.id === hoveredId);

            if (dragIndex === -1 || hoverIndex === -1) return prevCards;

            const newCards = [...prevCards];
            const draggedCard = newCards[dragIndex];

            newCards.splice(dragIndex, 1);
            newCards.splice(hoverIndex, 0, draggedCard);

            return newCards;
        });
    }, []);

    const onDropCard = (cardId, newStatus) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === cardId ? { ...card, status: newStatus } : card
            )
        );
    };

    return (
        <div>
            <Appbar />
            <div className="flex min-h-screen mt-5 m-2 pt-4 border-t">
                {['todo', 'in-progress', 'done'].map(status => (
                    <Column
                        key={status}
                        status={status}
                        cards={cards.filter(c => c.status === status)}
                        onDropCard={onDropCard}
                        moveCardListItem={moveCardListItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default Board;