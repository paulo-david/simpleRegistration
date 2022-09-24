import { useForm } from "react-hook-form";
import { useAppSelector as useSelector } from "../../../features/hooks";

import EndpointBox from "../../EndpointBox";
import store from "../../../features/store";

import {
  Contact,
  ContactDetail,
  updateContact,
} from "../../../features/contacts/contactsSlice";

const FormUpdateContact = () => {
  const lst = useSelector((state) => state.contact.contact_list);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const array = Object.entries(data);
    const filtered = array.filter(
      ([key, value]) => key !== "contact_id" && value !== ""
    );
    const req_data: Contact = Object.fromEntries(filtered);

    const req_body: ContactDetail = {
      req_contact_id: data.contact_id,
      req_data,
    };

    store.dispatch(updateContact(req_body));
  };

  const form = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="contact_id_select">contact_id:</label>
      <select id="contact_id_select" required {...register("contact_id")}>
        <option value="">--Select a client--</option>
        {lst.map((contact: Contact) => (
          <option value={contact.id} key={contact.id}>
            {`${contact.full_name} (${contact.id?.slice(0, 7)})`}
          </option>
        ))}
      </select>

      <label htmlFor="full-name">full name:</label>
      <input type="text" id="full-name" {...register("full_name")} />

      <label htmlFor="email">email:</label>
      <input type="email" id="email" {...register("email")} />

      <label htmlFor="telefone">telefone:</label>
      <input type="tel" id="telefone" {...register("telephone")} />

      <button type="submit">Send</button>
    </form>
  );

  return (
    <EndpointBox
      title="Update contact"
      form={form}
      theme="#5DD6F4"
    ></EndpointBox>
  );
};

export default FormUpdateContact;
