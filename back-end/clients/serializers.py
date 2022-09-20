from rest_framework.serializers import ModelSerializer
from clients.models import Client


class ClientSerializer(ModelSerializer):

    class Meta:
        model = Client
        fields = ["id", "full_name", "email", "telephone", "created_at"]