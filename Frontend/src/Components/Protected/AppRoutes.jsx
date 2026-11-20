import Login from '../Register/Login'
import ProtectedRoute from '../Protected/ProtectedRoute'
import PublicRoute from '../Protected/PublicRoute'
import Signup from '../Register/Signup'
import NotFound from '../../Error/NotFound'
import { Route, Routes } from 'react-router-dom'
import App from '../../App'
import Verify from '../Register/Verify'
import VerifyRoute from './VerifyRoute'
import PrivacyPolicy from '../Privacy Policy/PrivacyPolicy'
import Profile from '../Main/Profile'
import Notification from '../Main/Notification'
import Upload from '../Artist/Upload'
import RoleRoute from './RoleRoute'
import Overview from '../Artist/Overview'
import Hero from '../Main/Hero'
import MusicPlayer from '../Musics/MusicPlayer'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<ProtectedRoute />}>

                {/* GaanaVerse */}
                <Route element={<App />}>

                    {/* Artist Dashboard */}
                    <Route element={<RoleRoute userRole="artist" />}>
                        <Route path='/artist' element={<Overview />} />
                        <Route path='/artist/upload' element={<Upload />} />
                        <Route path='/artist/profile' element={<Profile />} />
                    </Route>

                    {/* Listener Dashboard */}
                    <Route element={<RoleRoute userRole="user" />}>
                        <Route path='/' element={<Hero />} />
                        <Route path='/music/:id' element={<MusicPlayer />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/notifications' element={<Notification />} />
                    </Route>

                </Route>

            </Route>

            <Route path='/login' element={
                <PublicRoute>
                    <Login />
                </PublicRoute>
            } />

            <Route path='/signup' element={
                <PublicRoute>
                    <Signup />
                </PublicRoute>
            } />

            {/* Verify */}
            <Route path='/verify' element={
                <VerifyRoute>
                    <Verify />
                </VerifyRoute>
            } />

            {/* Privacy Policy */}
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />

            {/* Not Found */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes