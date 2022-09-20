from rest_framework.serializers import ModelSerializer
from contacts.models import Contact


class ContactSerializer(ModelSerializer):

    class Meta:
        model = Contact
        fields = "__all__"


class ContactBasicSerializer(ModelSerializer):

    class Meta:
        model = Contact
        exclude = ["id", "client"]