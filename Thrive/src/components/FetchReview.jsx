const FetchReview = ({ id, content, rating, program }) => {
  return (
    <div className="card" id={id}>
      <div>review : {content}</div>
      <div>rating :{rating}</div>
      <div>program :{program}</div>
    </div>
  )
}

export default FetchReview
