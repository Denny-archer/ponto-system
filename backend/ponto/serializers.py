from rest_framework import serializers
from .models import Ponto

class PontoSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)  # mostra username

    class Meta:
        model = Ponto
        fields = ["id", "user", "data", "hora", "tipo", "status", "justificativa", "anexo"]
        read_only_fields = ["user", "data", "hora"]
