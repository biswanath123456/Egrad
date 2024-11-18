from django.contrib import admin
from django.urls import path,include
from Home import views
from django.contrib.auth.views import LoginView,LogoutView

app_name='Home'
urlpatterns = [
    path("", views.home, name='home'),
    path("e-exam",views.e_exam,name='exam'),
    # path("e-repo",views.e_repo,name='repo'),
    path("dashboard",views.dashboard,name='dash'),
    # path("mywall",views.mywall,name='wall'),
    path("Guidelines",views.guide,name='guide'),
    path("download",views.download,name='download'),
    path("signup",views.signup,name='signup'),
    path("login",LoginView.as_view(), name='login'),
    path("logout",LogoutView.as_view(), name='logout')

]