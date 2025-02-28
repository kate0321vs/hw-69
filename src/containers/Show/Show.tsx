import { useAppDispatch, useAppSelector } from '../../app/hook.ts';
import { oneShow } from '../../store/searchSlice.ts';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchOneShow } from '../../store/showsThun.ts';
import { useEffect } from 'react';


const Show = () => {
  const show = useAppSelector(oneShow);
  const dispatch = useAppDispatch();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchOneShow(id))
    }
  }, [dispatch, id])



  return (
    <Container>
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
        }}
      >
        <Grid container>
          <Grid item xs={3}>
            <img
              src={show.image.original}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              alt={show.name}
            />
          </Grid>

          <Grid item xs={8}>
            <CardContent>
              <Typography mb={4} variant="h4" id="card-description">
                {show.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                <strong>Premiered:</strong> {show.premiered}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                <strong>Status:</strong> {show.status}
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 1 }}>
                {show.summary.replace(/<p>/g, '').replace(/<\/p>/g, '')}
              </Typography>
            </CardContent>

          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Show;