# Generated by Django 4.2 on 2023-04-20 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Register',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fname', models.CharField(max_length=20)),
                ('mname', models.CharField(max_length=20)),
                ('lname', models.CharField(max_length=20)),
                ('dob', models.DateField()),
                ('gender', models.CharField(max_length=8)),
                ('addr', models.CharField(max_length=20)),
                ('dist', models.CharField(max_length=20)),
                ('state', models.CharField(max_length=20)),
                ('pin', models.IntegerField()),
                ('phone', models.IntegerField()),
                ('email', models.EmailField(max_length=20)),
                ('clg', models.CharField(max_length=20)),
                ('course', models.CharField(max_length=20)),
                ('branch', models.CharField(max_length=20)),
                ('cid', models.CharField(max_length=20)),
                ('sem', models.IntegerField()),
                ('batch', models.IntegerField()),
                ('pas', models.CharField(max_length=20)),
                ('cpas', models.CharField(max_length=20)),
            ],
        ),
    ]
