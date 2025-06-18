import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
    id: string
}

const Favorites: FunctionalComponent<Props> = ({id}) => {
    const [isFav, setIsFav] = useState<boolean>(false)

    useEffect(() => {
        
        const cookie = document.cookie.split(";").find((e) => e.trim().startsWith("fav"))
        
        if(cookie) {
            const favs = JSON.parse(decodeURIComponent(cookie.split("=")[1]))
            setIsFav(favs.includes(id))
        }

    },[id])

    const botonFav = () => {
        const cookie = document.cookie.split(";").find((e) => e.trim().startsWith("fav"))
        
        let favs: string[] = []

        if(cookie) favs = JSON.parse(decodeURIComponent(cookie.split("=")[1]))

        const update = isFav ? favs.filter((e) => e !== id) : [...favs, id]

        document.cookie = `favorites=${encodeURIComponent(JSON.stringify(update))}; path=/`

        setIsFav(!favs)
    }

    return(
        <div>
            <button type="button" onClick={botonFav}> {isFav ? "Delete" : "Add" } </button>
        </div>
    )
}

export default Favorites