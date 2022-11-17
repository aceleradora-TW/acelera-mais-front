const MappingPages = (items = [], handlerClick, setActualPage) => {
  if (items.length <= 5) {
    return (
      <>
        {
          items.map((item, index) => (
            <li
              key={index}
              className={item.active ? 'active' : null}
              onClick={() => {
                handlerClick(item.numberPage)
                setActualPage(item.numberPage)
              }}
            >
              {item.numberPage}
            </li>
          ))
        }
      </>
    )
  }
}

export default MappingPages
