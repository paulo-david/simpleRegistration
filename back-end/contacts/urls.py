from django.urls import path
from contacts.views import ContactView, ContactDetailView

urlpatterns = [
    path("", ContactView.as_view()),
    path("<uuid:contact_id>/", ContactDetailView.as_view()),
]
