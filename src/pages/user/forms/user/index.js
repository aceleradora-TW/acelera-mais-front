import { useTranslation } from 'react-i18next'
export const UserForm = () => {
  const { t } = useTranslation()
  return (
    <>
    <h1> olaaaa</h1>
    <form>
      <InputText name="name" label={t('hiringProcess.form.name')} onChange={handleChange} />
      <InputDate name="startDate" label={t('hiringProcess.form.startDate')} onChange={handleChange} />
      <InputDate name="endDate" label={t('hiringProcess.form.endDate')} onChange={handleChange} />
      <InputText name="description" label={t('hiringProcess.form.description')} onChange={handleChange} />
      <PrimaryButton text={t('hiringProcess.form.submitButton')} onClick={sendHiringProcess} >
        Enviar
        </ PrimaryButton>
      formi
    
    </form>
    </>
  )
}
