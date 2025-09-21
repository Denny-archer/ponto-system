from django.contrib import admin
from django.urls import path, include
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


@api_view(["GET"])
def hello(request):
    return Response({"message": "API funcionando 🚀"})


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("ponto.urls")),   # 👈 conecta CRUD de pontos
    path("api/hello/", hello),             # 👈 teste rápido
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
