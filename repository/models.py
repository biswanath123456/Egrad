from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Document(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='documents')
    description = models.CharField(max_length=255, blank=True)
    file = models.FileField(upload_to='documents/')
    uploaded_at = models.DateTimeField(auto_now_add=True)