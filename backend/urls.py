from django.urls import path
from .import views


app_name = 'backend'

urlpatterns = [
    path('', views.index, name="index"),

    #for initial login return token
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    path('products/',views.getProducts, name="getProducts"),
    path('products/<str:pk>/',views.getProduct, name="getProduct"),
    
    path('getRequest/', views.getRequest, name="getRequest"),
    
    #for getting account info
    path('users/profile/',views.getUserProfile, name="getUserProfile"),
    
    #for getting all users
    path('users/',views.getUsers, name="getUsers"),
    
    #for registering a user
    path('users/register/',views.registerUser, name="registerUser"),


]