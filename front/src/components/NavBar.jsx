// React
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Components
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { ListItem, ListItemText } from 'material-ui/List';
import BackgroundVideo from './BackgroundVideo';
import Skills from './Skills';


const styles = {
  list: {
    width: 250,
  },

  fullList: {
    width: 'auto',
  },
};
/*
======= ROUTING =========
*/
const competences = (props) => <Link to="/skills" {...props} />;
// const MyAteliers = (props) => <Link to="/ateliers" {...props} />;
// const MyIntervenants = (props) => <Link to="/intervenants" {...props} />;
// const MyContact = (props) => <Link to="/contact" {...props} />;
// const MyConcept = (props) => <Link to="/concept" {...props} />;
/*
======= ROUTING ========
*/
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography
            variant="title"
            style={{ flex: 1 }}
            
            noWrap
          >
            Orhan Sen
          </Typography>
          <Hidden xsDown>
            <Button color="inherit">
              Compétences
            </Button>
          </Hidden>
          <Hidden xsDown>
            <Button color="inherit">
              Expériences
            </Button>
          </Hidden>
          <Hidden xsDown>
            <Button color="inherit">
              Formations
            </Button>
          </Hidden>
          <Hidden xsDown>
            <Button color="inherit">
              Contact
            </Button>
          </Hidden>
        </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          <div className={classes.drawerHeader} />
          <Divider />
          <List>
            <ListItem button>
              Compétences
              <ListItemText />
            </ListItem>
            <ListItem button>
              Expériences
              <ListItemText />
            </ListItem>
            <ListItem button>
              Formations
              <ListItemText />
            </ListItem>
            <ListItem button>
              Contact
              <ListItemText />
            </ListItem>
          </List>
          <Divider />
          <Button color="inherit">
            Connexion
          </Button>
        </Drawer>
        <BackgroundVideo />
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);