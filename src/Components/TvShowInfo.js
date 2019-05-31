import React, {Component} from 'react';

class TvShowInfo extends Component {

   render(){
      // console.log(this.props.showStart);

      return (
         <div>
            <div className="resultsInfo">
               <div className="imageContainer">
                  <img src={this.props.img} alt=""/>
               </div>
               <div className="showInformation">
                  <h2>{this.props.name}</h2>
                  {this.props.genre.map((item, i)=>{
                     return <h3 key={i}>{item}</h3>
                  })}

                  {/* if there is a start date, show this sentence. if not, don't show anything (same parameters for bio and rating) */}
                  <p>{this.props.showStart ? `First Aired: ${this.props.showStart}` : null}</p>
                  <p>{this.props.bio}</p>
                  <p>{this.props.rating ? `Average rating: ${this.props.rating} / 10` : null}</p>
               </div>
            </div>

            {this.props.cast.map((member) => {
               return (
                  <div>
                     <img src={member.person.image.medium} alt=""/>
                     <p>{member.person.name}</p>
                  </div>
               )
            })}



            {/* <div className="castInfo">
               <div className="castActorImage">
                  {this.props.cast.map((image, id) => {
                  return <img key={id} src={cast.image.medium} alt="" />
               })}
               </div>
               <div className="castActorName">
                  {this.props.cast.map((name, actor) => {
                     return <p key={actor}>{cast.name}</p>
                  })}
               </div>
            </div> */}
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