from rest_framework.serializers import ModelSerializer
from things.models import Thing, ThingInstance


class ThingSerializer(ModelSerializer):
    class Meta:
        model = Thing
        fields = ['id', 'name', 'description']


class ThingInstanceSerializer(ModelSerializer):
    class Meta:
        model = ThingInstance
        fields = ['id', 'storage', 'type','count']
