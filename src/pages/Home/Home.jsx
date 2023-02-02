import { useSelector } from 'react-redux';
import { Container, Welcome } from './Home.styled';
import { selectIsgettingCurrent } from 'redux/selectors';

export const Home = () => {
  const isFetchingCurrentUser = useSelector(selectIsgettingCurrent);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <Welcome>Phonebook online!</Welcome>
      </Container>
    )
  );
};
