import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { RootState } from "../../state/store"

const RequireAuthPage = () => {
    const { isSignedIn } = useSelector((state: RootState) => state.auth)
    const nav = useNavigate()
    useEffect(() => {
        if (!isSignedIn) {
            nav("/login")
        }
    }, [])
    return isSignedIn ? <Outlet/> : <h1>Not logged in</h1>

}

export default RequireAuthPage