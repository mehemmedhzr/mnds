import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useAuthContext from "../../context/AuthProvider";
import { useAuthenticationUrl } from "../../hooks/useAuth";

export default function Layout() {
    const { isAuthenticated } = useAuthContext();
    const { data, isLoading } = useAuthenticationUrl();

    if (!isAuthenticated && data) {
        window.location.href = data;
      }

    // if (!isAuthenticated) {
    //   return <h1 className="mx-auto font-bold">{isLoading ? 'Preparing for login...' : 'Redirecting to log in'}</h1>;
    // }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                <Outlet />
            </main>
            
            <Footer />
        </div>
    )
}