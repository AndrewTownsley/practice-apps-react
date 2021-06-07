

const UserCard = ({ user, userData, openModal, closeModal, showModal, generateUser}) => {

  return (
    <>
    <h3>{user.name.first + " " + user.name.last}</h3>
    <img src={user.picture.large} alt="random user" />
    <a href={user.email}>{user.email}</a>
    <button 
    onClick={openModal}
      className="card-btn">
      Contact {user.name.first}
    </button>
    {/* <Modal 
      userData={userData}
      generateUser={generateUser}
      openModal={openModal}
      closeModal={closeModal}
      showModal={showModal}
    /> */}
    </>
  )
}

export default UserCard;