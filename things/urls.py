from django.conf.urls import url
from things import views

urlpatterns = [
    url(r'^things/$', views.things_list),
    url(r'^things_instance/$', views.things_instance_list),
]