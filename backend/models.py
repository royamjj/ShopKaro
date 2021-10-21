from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE



class Product(models.Model):
    user = models.ForeignKey(User,models.SET_NULL, null=True)
    name = models.CharField(max_length=256, null=True, blank=False)
    # image = 
    brand = models.CharField(max_length=256, null=True, blank=False)
    category = models.CharField(max_length=256, null=True, blank=False)
    description = models.TextField(null=True, blank=False)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)