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
    <img src={game.image || "https://placehold.co/600x400?text=Error+loading+image"} alt={game.title} className="game_image" />
    <div className="game_card-title-container">
    <h2>
      {game.title} 
    </h2>
    <div className="location">
      <p>{game.location}</p>
      <img src="pin.png" className="location_pin" alt="Location Pin" />
    </div>
    </div>

    <div className="categories">

      <div className="category">
      <img src={game.difficulty_icon} className="game_card-icon" alt="difficulty_icon" />
      <p>{game.difficulty}</p>
      </div>

      <div className="category">
      <img src={game.players_icon} className="game_card-icon" alt="difficulty_icon" />
      <p>{game.number_of_players}</p>
      </div>

      <div className="category">
      <img src={game.game_style_icon} className="game_card-icon" alt="difficulty_icon" />
      <p>{game.game_style}</p>
      </div>

      <div className="category">
      <img src={game.theme_icon} className="game_card-icon" alt="difficulty_icon" />
      <p>{game.theme}</p>
      </div>

      <div className="category">
      <img src={game.time_icon} className="game_card-icon" alt="difficulty_icon" />
      <p>{game.game_time}</p>
      </div>

      <div className="category">
      <img src={game.game_type_icon} className="game_card-icon" alt="difficulty_icon" />
      <p>{game.game_type}</p>
      </div>

      
    </div>
    
      <div className="detailed_description">Detailed Description</div>
    
  </article>
  );
}
