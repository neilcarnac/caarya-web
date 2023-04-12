import { Grid } from '@material-ui/core';
import CardItem from '../CardItem/CardItem';

function Resources() {
  return (
    <Grid container spacing={2}>
      <Grid
        style={{ marginLeft: "600px" }}
        item xs={6}>
        <CardItem
          title="prove to me"
        />
      </Grid>
      <Grid
        style={{ marginLeft: "1000px" }}

        item xs={6}>
        <CardItem
          title="prove to me"
        />
      </Grid>
      <Grid
        style={{ marginLeft: "600px", marginTop:"500px"}}
        item xs={6}>
        <CardItem
          title="prove to me"
        />
      </Grid>
      <Grid
        style={{ marginLeft: "1000px" }}
        item xs={6}>
        <CardItem
          title="prove to me"
        />
      </Grid>
    </Grid>
  );
}

export default Resources
