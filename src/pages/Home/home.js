import { useSelector } from 'react-redux';
import { Container, Hero } from './Home.styled';
import { selectIsgettingCurrent } from 'redux/selectors';

export const Home = () => {
  const isFetchingCurrentUser = useSelector(selectIsgettingCurrent);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <Hero>Phonebook online!</Hero>
      </Container>
    )
  );
};
