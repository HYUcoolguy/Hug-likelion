from .models import Video, VideoClass
from rest_framework import serializers


# Video 정보
class VideoSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Video
        fields = ['videoURL','subTitle', 'numOfLike', 'numOfPlay']

# Video 분류
class VideoClassSerializer(serializers.ModelSerializer):
    video_set = serializers.SerializerMethodField()

    class Meta:
        model = VideoClass
        fields = ('title', 'video_set')

    def get_video_set(self, instance):
        videos = instance.video_set.all()
        return VideoSerializer(videos, many=True).data



