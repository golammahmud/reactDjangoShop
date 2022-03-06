# Generated by Django 3.2.3 on 2021-10-03 17:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dapi', '0004_auto_20210905_2145'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productfeatures',
            name='product',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='feature', to='dapi.product'),
        ),
        migrations.AlterField(
            model_name='productimage',
            name='product',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='dapi.product'),
        ),
    ]
