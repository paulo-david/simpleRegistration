from model_bakery import baker

from contacts.serializers import ContactSerializer

from rest_framework.views import status
from rest_framework.test import APITestCase


class TestClientDetaiilView(APITestCase):

    @classmethod
    def setUpTestData(cls) -> None:

        cls.patch_body = {
            "full_name": "updated full_name",
            "email": "updated_email@email.com",
            "telephone": "updated telephone",
        }

        cls.patch_body_INVALID_email = {
            "email": "INVALID",
        }

        cls.path_NOT_FOUND = "/api/contacts/39b01442-c799-48ec-b58f-6e91325d9861/"

    @classmethod
    def setUp(cls) -> None:

        cls.contact = baker.make("contacts.Contact")
        cls.path = f"/api/contacts/{cls.contact.id}/"

    def test_retrieve_contact(self):

        response = self.client.get(self.path)
        expected_response = ContactSerializer(self.contact).data

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, expected_response)

    def test_retrieve_contact_NOT_FOUND(self):

        response = self.client.get(self.path_NOT_FOUND)
        expected_response = {
            "detail": "Not found."
        }

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data, expected_response)

    def test_update_contact(self):

        response = self.client.patch(self.path, self.patch_body)

        expected_response = {
            **ContactSerializer(self.contact).data,
            **self.patch_body
        }

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, expected_response)

    def test_update_contact_with_INVALID_email(self):

        response = self.client.patch(self.path, self.patch_body_INVALID_email)

        expected_response = {
            "email": ["Enter a valid email address."]
        }

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data, expected_response)

    def test_update_contact_NOT_FOUND(self):

        response = self.client.patch(self.path_NOT_FOUND, self.patch_body)
        expected_response = {
            "detail": "Not found."
        }

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data, expected_response)

    def test_delete_contact(self):

        response = self.client.delete(self.path)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_delete_contact_NOT_FOUND(self):

        response = self.client.delete(self.path_NOT_FOUND)

        expected_response = {
            "detail": "Not found."
        }

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data, expected_response)