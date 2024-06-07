import './index.css'

const TechCardItem = props => {
  const {techCardDetails} = props
  const {title, description, imgUrl, className} = techCardDetails

  return (
    <li className={`${className}`}>
      <div>
        <h1 className="card-heading">{title}</h1>
        <p className="card-description">{description}</p>
      </div>
      <img src={imgUrl} />
    </li>
  )
}

export default TechCardItem
