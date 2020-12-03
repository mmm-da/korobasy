from django.contrib.auth.models import User
from users.serializers import UserSerializer
from rest_framework.viewsets import ReadOnlyModelViewSet
from users.permissions import UserPermission

class UserViewset(ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    permission_classes = (UserPermission, )
