from model_bakery import baker
from collections import OrderedDict

from rest_framework.views import status
from rest_framework.test import APITestCase


class TestClientView(APITestCase):

    @classmethod
    def setUpTestData(cls) -> None:

        cls.client_data = {
            "full_name": "paulo dogs",
            "email": "paulo@mail.com",
            "telephone": "37999999999"
        }

        cls.client_data_INVALID_email = {
            "full_name": "paulo dogs",
            "email": "paulo@mail",
            "telephone": "37999999999"
        }

        cls.client_list = baker.make("clients.Client", _quantity=10)
        cls.path = "/api/clients/"

    def test_create_client(self):

        response = self.client.post(self.path, self.client_data)

        expected_response = {
            "id": response.data["id"],
            "full_name": "paulo dogs",
            "email": "paulo@mail.com",
            "telephone": "37999999999",
            "contacts": [],
            "created_at": response.data["created_at"]
        }

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data, expected_response)

    def test_create_multiple_clients(self):

        for i in range(22):
            response = self.client.post(self.path, self.client_data)

            expected_response = {
                "id": response.data["id"],
                "full_name": "paulo dogs",
                "email": "paulo@mail.com",
                "telephone": "37999999999",
                "contacts": [],
                "created_at": response.data["created_at"]
            }

            self.assertEqual(response.status_code, status.HTTP_201_CREATED)
            self.assertEqual(response.data, expected_response)

    def test_create_with_EMPTY_body(self):
        response = self.client.post(self.path, {})

        expected_response = {
            "full_name": ["This field is required."],
            "email": ["This field is required."],
            "telephone": ["This field is required."]
        }

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data, expected_response)

    def test_create_client_with_INVALID_email(self):
        response = self.client.post(self.path, self.client_data_INVALID_email)

        expected_response = {
            "email": ["Enter a valid email address."]
        }

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data, expected_response)

    def test_list_clients(self):

        response = self.client.get(self.path)

        expected_response = [OrderedDict([
            ("id", str(cli.id)),
            ("full_name", cli.full_name),
            ("email", cli.email),
            ("telephone", cli.telephone),
            ("contacts", []),
            ("created_at", cli.created_at.strftime("%Y-%m-%dT%H:%M:%S.%fZ")),
        ]) for cli in self.client_list]

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, expected_response)
