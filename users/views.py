from django.contrib.auth.models import User
from users.serializers import KorobasyUserSerializer
from rest_framework.viewsets import ReadOnlyModelViewSet
from users.permissions import UserPermission
from drf_spectacular import utils

@utils.extend_schema(
    tags=['User Info']
)
class UserViewset(ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = KorobasyUserSerializer

    permission_classes = (UserPermission, )
