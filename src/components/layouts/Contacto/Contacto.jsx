import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const Contacto = () => {
  const [state, handleSubmit] = useForm("xqaqoojd");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </>
  )
}