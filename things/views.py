from things.models import Thing,ThingInstance
from things.serializers import ThingSerializer,ThingInstanceSerializer
from rest_framework import viewsets

def things_list(viewsets.ModelViewSet):
    queryset = Thing.objects.all()
    serializer_class = ThingSerializer

def things_list(viewsets.ModelViewSet):
    queryset = ThingInstance.objects.all()
    serializer_class = ThingInstanceSerializer
