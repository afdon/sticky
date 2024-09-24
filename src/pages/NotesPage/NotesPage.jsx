const NoteCard = ({ note }) => {

    const mouseDown = (e) => {
        mouseStartPos.x = e.clientX;
        mouseStartPos.y = e.clientY;
     
        document.addEventListener("mousemove", mouseMove);
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