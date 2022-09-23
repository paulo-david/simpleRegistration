import { useForm } from "react-hook-form";
import { useAppSelector as useSelector } from "../../../features/hooks";

import EndpointBox from "../../EndpointBox";
import store from "../../../features/store";

import {
  Contact,
  ContactDetail,
  deleteContact,
} from "../../../features/contacts/contactsSlice";

const FormDeleteContact = () => {
  const lst = useSelector((state) => state.contact.contact_list);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const req_body: ContactDetail = {
      req_contact_id: data.contact_id,
    };

    store.dispatch(deleteContact(req_body));
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

      <button type="submit">Send</button>
    </form>
  );

  return <EndpointBox title="Delete contact" form={form}></EndpointBox>;
};

export default FormDeleteContact;
