from django.db import models
from django.contrib.auth.models import User
from django.db.models.base import ModelStateFieldsCacheDescriptor
from django.db.models.deletion import CASCADE
from django.db.models.fields import BLANK_CHOICE_DASH



class Product(models.Model):
    user = models.ForeignKey(User,models.SET_NULL, null=True)
    name = models.CharField(max_length=256, null=True, blank=False)
    image = models.ImageField(null=True, blank=False)
    brand = models.CharField(max_length=256, null=True, blank=False)
    category = models.CharField(max_length=256, null=True, blank=False)
    description = models.TextField(null=True, blank=False)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


class Review(models.Model):
    product = models.ForeignKey(Product, models.SET_NULL, null=True)
    user = models.ForeignKey(User,models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    comment =  models.TextField(null=True, blank=False)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)


class Order(models.Model):
    user = models.ForeignKey(User,models.SET_NULL, null=True)
    paymentMethod =  models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(max_digits=10, decimal_places=2)
    shippingPrice = models.DecimalField(max_digits=10, decimal_places=2)
    totalPrice = models.DecimalField(max_digits=10, decimal_places=2)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str(self):
        return str(self.createdAt)


class OrderItem(models.Model):
    product =  models.ForeignKey(Product, models.SET_NULL, null=True)
    order =  models.ForeignKey(Order, models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


class ShippingAddress(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingpPrice =  models.DecimalField(max_digits=10, decimal_places=2)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.address

class Cart(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    product =  models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(null=False)
    status = models.BooleanField(default=False)   #shipped, delivered
