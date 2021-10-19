import React from 'react'
import Button from '../button'
import './table.css'

export const Table = () => {
  const handleImport = () => {
    console.log('Clicado no importar dados')
  }

  const handleExport = () => {
    console.log('clicado no export dados')
  }

  const handleEdit = () => {
    console.log('Clicado no editar')
  }

  const handleExpand = () => {
    console.log('Clicado no veja mais')
  }

  return (
    <div className="table-selective-process">
      <table>
        <thead>
          <tr>
            <th>Processo</th>
            <th>Status</th>
            <th colSpan="4">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2021/2</td>
            <td><span>Aberto</span></td>
            <td><Button classe="button-import" text="Importar Dados" onClick={handleImport}/></td>
            <td><Button classe="button-import" text="Exportar tabela" onClick={handleExport} /></td>
            <td><Button classe="button-edit" text="Editar" onClick={handleEdit} /></td>
            <td><Button classe="button-expend" text="Ver mais" onClick={handleExpand} /></td>
          </tr>
          <tr>
            <td>2021/2</td>
            <td ><span>Fechado</span></td>
            <td><Button classe="button-import" text="Importar Dados" onClick={handleImport}/></td>
            <td><Button classe="button-import" text="Exportar tabela" onClick={handleExport} /></td>
            <td><Button classe="button-edit" text="Editar" onClick={handleEdit} /></td>
            <td><Button classe="button-expend" text="Ver mais" onClick={handleExpand} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
