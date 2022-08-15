import Hero from './Components/Hero/Hero'
import SearchForm from './Components/SearchForm/SearchForm'
import List from './Components/List/List'
import Container from './Components/Container/Container';

const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
};

export default App;