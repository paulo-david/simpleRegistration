from rest_framework.generics import ListCreateAPIView

from clients.models import Client
from clients.serializers import ClientSerializer

class ClientView(ListCreateAPIView):

    queryset = Client.objects.all()
    serializer_class = ClientSerializer