from django.db import models
from django.contrib.auth.models import User,AbstractUser
# Create your models here.

# class Personal(models.Model):
#     fname = models.CharField(max_length=20, null=True)
#     lname = models.CharField(max_length=20, null=True)
#     mname = models.CharField(max_length=20, null=True)
#     gender = models.CharField(max_length=8, null=True)
#     dob = models.DateField(null=True)
#     addr = models.CharField(max_length=20, null=True)
#     dist = models.CharField(max_length=20, null=True)
#     state = models.CharField(max_length=20, null=True)
#     pin = models.IntegerField(null=True)
#     phone = models.IntegerField(null=True)
#     email = models.EmailField(max_length=120, null=True)

#     def __str__(self):
#         return self.email

# class Education(models.Model):
#     email = models.EmailField(max_length=120, null=True)
#     clg = models.CharField(max_length=20, null=True)
#     course = models.CharField(max_length=20, null=True)
#     branch = models.CharField(max_length=20, null=True)
#     cid = models.CharField(max_length=20, null=True)
#     sem = models.IntegerField(null=True)
#     batch = models.IntegerField(null=True)

#     def __str__(self):
#         return self.email

# class Security(models.Model):
#     email = models.EmailField(max_length=120, null=True) 
#     pas = models.CharField(max_length=20, null=True)
#     cpas = models.CharField(max_length=20, null=True)

#     def __str__(self):
#         return self.email
    
