import { Container, Grid, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hook.ts';
import { searchFetch } from '../../store/showsThun.ts';
import { searchShowName, setQuery, showsArr } from '../../store/searchSlice.ts';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Home = () => {
  const showsName = useAppSelector(searchShowName);
  const shows = useAppSelector(showsArr)
  const dispatch = useAppDispatch();
  const [showList, setShowList] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    dispatch(setQuery(value));
    if (value) {
      dispatch(searchFetch(value));
      setShowList(true)
    } else {
      setShowList(false);
    }
  }

  return (
    <Container>
      <form>
        <Grid xs={12}>
          <TextField
            sx={{ width: '100%', my: 3 }}
            label="Search TV Show"
            variant="outlined"
            onChange={onChange}
            value={showsName}
          ></TextField>
        </Grid>
      {shows.length > 0 && showList && (
        <ul style={{ padding: 0, listStyle: 'none', marginTop: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
          {shows.map((show) => (
            <li
              key={show.show.id}
              style={{
                padding: '8px',
                cursor: 'pointer',
                borderBottom: '1px solid #ccc',
              }}
            >
              <NavLink  style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
              }} to={`/shows/${show.show.id}`}>
              {show.show.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      </form>
      <Outlet/>
      </Container>
  );
};

export default Home;