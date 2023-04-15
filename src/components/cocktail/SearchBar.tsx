import { IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 32px 16px 16px 16px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;

const SearchContainer = styled.form`
  display: flex;
  width: 160px;
  height: 24px;

  background: #ffffff;
  border-radius: 30px;
`;

const SearchInput = styled.input`
  margin: 4px 8px;
  font-weight: 600;
  font-size: 8px;
  line-height: 10px;

  border: none;
  color: #8e8b8b;
`;

const SearchButton = styled(IconButton)`
  && {
    color: #000;
    margin-left: auto;
    width: 8px;
    height: 8px;
  }
`;

interface SearchBarProps {
  [index: string]: string | number | undefined;
  sort: string | undefined;
  minVolume: number | undefined;
  maxVolume: number | undefined;
  base: string | undefined;
  style: string | undefined;
  season: string | undefined;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  useEffect(() => {
    setSearch((router.query?.query as string) ?? '');
  }, [router.query]);

  function startSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let param = '';
    if (search !== '') {
      param += `query=${search}&`;
    }
    Object.keys(props)
      .filter((key) => props[key] !== undefined)
      .forEach((key) => (param += `${key}=${props[key]}&`));

    if (param.length > 0) {
      param = param.substring(0, param.length - 1);
    }
    router.push('/cocktail?' + param);
  }

  return (
    <Container>
      <Title>칵테일</Title>
      <SearchContainer onSubmit={startSearch}>
        <SearchInput value={search} onInput={(e) => setSearch(e.currentTarget.value)} />
        <SearchButton>
          <Search style={{ width: '12px' }} />
        </SearchButton>
      </SearchContainer>
    </Container>
  );
};

export default SearchBar;
