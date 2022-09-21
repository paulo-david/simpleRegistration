from model_bakery import baker
from collections import OrderedDict

from clients.serializers import ClientSerializer

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

        cls.path_NOT_FOUND = "/api/clients/39b01442-c799-48ec-b58f-6e91325d9861/"

    @classmethod
    def setUp(cls) -> None:

        cls.cli = baker.make("clients.Client")
        cls.path = f"/api/clients/{cls.cli.id}/"

    def test_retrieve_client(self):

        response = self.client.get(self.path)
        expected_response = ClientSerializer(self.cli).data

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, expected_response)

    def test_retrieve_client_NOT_FOUND(self):

        response = self.client.get(self.path_NOT_FOUND)
        expected_response = {
            "detail": "Not found."
        }

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data, expected_response)

    def test_update_client(self):

        response = self.client.patch(self.path, self.patch_body)

        expected_response = {
            **ClientSerializer(self.cli).data,
            **self.patch_body
        }

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, expected_response)

    def test_update_client_with_INVALID_email(self):

        response = self.client.patch(self.path, self.patch_body_INVALID_email)

        expected_response = {
            "email": ["Enter a valid email address."]
        }

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data, expected_response)

    def test_update_client_NOT_FOUND(self):

        response = self.client.patch(self.path_NOT_FOUND, self.patch_body)
        expected_response = {
            "detail": "Not found."
        }

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data, expected_response)

    def test_delete_client(self):

        response = self.client.delete(self.path)

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_delete_client_NOT_FOUND(self):

        response = self.client.delete(self.path_NOT_FOUND)

        expected_response = {
            "detail": "Not found."
        }

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data, expected_response)