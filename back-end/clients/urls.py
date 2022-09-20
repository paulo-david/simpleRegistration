from django.urls import path
from clients.views import ClientView

urlpatterns = [
    path('', ClientView.as_view()),
]
