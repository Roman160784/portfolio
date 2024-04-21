import './App.css';
import { Header } from './layaut/header/Header';
import { Main } from './layaut/sections/main/Main';
import { Skills } from './layaut/skills/Skills';
import { Works } from './layaut/works/Works';
import { AboutMyself } from './layaut/aboutMyself/AboutMyself';
import { Contacts } from './layaut/contacts/Contacts';
import { Slogan } from './layaut/slogan/Slogan';
import { Footer } from './layaut/footer/Footer';
import { Particle } from './components/partical/Particle';
import { GoTopBtn } from './components/goTopBtn/GoTopBtn';


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <AboutMyself/>
            <Contacts/>
            <Slogan/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;

