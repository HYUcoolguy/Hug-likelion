from django.db import models
from django.conf import settings

# Video 정보
class Video(models.Model):
    videoClass  = models.ForeignKey('VideoClass', on_delete=models.CASCADE)
    videoURL    = models.CharField(max_length=20)
    subTitle    = models.CharField(max_length=50)
    numOfLike   = models.PositiveSmallIntegerField(default=0)
    numOfPlay   = models.PositiveSmallIntegerField(default=0)

# Video 분류
class VideoClass(models.Model):
    title       = models.CharField(max_length=50)
    
    def __str__(self):
        return self.title
