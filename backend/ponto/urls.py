from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PontoViewSet


router = DefaultRouter()
router.register(r"pontos", PontoViewSet, basename="pontos")


urlpatterns = [
path("", include(router.urls)),
]