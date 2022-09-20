from rest_framework.serializers import ModelSerializer

from clients.models import Client
from contacts.serializers import ContactBasicSerializer


class ClientSerializer(ModelSerializer):

    contacts = ContactBasicSerializer(many=True, read_only=True)
    
    class Meta:
        model = Client

        fields = [
            "id",
            "full_name",
            "email",
            "telephone",
            "contacts",
            "created_at"
        ]
