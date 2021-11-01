from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import ProductSerializer,CartRequestSerializer, UserSerializer, MyTokenObtainPairSerializer, UserSerializerWithToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.contrib.auth.hashers import make_password
from rest_framework import status
from backend import serializers

#home
def index(request):
    return render(request, 'index.html')

#users/login/
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


#users/profile/
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    try:
        user = request.user
        serailizer = UserSerializer(user, many=False)
        return Response(serailizer.data)
    except:
        return Response({"id":"null", "usename":"null"})


#products/
@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serailizer = ProductSerializer(products, many=True)
    return Response(serailizer.data)


#products/<str:pk>/
@api_view(['GET'])
def getProduct(request, pk):
    product = products = Product.objects.get(_id=pk)
    serailizer = ProductSerializer(product, many=False)
    return Response(serailizer.data)


#getRequest/
@api_view(["POST"])
def getRequest(request, format=None):
    serializer = CartRequestSerializer(request.data)
    print(serializer['product'].value)
    return Response(serializer.data)


#users/
@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serailizer = UserSerializer(users, many=True)
    return Response(serailizer.data)


@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username = data['username'],
            email = data['email'],
            password=make_password(data['password']),
        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {
            'detail':'User with this email already exist.',
        }
        return Response(message, status=status.HTTP_400_BAD_REQUEST)