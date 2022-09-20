from uuid import uuid4
from django.db.models import Model, UUIDField, CharField, EmailField, DateTimeField


class Client(Model):
    id = UUIDField(default=uuid4, primary_key=True)
    full_name = CharField(max_length=255)
    email = EmailField()
    telephone = CharField(max_length=20)
    created_at = DateTimeField(auto_now_add=True)
