import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    e.preventDefault();
    this.setState(e.target.value);
  };

  formValue = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
    actions.resetForm();
    console.log(this.state.contacts);
  };

  renderList = () => this.state.contacts;

  render() {
    return (
      <>
        <ContactForm formValue={this.formValue} />
        <Section title="Contacts:">
          <ContactList renderList={this.renderList()} />
        </Section>
      </>
    );
  }
}
