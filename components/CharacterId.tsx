import { FunctionalComponent } from "preact/src/index.d.ts";
import Favorites from "../islands/Favorites.tsx";

type Character = {
  id: string,
  name: string,
  image: string,
  house: string,
  alive: boolean,
}

const CharacterId: FunctionalComponent<{characters: Character[]}> = ({characters}) => {
    return(
        <div>
            {characters.map((e) => (
                <div class="detail">  
                    <img src={e.image} alt={e.name} />
                    <Favorites id={e.id} />
                    <h2>{e.name} </h2>
                    <p> Casa: {e.house}</p>
                    <p>Vivo {e.alive}</p>
                    <a href="/">Volver </a>
                    
                </div>
            ))}
        </div>
    )
}
export default CharacterId