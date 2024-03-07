import './Review.css'

function Review(props){
    return(
        <div>
            <div className='review'>
                <p>{props.review}</p>
            </div>
            <div className = "details">
                <img src = {props.imgSrc}></img>
                <div>
                    <p className='review-name'>{props.reviewerName}</p>
                    <p>{props.reviewerDesignation}</p>
                </div>
            </div>
        </div>
    )
}

export default Review;