
import React, { Component } from 'react';
import up from '../assets/svg/up.svg';
import { Box } from 'grommet';

export default class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            size: props.size
        }
    }

    componentDidMount() { 
        const scrollComponent = this;
        document.addEventListener('scroll', (e) => { 
            scrollComponent.toggleVisibility();
        })
    }

    toggleVisibility() { 
        let y = window.scrollY;
        if (y > 0) {
            this.setState({
                isVisible : true
            })
        } else { 
            this.setState({
                isVisible : false
            })
        }
    }

    scrollToTop() { 
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) { 
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
    
    render() { 
        const { isVisible, size } = this.state;

        return (
            <Box className='App-scroll'
                responsive={true}
                a11yTitle='Back to top'
                pad={{ right: 'medium', bottom: 'large' }}
                style={{
                    transition: 'all .25s ease-in-out',
                    position: 'fixed',
                    bottom: '0',
                    right: '0',
                    display: 'inline-flex',
                    cursor: 'pointer',
                    backgroundColor: 'yello',
                    width: ['medium', 'large'].includes(size) ? '85px' : '60px',
                    height: 'auto'
                }}
            >
                { isVisible && (
                    <Box onClick={() => this.scrollToTop()}>
                        <img src={up} alt='go to top' />
                    </Box>
                )}
                
            </Box>
        )
    };

};