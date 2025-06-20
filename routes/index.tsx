import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import CharacterList from "../components/CharacterList.tsx";

type Character = {
  id: string,
  name: string,
  image: string
}

export const handler: Handlers<{characters: Character[]}> = {
  GET: async(_req: Request, ctx: FreshContext) => {

      const response = await axios.get("https://hp-api.onrender.com/api/characters")
      const characters: Character[] = response.data

      return ctx.render({characters})
  }
}

const Page = (props: PageProps<{characters: Character[]}>) => {
  return(
    <CharacterList characters={props.data.characters} />
  )
}

export default Page