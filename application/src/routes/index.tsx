import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'

import { Home } from '../pages/Home'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { InnsueDetails } from '../pages/innsueDetails'

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultLayout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/post/:issueId' element={<InnsueDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}