import React, { useContext, useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { ContactContext } from "../Context/ContactContext";
import PhoneList from "./PhoneList";
import { showAlert } from "../Components/Alert";
import { callCreateContact, callUpdateContact } from "../APIManager";

export default function ContactForm({ contact }) {
  const [state, dispatch] = useContext(ContactContext);
  const [phones, setPhones] = useState(contact.phones || []);
  const [redirect, setRedirect] = useState(false);
  const methods = useForm({ mode: "onChange" });
  const { register, handleSubmit, errors } = methods;

  const createContact = async (data) => {
    try {
      const responseBody = await callCreateContact(data);
      dispatch({
        type: "CREATE_CONTACT",
        payload: responseBody,
      });
      setRedirect(true);
    } catch (error) {
      showAlert(dispatch, error);
    }
  };

  const updateContact = async (data) => {
    try {
      const responseBody = await callUpdateContact(data, contact);
      dispatch({
        type: "UPDATE_CONTACT",
        payload: responseBody,
      });
      setRedirect(true);
    } catch (error) {
      showAlert(dispatch, error);
    }
  };

  const onSubmit = async (data) => {
    if (contact._id) {
      if (!data.phones) {
        data.phones = [];
      }
      await updateContact(data);
    } else {
      await createContact(data);
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1 className="mt-4">{contact._id ? "Edit Contact" : "Add New Contact"}</h1>
      <FormContext {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              ref={register}
              defaultValue={contact.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              ref={register({
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              })}
              defaultValue={contact.email}
            />
            {errors.email && errors.email.type === "pattern" && (
              <span className="help-block text-danger">
                Invalid email address
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="address"
              ref={register}
              defaultValue={contact.address}
            />
          </div>
          <PhoneList initPhones={phones} />
          <button type="submit" className="btn btn-primary">
            <span className="fa fa-save" aria-hidden="true"></span> Save
          </button>
        </form>
      </FormContext>
    </div>
  );
}
