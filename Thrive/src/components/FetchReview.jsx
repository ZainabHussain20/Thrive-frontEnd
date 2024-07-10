const FetchReview = ({ id, content, rating, program, user }) => {
  return (
    <div className="card" id={id}>
      <div>user : {user.userName}</div>
      <div>review : {content}</div>
      <div>rating : {rating}</div>
      <div>program : {program}</div>
    </div>
  )
}

export default FetchReview
