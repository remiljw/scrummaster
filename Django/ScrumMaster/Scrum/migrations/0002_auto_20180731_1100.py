# Generated by Django 2.0.6 on 2018-07-31 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Scrum', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='scrumuser',
            options={'ordering': ['nickname']},
        ),
        migrations.AddField(
            model_name='scrumgoal',
            name='visible',
            field=models.BooleanField(default=True),
        ),
    ]