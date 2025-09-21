from rest_framework import viewsets, permissions
from .models import Ponto
from .serializers import PontoSerializer


class PontoViewSet(viewsets.ModelViewSet):
    serializer_class = PontoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # só retorna pontos do usuário logado
        return Ponto.objects.filter(user=self.request.user).order_by("-data", "-hora")

    def perform_create(self, serializer):
        # sempre salva com o usuário logado
        serializer.save(user=self.request.user)
