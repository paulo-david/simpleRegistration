from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from contacts.models import Contact
from contacts.serializers import ContactSerializer


class ContactView(ListCreateAPIView):

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class ContactDetailView(RetrieveUpdateDestroyAPIView):

    lookup_url_kwarg = "contact_id"

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
