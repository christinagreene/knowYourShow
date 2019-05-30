import React, {Component} from 'react';

class TvShowInfo extends Component {
   render(){
      // console.log(this.props.showStart);

      return (
         <div>
            <div>
               <div className="imageContainer">
                  <img src={this.props.img} alt=""/>
               </div>
               <div className="showInformation">
                  <h2>{this.props.name}</h2>
                  {this.props.genre.map((item)=>{
                     return <h3>{item}</h3>
                  })}
                  {/* if there is a start date, show this sentence. if not, don't show anything */}
                  <p>{this.props.showStart ? `First Aired: ${this.props.showStart}` : null}</p>
                  <p>{this.props.bio}</p>
                  <p>{this.props.rating ? `Average rating: ${this.props.rating} / 10` : null}</p>
               </div>
            </div>
         </div>
      )
   }
}

export default TvShowInfo



//////possible values to use:

// this.state.img {props.img}
// this.state.name {props.name}
// this.state.genre {props.genre}
// this.state.showStart {props.showStart}
// this.state.bio {props.bio}
// this.state.rating {props.rating}