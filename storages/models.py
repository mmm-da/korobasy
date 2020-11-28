from uuid import uuid4
from django.db import models
from users.models import CustomUser

class Storage(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=128)
    owner = models.ForeignKey('models.CustomUser',related_name='storages',on_delete=models.CASCADE)

    def __str__(self):
        return str(id)

class Section(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=128)
    storage = models.ForeignKey(
        'Storage',
        related_name='sections',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return str(id)