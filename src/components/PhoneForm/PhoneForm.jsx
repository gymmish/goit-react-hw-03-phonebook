import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';
import { Formik } from 'formik';
import { Form, AddButton } from './Phone.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    e.target.reset();
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Formik>
        <Form onSubmit={this.handleSubmit} name="contact">
          <label htmlFor={this.nameId}>
            Name
            <input
              value={name}
              onChange={this.handleChange}
              id={this.nameId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label htmlFor={this.numberId}>
            Number
            <input
              value={number}
              onChange={this.handleChange}
              id={this.numberId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <AddButton type="submit">Add contact</AddButton>
        </Form>
      </Formik>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
