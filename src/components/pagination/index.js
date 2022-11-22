import { Pagination } from '@mui/material'

export const Paginator = ({
  total = 0,
  limit = 20,
  page = 1,
  onChange = (x) => x
}) => {
  const getTotalPages = () => Math.ceil(total / limit)

  return (
    <>
    { getTotalPages() > 1 &&
      <Pagination
        count={getTotalPages()}
        shape='rounded'
        onChange={onChange}
        page={page}
        />
    }
    </>
  )
}
