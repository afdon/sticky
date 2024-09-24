const NoteCard = ({ note }) => {

    const mouseDown = (e) => {
        mouseStartPos.x = e.clientX;
        mouseStartPos.y = e.clientY;
     
        document.addEventListener("mousemove", mouseMove);
    };

    const mouseMove = (e) => {
        //1 - Calculate move direction
        let mouseMoveDir = {
            x: mouseStartPos.x - e.clientX,
            y: mouseStartPos.y - e.clientY,
        };
     
        //2 - Update start position for next move.
        mouseStartPos.x = e.clientX;
        mouseStartPos.y = e.clientY;
     
        //3 - Update card top and left position.
        setPositon({
            x: cardRef.current.offsetLeft - mouseMoveDir.x,
            y: cardRef.current.offsetTop - mouseMoveDir.y,
        });
    };

    let position = JSON.parse(note.position);
    const colors = JSON.parse(note.colors);
    const body = JSON.parse(note.body);
 
    return (
        <div
            className="card"
            style={{
                backgroundColor: colors.colorBody,
            }}
        >
            {body}
        </div>
    );
};