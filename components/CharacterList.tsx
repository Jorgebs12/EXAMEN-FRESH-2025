import { FunctionalComponent } from "preact/src/index.d.ts";
import Favorites from "../islands/Favorites.tsx";

type Character = {
  id: string,
  name: string,
  image: string,
}

const CharacterList: FunctionalComponent<{characters: Character[]}> = ({characters}) => {
    return(
        <div class="grid">
            {characters.map((e) => (
                <div class="card"> 
                    <a class="name" href={`/characters/${e.id}`}> 
                        <img src={e.image} alt={e.name} />
                    </a>
                    <div class="card-info"> 
                        <a class="name" href={`/characters/${e.id}`} > {e.name}</a>
                        <Favorites id={e.id} />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CharacterList

//                             
           
