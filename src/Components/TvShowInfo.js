import React, {Component} from 'react';

class TvShowInfo extends Component {

   render(){
      return (
         <div className="resultsComponent">
            <div className="resultsInfo">
               <div className="imageContainer">
                  <img src={this.props.img} alt="" role="presentation"/>
               </div>
               <div className="showInformation">
                  <h2 className="showTitle">{this.props.name}</h2>

                  {/* list all genres */}
                  {this.props.genre.map((item, i)=>{
                     return <h3 key={i} className="showGenre">{item}</h3>
                  })}

                  {/* if there is a start date, show the info. if not, don't show anything */}
                  <p className="showStartDate">{this.props.showStart ? `First Aired: ${this.props.showStart}` : null}</p>

                  <p className="showSummary">{this.props.bio}</p>

                  {/* if there is a rating, show the info. if not, don't show anything */}
                  <p className="showRating">{this.props.rating ? `Average rating: ${this.props.rating} / 10` : null}</p>
               </div>
            </div>

            <div className="cast">
               {/* only add h2 if there is content on the cast on screen */}
               {this.props.cast.length != 0 && <h2>Top Billed Cast</h2>}
               {this.props.cast.map((member, cast) => {
                  return (
                     <div key={cast} className="castInformation">
                        <div className="castImage">
                           <img src={member.person.image.medium} alt="" role="presentation"/>
                        </div>
                        <div className="castName">
                           <p>{member.person.name}</p>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      )
   }
}

export default TvShowInfo