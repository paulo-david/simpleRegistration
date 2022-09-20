from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from clients.utils.mixins import SerializerByMethodMixin

from clients.models import Client
from clients.serializers import ClientSerializer


class ClientView(ListCreateAPIView):

    queryset = Client.objects.all()
    # serializer_map = {
    #     "GET": ,
    #     "POST": ProductDetailSerializer
    # }
    serializer_class = ClientSerializer


class ClientDetailView(RetrieveUpdateDestroyAPIView):

    lookup_url_kwarg = "client_id"

    queryset = Client.objects.all()
    serializer_class = ClientSerializer
