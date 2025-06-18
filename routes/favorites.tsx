import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import CharacterList from "../components/CharacterList.tsx";


type Character = {
  id: string,
  name: string,
  image: string
}

export const handler: Handlers<{characters: Character[]}> = {
    GET: async(req: Request, ctx: FreshContext) => {
        const cookie = req.headers.get("Cookie")
        const favCookie = cookie?.split(";").find((e) => e.trim().startsWith("fav"))

        let favNames: string[] = []

        if(favCookie) favNames = JSON.parse(decodeURIComponent(favCookie.split("=")[1]))
        
        const response = await axios.get("https://hp-api.onrender.com/api/characters")
        const character: Character[] = response.data

        const filtrado = character.filter((e) => favNames.includes(e.id))

        return ctx.render({character: filtrado})
    }
}

const Page = (props: PageProps<{character: Character[]}>) => {
  return(
    <CharacterList characters={props.data.character} />
  )
}
export default Page