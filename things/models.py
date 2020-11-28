from uuid import uuid4
from django.db import models


class Thing(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return str(id)

class ThingInstance(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    storage = models.ForeignKey(
        'storages.Section',
        related_name='things_instances',
        on_delete=models.CASCADE
    )
    type = models.ForeignKey(
        'Thing',
        related_name='things_with_type',
        on_delete=models.CASCADE
    )
    count = models.IntegerField()

    def __str__(self):
        return str(id)