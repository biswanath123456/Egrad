from django.shortcuts import render, get_object_or_404
from django.urls import reverse_lazy
from django.contrib.auth.decorators import login_required
from django.views.generic import UpdateView,TemplateView
from .models import Profile
from .forms import ProfileForm,EditProfileForm


class Mywall(TemplateView):
    template_name = 'MyWall.html'


class EditProfile(UpdateView):
    template_name = 'wall/profile_form.html'
    model = Profile
    form_class = EditProfileForm
    success_url = reverse_lazy("Home:home")
