# Generated by Django 3.2.3 on 2021-10-07 03:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dapi', '0006_auto_20211007_0734'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='feature',
        ),
        migrations.AlterField(
            model_name='product',
            name='slug',
            field=models.SlugField(unique=True),
        ),
    ]
