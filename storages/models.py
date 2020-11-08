from uuid import uuid4
from django.db import models
from users.models import User

class Storage(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=128)
    users = models.ManyToManyField(
        'users.User',
        through='UserPermission'
    )


class Section(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=128)
    storage = models.ForeignKey(
        'Storage',
        on_delete=models.CASCADE
    )


class UserPermission(models.Model):
    PERMISSION_OWNER = "own"
    PERMISSION_USER = "use"

    PERMISSIONS = [
        (PERMISSION_OWNER, "Владелец"),
        (PERMISSION_USER, "Пользователь")
    ]

    storage = models.ForeignKey(
        Storage,
        on_delete=models.CASCADE,
    )
    user = models.ForeignKey(
        'users.User',
        on_delete=models.CASCADE,
    )
    permission = models.CharField(
        max_length=3,
        choices=PERMISSIONS,
        default="use"
    )
