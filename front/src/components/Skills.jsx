import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    marginTop: 200,
    maxWidth: 100,
  },
  media: {
    height: 0,
    Width: 100,
    paddingTop: '70.25%', // 16:9
  },
};



function SimpleMediaCard(props) {
  const { classes, skillsImages } = props;
  return (
    <div>
        <CardMedia
          className={classes.media}
          image={skillsImages}
          title="ReactJS"
        />
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);