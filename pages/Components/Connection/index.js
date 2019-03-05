import React from 'react'
import '../../Assets/Css/bulma.css'

class Index extends React.Component{
  reLoad(){
    window.location.reload()
  }
  render(){
    return(
      <div className="container">
        <div className="tile">
          <div className="tile is-parent">
            <article className="tile is-child notification is-primary">
              <p className="title">INTERNET NO CONNECTION</p>
              <p className="subtitle">Internet Tidak Ada Koneksi</p><br></br>
              <a className="button is-primary is-inverted is-outlined" onClick={()=>this.reLoad()} >Refresh</a>
            </article>
          </div>
        </div>
      </div>
    )
  }
}

export default Index