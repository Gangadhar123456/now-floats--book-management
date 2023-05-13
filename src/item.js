import { Button, Text, } from '@chakra-ui/react'
import './App.css'


const Item = props => {
  const {contactDetails, deleteItem} = props
  const {title, author, year, id} = contactDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="book-item">
      <Text size='l' mt='1' fontFamily="-moz-initial" fontWeight='semibold' color='white'>Book Title : {title}</Text>
      <Text  fontWeight='semibold'  mt='1' fontFamily="-moz-initial" color='white'>Author : {author}</Text>
      <Text fontFamily="-moz-initial" mt='1' fontWeight='semibold' color='white'>Year of publish : {year}</Text>
      <Button colorScheme='red' size='sm' mt='2' onClick={onDelete} type="button" className="remove-button">
        Remove
      </Button>
    </li>
  )
}

export default Item