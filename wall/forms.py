from django import forms
from django.contrib.auth.models import User
from .models import Profile

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ('__all__')

class EditProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = [ 'phone', 'address', 'city', 'state', 'zipcode','branch','sem','course','college_Id','college_name','batch']