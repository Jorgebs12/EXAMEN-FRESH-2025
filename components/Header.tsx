import { FunctionalComponent } from "preact/src/index.d.ts";

const Header: FunctionalComponent = () => {
    return(
        <nav class="header">
            <a href="/"> Todos </a>
            <a href="/favorites"> Favortios </a>
        </nav>
    )
}

export default Header