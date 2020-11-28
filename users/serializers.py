from rest_framework import serializers 
from storages.models import Storage
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    storages = serializers.PrimaryKeyRelatedField(many=True, queryset=Storage.objects.all())
    class Meta:
        model = CustomUser
        fields = ('id', 'email','username','storages')