from storages.models import Storage,Section
from storages.serializers import StorageSerializer,SectionSerializer
from storages.permissions import IsOwner
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from drf_spectacular import utils

@utils.extend_schema(
    tags=['Storage']
)
class StorageViewset(ModelViewSet):
    queryset = Storage.objects.all()
    serializer_class = StorageSerializer

    permission_classes = (IsAuthenticated,IsOwner)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

@utils.extend_schema(
    tags=['Section']
)
class SectionViewset(ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer

    permission_classes = (IsAuthenticated,)
