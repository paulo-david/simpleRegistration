from model_bakery import baker
from collections import OrderedDict

from rest_framework.views import status
from rest_framework.test import APITestCase


class TestContactView(APITestCase):

    @classmethod
    def setUpTestData(cls) -> None:

        cls.cli = baker.make("clients.Client")

        cls.contact_data = {
            "full_name": "paulo dogs",
            "email": "paulo@mail.com",
            "telephone": "37999999999",
            "client": str(cls.cli.id),
        }

        cls.contact_data_INVALID_email = {
            "full_name": "paulo dogs",
            "email": "paulo",
            "telephone": "37999999999",
            "client": str(cls.cli.id),
        }

        cls.contact_list = baker.make("contacts.contact", _quantity=10)
        cls.path = "/api/contacts/"

    def test_create_contact(self):

        response = self.client.post(self.path, self.contact_data)

        expected_response = {
            "id": response.data["id"],
            **self.contact_data,
            "client": self.cli.id
        }

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data, expected_response)

    def test_create_multiple_contacts(self):

        for i in range(22):
            response = self.client.post(self.path, self.contact_data)

            expected_response = {
                "id": response.data["id"],
                **self.contact_data,
                "client": self.cli.id
            }

            self.assertEqual(response.status_code, status.HTTP_201_CREATED)
            self.assertEqual(response.data, expected_response)

    def test_create_contact_with_EMPTY_body(self):
        response = self.client.post(self.path, {})

        expected_response = {
            "full_name": ["This field is required."],
            "email": ["This field is required."],
            "telephone": ["This field is required."],
            "client": ["This field is required."]
        }

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data, expected_response)

    def test_create_contact_with_INVALID_email(self):
        response = self.client.post(self.path, self.contact_data_INVALID_email)

        expected_response = {
            "email": ["Enter a valid email address."]
        }

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data, expected_response)

    def test_list_contacts(self):

        response = self.client.get(self.path)

        expected_response = [OrderedDict([
            ("id", str(contact.id)),
            ("full_name", contact.full_name),
            ("email", contact.email),
            ("telephone", contact.telephone),
            ("client", contact.client.id),
        ]) for contact in self.contact_list]

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, expected_response)
