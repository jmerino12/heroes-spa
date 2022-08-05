import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { DCPage } from "../pages/DCPage"
import { HeroePage } from "../pages/HeroePage"
import { MarvelPage } from "../pages/MarvelPage"
import { SearchPage } from "../pages/SearchPage"

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DCPage />} />
                    <Route path='search' element={<SearchPage />} />
                    <Route path="heroe/:heroId" element={<HeroePage />} />
                    <Route path='/' element={<Navigate to='/marvel' />} />
                </Routes>
            </div>

        </>
    )
}
