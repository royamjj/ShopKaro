from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Cart, Product
from backend import models


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CartRequestSerializer(serializers.Serializer):
    product = serializers.CharField(max_length=20)
    quantity = serializers.IntegerField()

#{"product": "apple", "quantity": "5"}