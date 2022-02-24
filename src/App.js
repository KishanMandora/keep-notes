import { useState } from "react";
import "./App.css";
import { notesData } from "./data";

import Card from "./Card";

function App() {
  const [notesTitle, setNotesTitle] = useState("");
  const [notesTask, setNotesTask] = useState("");
  const [cardBgColor, setCardBgColor] = useState("");
  const [pinNote, setPinNote] = useState(false);
  const [notes, setNotes] = useState([]);

  const [route, setRoute] = useState("notes");

  const pinnedNotes = notes.filter((note) => note.pin);
  const unpinnedNotes = notes.filter((note) => !note.pin);

  console.log(pinnedNotes);

  const notesHandler = () => {
    setNotes((prev) => [
      ...prev,
      {
        id: Math.random(),
        title: notesTitle,
        task: notesTask,
        bgClr: cardBgColor,
        pin: pinNote,
      },
    ]);
    setNotesTask("");
    setNotesTitle("");
    setCardBgColor("");
    setPinNote("");
  };

  return (
    <div className="App">
      <h2> Notes App </h2>

      <div>
        <button onClick={() => setRoute("notes")}> Home </button>
        <button onClick={() => setRoute("archive")}> Archive </button>
      </div>

      {route === "archive" && <h1> Archive here </h1>}
      {route === "notes" && (
        <div>
          <div className="form-div" style={{ backgroundColor: cardBgColor }}>
            <form className="notes-form">
              <input
                type="text"
                value={notesTitle}
                onChange={(e) => setNotesTitle(e.target.value)}
              />
              <textarea
                value={notesTask}
                onChange={(e) => setNotesTask(e.target.value)}
              />
            </form>
            <button onClick={() => setPinNote((prev) => !prev)}>
              {pinNote ? "UNPIN IT" : "PIN IT"}
            </button>
            <button onClick={notesHandler}> Add Note </button>
            <button onClick={() => setCardBgColor("#fbbd33")}> Yellow </button>
            <button onClick={() => setCardBgColor("#c8f08f")}> Green </button>
            <button onClick={() => setCardBgColor(" #a5f8ea")}> Blue </button>
          </div>
          {pinnedNotes && pinnedNotes.length >= 1 && <h2> Pinned </h2>}
          <section className="notes">
            {pinnedNotes.map(({ title, task, bgClr, id }) => {
              return <Card title={title} task={task} bgClr={bgClr} key={id} />;
            })}
          </section>
          {unpinnedNotes && unpinnedNotes.length >= 1 && <h2> Unpinned </h2>}
          <section className="notes">
            {unpinnedNotes.map(({ title, task, bgClr, id }) => {
              return <Card title={title} task={task} bgClr={bgClr} key={id} />;
            })}
          </section>{" "}
        </div>
      )}
    </div>
  );
}

export default App;
