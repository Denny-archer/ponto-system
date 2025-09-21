from django.db import models
from django.conf import settings

class Ponto(models.Model):
    TIPOS = [
        ("entrada", "Entrada"),
        ("pausa", "Pausa"),
        ("retorno", "Retorno"),
        ("saida", "Saída"),
    ]

    STATUS = [
        ("OK", "OK"),
        ("ATRASO", "Atraso"),
        ("FALTA", "Falta"),
        ("pendente", "Pendente"),
        ("aprovado", "Aprovado"),
        ("rejeitado", "Rejeitado"),
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    data = models.DateField(auto_now_add=True)
    hora = models.TimeField(auto_now_add=True, null=True, blank=True)
    tipo = models.CharField(max_length=20, choices=TIPOS)
    status = models.CharField(max_length=20, choices=STATUS, default="OK")
    justificativa = models.TextField(blank=True, null=True)
    anexo = models.FileField(upload_to="anexos/", blank=True, null=True)

    def __str__(self):
        return f"{self.user} - {self.tipo} - {self.data} {self.hora}"