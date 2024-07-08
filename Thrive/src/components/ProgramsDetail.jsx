const programDetails = ({
  name,
  start,
  end,
  time,
  period,
  description,
  limit,
  gender,
  price,
  location,
  block,
  bulding,
  line,
}) => {
  return (
    <div className="info">
      <div className="name">
        <div>
          <h2>{name}</h2>
          <h2>{price} BHD</h2>
        </div>
      </div>

      <div className="description">
        <p>{description}</p>
        <br />

        <div className="details">
          <p>
            <strong>Start:</strong> {new Date(start).toLocaleDateString()}
          </p>
          <p>
            <strong>End:</strong> {new Date(end).toLocaleDateString()}
          </p>
          <p>
            <strong>Time:</strong> {time.join(", ")}
          </p>
          <p>
            <strong>Period:</strong> {period.join(", ")}
          </p>
          {limit && (
            <p>
              <strong>Limit:</strong> {limit}
            </p>
          )}
          {gender && (
            <p>
              <strong>Gender:</strong> {gender}
            </p>
          )}
          {location && (
            <p>
              <strong>Location:</strong> {location}
            </p>
          )}
          {block && (
            <p>
              <strong>Block:</strong> {block}
            </p>
          )}
          {building && (
            <p>
              <strong>bulding:</strong> {bulding}
            </p>
          )}
          {line && (
            <p>
              <strong>Line:</strong> {line}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default programDetails
