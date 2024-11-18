from django.urls import path
from .views import upload, DocumentDelete, Home, download

app_name="repository"
urlpatterns = [
    path("repository/", Home.as_view(), name="erep"),
    path("repository/upload/", upload, name="upload"),
    path("repository/<int:pk>/", DocumentDelete.as_view(), name="delete"),
    path("repository/<int:pk>/download/", download, name="download"),

]