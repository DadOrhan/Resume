import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: -550,
  },
  input: {
    display: 'none',
  },
});

function ButtonHomePage(props) {
  const { classes } = props;
  return (
      <Button variant="outlined" color="inherit" className={classes.button}>
        En savoir plus
      </Button>
    );
}

ButtonHomePage.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(ButtonHomePage);