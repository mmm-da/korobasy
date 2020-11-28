from rest_framework import serializers 
from storages.models import Storage,Section
from things.models import ThingsInstance

class StorageSerializer(serializers.ModelSerializer):
    sections = serializers.PrimaryKeyRelatedField(many=True, queryset=Section.objects.all())
    class Meta:
        model = Storage
        fields = ('id', 'name','owner','sections')

class SectionSerializer(serializers.ModelSerializer):
    things_instances = serializers.PrimaryKeyRelatedField(many=True,queryset=ThingsInstance.objects.all())
    class Meta:
        model = Section
        fields = ('id', 'name','storage','things_instances')