from django.urls import path
from .import views


app_name = 'backend'

urlpatterns = [
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.index, name="index"),
    path('products/',views.getProducts, name="getProducts"),
    path('products/<str:pk>/',views.getProduct, name="getProduct"),
    path('getRequest/', views.getRequest, name="getRequest"),
    path('users/profile/',views.getUserProfile, name="getUserProfile"),

]