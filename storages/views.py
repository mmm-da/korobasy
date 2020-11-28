from storages.models import Storage,Section
from storages.serializers import StorageSerializer,SectionSerializer
from storages.permissions import IsOwner
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class StorageViewset(ModelViewSet):
    queryset = Storage.objects.all()
    serializer_class = StorageSerializer

    permission_classes = (IsAuthenticatedOrReadOnly,IsOwner)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class SectionViewset(ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer

    permission_classes = (IsAuthenticatedOrReadOnly,)
