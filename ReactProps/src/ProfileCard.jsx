import './profileCard.css'

function ProfileCard(props){
  const {name, age, country, title, image} = props
  return (
    <div className="profileCard">
      <h1>Name:{name}</h1>
      <h2>Title:{title}</h2>
      <h3>Age:{age}</h3>
      <h3>Country:{country}</h3>
      {/* <img src={image} alt={name}/> */}
    </div>
      
  )
}

export default ProfileCard