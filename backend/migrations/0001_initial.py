# Generated by Django 3.2.5 on 2021-10-21 13:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('name', models.CharField(max_length=256, null=True)),
                ('brand', models.CharField(max_length=256, null=True)),
                ('category', models.CharField(max_length=256, null=True)),
                ('description', models.TextField(null=True)),
                ('rating', models.DecimalField(decimal_places=2, max_digits=3)),
                ('numReviews', models.IntegerField(blank=True, default=0, null=True)),
                ('countInStock', models.IntegerField(blank=True, default=0, null=True)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
