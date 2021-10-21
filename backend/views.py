from django.shortcuts import render

from django.http import JsonResponse
from .models import *

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductSerializer

def index(request):
    return render(request, 'index.html')

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/',
        '/getRoutes',
        '/login',
        '/cart',
    ]
    return Response(routes)


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


