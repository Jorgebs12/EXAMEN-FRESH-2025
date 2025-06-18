import Header from "../components/Header.tsx";
import { PageProps } from "$fresh/server.ts";


export default function Layout({ Component }: PageProps) {
  return (
    <div>
        <Header />
        <div>
            <Component />
        </div>
    </div>
    
  );
}