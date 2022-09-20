from django.urls import path
from clients.views import ClientView, ClientDetailView

urlpatterns = [
    path('', ClientView.as_view()),
    path("<uuid:client_id>/", ClientDetailView.as_view()),
]
