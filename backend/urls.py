from django.urls import path
from .import views
app_name = 'backend'

urlpatterns = [
    path('', views.index, name="index"),
    path('getRoutes/',views.getRoutes, name="getRoutes"),
    path('products/',views.getProducts, name="getProducts"),
    path('products/<str:pk>/',views.getProduct, name="getProduct"),


]