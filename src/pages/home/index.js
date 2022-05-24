import PrimaryButton from '../../components/buttons/primary'

export const HomePage = () => {
  const handleSubmit = () => {
    location.reload()
  }

  return (
    <div className="Pages-Home">
      <h1>Home page</h1>
      <div className="button-home">
        <PrimaryButton text={'Selective process'} onClick={handleSubmit} />
        <PrimaryButton text={'Registration of mentors'} onClick={handleSubmit} />
        <PrimaryButton text={'reset your password'} onClick={handleSubmit} />
      </div>
    </div>

  )
}
