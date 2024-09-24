import { useState } from "react";

const NoteCard = ({ note }) => {
    let mouseStartPos = { x: 0, y: 0 };

    const [position, setPosition] = useState(JSON.parse(note.position));
    const body = bodyParser(note.body);

    const mouseDown = (e) => {
        if (e.target.className === "card-header") {
            mouseStartPos.x = e.clientX;
            mouseStartPos.y = e.clientY;

            setZIndex(cardRef.current);

            document.addEventListener("mousemove", mouseMove);
            document.addEventListener("mouseup", mouseUp);
            setSelectedNote(note);
        }
    };

    const mouseMove = (e) => {
        const mouseMoveDir = {
            x: mouseStartPos.x - e.clientX,
            y: mouseStartPos.y - e.clientY,
        };

        mouseStartPos.x = e.clientX;
        mouseStartPos.y = e.clientY;

        const newPosition = setNewOffset(cardRef.current, mouseMoveDir);
        setPosition(newPosition);
    };

    return (
        <div

        >
            <div
                onMouseDown={mouseDown}
                className="card-header"
                style={{
                    backgroundColor: colors.colorHeader,
                }}
            >

            </div>
            <div className="card-body">
                <textarea
                    
                ></textarea>
            </div>
        </div>
    );
};

export default NoteCard;