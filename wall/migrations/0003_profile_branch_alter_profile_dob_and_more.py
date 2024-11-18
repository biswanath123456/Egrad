# Generated by Django 4.1.7 on 2023-05-02 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wall', '0002_alter_profile_dob'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='branch',
            field=models.CharField(choices=[('CSE', 'CSE'), ('CST', 'CST'), ('CEN', 'CEN'), ('ECE', 'ECE'), ('EEE', 'EEE')], max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='DOB',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='course',
            field=models.CharField(choices=[('BTECH', 'B.tech'), ('MTECH', 'M.tech')], max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='gender',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Others')], max_length=5),
        ),
    ]
