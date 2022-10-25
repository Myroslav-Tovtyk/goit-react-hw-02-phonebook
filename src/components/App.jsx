import React, { Component } from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formValue = (values, actions) => {
    const newContact = {
      name: values.name,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
    console.log(this.state.contacts);
  };

  renderList = () => this.state.contacts;

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <>
          <ContactForm addFormInput={this.formValue} />
          <ContactList renderList={this.renderList()} />
        </>
      </div>
    );
  }
}
