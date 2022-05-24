import PrimaryButton from '../../components/buttons/primary'
const HomePage = () => {

  const handleSubmit = () => {
    location.reload()
  }
  return (
    <div className="pages-home">

      <h1>Home page</h1>

      <div className="button-homeclear">
        <PrimaryButton text={t('Selective process')} onClick={handleSubmit} />
        <PrimaryButton text={t('Registration of mentors')} onClick={handleSubmit} />

      </div>
    </div>
  )




}

export default HomePage

