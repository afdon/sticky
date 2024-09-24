const NoteCard = ({ note }) => {
    
    const [position, setPosition] = useState(JSON.parse(note.position));

    const body = JSON.parse(note.body);
 
    return <div>{body}</div>;
};