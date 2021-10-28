from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductSerializer,CartRequestSerializer, UserSerializer, MyTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


def index(request):
    return render(request, 'index.html')


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getUserProfile(request):
    user = request.user
    serailizer = UserSerializer(user, many=False)
    return Response(serailizer.data)


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serailizer = ProductSerializer(products, many=True)
    return Response(serailizer.data)

@api_view(['GET'])
def getProduct(request, pk):
    product = products = Product.objects.get(_id=pk)
    serailizer = ProductSerializer(product, many=False)
    return Response(serailizer.data)

@api_view(["POST"])
def getRequest(request, format=None):
    serializer = CartRequestSerializer(request.data)
    print(serializer['product'].value)
    return Response(serializer.data)
