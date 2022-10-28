import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ filter: e.target.value });
  };

  formValue = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
    actions.resetForm();
    console.log(this.state.contacts);
  };

  renderList = () => {
    return this.state.filter
      ? this.state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };

  deleteContact = e => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== e.target.id),
    }));
  };

  render() {
    return (
      <>
        <ContactForm formValue={this.formValue} />
        <Section title="Contacts:">
          <ContactList
            renderList={this.renderList()}
            deleteContact={this.deleteContact}
          />
        </Section>
        <Filter handleChange={this.handleChange} />
      </>
    );
  }
}
