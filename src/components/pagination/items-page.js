export const ItemsPage = ({ onClick, items = [], verifica }) => {
  const handlerClick = (page) => {
    onClick(page)
  }
  console.log(items)
  return (
    <>
      {
        items.map((item, index) => (
          <li
            key={index}
            className={item.active ? 'active' : null}
            onClick={() => {
              handlerClick(item.numberPage)
            }}
          >
            {item.numberPage}
          </li>
        ))
      }
    </>
  )
}
