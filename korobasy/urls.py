from django.conf.urls import url, include
from storages import views as storages_views
from users import views as users_views
from things import views as things_views
from rest_framework.routers import DefaultRouter
from rest_framework.urlpatterns import format_suffix_patterns

router = DefaultRouter()
router.register(r'storages', storages_views.StorageViewset)
router.register(r'sections', storages_views.SectionViewset)
router.register(r'things', things_views.ThingViewset)
router.register(r'things-instances', things_views.ThingInstanceViewset)
router.register(r'users', users_views.UserViewset)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]