import React , {useState} from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
      <a className="navbar-brand" hrefn="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          {/* <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">{props.home}</Link></li> */}
          <a className="nav-link active" aria-current="page" href="#">{props.home}</a>

        </ul>
        
        Dark Modes:
        <button type="button" className="btn btn-primary btn-circle btn-sm mx-2" style={{backgroundColor : 'red', width: '30px', height: '30px', padding: '6px 0px', borderRadius: '15px', fontSize: '8px' , textAlign: 'center'}}></button>

        <button type="button" className="btn btn-primary btn-circle btn-sm mx-2" style={{backgroundColor : 'blue',width: '30px', height: '30px', padding: '6px 0px', borderRadius: '15px', fontSize: '8px' , textAlign: 'center'}}></button>

        <button type="button" className="btn btn-primary btn-circle btn-sm mx-2" style={{backgroundColor : 'green',width: '30px', height: '30px', padding: '6px 0px', borderRadius: '15px', fontSize: '8px' , textAlign: 'center'}}></button>
        
        <button type="button" className="btn btn-primary btn-circle btn-sm mx-2" style={{backgroundColor : 'black',width: '30px', height: '30px', padding: '6px 0px', borderRadius: '15px', fontSize: '8px' , textAlign: 'center'}}></button>

        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>      
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" style={{backgroundColor: '#0d6efd', 
    borderColor: '#0d6efd'}}/>  
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>

      </div>
    </div>
  </nav>
  )
}


Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    home : PropTypes.string.isRequired

}


Navbar.defaultProps = {
    title : 'Set title here',
    home : 'Menu1',
    aboutTextUtils : 'Menu2',
    searchBar : 'Search here'
}