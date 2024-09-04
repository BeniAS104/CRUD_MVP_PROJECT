import { useNavigate } from "react-router-dom";

export default function Game({ game }) {
  // user is a prop containing game data, ex:
  // {id: "...", image: "...", mail: "...", name: "...", phone: "...", title: "..."}
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/games/${game.id}`);
  }

  return (
    <article className="game-card" onClick={handleClick}>
    <img src={game.image || "https://placehold.co/600x400?text=Error+loading+image"} alt={game.title} />
    <div className="game_card-title-container">
    <h2>
      {game.title} 
    </h2>
    <div className="location">
      <p>A4</p>
      <img src="pin.png" className="location_pin" alt="Location Pin" />
    </div>
    </div>

    <div className="categories">

      <div className="category">
      <img src="game_type-party.png" className="game_card-icon" alt="difficulty_icon" />
      <p>{game.difficulty}</p>
      </div>

      <div className="category">
      <img src="difficulty.png" className="game_card-icon" alt="difficulty_icon" />
      <p>{game.difficulty}</p>
      </div>

      <div className="category">
      <img src="difficulty.png" className="game_card-icon" alt="difficulty_icon" />
      <p>{game.difficulty}</p>
      </div>

      <div className="category">
      <img src="difficulty.png" className="game_card-icon" alt="difficulty_icon" />
      <p>{game.difficulty}</p>
      </div>

      <div className="category">
      <img src="difficulty.png" className="game_card-icon" alt="difficulty_icon" />
      <p>{game.difficulty}</p>
      </div>

      <div className="category">
      <img src="difficulty.png" className="game_card-icon" alt="difficulty_icon" />
      <p>{game.difficulty}</p>
      </div>

      
    </div>
    
      <div className="detailed_description">Detailed Description</div>
    
  </article>
  );
}
