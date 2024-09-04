import { useEffect, useState } from "react";

export default function GameForm({ onSubmit, onCancel, game }) {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [theme, setTheme] = useState("");
  const [players, setPlayers] = useState("");
  const [playtime, setPlaytime] = useState("");
  const [image, setImage] = useState("");
  

  const [gametype, setGametype] = useState("");
  const [gamestyle, setGamestyle] = useState("");
  const [language, setLanguage] = useState("");
  const [location, setLocation] = useState("");
  useEffect(() => {
    if (game) {
      game.title && setTitle(game.title); // if game.title is true, set the title state with the game.title value
      game.theme && setTheme(game.theme); // if game.title is true, set the title state with the game.title value
      game.difficulty && setDifficulty(game.difficulty);
      game.players && setPlayers(game.players);
      game.playtime && setPlaytime(game.playtime);
      game.image && setImage(game.image); // if user.image is true, set the image state with the user.image value
      
      game.gametype && setGametype(game.gametype);
      game.gamestyle && setGamestyle(game.gamestyle);
      game.language && setLanguage(game.language);
      game.location && setLocation(game.location);
    }
  }, [game]);

  function handleOnSubmit(event) {
    event.preventDefault();

    // validate the form
    if (
      !title ||
      !theme ||
      !difficulty ||
      !players ||
      !playtime ||
      !gametype ||
      !gamestyle ||
      !language ||
      !location
    ) {
      alert("Please fill out all the fields");
      return;
    } else if (!image) {
      alert("Please paste an image URL");
      return;
    } else if (!image.startsWith("http")) {
      alert("Please paste a valid image URL");
      return;
    }

    const game = {
      // key/name: value from state,
      title: title,
      theme: theme,
      difficulty: difficulty,
      players: players,
      gametype: gametype,
      gamestyle: gamestyle,
      language: language,
      location: location,
      playtime: playtime,
      image: image,
    };
    onSubmit(game);
  }

  return (
    <>
    <form className="creatorForm"  onSubmit={handleOnSubmit}>
      <input
        id="title"
        type="text"
        value={title}
        placeholder="Input Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        id="difficulty"
        type="text"
        value={difficulty}
        placeholder="Input Difficulty"
        onChange={(e) => setDifficulty(e.target.value)}
      />

      <input
        id="theme"
        type="text"
        value={theme}
        placeholder="Input Theme"
        onChange={(e) => setTheme(e.target.value)}
      />

      <input
        id="players"
        type="text"
        value={players}
        placeholder="Input Player Amount"
        onChange={(e) => setPlayers(e.target.value)}
      />

      <input
        id="gametype"
        type="text"
        value={gametype}
        placeholder="Input Game Type"
        onChange={(e) => setGametype(e.target.value)}
      />

      <input
        id="playtime"
        type="text"
        value={playtime}
        placeholder="Input Playtime"
        onChange={(e) => setPlaytime(e.target.value)}
      />

      <input
        id="gamestyle"
        type="text"
        value={gamestyle}
        placeholder="Input Game Style"
        onChange={(e) => setGamestyle(e.target.value)}
      />
      <input
        id="location"
        type="text"
        value={location}
        placeholder="Input Location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        id="language"
        type="text"
        value={language}
        placeholder="Input Language"
        onChange={(e) => setLanguage(e.target.value)}
      />
      
      <input
        type="url"
        value={image}
        placeholder="Paste Image URL"
        onChange={(e) => setImage(e.target.value)}
      />
      </form>
      <label htmlFor="image-preview"></label>
      <img
        id="image-preview"
        className="image-preview"
        src={
          image ? image : "https://placehold.co/600x400?text=Image+Preview"
        }
        alt="Choose"
        onError={(e) =>
          (e.target.src =
            "https://placehold.co/600x400?text=Error+loading+image")
        }
      />
      <div className="btns">
        <button type="button" className="btn-cancel" onClick={onCancel}>
          Cancel
        </button>
        <button>{game ? "Save" : "Create"}</button>
      </div>
    
    </>
  );
}
