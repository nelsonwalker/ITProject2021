import Contact from './Contact.css'

import React, { Component } from 'react'
import styled from 'styled-components'

import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined'
import Header from '../../components/Header'
import CloseButton from '../../components/CloseButton'


class AddContact extends Component {

    constructor() {
        super();
        this.state = {
          choosingSort: false,
          firstName: '',
          lastName: '',
          email: '',
          notes: ''
        }
        this.isChoosingSort = this.isChoosingSort.bind(this);
        this.notChoosingSort = this.notChoosingSort.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout= this.handleLogout.bind(this);
      }
    
      isChoosingSort(e) {
        this.setState({
            choosingSort: true,
        })
      }
    
      notChoosingSort(e) {
        this.setState({
            choosingSort: false,
        })
      }
      
      handleSubmit(e) {
        e.preventDefault();
        const contact = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          notes: this.state.notes,
        }
        console.log(contact);
      }
    
      handleLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
      }
      
    render(){
        return (
            <Container>
              <Header />
              <Content>
                  <CardInfoInput>
                    <CloseButton />
                    <DataIn onSubmit={this.handleSubmit}>
                    <TextFields>
                        <div className='splitCells'>
                          <input className='splitTextBox' type='text' name="firstName" onChange={this.handleInputChange}></input>
                          <input className='splitTextBox' type='text' name="lastName" onChange={this.handleInputChange}></input>
                          <input className='splitTextBox' type='text'></input>
                        </div>
                        <input className='textBox' type='text'></input>
                        <div className='splitCells'>
                          <input className='splitTextBox' type='text' name="email" onChange={this.handleInputChange}></input>
                          <input className='splitTextBox' type='text'></input>
                        </div> 
                        <input className='textBox' type='text'></input>
                        <input className='tallTextBox' type='text' name="notes" onChange={this.handleInputChange}></input>
                    </TextFields>
                    <div className='leftBar'>
                        <LeftIn>
                          <div className='picture'>
                              <AddPhoto sx={{ fontSize: '80px' }}></AddPhoto>
                          </div>
                        </LeftIn>
                        <Create>
                          <input className='textBox' type='submit' value='Create' />  
                        </ Create>
                    </ div>
                    </DataIn>
                </CardInfoInput>
              </Content>
            </Container>
        )
    }
}

export default AddContact

const TextIn = styled.div`
  
  input{
    background-image: linear-gradient(to bottom, #FFFFFF, #F6F7F9);
    height: 35px;
    border-radius: 24px;
    border-style: solid;
    border-color: #707070;
    padding-left: 10px;
    color: #1c1c1c;
  }
  input:focus{
    outline: none;
    border-radius: 24px;
    border-style: solid;
    border-color: #1c1c1c;
  }
`

const CardInfoInput = styled.div`
  display: flex;
  background-color: white;
  height: 80vh;
  width: 80vw;
`

const DataIn = styled.form.attrs({
})``

const TextFields = styled(TextIn)`
  position: fixed;
  display: grid;
  grid-template-columns: 1;
  width: 50vw;
  top: 5vh;
  right: 7vw;
`

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  left: 0;
  right: 0;
  input{
    width: 100%;
  }
`


const Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 80px;
  left: 80px;
  height: 280px;
  width: 280px;
  background-color: #707070;
  border-radius: 140px;
  cursor: pointer;
  margin-bottom: 20px;
`

const AddPhoto = styled(AddAPhotoOutlinedIcon)`
  position: fixed;
`

const Notes = styled(Name)`
  input {
    height: 200px;
  }
`

const LeftBar = styled.div`
  display: grid;
  position: fixed;
  justify-content: space-between;
  width: 280px;
  left: 80px;
  top: 70px;
  bottom: 80px;
`

const Goals = styled.div`
  display: flex;
  position: relative;
  left: 0;
  right: 0;
  margin: 10px 0px;
  input{
    width: 100%;
    height: 35px;
    border-radius: 24px;
    border-style: solid;
    border-color: #707070;
    padding-left: 10px;
    color: #1c1c1c;
  }
  input:focus{
    outline: none;
    border-radius: 24px;
    border-style: solid;
    border-color: #1c1c1c;
  }
`

const LeftIn = styled.div``

const Create = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 60px;

  input[type=submit] {
    width: 100px;
    height: 40px;
    padding: 5px;
    border-radius: 10px;
    background-color: rgb(150, 180, 180);
    cursor: pointer;
    outline: none;
    border: none;
    box-shadow: 2px 2px 5px grey;
  }
  input[type=submit]:hover {
    background-color: rgb(50, 230, 230);
    cursor: pointer;
    box-shadow: 4px 4px 5px grey;
  }
  
  
`


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #F8F5F5;
  display: flex;
`

const Content = styled.div`
  position: fixed;
  display: flex;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 80vw;
  background-color: white;
  border-style: solid;
  border-color: #707070;
  border-radius: 32px;
  border-width: 2px;
  overflow: hidden;
`

