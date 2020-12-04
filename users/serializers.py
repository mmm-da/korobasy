from rest_framework import serializers 
from storages.models import Storage
from django.contrib.auth.models import User

class KorobasyUserSerializer(serializers.ModelSerializer):
    storages = serializers.PrimaryKeyRelatedField(many=True, queryset=Storage.objects.all())
    class Meta:
        model = User
        fields = ('username','email','first_name','last_name','storages')