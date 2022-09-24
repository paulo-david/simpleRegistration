import React, { useEffect, useState } from "react";
import { useAppSelector as useSelector } from "../../../features/hooks";

import EndpointBox from "../../EndpointBox";
import ContactData from "../../ContactData";

import store from "../../../features/store";

import {
  Contact,
  ContactDetail,
  getContact,
  listContacts,
} from "../../../features/contacts/contactsSlice";

const FormGetContact = () => {
  const lst = useSelector((state) => state.contact.contact_list);
  const contact: Contact = useSelector((state) => state.contact.contact);

  useEffect(() => {
    store.dispatch(listContacts());

    setValue(contact.id || "");
  }, [contact]);

  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);

    const req_body: ContactDetail = {
      req_contact_id: event.target.value,
    };

    store.dispatch(getContact(req_body));
  };

  const form = (
    <form>
      <label htmlFor="contact_id_select">contact_id:</label>
      <select
        id="contact_id_select"
        required
        value={value}
        onChange={handleChange}
      >
        <option value="">--Select a contact--</option>
        {lst.map((contact: Contact) => (
          <option value={contact.id} key={contact.id}>
            {`${contact.full_name} (${contact.id?.slice(0, 7)})`}
          </option>
        ))}
      </select>
    </form>
  );

  return (
    <EndpointBox title="Get contact" form={form} theme="#5DD6F4">
      <ContactData></ContactData>
    </EndpointBox>
  );
};

export default FormGetContact;
