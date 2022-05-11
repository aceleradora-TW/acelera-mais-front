export const TableBody = ({ items, Component }) => {
  return (
    <tbody>
      {items.map((challenge, key) => {
        return challenge ? <Component key={`${key}-test`} item={challenge} /> : null
      })}
    </tbody>
  )
}
