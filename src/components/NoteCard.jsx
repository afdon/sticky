const NoteCard = ({ note }) => {
  let mouseStartPos = { x: 0, y: 0 };

  const cardRef = useRef(null);

  const [position, setPosition] = useState(JSON.parse(note.position));

  const body = JSON.parse(note.body);

  return <div>{body}</div>;
};
