import Home from './Components/Home/Home'
import About from './Components/About/About'
import Favorite from './Components/Favorite/Favorite'
import List from './Components/List/List'
import NotFound from './Components/NotFound/NotFound'
import Container from './Components/Container/Container'
import NavBar from './Components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <main>
      <NavBar /> 
      <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      </Container>
    </main>
  );
};

export default App;