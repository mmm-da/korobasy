from django.db import models
from uuid import uuid4
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin
from .managers import CustomUserManager

class CustomUser(AbstractBaseUser,PermissionsMixin):
    id = models.UUIDField(default=uuid4, editable=False)
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = CustomUserManager()

    def __str__(self):
        return str(id)