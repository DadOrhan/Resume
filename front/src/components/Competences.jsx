import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const skills = [
    {
      name: 'ReactJS',
      image: "../images/React.png"
    },
    {
      name: 'Javascript',
      image: "../images/Javascript.png"
    }, {
      name: 'NodeJS',
      image: "../images/NodeJS.png"
    },{
      image: "../images/HTML5.png"
    }
  ]


class Competences extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <Grid container
            justify='center'
            spacing='8'
        >
          {
            skills.map(skill =>
                <Grid item
                 md={4}>
                  <Skills skillsImages={skill.image}/>
                </Grid>
            )
          }
        </Grid> )
    }
}
 
export default Competences ;



