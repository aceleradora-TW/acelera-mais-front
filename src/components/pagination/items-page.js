export const ItemsPage = ({ onClick, items = [] }) => {
  const handlerClick = (page) => {
    onClick(page)
  }
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
