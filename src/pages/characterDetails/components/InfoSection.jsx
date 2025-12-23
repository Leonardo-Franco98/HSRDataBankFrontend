const InfoSection = ({ name }) => {
  return (
    <>
      <img src={`${import.meta.env.VITE_API_URL}/images/characters/${name}`} />
    </>
  )
}

export default InfoSection