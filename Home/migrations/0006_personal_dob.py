# Generated by Django 4.2 on 2023-04-24 06:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Home', '0005_remove_personal_addr_remove_personal_dist_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='personal',
            name='dob',
            field=models.DateField(null=True),
        ),
    ]
