// import { Pagination } from '@mui/material'
import { Section } from './styled'
export const Paginator = ({
  total = 0,
  limit = 20,
  page = 1,
  onChange = (x) => x
}) => {
  const getTotalPages = () => Math.ceil(total / limit)
  console.log(getTotalPages())
  return (
    <>
      {getTotalPages() > 1 &&
        <Section>
          {/* <Pagination
            count={getTotalPages()}
            shape='rounded'
            onChange={onChange}
            page={page}
          /> */}
        </Section>
      }
    </>
  )
}
