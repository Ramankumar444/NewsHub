

import image from '../assets/news.jpg'


const NewsItems = ({ title,description, src ,url}) => {
  return (
    // <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>

    <div className="card text-white bg-dark mb-3 d-inline-block" style={{maxWidth:"345px"}}>
  <img src={src?src:image} style ={{height:"200px" ,width:"360px"}} className="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"It is information about that has just happend" }</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItems
