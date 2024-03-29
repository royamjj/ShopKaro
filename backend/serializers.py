from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Cart, Product
from backend import models
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ('id','_id', 'username', 'email', 'name', 'isAdmin')
    def get_name(self, obj):
        name = obj.first_name
        if name == "":
            name = obj.email
        return name
    def get__id(self,obj):
        return obj.id
    def get_isAdmin(self,obj):
        return obj.is_staff

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ('id','_id', 'username', 'email', 'name', 'isAdmin', 'token')

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k] = v
        return data


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CartRequestSerializer(serializers.Serializer):
    product = serializers.CharField(max_length=20)
    quantity = serializers.IntegerField()

#{"product": "apple", "quantity": "5"}