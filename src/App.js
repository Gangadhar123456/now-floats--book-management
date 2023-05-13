import { Heading, Input,Button,Text } from '@chakra-ui/react'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'


import './App.css'
import Item from './item'

const initialList = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    id: uuidv4(),
  },
  {title: '1984', author: 'George Orwell', year: 1949, id: uuidv4()},
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    id: uuidv4(),
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    id: uuidv4(),
  },
  {title: 'Animal Farm', author: 'George Orwell', year: 1945, id: uuidv4()},
]

class App extends Component {
  state = {
    listOfBooks: initialList,
    title: '',
    author: '',
    year: '',
    searchInput: '',
  }

  onAddNewBook = event => {
    event.preventDefault()
    const {title, author, year} = this.state
    const newBook = {
      id: uuidv4(),
      title,
      author,
      year,
    }
    this.setState(prevState => ({
      listOfBooks: [...prevState.listOfBooks, newBook],
      title: '',
      author: '',
      year: '',
    }))
  }

  onChangeAuthor = event => {
    this.setState({author: event.target.value})
  }

  onChangeYear = event => {
    this.setState({year: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  deleteItem = id => {
    const {listOfBooks} = this.state
    const updatedData = listOfBooks.filter(each => each.id !== id)
    console.log(id)
    this.setState({listOfBooks: updatedData})
  }

  render() {
    const {title, author, year, listOfBooks, searchInput} = this.state
    const searchResult = listOfBooks.filter(each =>
      each.title.includes(searchInput),
    )
    return (
      <div className="app-container">
        <div>
          <Heading textAlign='center' p='1' mb='2' fontFamily='-moz-initial'>Book Managment</Heading>
          <form className="submitForm" onSubmit={this.onAddNewBook}>
            <Input variant='filled'
            width='160px' ml='2'
              value={title}
              onChange={this.onChangeTitle}
              placeholder="Book Title"
            />
            <Input variant='filled'
            width='160px' ml='2'
              value={author}
              onChange={this.onChangeAuthor}
              placeholder="Book Author"
            />
            <Input variant='filled'
            width='160px' ml='2' mr='2'
              value={year}
              onChange={this.onChangeYear}
              placeholder="Enter the Year"
            />
            <Button colorScheme='twitter' size='md' mb='1' type='submit'>
              Add Book
            </Button>
          </form>
          <div className="search-container">
            <Input variant='filled'
            width='160px' ml='2' mr='2'
              type="search"
              value={searchInput}
              placeholder="Search here"
              onChange={this.onChangeSearchInput}
            />
            <Text  mt='1' fontWeight='semibold' textDecoration='underline' textDecorationColor='white' color='white'>search your favorite book in list</Text>
          </div>
          <ul className="list-container">
            {searchResult.map(eachContact => (
              <Item
                deleteItem={this.deleteItem}
                key={eachContact.id}
                contactDetails={eachContact}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App