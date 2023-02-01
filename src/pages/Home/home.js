import { useSelector } from 'react-redux';
// import { selectUser } from 'redux/selectors';
import { Container, Hero } from './Home.styled';
import { selectIsgettingCurrent } from 'redux/selectors';

export const Home = () => {
  // const user = useSelector(selectUser);
  const isFetchingCurrentUser = useSelector(selectIsgettingCurrent);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <Hero>Phonebook online!</Hero>
      </Container>
    )
  );
};
