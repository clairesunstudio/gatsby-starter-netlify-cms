import React from 'react'
import { Link } from 'gatsby'
import { Nav, Navbar } from 'react-bootstrap'
import SocialMedia from '../SocialMedia'
import './index.scss'

class SiteHeader extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        fixedTop: false,
        brandName: 'clairesunstudio',
        connect: 'collapsed'
      };
      this.handleScroll = this.handleScroll.bind(this);
    }

      handleScroll() {
      if (window.pageYOffset >=  30) {
        this.setState({
          fixedTop: true,
          brandName: 'css'
        });
      } else {
        this.setState({
          fixedTop: false,
          brandName: 'clairesunstudio'
        });
      }
    }

    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
    onConnectClick(){
      this.state.connect == 'collapsed'? this.setState({connect: 'expanded'}): this.setState({connect: 'collapsed'})
    }

  render(){
    const {fixedTop, brandName, connect} = this.state
    const socialIconStyle ={
      width:30,height:30, margin:3
    }
    const socialIconColor = "#263238"
    return(
      <Navbar className={connect} fixed={fixedTop ? 'top' : false }>
        <div className="container">
        <Navbar.Brand>
          <Link to="/">{brandName}</Link>
        </Navbar.Brand>
        <Nav pullRight>
          <li><Link to="/about"><span>Resume</span></Link></li>
          <li className="social-media-collapsed" onClick={()=>this.onConnectClick()}><a>Connect</a></li>
          <SocialMedia socialIconStyle={socialIconStyle} socialIconColor={socialIconColor} collapsed={connect}/>
        </Nav>
        </div>
      </Navbar>
    )
  }

}

export default SiteHeader
