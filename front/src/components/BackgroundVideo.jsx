// React
import React, {Component} from 'react';

// CSS
import './BackgroundVideo.css';
//Components
import ButtonHomePage from './ButtonHomePage';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


class BackgroundVideo extends Component {
    

    render () {
        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };
    
        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
    
            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
    
            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
            var that = this;
            var delta = 200 - Math.random() * 100;
    
            if (this.isDeleting) { delta /= 2; }
    
            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }
    
            setTimeout(function() {
            that.tick();
            }, delta);
        };
    
        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
        };

        return (
            <Grid container> 
            <div style={{marginBottom: 100, textAlign: 'center'}}>
                <video id="background-video" style={{height: 'auto',
                width:'100%' }} loop muted autoPlay>
                <source src="../images/NYC-Traffic.mp4" type="video/mp4"/>
                
                </video>
                <ButtonHomePage/>
                <h1 className="line-1 anim-typewriter" style={{marginTop: -600}}>
                    <a href="" class="typewrite" data-period="2000" data-type='[ "Bonjour, Je suis Orhan.", "Développeur Web Junior Full-Stack Javascript." ]'>
                    <span class="wrap"></span>
                    </a>
                </h1>
                </div>
        </Grid>
        )
    }
};

export default BackgroundVideo;