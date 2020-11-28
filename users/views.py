from django.contrib.auth.models import User
from users.serializers import UserSerializer
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class UserViewset(ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    permission_classes = (IsAuthenticatedOrReadOnly,)
