import Layout from "./layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CharactersPage from "./pages/CharacterPage";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <CharactersPage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/contact", element: <ContactPage /> },
        ],
    },
];

export default routes;