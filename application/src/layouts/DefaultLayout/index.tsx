import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { DefaultLayoutContent } from "./styles";

export function DefaultLayout(){
    return(
        <div>
            <Header/>
            <DefaultLayoutContent>
                <Outlet/>
            </DefaultLayoutContent>
        </div>
    )
}