from things.models import Thing,ThingInstance
from things.serializers import ThingSerializer,ThingInstanceSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

class ThingViewset(ModelViewSet):
    queryset = Thing.objects.all()
    serializer_class = ThingSerializer

    permission_classes = (IsAuthenticated,)


class ThingInstanceViewset(ModelViewSet):
    queryset = ThingInstance.objects.all()
    serializer_class = ThingInstanceSerializer

    permission_classes = (IsAuthenticated,)
