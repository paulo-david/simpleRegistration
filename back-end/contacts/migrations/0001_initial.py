# Generated by Django 4.1.1 on 2022-09-20 11:52

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('clients', '0002_rename_telefone_client_telephone'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('full_name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
                ('telephone', models.CharField(max_length=20)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='contacts', to='clients.client')),
            ],
        ),
    ]
