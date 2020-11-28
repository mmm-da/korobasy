from things.models import Thing,ThingInstance
from things.serializers import ThingSerializer,ThingInstanceSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class ThingViewset(ModelViewSet):
    queryset = Thing.objects.all()
    serializer_class = ThingSerializer

    permission_classes = (IsAuthenticatedOrReadOnly,)


class ThingInstanceViewset(ModelViewSet):
    queryset = ThingInstance.objects.all()
    serializer_class = ThingInstanceSerializer

    permission_classes = (IsAuthenticatedOrReadOnly,)
