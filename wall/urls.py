from django.urls import path
from .views import EditProfile,Mywall

app_name = "wall"
urlpatterns = [
    path("wall/<int:pk>/", Mywall.as_view(), name='list' ),
    path("editprofile/<int:pk>/", EditProfile.as_view(), name='edit' ),

]