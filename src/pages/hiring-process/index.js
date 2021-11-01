import Button from '../../components/button'
import { ProcessList } from '../../components/hiring-process-list'
import './style.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import api from '../../services/api'
import { useEffect, useState } from 'react'

const HiringProcessPage = () => {
  const [dadosApi, setDadosApi] = useState('')

  useEffect(async () => {
    try {
      const response = await api.get('hiring_process')
      // const json = await response.json()
      setDadosApi(response.data.map(item => {
        return item
      }))
    } catch (e) {
      console.error(e)
    }
  }, [])

  // useEffect(() => {
  //   api
  //     .get('hiring_process')
  //     .then((response) => response.data)
  //     .then((response) => setDadosApi(response))
  //     .catch((err) => {
  //       console.error('Erro:' + err)
  //     })
  // }, [])

  console.log(dadosApi)
  // const processes = dadosApi.map((dados) => {
  //   return {
  //     name: dados?.name,
  //     startDate: dados?.startDate,
  //     endDate: dados?.endDate,
  //     description: dados?.description
  //   }
  // })

  const processes = [{
    name: dadosApi?.name,
    startDate: dadosApi?.startDate,
    endDate: dadosApi?.endDate,
    description: dadosApi?.description
  }]

  const handleSubmit = () => {
  }

  return (
    <div className="hiring-page">
      <h1>Processos seletivos</h1>
      <section>
        <div>
          <Button classe={'button-filter'} text="Todos" onClick={handleSubmit} />
          <Button classe={'button-filter'} text="Abertos" onClick={handleSubmit} />
          <Button classe={'button-filter'} text="Fechados" onClick={handleSubmit} />
        </div>
        <Button icon={faPlus} classe={'button-new-process'} text="Novo processo" onClick={handleSubmit} />
      </section>
      <ProcessList processes={processes} />
    </div>
  )
}

export default HiringProcessPage
