import { useAppDispatch, useAppSelector } from '../../app/hook.ts';
import { oneShow, oneShowLoading } from '../../store/searchSlice.ts';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchOneShow } from '../../store/showsThun.ts';
import { useEffect } from 'react';
import Loader from '../../components/UI/Loader/Loader.tsx';


const Show = () => {
  const show = useAppSelector(oneShow);
  const dispatch = useAppDispatch();
  const loading = useAppSelector(oneShowLoading)
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchOneShow(id))
    }
  }, [dispatch, id])



  return (
    loading ? <Loader/> :
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
            {show.image !== null ?
              <img
                src={show.image.original}
                style={{objectFit: 'cover', width: '100%', height: '100%'}}
                alt={show.name}
              /> : null
            }

          </Grid>

          <Grid item xs={8}>
            <CardContent>
              <Typography mb={4} variant="h4" id="card-description">
              {show.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                <strong>Premiered:</strong> { show.premiered !== null ? show.premiered : '-'}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{mb: 1}}>
                <strong>Status:</strong> {show.status !== null ? show.status : '-' }
              </Typography>
                <Typography variant="body1" color="textSecondary" sx={{mb: 1}}>
                {show.summary !== null ? show.summary.replace(/<p>/g, '').replace(/<\/p>/g, '') : null}
              </Typography>
            </CardContent>

          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Show;