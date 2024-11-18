from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    class Gender(models.TextChoices):
        MALE = 'M','Male'
        FEMALE = 'F','Female'
        OTHERS = 'O','Others'
    
    class Course(models.TextChoices):
        BTECH = 'BTECH','B.tech'
        MTECH = 'MTECH','M.tech'

    class Branch(models.TextChoices):
        CSE = 'CSE','CSE'
        CST = 'CST','CST'
        CEN = 'CEN','CEN'
        ECE = 'ECE','ECE'
        EEE = 'EEE','EEE'

    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name='profile')
    DOB = models. DateTimeField (null=True,auto_now_add=True)
    gender = models.CharField(max_length=5,blank=False,null=False,choices=Gender.choices)
    phone = models.CharField(max_length=10)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=6)    
    college_name = models.CharField(max_length=100,blank=False,null=True)
    college_Id = models.CharField(max_length=10,blank=False,null=False)
    course = models.CharField(max_length=50,null=True,choices = Course.choices)
    branch= models.CharField(max_length=50,null=True,choices = Branch.choices)
    batch =  models.CharField(max_length=4)
    sem= models.CharField(max_length=1)
    
    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'


