import Select from '../../components/select'

// const [score, setScore] = useState('')

< Select
  label="Nota:"
  placeholder="Escolha uma nota"
  onChange={handleScore}
  options={
    [
      { label: 0, value: 0 },
      { label: 1, value: 1 },
      { label: 2, value: 2 },
      { label: 3, value: 3 },
      { label: 4, value: 4 },
      { label: 5, value: 5 }
    ]} ></Select >