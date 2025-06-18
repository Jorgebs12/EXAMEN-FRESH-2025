import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import CharacterId from "../../components/CharacterId.tsx";

type Character = {
  id: string,
  name: string,
  image: string,
  house: string,
  alive: boolean,
}

export const handler: Handlers<{characters: Character[]}> = {
  GET: async(_req: Request, ctx: FreshContext) => {

    const {id} = ctx.params

    const response = await axios.get(`https://hp-api.onrender.com/api/character/${id}`)
    const characters: Character[] = response.data

    return ctx.render({characters})

  }
}

const Page = (props: PageProps<{characters: Character[]}>) => {
  return(
    <CharacterId characters={props.data.characters} />
  )
}

export default Page