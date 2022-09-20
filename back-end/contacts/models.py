import email
from uuid import uuid4
from django.db.models import Model, UUIDField, CharField, EmailField, ForeignKey, CASCADE


class Contact(Model):
    id = UUIDField(default=uuid4, primary_key=True)
    full_name = CharField(max_length=255)
    email = EmailField()
    telephone = CharField(max_length=20)

    client = ForeignKey("clients.Client", on_delete=CASCADE, related_name="contacts")