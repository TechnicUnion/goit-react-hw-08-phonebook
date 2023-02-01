import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { Wrapper } from './Filter.styled';
import { Input, Label, Title } from 'styles';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Title>Filter</Title>
      <Label>Find contats by name</Label>
      <Input
        name="filter"
        onChange={e => dispatch(filterContacts(e.target.value.toLowerCase()))}
      />
    </Wrapper>
  );
}
