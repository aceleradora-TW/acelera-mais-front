export const TableBody = ({ items, RowComponent }) => {
  return (
    <tbody>
      {items.map((item, key) => {
        return item ? <RowComponent key={`${key}-test`} item={item} /> : null
      })}
    </tbody>
  )
}
