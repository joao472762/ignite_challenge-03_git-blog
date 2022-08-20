import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { RepoInssues } from '../pages/RepoInssues'

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultLayout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/:issues' element={<RepoInssues/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}