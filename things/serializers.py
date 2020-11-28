from rest_framework import serializers 
from things.models import ThingInstance

class ThingSerializer(serializers.ModelSerializer):
    things_with_type = serializers.PrimaryKeyRelatedField(many=True,queryset=ThingsInstance.objects.all())
    class Meta:
        model = Thing
        fields = ('id', 'name','description','things_with_type')

class ThingInstanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ThingInstance
        fields = ('id', 'storage','type','count')